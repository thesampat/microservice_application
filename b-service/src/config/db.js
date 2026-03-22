const mongoose = require('mongoose')


const ConnectDB = async () => {
    try {
        await mongoose.connect('mongodb://mongodb:27017/service-b');
        console.log('Service B DB Connected')
    } catch (error) {
        // handleError(error);
    }
}

const DisConnectDB = async () => {
    try {
        await mongoose.disconnect();
        console.log('Service B DB Disconnected')
    } catch (error) {
        // handleError(error);
    }
}


module.exports = {ConnectDB, DisConnectDB}

