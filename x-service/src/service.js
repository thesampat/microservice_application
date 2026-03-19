const ServiceModel = require("./models")

const TestService=()=>{
    return 'X Service Successful'
}

const UpdateCalls=(user)=>{
    let calldata = ServiceModel.findOne({user:user})
    let callcounts = calldata?.calls||0 + 1
    ServiceModel.updateOne({user:user}, {$set:{calls:callcounts}})
    return callcounts
}

module.exports = {TestService, UpdateCalls}