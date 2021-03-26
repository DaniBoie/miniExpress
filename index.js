const express = require('express')
const { join } = require('path')
const app = express()

// Handing public folder to express.
app.use(express.static(join(__dirname, 'public')))
// Express JSON decoding
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(require('./routes'))

app.listen(3000)
