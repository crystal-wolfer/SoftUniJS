const router = require('express').Router();
const { getErrorMessages, generateOptions } = require('../lib/utils.js');
const stoneManager = require('../managers/stoneManager.js')
const { isAuth } = require('../middlewares/authMiddleware.js');

// ALL STONES
router.get('/dashboard', async(req, res) => {
  const stones = await stoneManager.getAllStones();
  let empty = false;
  if (stones.length === 0) {
    empty = true;
  }
  res.render('stones/dashboard', {stones, empty});
}) 

// CREATE STONE
router.get('/create', isAuth, async (req, res) => { 
  res.render('stones/create');
});

router.post('/create',  async (req, res) => {
  const { name, category, color, imageUrl, location,  formula, description } = req.body;

  try {
    await stoneManager.createStone({ 
    name,  
    category,  
    color,  
    imageUrl,
    location,  
    formula,  
    description,
    owner: req.user._id,  
   });

  //TODO: update to /stones
  res.redirect('/stones/dashboard');
  } catch (error) {
    const err = getErrorMessages(error);
    res.render('stones/create', {errorMessages: err, name, category, color, imageUrl, location,  formula, description})
  }


});


// GET STONE BY ID - DETAILS PAGE
router.get('/details/:stoneId', async (req, res) => {
  const {stoneId} = req.params
  const stone = await stoneManager.getStone(stoneId);
  const isOwner = res.locals.isOwner;
  let isLoggedIn = res.locals.isLoggedIn;

  //check if there is a valid ID if not redirecting to 404
  if (!stone) {
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

    hasVoted = stone.voteList.toString().includes(id);
  }

  const votes = stone.voteList.length;
  res.render('stones/details', { ...stone, isOwner, isLoggedIn, hasVoted, votes: Number(votes) });
}); 


// DELETE STONE

router.get('/details/:stoneId/delete', isAuth, async (req, res) => {
  //check if user is owner if not redirecting to 404
  if (!res.locals.isOwner) {
    res.redirect('/404'); 
    return;
  }

  const {stoneId} = req.params;
  await stoneManager.deleteStone(stoneId);
  res.redirect('/stones');
});


// EDIT STONE
router.get('/details/:stoneId/edit', isAuth, async (req, res) => {
  //check if user is owner if not redirecting to 404
  if (!res.locals.isOwner) {
    res.redirect('/404'); 
    return;
  }

  const {stoneId} = req.params;
  const stone = await stoneManager.getStone(stoneId);
  const stoneType = stone.typeStone

  let options
  if (!stoneType) {
  options = generateOptions();
  } else {
  options = generateOptions(stoneType);
  }

  res.render('stones/edit', { stone, options })
});

router.post('/details/:stoneId/edit', isAuth, async (req, res) => {
  const {stoneId} = req.params;
  const owner = req.user._id;
  const {
    name,  
    location,  
    elevation,  
    lastEruption,  
    imageUrl,  
    typeStone,  
    description 
    } = req.body;
  
  
  try {
    await stoneManager.editStone(stoneId,{ 
    name,  
    location,  
    elevation,  
    lastEruption,  
    imageUrl,  
    typeStone,  
    description,
    owner
   });


  res.redirect(`/stones/details/${stoneId}`)
  } catch (error) {
    const err = getErrorMessages(error);
    const options = generateOptions(typeStone)
    res.render('stones/edit', {errorMessages: err, name, location, elevation, lastEruption, imageUrl, typeStone, description, options})
  }

})

// VOTE FOR STONE
router.get('/details/:stoneId/vote', isAuth, async (req, res) => {
  const {stoneId} = req.params
  const userId = req.user._id;

  await stoneManager.voteForStone(stoneId, userId)
  res.redirect(`/stones/details/${stoneId}`)
});


module.exports = router