const router = require('express').Router();
const cubeService = require('../services/cubeService.js')

router.get('/', (req, res) => {
  const cubes = cubeService.getAllCubes();
  res.render('index', { cubes });
});

router.get('/about', (req, res) => {
  res.render('about');
});

// setting up every wrong endpoint to redirect to a 404 endpoint
router.get('/404', (req, res) => {
  res.render('404');
});

module.exports = router;