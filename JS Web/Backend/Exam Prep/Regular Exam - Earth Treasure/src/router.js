const router = require('express').Router();

// TODO: Update this
const homeController = require('./controllers/homeController.js')
const stoneController = require('./controllers/stoneController.js')
const userController = require('./controllers/userController.js')

// TODO: Update this
router.use(homeController);
router.use('/stones', stoneController);
router.use('/users', userController);


// every non-existent endpoint will redirect to the 404 page
router.get('*', (req, res) => {
  res.redirect('/404')
}) 

module.exports = router