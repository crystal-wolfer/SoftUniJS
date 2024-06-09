const jwt = require('../lib/jwt.js');
const SECRET = "Morty"
const stoneManager = require('../managers/stoneManager.js')


exports.auth = async (req, res, next) => {
  const token = req.cookies['userAuth'];
  
  if (token){
    try{
      const user = await jwt.verify(token, SECRET); // the payload
      req.user = user;
      // set up authentication variable in the req obj that will be available in every request
      res.locals.isAuthenticated = true;
      res.locals.isLoggedIn = true;
      res.locals.user = user;
       next();
    } catch (err){
      // in case the token is invalid
      res.clearCookie('userAuth'); 
      return res.redirect('/user/login')
    }

  } else{
    res.locals.isLoggedIn = false;
    res.locals.isOwner = false;
    next();
  }  
};

// route guard
exports.isAuth = async (req, res, next) => {
  let isLoggedIn = false;
  let isOwner = false;
  const params = Object.keys(req.params).length

  if (!req.user) {
    return res.redirect('/404');
  } 

  if (req.user){
    isLoggedIn = true;
  }

  // Check if user is Owner
  if (isLoggedIn && params != 0) {
    const {stoneId} = req.params
    const stone = await stoneManager.getStone(stoneId);

    if (req.user._id === stone.owner?.toString()) {
      isOwner = true;
    }
  } 

  // Set properties in res.locals
  res.locals.isLoggedIn = isLoggedIn;
  res.locals.isOwner = isOwner;

  next();
}

// checks if the user is logged in for userController
exports.isLoggedIn = (req, res, next) => {
  if (req.user){
    return res.redirect('404');
  }

  next();
}