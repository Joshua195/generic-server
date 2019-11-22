const mongoose = require('mongoose');

const MONGO_USERNAME = process.env.MONGO_USERNAME
const MONGO_PASSWORD = process.env.MONGO_PASSWORD
const MONGO_HOST = process.env.MONGO_HOST
const MONGO_PORT = process.env.MONGO_PORT
const MONGO_DATABASE = process.env.MONGO_DATABASE

module.exports = function () {
  const URL = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATABASE}`
  mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });

  mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection is open to');
  });

  mongoose.connection.on('error', function (err) {
    console.log(`Mongoose default connection has occured ${err} error`);
  });

  mongoose.connection.on('disconnected', function () {
    console.log('Mongoose default connection is disconnected');
  });

  process.on('SIGINT', function () {
    mongoose.connection.close(function () {
      console.log('Mongoose default connection is disconnected due to application termination');
      process.exit(0)
    });
  });
}
