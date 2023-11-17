const express = require('express')
const app = express()
const api_route = require('./routes/api.js')
const cors = require("cors")

require('dotenv').config()

app.use(cors())
app.use(express.json())
app.use("/",api_route)

app.listen(process.env.PORT, () => {
  console.log(`Backend a correr na porta: ${process.env.PORT}`)
})
