const express = require('express')
const app = express()
const PORT = 8000

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.listen(process.env.PORT || PORT, () => {
  console.log(`Listening on localhost:${PORT}`)
})