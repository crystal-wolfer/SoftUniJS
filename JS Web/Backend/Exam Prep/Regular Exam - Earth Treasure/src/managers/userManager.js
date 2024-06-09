const User = require('../models/User.js')
const bcrypt = require('bcrypt')
const jwt = require('../lib/jwt.js')
const SECRET = "Morty"

// REGISTER
exports.register = async (userData) => {
  // validation is done on mongoose level in the datalayer
  const newUser = await User.create(userData);
  return newUser;
}; 

// LOGIN
exports.login = async (email, password) => {
  // find the user in the database
  const user = await User.findOne({email});

  if (!user) {
    throw new Error ("Invalid email or password!");
  }

  // compare given password against the password in the database
  const isPassValid = await bcrypt.compare(password, user.password);

  if (!isPassValid) {
    throw new Error ("Invalid password!");
  }

  // creating jwt token to be stored as a cookie
  const payload = {
    _id: user._id,
    email: user.email
  }

  // setting the token to be stored as a cookie, with payload, secret and expiration
  const token = await jwt.sign(payload, SECRET, {expiresIn:'1d'});
  return token;
};