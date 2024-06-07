const router = require('express').Router();

router.get('/', async (req, res) => {
  res.render('home'); 
});


// TODO: FIX
// router.get('/search', async (req, res) => {
//   const {search, genre, year} = req.query;
//   const movies = await movieManager.search(search, genre, year);
//   res.render('search', {movies, search, genre, year} );
// });

// setting up every wrong endpoint to redirect to a 404 endpoint
router.get('/404', (req, res) => {
  res.render('404');
});

module.exports = router;