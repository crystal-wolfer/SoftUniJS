const router = require('express').Router();

const homeController = require('./controllers/homeController.js')
const movieController = require('./controllers/movieController.js')

router.use(homeController);
router.use('/movies', movieController);

// every non-existent endpoint will redirect to the 404 endpoint
router.get('*', (req, res) => {
  res.redirect('/404')
}) 

module.exports = router