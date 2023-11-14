const express = require('express')
const router = express.Router()
const mongo = require("./../config/mongo.js")
const tipoObjectId = require("mongodb").ObjectId
var {
  obterMovieComRatingMedioEComentarios, listaMoviesComRating,listarMoviesComComentarios,
  moviesComMais5Estrelas, ratingPorOcupacao, topMoviePorGenero,topMoviePorGeneroAno, moviesComRating,
  moviesComRatingTop,numeroRatingIdadesEntre, originalTitle,ratingPorUser
} = require("../queryMethods/movies.js")


const moviesCollection = mongo.collection("movies")
const usersCollection = mongo.collection("users")
const commentCollection = mongo.collection("comments")

router.use((req, res, next) => {
    next()
})

router.post('/user/ratings', async (req, res) => {
  statuscode = undefined
  objectoReturnar = undefined

  try{
    var ratingMovie = await ratingPorUser()
    statuscode = 200
    objectoReturnar = {"sucesso":"SUCESSO"}
  }
  catch{
    statuscode = 500
    objectoReturnar = {"Error":"Erro ao listar comentarios"}
  }


  res.status(statuscode).json(objectoReturnar)
  
})

router.get('/comments', async (req, res) => {
  statuscode = undefined
  objectoReturnar = undefined

  try {
        var moviesComComentarios = await listarMoviesComComentarios()
        statuscode = 200
        objectoReturnar = moviesComComentarios
  }
  catch{
        statuscode = 500
        objectoReturnar = {"Error":"Erro ao listar comentarios"}
  }

res.status(statuscode).json(objectoReturnar)
})

router.get('/genres/:genre_name/:year', async (req, res) => {
  statuscode = undefined
  objectoReturnar = undefined

  var generoProcurar = req.params.genre_name
  var anoProcurar = req.params.year

  try{
        var listarTopMoviesGenero = await topMoviePorGeneroAno(generoProcurar,anoProcurar)
        statuscode = 200
        objectoReturnar = listarTopMoviesGenero
  }
  catch{
        statuscode = 500
        objectoReturnar = {"Error":"Erro ao listar movies, genero e ano"}
  }

  res.status(statuscode).json(objectoReturnar)
  
})

router.get('/genres/:genre_name', async (req, res) => {
  
  statuscode = undefined
  objectoReturnar = undefined

  var generoProcurar = req.params.genre_name

  try {
        var listarTopMoviesGenero = await topMoviePorGenero(generoProcurar)
        statuscode = 200
        objectoReturnar = listarTopMoviesGenero
  }

  catch {
    statuscode = 500
    objectoReturnar = {"Error":"Erro a obter Top Movie por Genero"}
  }

  res.status(statuscode).json(objectoReturnar)
  
})

router.get('/occupation', async (req, res) => {

  statuscode = undefined
  objectoReturnar = undefined

  try{
    var listarRatingPorOcupacao = await ratingPorOcupacao()
    statuscode = 200
    objectoReturnar = listarRatingPorOcupacao
  }
  catch{
    statuscode = 500
    objectoReturnar = {"Error":"Erro a obter Top Movies"}
  }
  

  res.status(statuscode).json(objectoReturnar)
  
})

router.get('/users', async (req, res) => {
  
  statuscode = undefined
  objectoReturnar = undefined
  try{
    var MoviesComRating = await listaMoviesComRating()
    statuscode = 200
    objectoReturnar = MoviesComRating
  }
  catch{
    statuscode = 500
    objectoReturnar = {"Error":"Ocorreu algum erro"}
  }

  res.status(statuscode).json(objectoReturnar)
  
})

router.get('/originaltitle', async (req, res) => {
  statuscode = undefined
  objectoReturnar = undefined

  try{
    const result = await originalTitle()
    statuscode = 200
    objectoReturnar = result
  }

  catch{
    statuscode = 500
    objectoReturnar = {"Error":"Ocorreu algum erro"}
  }

  res.status(statuscode).json(objectoReturnar)
  

})

router.get('/star', async (req, res) => {

  statuscode = undefined
  objectoReturnar = undefined

  try {
    var listaMoviesComMais5Estrelas = await moviesComMais5Estrelas()
    statuscode = 200
    objectoReturnar = listaMoviesComMais5Estrelas
  }

  catch{
    statuscode = 500
    objectoReturnar = {"Error":"Ocorreu algum erro"}
  }

  res.status(statuscode).json(objectoReturnar)
  
})

