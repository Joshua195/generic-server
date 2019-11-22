const Email = require('../models/email.model')

async function fetchAll(req, res) {
  try {
    const emails = await Email.find()
    res.send(emails)
  } catch (e) {
    console.error(e)
    res.status(500).send({ message: 'Something went wrong!'})
  }
}

async function fetchBy(req, res) {
  try {
    const { id } = req.params
    const emailObj = await Email.findById(id)
    res.send(emailObj)
  } catch (e) {
    console.error(e)
    res.status(500).send({ message: 'Something went wrong!'})
  }
}

async function save(req, res) {
  try {
    const { email } = req.body
    const emailObj = new Email({ email })
    const result = await emailObj.save()
    res.send(result)
  } catch (e) {
    console.error(e)
    res.status(500).send({ message: 'Something went wrong!' })
  }
}

async function remove(req, res) {
  try {
    const { id } = req.params
    await Email.deleteOne({ _id: id })
    res.send({ message: 'success' })
  } catch (e) {
    console.error(e)
    res.status(500).send({ message: 'Something went wrong!' })
  }
}

async function update(req, res) {
  try {
    const { id } = req.params
    const { email } = req.body
    await Email.updateOne({ _id: id }, { email })
    const emailObj = await Email.findOne({ _id: id })
    res.send(emailObj)
  } catch (e) {
    console.error(e)
    res.status(500).send({ message: 'Something went wrong!' })
  }
}

module.exports = {
  fetchAll,
  fetchBy,
  save,
  remove,
  update
}
