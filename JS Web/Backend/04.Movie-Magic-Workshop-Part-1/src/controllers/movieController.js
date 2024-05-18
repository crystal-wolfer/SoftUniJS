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

module.exports = router