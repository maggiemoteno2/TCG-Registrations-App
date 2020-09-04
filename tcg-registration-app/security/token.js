var jwt = require('jsonwebtoken');
require('dotenv').config()

const createToken = (email) => {
  var token = jwt.sign({ email }, process.env.TOKEN_SECRET)
  return token
}

module.exports = { createToken }