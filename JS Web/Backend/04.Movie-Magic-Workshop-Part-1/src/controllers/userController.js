const router = require('express').Router();
const userManager = require('../managers/userManager.js')


// REGISTER
router.get('/register', (req, res) => {
  res.render('./user/register');
})

router.post('/register', async (req, res) => {
  const { email, password, repeatPassword } = req.body;

  await userManager.register({email, password, repeatPassword});
  res.redirect('/users/login'); 
});

// LOGIN
router.get('/login', (req, res) => {
  res.render('./user/login');
});

router.post('/login', (req, res) => {

});

// LOGOUT
router.get('/logout', (req, res) => {
  console.log('logged out');
});


module.exports = router