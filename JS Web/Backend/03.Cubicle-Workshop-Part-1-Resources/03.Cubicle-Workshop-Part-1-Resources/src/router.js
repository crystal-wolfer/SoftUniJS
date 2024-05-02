const router = require('express').Router();

const homeController = require('./controllers/homeContr.js')
const cubeController = require('./controllers/cubeContr.js')

router.use(homeController);
router.use('/cube', cubeController);
// every non-existent endpoint will redirect to the 404 endpoint
router.get('*', (req, res) => {
  res.redirect('/404')
}) 

module.exports = router