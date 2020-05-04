const express = require('express')
const app = express()
const port = 8082

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/notifications', function (req, res) {
  console.log(req);
  res.setHeader('Content-Type', 'application/json');
  res.end('hello');
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))