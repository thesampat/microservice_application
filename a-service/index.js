const express = require('express')
const { ConnectDB, DisConnectDB } = require('./src/config/db')
const app = express()
const port = 3001
const subscribeEvent = require('./kafka/subscriber')



ConnectDB()


const aservicerouter = require('./src/routes')

app.get('/test', (req, res) => { res.send('Hello World! A Service') })
app.use('/', aservicerouter)

subscribeEvent.subscribeEvent('from-service-x', (data)=>{console.log(data, 'eht exit')})

const server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


process.on('SIGTERM', async() => {
  await DisConnectDB()
  console.log('SIGTERM signal received.');
});

process.on('SIGINT',async () => {
   await DisConnectDB()
   server.close(() => {           
    console.log('[A] Server closed');
    process.exit(0);
  });
  console.log('SIGINT signal received.');
});
