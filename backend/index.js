const express = require('express')
const app = express()
const users_route = require('./routes/users.js')
require('dotenv').config()


app.use("/users",users_route)
app.get('/', (req, res) => {
  res.send("BACKEND")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
