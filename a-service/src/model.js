const mongoose = require('mongoose')

let ServiceModel = mongoose.model('data', new mongoose.Schema({service:String, counts:Number}))

module.exports = ServiceModel