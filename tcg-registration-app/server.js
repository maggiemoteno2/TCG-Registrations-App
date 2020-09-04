const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const server = express()
const port = 3000

server.use(cors())
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }));



server.listen(port, () => {
  console.log(`listening to port ${port}`)
})
