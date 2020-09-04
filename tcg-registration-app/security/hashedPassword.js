const bcrypt = require('bcrypt');
const Credentials = require('./../models/credentials')

const hashPassword = async (password) => {
  const salts = 10;
  try {
    const salt = await bcrypt.genSalt(salts)
    const hashedPassword = await bcrypt.hash(password, salt)
    return hashedPassword
  } catch (e) {
    console.log(e)
  }
}

const checkPassword = async (password, email) => {
  try {
    const student = await Credentials.findOne({ email })
    const isCorrect = await bcrypt.compare(password, student.hashedPassword);
    return isCorrect
  } catch (err) {
    console.log(err)
  }
}

module.exports = { hashPassword, checkPassword }    
