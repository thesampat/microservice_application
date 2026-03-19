const express = require('express')
const { ConnectDB, DisConnectDB } = require('./src/config/db')
const app = express()
const port = 3002


ConnectDB()


const bservicerouter = require('./src/routes')

app.get('/test', (req, res) => { res.send('Hello World! B Service') })
app.use('/', bservicerouter)

const server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


process.on('SIGTERM', async() => {
  await DisConnectDB()
  console.log('SIGTERM signal received.');
});

process.on('SIGINT',async() => {
  await DisConnectDB()

  server.close(() => {           
    console.log('[B] Server closed');
    process.exit(0);
  });
  console.log('SIGINT signal received.');
});
