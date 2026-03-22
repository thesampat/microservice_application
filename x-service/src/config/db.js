const mongoose = require('mongoose')


const ConnectDB = async () => {
    try {
        console.log('connecting to service-x db')
        await mongoose.connect('mongodb://mongodb:27017/service-x');
        console.log('Service X DB Connected')
    } catch (error) {
        console.log(error)
        // handleError(error);
    }
}

const DisConnectDB = async () => {
    try {
        await mongoose.disconnect();
        console.log('Service X DB Disconnected')
    } catch (error) {
        console.log(error)
        // handleError(error);
    }
}


module.exports = {ConnectDB, DisConnectDB}

