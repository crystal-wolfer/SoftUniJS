const router = require('express').Router();
const movieManager = require('../managers/movieManager.js')
const castManager = require('../managers/castManager.js');

router.get('/create', async (req, res) => {
  await movieManager.getAllMovies();
  res.render('movie/create');
});

router.post('/create', (req, res) => {
  const { title,  genre,  director,  year,  imageUrl,  rating,  description } = req.body;
  //creating the additional stars property that will be keeping the symbols that will be displayed in the details page
  const stars = '★'.repeat(Number(rating));

  movieManager.createMovie({ title,  genre,  director,  year,  imageUrl,  rating: Number(rating), stars,  description });
  res.redirect('/');
});

router.get('/details/:movieId', async (req, res) => {
  const {movieId} = req.params
  const movie = await movieManager.getMovieWithCast(movieId);
    
  //check if there is a valid ID if not redirecting to 404
  if (!movie) {
    res.redirect('/404');
    return;
  }

  res.render('movie/details', { ...movie });
}); 

router.get('/details/:movieId/add-cast', async (req, res) =>{
  const {movieId} = req.params
  const movie = await movieManager.getMovie(movieId);
  const cast = await castManager.getNonAttachedCast(movie.cast); 

  res.render('./cast/attach', {movie, cast});
});

router.post('/details/:movieId/add-cast', async (req,res) => {
  const {cast: castId} = req.body
  const {movieId} = req.params 
  await movieManager.addCast(castId,movieId);

  res.redirect(`/movies/details/${movieId}`)
});

module.exports = router
