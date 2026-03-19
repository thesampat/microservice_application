const mongoose = require('mongoose')

let ServiceModel = mongoose.model('data', new mongoose.Schema({user:String, calls:Number}))

module.exports = ServiceModel