const router = require('express').Router();

const homeController = require('./controllers/homeContr.js')
const cubeController = require('./controllers/cubeContr.js')
const accessoryController = require('./controllers/accessoryContr.js')

router.use(homeController);
router.use('/cube', cubeController);
router.use('/accessories', accessoryController);
// every non-existent endpoint will redirect to the 404 endpoint
router.get('*', (req, res) => {
  res.redirect('/404')
}) 

module.exports = router