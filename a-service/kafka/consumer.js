const { UpdateCounts } = require('../src/service');
const getKafka = require('./client');

const kafka = getKafka();
const consumer = kafka.consumer({ groupId: 'x-group-a' });

const start = async () => {
  await consumer.connect();

  await consumer.subscribe({
    topic: 'from-service-x',
    fromBeginning: true,
  });

  await consumer.run({
    eachMessage: async ({ topic, message }) => {
      const raw = message.value.toString();
      try {
        const data = JSON.parse(raw);
        const {item} = data||{}
        console.log('item-counts', item, 'nly item')
        await UpdateCounts(item)
      } catch {
        console.log('raw:', raw);
      }
    },
  });
};

start();