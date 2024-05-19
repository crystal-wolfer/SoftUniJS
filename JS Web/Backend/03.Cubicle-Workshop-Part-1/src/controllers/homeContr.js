const router = require('express').Router();
const cubeService = require('../services/cubeService.js')

router.get('/', (req, res) => {
  const {search, from, to } = req.query
  const cubes = cubeService.getAllCubes(search, from, to ); //request all cubes to render them with the query prarams if there
  res.render('index', { cubes, search, from, to });
});

router.get('/about', (req, res) => {
  res.render('about');
});

// setting up every wrong endpoint to redirect to a 404 endpoint
router.get('/404', (req, res) => {
  res.render('404');
});

module.exports = router;