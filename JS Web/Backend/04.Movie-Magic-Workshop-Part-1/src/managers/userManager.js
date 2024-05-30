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