const mongoose = require('mongoose')

let ServiceModel = mongoose.model('data', new mongoose.Schema({item:String, user:String}))

module.exports = ServiceModel