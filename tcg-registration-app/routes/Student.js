const studentModel = require('./../models/credentials')

const addStudentDetails = (server) => {
  server.post('/students', async (req, res) => {
    const { name, surname, email, password, home_Address, id_Number } = req.body
    try {
      const saveDetails = await new studentModel({
        name, surname, email, password, home_Address, id_Number
      }).save()
      res.status(201).json(saveDetails)
    } catch (e) {
      console.log(e)
    }
  })

}

const getStudentDetails = (server) => {
  server.get('/students', async (req, res) => {
    try {
      const getAllDetails = await studentModel.find()
      res.status(200).json(getAllDetails)
    } catch (e) {
      console.log(e)
    }
  })
}

module.exports = { addStudentDetails, getStudentDetails };