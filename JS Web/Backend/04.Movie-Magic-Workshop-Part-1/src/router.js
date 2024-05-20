const router = require('express').Router();

const homeController = require('./controllers/homeController.js')
const movieController = require('./controllers/movieController.js')
const castController = require('./controllers/castController.js')

router.use(homeController);
router.use('/movies', movieController);
router.use('/cast', castController);

// every non-existent endpoint will redirect to the 404 endpoint
router.get('*', (req, res) => {
  res.redirect('/404')
}) 

module.exports = router