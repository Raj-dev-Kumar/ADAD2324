const express = require('express')
const router = express.Router()
const mongo = require("./../config/mongo.js")

// middleware that is specific to this router
router.use((req, res, next) => {
    next()
})

// Utilizador por ID
router.get('/:movieid', async (req, res) => {

  var id_aprocurar = parseInt(req.params.movieid)
  
  movies = await mongo.collection("movies").find({"_id":id_aprocurar}).toArray()
  res.send(movies)
  
})

// Todos os utilizadores - (Limitado a 50)
router.get('/', async (req, res) => {
  movies = await mongo.collection("movies").find({}).limit(50).toArray()
  res.send(movies)
  
})

module.exports = router
