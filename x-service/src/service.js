const ServiceModel = require("./models")
const {publishEvent} = require('../kafka/publisher')

const TestService=()=>{
    try {
        publishEvent('from-service-x', {'data':"Data"})    
    } catch (error) {
        console.log('error', error)
    }
    
    return 'X Service Successful'
}

const UpdateCalls=(user)=>{
    let calldata = ServiceModel.findOne({user:user})
    let callcounts = calldata?.calls||0 + 1
    ServiceModel.updateOne({user:user}, {$set:{calls:callcounts}})
    return callcounts
}

module.exports = {TestService, UpdateCalls}