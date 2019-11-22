const router = require('express').Router()
const test = require('./test')
const email = require('./email')

const authMiddleware = async (req, res, next) => {
  const { cookies: { auth = null } } = req
  if (auth) {
    next()
  } else {
    res.status(401).send({ message: "Auth Failed" })
  }
}

module.exports = function (app) {
  app.use('/test', test)
  app.use('/email', authMiddleware ,email)
  app.use(router)
}
