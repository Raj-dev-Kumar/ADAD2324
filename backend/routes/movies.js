const express = require('express')
const router = express.Router()
const mongo = require("./../config/mongo.js")
const tipoObjectId = require("mongodb").ObjectId


const moviesCollection = mongo.collection("movies")

// middleware that is specific to this router
router.use((req, res, next) => {
    next()
})

// Utilizador por ID
router.get('/:movieid', async (req, res) => {

  var id_aprocurar = parseInt(req.params.movieid)
  
  movies = await moviesCollection.find({"_id":id_aprocurar}).toArray()
  if(movie.length<1)
  movies = await moviesCollection.find({"_id":new tipoObjectId(req.params.movieid)}).toArray()

  res.send(movies)
  
})

router.delete('/:movieid', async (req, res) => {

  var id_aprocurar = parseInt(req.params.movieid)

  var EliminarMovie = await moviesCollection.deleteMany({"_id":id_aprocurar})
  if (EliminarMovie.deletedCount <1 )
  EliminarUtilizador = await moviesCollection.deleteMany({"_id":new tipoObjectId(req.params.movieid)})
  
  res.json({"Resultado":EliminarUtilizador})
  
})

router.post('/', async (req, res) => {

  var adicionarMovies = await moviesCollection.insertMany(req.body.movies)
  res.json({"Resultado":adicionarMovies})
  
})

// Todos os utilizadores - (Limitado a 50)
router.get('/', async (req, res) => {
  movies = await moviesCollection.find({}).limit(50).toArray()
  res.send(movies)
  
})

module.exports = router
