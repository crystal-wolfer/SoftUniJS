const router = require('express').Router();
const accessoryService = require('../services/accessoryService.js')

router.get('/create', (req, res) => {
  res.render('./cubeAccessory/create')
});

router.post('/create', async (req, res) => {
  const {name, description, imageUrl} = req.body;
  await accessoryService.createAcc({name, description, imageUrl});
  res.redirect('/');
});
 
module.exports = router;