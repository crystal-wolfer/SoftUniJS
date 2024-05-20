const router = require('express').Router();
const castManager = require('../managers/castManager.js')

router.get('/create', (req, res) => {
  res.render('./cast/create')
});

router.post('/create', (req, res) => {
  const { name,  age,  born,  character,  imageUrl } = req.body;
  castManager.createCast({name, age: Number(age), born, character, imageUrl});
  res.redirect('/');
})

module.exports = router