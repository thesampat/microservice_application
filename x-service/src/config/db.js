const mongoose = require('mongoose')


const ConnectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/service-x');
        console.log('Service X DB Connected')
    } catch (error) {
        handleError(error);
    }
}

const DisConnectDB = async () => {
    try {
        await mongoose.disconnect();
        console.log('Service X DB Disconnected')
    } catch (error) {
        handleError(error);
    }
}


module.exports = {ConnectDB, DisConnectDB}

