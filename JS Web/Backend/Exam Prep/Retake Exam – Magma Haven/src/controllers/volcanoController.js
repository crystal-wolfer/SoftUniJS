const router = require('express').Router();
const { getErrorMessages, generateOptions } = require('../lib/utils.js');
const volcanoManager = require('../managers/volcanoManager.js')
const { isAuth } = require('../middlewares/authMiddleware.js');
// const { generateRating } = require('../lib/utils.js');

// ALL VOLCANOS
router.get('/', async(req, res) => {
  const volcanos = await volcanoManager.getAllVolcanos();
  res.render('volcanoes/catalog', {volcanos});
}) 

// CREATE VOLCANO
router.get('/create', isAuth, async (req, res) => {
  await volcanoManager.getAllVolcanos();
  const options = generateOptions();
  res.render('volcanoes/create', {options});
});

router.post('/create', isAuth, async (req, res) => {
  const { name,  location,  elevation,  lastEruption,  imageUrl,  typeVolcano,  description } = req.body;

  try {
    await volcanoManager.createVolcano({ 
    name,  
    location,  
    elevation,  
    lastEruption,  
    imageUrl,  
    typeVolcano,  
    description,
    owner: req.user._id,  
   });

  //TODO: update to /volcanoes
  res.redirect('/');
  } catch (error) {
    const err = getErrorMessages(error);
    const options = generateOptions(typeVolcano)
    res.render('volcanoes/create', {errorMessages: err, name, location, elevation, lastEruption, imageUrl, typeVolcano, description, options})
  }


});


// GET MOVIE BY ID - DETAILS PAGE
router.get('/details/:volcanoId', async (req, res) => {
  const {volcanoId} = req.params
  const volcano = await volcanoManager.getVolcanoWithCast(volcanoId);
    
  //check if there is a valid ID if not redirecting to 404
  if (!volcano) {
    res.redirect('/404');
    return;
  }

  // check if the owner of the volcano making the request
  let isOwner = false;
  if (req.user) {
    isOwner = req.user._id === volcano.owner?.toString(); // because we have ObjectId in the owner so we need toString() ? is needed for the cubes without owners in the DB this will return true or false
  }

  res.render('volcanoes/details', { ...volcano, isOwner});
}); 

// ADD CAST TO MOVIE
router.get('/details/:volcanoId/add-cast', isAuth, async (req, res) =>{
  const {volcanoId} = req.params
  const volcano = await volcanoManager.getVolcano(volcanoId);
  const cast = await castManager.getNonAttachedCast(volcano.cast); 

  res.render('./cast/attach', {volcano, cast});
});

router.post('/details/:volcanoId/add-cast', isAuth, async (req,res) => {
  const {cast: castId} = req.body
  const {volcanoId} = req.params 
  await volcanoManager.addCast(castId,volcanoId);

  res.redirect(`/volcanoes/details/${volcanoId}`)
});


// DELETE MOVIE
router.get('/details/:volcanoId/delete', isAuth, async (req, res) => {
  const {volcanoId} = req.params;
  const volcano = await volcanoManager.getVolcano(volcanoId);
  const options = generateRating(volcano.rating)

  res.render('volcanoes/delete', {volcano, options})
})

router.post('/details/:volcanoId/delete', isAuth, async (req, res) => {
  const {volcanoId} = req.params;
  await volcanoManager.deleteMovie(volcanoId);
  res.redirect('/');
});


// EDIT MOVIE
router.get('/details/:volcanoId/edit', isAuth, async (req, res) => {
  const {volcanoId} = req.params;
  const volcano = await volcanoManager.getVolcano(volcanoId);
  const options = generateRating(volcano.rating)

  res.render('volcanoes/edit', {volcano, options})
});

router.post('/details/:volcanoId/edit', isAuth, async (req, res) => {
  const {volcanoId} = req.params;
  const owner = req.user._id;
  const { title,  genre,  director,  year,  imageUrl,  rating,  description } = req.body;
  const stars = '★'.repeat(Number(rating));
  

  await volcanoManager.editMovie(volcanoId,{ 
    title,  
    genre,  
    director,  
    year,  
    imageUrl,  
    rating: Number(rating), 
    stars,  
    description,
    owner: req.user._id,  
   });

  res.redirect(`/volcanoes/details/${volcanoId}`)
})


module.exports = router
