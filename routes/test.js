const router = require('express').Router({ mergeParams: true })
const test = require('../controllers/test')

router.route('/say-hi').get(test.sayHi)

module.exports = router
