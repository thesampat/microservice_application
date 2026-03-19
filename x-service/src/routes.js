const { TestServiceController } = require('./contoller')

const router = require('express').Router()
router.get('/testcontollers', TestServiceController)

module.exports = router