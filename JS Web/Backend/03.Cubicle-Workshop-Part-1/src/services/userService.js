const User = require('../models/User.js')
const bcrypt = require('bcrypt')
const jwt = require('../lib/jwt.js');
const SECRET = 'Morty'


exports.register = async (userData) => {
// validation will be done on data layer with mongoose
  const newUser = await User.create(userData);
  return newUser;
};

exports.login = async (username, password) => {
  // find the user in the database
  const user = await User.findOne({username});

  if (!user) {
    throw new Error(`Invalid username or password!`); 
  }

  // compare the given password against the password stored in the database
  const isPassValid = await bcrypt.compare(password, user.password);
  if (!isPassValid) {
    throw new Error(`Invalid username or password!`); 
  }

  // creating the jwt token to be stored as a cookie
  const payload = {
    _id: user._id,
    username: user.username
  }
  // setting the jwt token to be stored as a cookie with the payload, the secred and set it to expira in 1 day
  const token = await jwt.sign(payload, SECRET, {expiresIn:'1d'}) 

  return token;
};