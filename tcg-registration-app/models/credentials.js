const mongoose = require('mongoose')

const StudentSchema = mongoose.Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  home_Address: { type: String, required: true },
   id_Number:{type:String, required: true}
})
var Credentials = mongoose.model('Credentials', StudentSchema)

module.exports = Credentials;