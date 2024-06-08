const router = require('express').Router();
const { getErrorMessages, generateOptions } = require('../lib/utils.js');
const volcanoManager = require('../managers/volcanoManager.js')
const { isAuth } = require('../middlewares/authMiddleware.js');

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

router.post('/create',  async (req, res) => {
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
  res.redirect('/volcanoes');
  } catch (error) {
    const err = getErrorMessages(error);
    const options = generateOptions(typeVolcano)
    res.render('volcanoes/create', {errorMessages: err, name, location, elevation, lastEruption, imageUrl, typeVolcano, description, options})
  }


});


// GET VOLCANO BY ID - DETAILS PAGE
router.get('/details/:volcanoId', async (req, res) => {
  const {volcanoId} = req.params
  const volcano = await volcanoManager.getVolcano(volcanoId);
  const isOwner = res.locals.isOwner;
  let isLoggedIn = res.locals.isLoggedIn;

  //check if there is a valid ID if not redirecting to 404
  if (!volcano) {
    res.redirect('/404'); 
    return;
  }

  if(isOwner){
    isLoggedIn = false;
  }

  // check if user has voted already and not owner
  let hasVoted = false;
  if(req.user && !isOwner){
    const id = req.user._id;

    hasVoted = volcano.voteList.toString().includes(id);
  }

  const votes = volcano.voteList.length;
  res.render('volcanoes/details', { ...volcano, isOwner, isLoggedIn, hasVoted, votes: Number(votes) });
}); 


// DELETE VOLCANO

router.get('/details/:volcanoId/delete', isAuth, async (req, res) => {
  //check if user is owner if not redirecting to 404
  if (!res.locals.isOwner) {
    res.redirect('/404'); 
    return;
  }

  const {volcanoId} = req.params;
  await volcanoManager.deleteVolcano(volcanoId);
  res.redirect('/volcanoes');
});


// EDIT VOLCANO
router.get('/details/:volcanoId/edit', isAuth, async (req, res) => {
  //check if user is owner if not redirecting to 404
  if (!res.locals.isOwner) {
    res.redirect('/404'); 
    return;
  }

  const {volcanoId} = req.params;
  const volcano = await volcanoManager.getVolcano(volcanoId);
  const volcanoType = volcano.typeVolcano

  let options
  if (!volcanoType) {
  options = generateOptions();
  } else {
  options = generateOptions(volcanoType);
  }

  res.render('volcanoes/edit', { volcano, options })
});

router.post('/details/:volcanoId/edit', isAuth, async (req, res) => {
  const {volcanoId} = req.params;
  const owner = req.user._id;
  const {
    name,  
    location,  
    elevation,  
    lastEruption,  
    imageUrl,  
    typeVolcano,  
    description 
    } = req.body;
  
  
  try {
    await volcanoManager.editVolcano(volcanoId,{ 
    name,  
    location,  
    elevation,  
    lastEruption,  
    imageUrl,  
    typeVolcano,  
    description,
    owner
   });


  res.redirect(`/volcanoes/details/${volcanoId}`)
  } catch (error) {
    const err = getErrorMessages(error);
    const options = generateOptions(typeVolcano)
    res.render('volcanoes/edit', {errorMessages: err, name, location, elevation, lastEruption, imageUrl, typeVolcano, description, options})
  }

})

// VOTE FOR VOLCANO
router.get('/details/:volcanoId/vote', isAuth, async (req, res) => {
  const {volcanoId} = req.params
  const userId = req.user._id;

  await volcanoManager.voteForVolcano(volcanoId, userId)
  res.redirect(`/volcanoes/details/${volcanoId}`)
});


module.exports = router