router.get('/top/age/:min_age-:max_age', async (req, res) => {

  statuscode = undefined
  objectoReturnar = undefined

  try{
    var min_ageInteiro = parseInt(req.params.min_age)
    var max_ageInteiro = parseInt(req.params.max_age)
   
    var listaMoviesComRatingIdadesEntre = await numeroRatingIdadesEntre(min_ageInteiro,max_ageInteiro)
    statuscode = 200
    objectoReturnar =listaMoviesComRatingIdadesEntre
  }

  catch {
    statuscode = 500
    objectoReturnar = {"Erro":"Erro obtida"}
  }

  res.status(statuscode).json(objectoReturnar)
  
})
// Utilizador por ID
router.get('/:movieid', async (req, res) => {

  statuscode = undefined
  objectoReturnar = undefined
  var id_aprocurar = parseInt(req.params.movieid)

  try{
    movies= await obterMovieComRatingMedioEComentarios({"_id":id_aprocurar})
    if(movies.length<1)
    movies = await obterMovieComRatingMedioEComentarios({"_id":new tipoObjectId(req.params.movieid)})
    statuscode = 200
  objectoReturnar = movies
  }
catch{

  statuscode = 500
  objectoReturnar = {"Erro":"Erro a obter Movie"}

}

res.status(statuscode).json(objectoReturnar)
  
})

router.delete('/:movieid', async (req, res) => {

  statuscode = undefined
  objectoReturnar = undefined

  var id_aprocurar = parseInt(req.params.movieid)

  try{
    var EliminarMovie = await moviesCollection.deleteMany({"_id":id_aprocurar})
    if (EliminarMovie.deletedCount <1 )
    EliminarMovie = await moviesCollection.deleteMany({"_id":new tipoObjectId(req.params.movieid)})

    statuscode = 200
    objectoReturnar = EliminarMovie

  }
  catch{
    statuscode = 500
    objectoReturnar = {"Erro":"Erro ao apagar Movie"}
  }


  
  res.status(statuscode).json(objectoReturnar)
  
})

router.get('/higher/:num_movies', async (req, res) => {

  statuscode = undefined
  objectoReturnar = undefined

  try{
    var maximo = parseInt(req.params.num_movies)
    var listarMoviesComTopRating = await moviesComRatingTop(maximo)

    statuscode = 200
    objectoReturnar = listarMoviesComTopRating
  }
  catch{
    statuscode = 500
    objectoReturnar = {"Erro":"Erro ao listar movies"}
  }

  res.status(statuscode).json(objectoReturnar)
  
})
router.get('/ratings/:order', async (req, res) => {
  statuscode = undefined
  objectoReturnar = undefined

  var order
  switch(req.params.order)
  {
    case "asc":
      order = 1;
      break;
    case "desc":
      order = -1;
      break;
    default:
      res.status(500).json({"Erro":"Parametro apenas pode ser asc ou desc"})
      break;

  }

  console.log(order)
  try{
    var listaMoviesComRating = await moviesComRating(order)
    statuscode = 200
    objectoReturnar = listaMoviesComRating
  }

  catch (e){
    console.log(e)
    statuscode = 500
    objectoReturnar = {"Erro":"Erro ao listar os movies"}
  }
  

res.status(statuscode).json(objectoReturnar)
  
})




router.post('/', async (req, res) => {

  statuscode = undefined
  objectoReturnar = undefined

  try{
    var adicionarMovies = await moviesCollection.insertMany(req.body.movies)
    statuscode = 200
    objectoReturnar =adicionarMovies

  }
  catch{
    statuscode = 500
    objectoReturnar = {"Erro":"erro ao adicionar movies"}
  }

  res.status(statuscode).json(objectoReturnar)
  
})

// Todos os utilizadores - (Limitado a 50)
router.get('/', async (req, res) => {

  statuscode = undefined
  objectoReturnar = undefined

  try{
    movies = await moviesCollection.find({}).limit(50).toArray()
    statuscode = 200
    objectoReturnar = movies
  }
  catch{
    statuscode = 500
    objectoReturnar = {"Erro": "Erro ao obter movies"}

  }
  res.status(statuscode).json(objectoReturnar)
  
})


router.put('/:movieid', async (req, res) => {
  var id_aprocurar = parseInt(req.params.movieid)
  var updateMovies =  await moviesCollection.updateMany({"_id":id_aprocurar},{$set: {
    title : req.body.title,
     genres : req.body.genres,
      ano : req.body.ano
    }})
    if(updateMovies.matchedCount <1)
    var updateMovies =  await moviesCollection.updateMany({"_id":new tipoObjectId(req.params.movieid)},{$set: {
      title : req.body.title,
       genres : req.body.genres,
        ano : req.body.ano
      }})
  res.json({"Resultado":updateMovies})
})

module.exports = router
