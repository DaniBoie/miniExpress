const router = require('express').Router()
const { join } = require('path')
const fs = require('fs')
let items = []

// GET all items
router.get('/items', (req, res) => {
  fs.readFile(join(__dirname, '..', 'db', 'db.json'), 'utf8', (err, data) => {
    console.log(data)
    if (err) { console.log(err) }
    // JSON.parse() turns string of JSON into JSON objects
    res.json(JSON.parse(data))
  })
})

// POST one item
router.post('/items', (req, res) => {
  fs.readFile(join(__dirname, '..', 'db', 'db.json'), 'utf8', (err, data) => {
    console.log(data)
    if (err) { console.log(err) }

    let items = JSON.parse(data)
    items.push(req.body)

    fs.writeFile(join(__dirname, '..', 'db', 'db.json'), JSON.stringify(items), err => {
      if (err) { console.log(err) }
      res.sendStatus(200)
    })
  })
})

// PUT one item
router.put('/items/:text', (req, res) => {
  fs.readFile(join(__dirname, '..', 'db', 'db.json'), 'utf8', (err, data) => {
    console.log(data)
    if (err) { console.log(err) }

    let items = JSON.parse(data)

    for (let i = 0; i < items.length; i++) {
      if (items[i].text === req.params.text) {
        items[i].isDone = req.body.isDone
      }
    }

    fs.writeFile(join(__dirname, '..', 'db', 'db.json'), JSON.stringify(items), err => {
      if (err) { console.log(err) }
      res.sendStatus(200)
    })
  })
})

// DELETE one item
router.delete('/items/:text', (req, res) => {
  fs.readFile(join(__dirname, '..', 'db', 'db.json'), 'utf8', (err, data) => {
    console.log(data)
    if (err) { console.log(err) }

    let items = JSON.parse(data)

    items = items.filter(item => item.text !== req.params.text)

    fs.writeFile(join(__dirname, '..', 'db', 'db.json'), JSON.stringify(items), err => {
      if (err) { console.log(err) }
      res.sendStatus(200)
    })
  })
})

module.exports = router
