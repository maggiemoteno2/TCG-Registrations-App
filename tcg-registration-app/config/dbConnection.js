const mongoose = require("mongoose");
require('dotenv').config()

const MongoDbServer = async (server) => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true, useUnifiedTopology: true
    });
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = { MongoDbServer };