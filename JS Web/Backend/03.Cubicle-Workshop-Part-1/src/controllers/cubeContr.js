const router = require('express').Router();
const cubeService = require('../services/cubeService.js')
const accessoryService = require('../services/accessoryService.js')


router.get('/create', async(req, res) => {
  await cubeService.getAllCubes();
  res.render('create');
});

router.post('/create', async (req, res) => {
  const { name, description, imageUrl, difficultyLevel } = req.body;
  await cubeService.createCube({name, description, imageUrl, difficultyLevel: Number(difficultyLevel)});  
  res.redirect('/');
});

router.get('/details/:cubeId', async (req, res) => {
  const {cubeId} = req.params
  //mongoose works with mongoose documents not standard objects. To make it work with handlebars we need to use the lean() method from mongoose which will return a pure object
  const cube = await cubeService.getCube(cubeId).lean(); 

  //check if there is a valid ID if not redirecting to 404
  if (!cube) {
    res.redirect('/404');
    return;
  }

  res.render('details', { ...cube });
}); 

router.get('/:cubeId/attach-accessory', async (req, res) => {
  const {cubeId} = req.params
  const cube = await cubeService.getCube(cubeId).lean(); 
  const accessories = await accessoryService.getAllAcc();
  const hasAccessories = accessories.length > 0;

  res.render('./cubeAccessory/attach', {cube, accessories, hasAccessories});
})

module.exports = router;