const { TestServiceBController, CallServiceAControllerAlso } = require('./contoller')

const router = require('express').Router()


router.get('/testcontollers', TestServiceBController)
router.get('/callA', CallServiceAControllerAlso)


module.exports = router