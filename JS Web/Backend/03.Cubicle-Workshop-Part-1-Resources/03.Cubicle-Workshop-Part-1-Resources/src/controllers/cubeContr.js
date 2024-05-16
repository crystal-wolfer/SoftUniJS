const router = require('express').Router();
const cubeService = require('../services/cubeService.js')


router.get('/create', (req, res) => {
  console.log(cubeService.getAllCubes());
  res.render('create');
});

router.post('/create', (req, res) => {
  const { name, description, imageUrl, difficultyLevel } = req.body;
  cubeService.createCube({name, description, imageUrl, difficultyLevel: Number(difficultyLevel)});  
  res.redirect('/');
});

module.exports = router;