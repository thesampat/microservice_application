const { TestServiceAController, CalledByBController, SetACarController } = require('./contoller')

const router = require('express').Router()


router.get('/testi', TestServiceAController)
router.get('/call', CalledByBController)
router.get('/create_order', SetACarController)


module.exports = router