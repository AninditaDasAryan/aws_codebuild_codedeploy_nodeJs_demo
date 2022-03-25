const express = require('express')
const app = express()
const port = process.env.PORT || 3000 ;
const config = require('config')
console.log(config);

app.get('/', (req, res) => {
  res.send('CICD App Versio 5! for demo')
})

app.get('/status', (req, res) => {
    res.send('All Ok')
  })


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
