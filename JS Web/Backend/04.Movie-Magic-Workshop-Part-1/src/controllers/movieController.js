const router = require('express').Router();
const movieManager = require('../managers/movieManager.js')

router.get('/create', async (req, res) => {
  await movieManager.getAllMovies();
  res.render('create');
});

router.post('/create', (req, res) => {
  const { title,  genre,  director,  year,  imageUrl,  rating,  description } = req.body;
  //creating the additional stars property that will be keeping the symbols that will be displayed in the details page
  let stars = '';
  switch (rating) {
    case '1': stars = '★'; break;
    case '2': stars = '★★'; break;
    case '3': stars = '★★★'; break;
    case '4': stars = '★★★★'; break;
    case '5': stars = '★★★★★'; break;
    default: break;
  }
  movieManager.createMovie({ title,  genre,  director,  year,  imageUrl,  rating: Number(rating), stars,  description });
  res.redirect('/');
});

router.get('/details/:movieId', async (req, res) => {
  const {movieId} = req.params
  const movie = await movieManager.getMovie(movieId);
  
  //check if there is a valid ID if not redirecting to 404
  if (!movie) {
    res.redirect('/404');
    return;
  }

  res.render('details', { ...movie });
}); 

module.exports = router