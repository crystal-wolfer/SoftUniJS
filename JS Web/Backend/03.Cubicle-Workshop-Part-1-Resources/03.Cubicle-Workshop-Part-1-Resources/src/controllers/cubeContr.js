
const router = require('express').Router();


router.get('/cubes', (req, res) => {
  res.send('Here are the cubes');
});

module.exports = router;