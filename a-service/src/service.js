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

const UpdateService=async(data)=>{
    let {service} = data||{}
    let serviceitem = await ServiceModel.findOne({service:service})
    let counts_update = serviceitem?.counts||0 + 1
    ServiceModel.updateOne({service:service}, {$set:{counts:counts_update}})
    return counts_update
}

module.exports = {TestServiceA, CalledByBService, SetOrder, UpdateService}