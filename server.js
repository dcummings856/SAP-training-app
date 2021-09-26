const express = require('express')
const app = express()
const session = require('express-session')
const MongoStore = require("connect-mongo")
const PORT = 8000
const connectDB = require("./config/database")
const indexRoute = require('./routes/index')

require('dotenv').config({path: './config/.env'})

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.DB_STRING }),
  })
)

app.use('/', indexRoute)

app.listen(process.env.PORT || PORT, () => {
  console.log(`Listening on localhost:${PORT}`)
})