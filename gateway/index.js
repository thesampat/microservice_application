const express = require('express')
const app = express()
const { createProxyMiddleware } = require('http-proxy-middleware');

const port = 3000


//proxies
const aservice = createProxyMiddleware({ target: 'http://service-x:3001', changeOrigin: true, pathRewrite:{'^/a' : '/'}});
const bservice = createProxyMiddleware({ target: 'http://service-x:3002', changeOrigin: true, pathRewrite:{'^/b' : '/'}});
const xservice = createProxyMiddleware({ target: 'http://service-x:3003', changeOrigin: true, pathRewrite:{'^/x' : '/'}});


app.get('/', (req, res) => { res.send('Hello World!') })
app.use('/a', aservice)
app.use('/b', bservice)
app.use('/x', xservice)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})