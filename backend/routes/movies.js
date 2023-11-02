const express = require('express')
const router = express.Router()
const mongo = require("./../config/mongo.js")
const tipoObjectId = require("mongodb").ObjectId
var {
  obterMovieComRatingMedioEComentarios, listaMoviesComRating,listarMoviesComComentarios,
  moviesComMais5Estrelas, ratingPorOcupacao, topMoviePorGenero,topMoviePorGeneroAno, moviesComRating,
  moviesComRatingTop,numeroRatingIdadesEntre
} = require("../queryMethods/movies.js")


const moviesCollection = mongo.collection("movies")
const usersCollection = mongo.collection("users")
const commentCollection = mongo.collection("comments")

router.use((req, res, next) => {
    next()
})

router.get('/comments', async (req, res) => {
  
  var moviesComComentarios = await listarMoviesComComentarios()

res.json(moviesComComentarios)
  
})

router.get('/genres/:genre_name/:year', async (req, res) => {
  
  var generoProcurar = req.params.genre_name
  var anoProcurar = req.params.year
  var listarTopMoviesGenero = await topMoviePorGeneroAno(generoProcurar,anoProcurar)

res.json(listarTopMoviesGenero)
  
})

router.get('/genres/:genre_name', async (req, res) => {
  
  var generoProcurar = req.params.genre_name
  var listarTopMoviesGenero = await topMoviePorGenero(generoProcurar)

res.json(listarTopMoviesGenero)
  
})

router.get('/occupation', async (req, res) => {
  
  var listarRatingPorOcupacao = await ratingPorOcupacao()

res.json(listarRatingPorOcupacao)
  
})

router.get('/users', async (req, res) => {
  
  var MoviesComRating = await listaMoviesComRating()

  res.json(MoviesComRating)
  
})

router.get('/originaltitle', async (req, res) => {
  
  var arrayToReturn = []
  var tmpArray = []


  await moviesCollection.find({}).limit(50).forEach(el =>{
    try{

    var extrairTituloOriginal = str.substring(
      str.indexOf("(") + 1, 
      str.lastIndexOf(")"))

      // Insere o movie ao array temporariro
      tmpArray.push(el)

      //adiciona o campo originaltitle ao movie que está dentro do array
      tmpArray[0].originaltitle = extrairTituloOriginal

      // Uma vez que o movie já tem o campo originaltitle, o movie é adicionado ao array
      arrayToReturn.push(tmpArray[0])

      // Array temporario é limpo, para que o novo filme fique sempre na posição 0
      tmpArray = []

    }
    catch{
        arrayToReturn.push(el)
    }

    return arrayToReturn

  })



})

router.get('/star', async (req, res) => {
  
  var listaMoviesComMais5Estrelas = await moviesComMais5Estrelas()
 

res.json(listaMoviesComMais5Estrelas)
  
})

router.get('/top/age/:min_age-:max_age', async (req, res) => {

 var min_ageInteiro = parseInt(req.params.min_age)
 var max_ageInteiro = parseInt(req.params.max_age)

 var listaMoviesComRatingIdadesEntre = await numeroRatingIdadesEntre(min_ageInteiro,max_ageInteiro)

  res.send(listaMoviesComRatingIdadesEntre)
  
})
// Utilizador por ID
router.get('/:movieid', async (req, res) => {

  var id_aprocurar = parseInt(req.params.movieid)

  movies= await obterMovieComRatingMedioEComentarios({"_id":id_aprocurar})
  if(movies.length<1)
  movies = await obterMovieComRatingMedioEComentarios({"_id":new tipoObjectId(req.params.movieid)})

  res.send(movies)
  
})

router.delete('/:movieid', async (req, res) => {

  var id_aprocurar = parseInt(req.params.movieid)

  var EliminarMovie = await moviesCollection.deleteMany({"_id":id_aprocurar})
  if (EliminarMovie.deletedCount <1 )
  EliminarMovie = await moviesCollection.deleteMany({"_id":new tipoObjectId(req.params.movieid)})
  
  res.json({"Resultado":EliminarMovie})
  
})

router.get('/higher/:num_movies', async (req, res) => {
  var maximo = parseInt(req.params.num_movies)
  var listarMoviesComTopRating = await moviesComRatingTop()
  .limit(maximo)
  .sort({"averageRating":-1})
  .toArray()

res.send(listarMoviesComTopRating)
  
})
router.get('/ratings/:order', async (req, res) => {
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
      res.send("Order não tem valor valido")
      break;

  }
  
  var listaMoviesComRating = moviesComRating().sort({"quantidadeRatings":order}).toArray()

res.json(listaMoviesComRating)
  
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
