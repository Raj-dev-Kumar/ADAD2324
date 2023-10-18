const express = require('express')
const router = express.Router()
const mongo = require("./../config/mongo.js")

// middleware that is specific to this router
router.use((req, res, next) => {
    next()
})
// define the home page route
router.get('/', (req, res) => {
  //res.send(`Show All Users`)
  res.send(mongo.collection("users").find().toArray())
  
})

module.exports = router
