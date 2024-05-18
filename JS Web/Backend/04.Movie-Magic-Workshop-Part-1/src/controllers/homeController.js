const router = require('express').Router();
const movieManager = require('../managers/movieManager.js')

// router.get('/', (req, res) => {
//   const {search, from, to } = req.query
//   const cubes = cubeService.getAllCubes(search, from, to ); //request all cubes to render them with the query prarams if there
//   res.render('index', { cubes, search, from, to });
// });

router.get('/', (req, res) => {
  const obj = movieManager.getAllMovies();
  //console.log(obj);
  res.render('home', {obj}); 
});

router.get('/about', (req, res) => {
  res.render('about');
});



router.get('/search', (req, res) => {
  const {title} = req.query
  res.render('search');
});

// setting up every wrong endpoint to redirect to a 404 endpoint
router.get('/404', (req, res) => {
  res.render('404');
});

module.exports = router;