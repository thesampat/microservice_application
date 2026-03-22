const getKafka = require('./client');

const kafka = getKafka();
const consumer = kafka.consumer({ groupId: 'service-a-group' });

async function subscribeEvent(topic, handler) {
  await consumer.connect();
  await consumer.subscribe({ topic });

  await consumer.run({
    eachMessage: async ({ message }) => {
      const data = JSON.parse(message.value.toString());
      await handler(data);
    },
  });
}

module.exports = { subscribeEvent };