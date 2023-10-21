const express = require('express')
const app = express()
const api_route = require('./routes/api.js')
var bodyParser = require('body-parser')
require('dotenv').config()


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.use("/api",api_route)
app.get('/', (req, res) => {
  res.sendStatus(404)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
