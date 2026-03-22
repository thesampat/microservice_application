const ServiceModel = require("./model");

let orders = []

const setItem = (data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      orders.push(data);
      resolve();
    }, 9000); 
  });
};


const TestServiceA=()=>{
    return 'A Service Successful'
}

const CalledByBService=()=>{
    return "I'm A Service"
}

const SetOrder=async(d)=>{
    await setItem(d)
    return orders
    
}

const UpdateCounts=async(item)=>{
  try {
    let serviceitem = await ServiceModel.findOne({item:item})
    let counts_update = serviceitem?.counts||0 + 1
    ServiceModel.updateOne({item:item}, {$set:{counts:counts_update}})
    return counts_update
  } catch (error) {
    console.log('something went wrong, please try again')
  }
    
}

module.exports = {TestServiceA, CalledByBService, SetOrder, UpdateCounts}