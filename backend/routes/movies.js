const express = require('express')
const router = express.Router()
const mongo = require("./../config/mongo.js")
const tipoObjectId = require("mongodb").ObjectId
var {obterMovieComRatingMedioEComentarios, listaMoviesComRating,listarMoviesComComentarios,
  moviesComMais5Estrelas, ratingPorOcupacao
} = require("../queryMethods/movies.js")


const moviesCollection = mongo.collection("movies")
const usersCollection = mongo.collection("users")
const commentCollection = mongo.collection("comments")


// middleware that is specific to this router
router.use((req, res, next) => {
    next()
})

router.get('/comments', async (req, res) => {
  
  var moviesComComentarios = await listarMoviesComComentarios()

res.json(moviesComComentarios)
  
})

router.get('/genres/:genre_name', async (req, res) => {
  
  var moviesComComentarios = await listarMoviesComComentarios()

res.json(moviesComComentarios)
  
})

router.get('/occupation', async (req, res) => {
  
  var listarRatingPorOcupacao = await ratingPorOcupacao()

res.json(listarRatingPorOcupacao)
  
})

router.get('/users', async (req, res) => {
  
  var MoviesComRating = await listaMoviesComRating()

  res.json(MoviesComRating)
  
})

router.get('/star', async (req, res) => {
  
  var listaMoviesComMais5Estrelas = await moviesComMais5Estrelas()
 

res.json(listaMoviesComMais5Estrelas)
  
})

router.get('/top/age/:min_age-:max_age', async (req, res) => {

 var min_ageInteiro = parseInt(req.params.min_age)
 var max_ageInteiro = parseInt(req.params.max_age)

 var listaMoviesComRating = await usersCollection.aggregate([
  { $unwind: "$movies" },
  {
    $match :{age: {$in:[min_ageInteiro,max_ageInteiro] }}
  },
  {
      $group: {
          _id: "$movies.movieid",
          quantidadeRatings: { $count: { } },
      }
  },
  {
    $lookup: {
      from: "movies",
      localField: "_id",
      foreignField: "_id",
      as: "movieInfo"
  }

  },
  { $unwind: "$movieInfo" },
  {
      $project: {
          _id: 0,
          title: "$movieInfo.title",
          year: "$movieInfo.ano",
          genros:"$movieInfo.genres",
          quantidadeRatings: 1
      }
    },
]).toArray()

  res.send(listaMoviesComRating)
  
})
// Utilizador por ID
router.get('/:movieid', async (req, res) => {

  var id_aprocurar = parseInt(req.params.movieid)

  movies= await obterMovieComRatingMedioEComentarios({"_id":id_aprocurar})
  if(movies.length<1)
  movies = await obterMovieComRatingMedioEComentarios({"_id":new tipoObjectId(req.params.movieid)})

  res.send(movies)
  /*
  
  movies = await moviesCollection.find({"_id":id_aprocurar}).toArray()
  if(movies.length<1)
  movies = await moviesCollection.find({"_id":new tipoObjectId(req.params.movieid)}).toArray()

  res.send(movies)

  */
  
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
  var a = await usersCollection.aggregate([
    { $unwind: "$movies" },
    {
        $group: {
            _id: "$movies.movieid",
            averageRating: { $avg: "$movies.rating" },
        }
    },
    {
      $lookup: {
        from: "movies",
        localField: "_id",
        foreignField: "_id",
        as: "movieInfo"
    }

    },
    { $unwind: "$movieInfo" },
    {
        $project: {
            _id: 0,
            title: "$movieInfo.title",
            year: "$movieInfo.ano",
            genros:"$movieInfo.genres",
            averageRating: 1
        }
      },
]).limit(maximo).sort({"averageRating":-1}).toArray()

res.send(a)
  
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
      res.send("Order não ten valor valido")
      break;

  }
  
  var listaMoviesComRating = await usersCollection.aggregate([
    { $unwind: "$movies" },
    {
        $group: {
            _id: "$movies.movieid",
            quantidadeRatings: { $count: { } },
        }
    },
    {
      $lookup: {
        from: "movies",
        localField: "_id",
        foreignField: "_id",
        as: "movieInfo"
    }

    },
    { $unwind: "$movieInfo" },
    {
        $project: {
            _id: 0,
            title: "$movieInfo.title",
            year: "$movieInfo.ano",
            genros:"$movieInfo.genres",
            quantidadeRatings: 1
        }
      },
]).sort({"quantidadeRatings":order}).toArray()

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

module.exports = router
