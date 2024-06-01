const router = require('express').Router();
const movieManager = require('../managers/movieManager.js')
const castManager = require('../managers/castManager.js');
const { isAuth } = require('../middlewares/authMiddleware.js');
const { generateRating } = require('../lib/utils.js');

// CREATE MOVIE
router.get('/create', isAuth, async (req, res) => {
  await movieManager.getAllMovies();
  res.render('movie/create');
});

router.post('/create', isAuth, (req, res) => {
  const { title,  genre,  director,  year,  imageUrl,  rating,  description } = req.body;
  //creating the additional stars property that will be keeping the symbols that will be displayed in the details page
  const stars = '★'.repeat(Number(rating));

  movieManager.createMovie({ 
    title,  
    genre,  
    director,  
    year,  
    imageUrl,  
    rating: Number(rating), 
    stars,  
    description,
    owner: req.user._id,  
   });
  res.redirect('/');
});


// GET MOVIE BY ID - DETAILS PAGE
router.get('/details/:movieId', async (req, res) => {
  const {movieId} = req.params
  const movie = await movieManager.getMovieWithCast(movieId);
    
  //check if there is a valid ID if not redirecting to 404
  if (!movie) {
    res.redirect('/404');
    return;
  }

  // check if the owner of the movie making the request
  let isOwner = false;
  if (req.user) {
    isOwner = req.user._id === movie.owner?.toString(); // because we have ObjectId in the owner so we need toString() ? is needed for the cubes without owners in the DB this will return true or false
  }

  res.render('movie/details', { ...movie, isOwner});
}); 

// ADD CAST TO MOVIE
router.get('/details/:movieId/add-cast', isAuth, async (req, res) =>{
  const {movieId} = req.params
  const movie = await movieManager.getMovie(movieId);
  const cast = await castManager.getNonAttachedCast(movie.cast); 

  res.render('./cast/attach', {movie, cast});
});

router.post('/details/:movieId/add-cast', isAuth, async (req,res) => {
  const {cast: castId} = req.body
  const {movieId} = req.params 
  await movieManager.addCast(castId,movieId);

  res.redirect(`/movies/details/${movieId}`)
});


// DELETE MOVIE
router.get('/details/:movieId/delete', isAuth, async (req, res) => {
  const {movieId} = req.params;
  const movie = await movieManager.getMovie(movieId);
  const options = generateRating(movie.rating)

  res.render('movie/delete', {movie, options})
})

router.post('/details/:movieId/delete', isAuth, async (req, res) => {
  const {movieId} = req.params;
  await movieManager.deleteMovie(movieId);
  res.redirect('/');
});


// EDIT MOVIE
router.get('/details/:movieId/edit', isAuth, async (req, res) => {
  const {movieId} = req.params;
  const movie = await movieManager.getMovie(movieId);
  const options = generateRating(movie.rating)

  res.render('movie/edit', {movie, options})
});

router.post('/details/:movieId/edit', isAuth, async (req, res) => {
  const {movieId} = req.params;
  const owner = req.user._id;
  const { title,  genre,  director,  year,  imageUrl,  rating,  description } = req.body;
  const stars = '★'.repeat(Number(rating));
  

  await movieManager.editMovie(movieId,{ 
    title,  
    genre,  
    director,  
    year,  
    imageUrl,  
    rating: Number(rating), 
    stars,  
    description,
    owner: req.user._id,  
   });

  res.redirect(`/movies/details/${movieId}`)
})


module.exports = router
