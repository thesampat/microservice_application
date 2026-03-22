const getKafka = require('./client');

const kafka = getKafka();
const consumer = kafka.consumer({ groupId: 'service-a-group' });

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
        console.log('Received:', data);
      } catch {
        console.log('raw:', raw);
      }
    },
  });
};

start();