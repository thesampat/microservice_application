const mongoose = require('mongoose')

let ServiceModel = mongoose.model('data', new mongoose.Schema({item:String, counts:Number}))

module.exports = ServiceModel