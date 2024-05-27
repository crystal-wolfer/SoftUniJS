const router = require('express').Router();
const cubeService = require('../services/cubeService.js')
const accessoryService = require('../services/accessoryService.js')

// GET ALL CUBES
router.get('/create', async(req, res) => {
  await cubeService.getAllCubes();
  res.render('cube/create');
});

// CREATE CUBE 
router.post('/create', async (req, res) => {
  const { name, description, imageUrl, difficultyLevel } = req.body;
  await cubeService.createCube({name, description, imageUrl, difficultyLevel: Number(difficultyLevel), owner: req.user._id});  //add the owner id from the req.user cookie
  res.redirect('/');
});

// GET 1 CUBE
router.get('/details/:cubeId', async (req, res) => {
  const {cubeId} = req.params
  //mongoose works with mongoose documents not standard objects. To make it work with handlebars we need to use the lean() method from mongoose which will return a pure object
  const cube = await cubeService.getCubeWithAcc(cubeId).lean(); 

  //check if there is a valid ID if not redirecting to 404
  if (!cube) {
    res.redirect('/404');
    return;
  }

  res.render('cube/details', { ...cube });
}); 

// ATTACH CUBE ACCESSORY
router.get('/:cubeId/attach-accessory', async (req, res) => {
  const {cubeId} = req.params
  const cube = await cubeService.getCube(cubeId).lean(); 
  const accessories = await accessoryService.getNonAttachedAcc(cube.accessories);
  const hasAccessories = accessories.length > 0;

  res.render('./cubeAccessory/attach', {cube, accessories, hasAccessories});
})

router.post('/:cubeId/attach-accessory', async (req,res) => {
  const {accessory: accessoryId} = req.body
  const {cubeId} = req.params 
  await cubeService.attachAcc(cubeId,accessoryId)

  res.redirect(`/cube/details/${cubeId}`)
});

// DELETE CUBE
router.get('/:cubeId/delete', async (req, res) => {
  const {cubeId} = req.params 
  const cube = await cubeService.getCube(cubeId).lean(); 
  
  res.render('cube/deleteCube', { cube });
});

router.post('/:cubeId/delete', async (req, res) => {
  const {cubeId} = req.params 
  await cubeService.deleteCube(cubeId)
  res.redirect('/')
});


module.exports = router;