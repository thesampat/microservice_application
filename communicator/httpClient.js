const axios = require('axios')
const SERVICES = require('../config/services')

class Communicator{
        constructor(){
            this.a_service = axios.create({baseURL:SERVICES.SERVICE_A})
            this.b_service = axios.create({baseURL:SERVICES.SERVICE_B})
            this.x_service = axios.create({baseURL:SERVICES.SERVICE_X})
        }

        async CallServiceA(){
           return this.a_service.get('/call', {timeout:10000})
        }
}

module.exports = new Communicator()