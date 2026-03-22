const { Kafka } = require('kafkajs')



let kafkaclient
const getkafka=()=>{
    if(!kafkaclient){
        kafkaclient  = new Kafka({
            clientId:"x-service",
            brokers:['broker:9092']
        })
    }

    return kafkaclient
}

module.exports = getkafka