const router = require('express').Router({ mergeParams: true })
const email = require('../controllers/EmailController')

router.route('/').get(email.fetchAll)

router.route('/').post(email.save)

router.route('/:id').get(email.fetchBy)

router.route('/:id').delete(email.remove)

router.route('/:id').patch(email.update)

module.exports = router
