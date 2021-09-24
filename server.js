const express = require('express')
const app = express()
const PORT = 8000
const indexRoute = require('./routes/index')

require('dotenv').config({path: './config/.env'})

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', indexRoute)

app.listen(process.env.PORT || PORT, () => {
  console.log(`Listening on localhost:${PORT}`)
})