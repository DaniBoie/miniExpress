const express = require('express')

const app = express()

app.get('/name', (req, res) => {
  console.log(req.query)
  res.send('hi')
})

app.listen(3000)