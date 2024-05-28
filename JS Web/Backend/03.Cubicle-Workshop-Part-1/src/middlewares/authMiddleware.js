const jwt = require('../lib/jwt.js');
const {SECRET} = require('../config/constants.js')


exports.auth = async (req, res, next) => {
  const token = req.cookies['userAuth'];
  
  if (token){
    try{
      const user = await jwt.verify(token, SECRET); // the payload
      req.user = user;
      // set up authentication variable in the req obj that will be available in every request
      res.locals.isAuthenticated = true;
      res.locals.user = user;
      next();
    } catch (err){
      // in case the token is invalid
      res.clearCookie('userAuth'); 
      return res.redirect('/user/login')
    }

  } else{
    next();
  }

  
};