const router = require('express').Router();
const movieManager = require('../managers/movieManager.js')

router.get('/create', (req, res) => {
  movieManager.getAllMovies();
  res.render('create');
});

router.post('/create', (req, res) => {
  const { name,  genre,  director,  year,  imgUrl,  rating,  description } = req.body;
  movieManager.createMovie({ name,  genre,  director,  year,  imgUrl,  rating: Number(rating),  description });
  res.redirect('/');
});

router.get('/details/:movieId', (req, res) => {
  const {movieId} = req.params
  const movie = movieManager.getMovie(movieId);
  
  //check if there is a valid ID if not redirecting to 404
  if (!movie) {
    res.redirect('/404');
    return;
  }

  res.render('details', { ...movie });
}); 

module.exports = router