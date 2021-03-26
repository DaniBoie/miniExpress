const express = require('express')
const { join } = require('path')
const app = express()

// Handing public folder to express.
app.use(express.static(join(__dirname, 'public')))
// Express JSON decoding
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

let items = []

// GET all items
app.get('/items', (req, res) => {
  res.json(items)
})

// POST one item
app.post('/items', (req, res) => {
  items.push(req.body)
  console.log(req.body)
  res.sendStatus(200)
})

// PUT one item
app.put('/items/:text', (req, res) => {

})

// DELETE one item
app.delete('/items/:text', (req, res) => {

})


app.listen(3000)
