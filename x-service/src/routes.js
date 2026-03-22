const { TestServiceController, AddItemController } = require('./contoller')

const router = require('express').Router()
router.get('/testcontollers', TestServiceController)
router.get('/add_item', AddItemController)

module.exports = router