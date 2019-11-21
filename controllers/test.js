

function sayHi(req, res) {
  res.send({
    message: 'Hello World!'
  })
}


module.exports = {
  sayHi
}
