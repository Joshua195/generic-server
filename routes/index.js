const router = require('express').Router()
const test = require('./test')

module.exports = function (app) {
  app.use('/test', test)
  app.use(router)
}
