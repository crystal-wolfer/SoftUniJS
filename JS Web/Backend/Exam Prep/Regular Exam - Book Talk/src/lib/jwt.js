const jsonwebtoken = require('jsonwebtoken');
const {promisify} = require('util');

//the promisify function from the util library is used to make the jwt library work with promises instead of callback syntax
const jwt = {
  sign: promisify(jsonwebtoken.sign),
  verify: promisify(jsonwebtoken.verify),
}

module.exports = jwt;