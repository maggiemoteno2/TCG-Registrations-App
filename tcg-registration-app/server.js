const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const server = express()
const port = 3000
const { MongoDbServer } = require('./config/dbConnection')
const { addStudentDetails} =require('./routes/Student')
const {getStudentDetails } = require('./routes/Student')
const { signIn }  = require('./routes/logIn')

server.use(cors())
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }));
MongoDbServer (server)
addStudentDetails(server)
  getStudentDetails(server)
signIn(server)

server.listen(port, () => {
  console.log(`listening to port ${port}`)
})
