const router = require('express').Router();
const movieManager = require('../managers/movieManager.js')


router.get('/', async (req, res) => {
  const obj = await movieManager.getAllMovies();
  res.render('home', {obj}); 
});

router.get('/about', (req, res) => {
  res.render('about');
});



router.get('/search', (req, res) => {
  const {search, genre, year} = req.query;
  const movies = movieManager.search(search, genre, year);
  res.render('search', {movies, search, genre, year} );
});

// setting up every wrong endpoint to redirect to a 404 endpoint
router.get('/404', (req, res) => {
  res.render('404');
});

module.exports = router;