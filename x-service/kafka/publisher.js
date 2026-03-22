const getKafka = require('./client');

const kafka = getKafka();
const producer = kafka.producer();

const publishEvent=async(topic, data)=>{
  await producer.connect();

  await producer.send({
    topic,
    messages: [
      { value: JSON.stringify(data) }
    ],
  });
}

module.exports = { publishEvent };