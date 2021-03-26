const express = require('express')

const app = express()

// Broweser Params: /name?n=David?l=Gallegos
app.get('/name', (req, res) => {
  console.log(req.query)
  res.send('hi')
})

// Request Parameter Example
app.get('/name/:n', (req, res) => {
  console.log(req.params)
  console.log('hello,', req.params.n)
})

app.listen(3000)
