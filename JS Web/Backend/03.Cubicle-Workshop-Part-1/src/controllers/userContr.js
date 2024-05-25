const router = require('express').Router();

router.get('/register', (req, res) => {
  res.render('./userAuth/register')
})

router.post('/register', (req, res) => {
  const {username, pass, repeatPass} = req.body; 
})  

module.exports = router;
