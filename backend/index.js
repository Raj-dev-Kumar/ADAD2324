const express = require('express')
const app = express()
const api_route = require('./routes/api.js')
require('dotenv').config()


app.use("/api",api_route)
app.get('/', (req, res) => {
  res.send("BACKEND")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
