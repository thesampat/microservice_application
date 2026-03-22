const ServiceModel = require("./models")

const TestService=()=>{
    try {
    } catch (error) {
        console.log('error', error)
    }
    
    return 'X Service Successful'
}

const AddItem=async(user, item)=>{
    try {
        await ServiceModel.insertOne({user:user, item:item}) 
        console.log('item added')   
    } catch (error) {
        console.log(error)
        throw error
    }
    
}

module.exports = {TestService, AddItem}