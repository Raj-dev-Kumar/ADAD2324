const mongo = require("./../config/mongo.js")
const usersCollection = mongo.collection("users")
const moviesCollection = mongo.collection("movies")
const commentCollection = mongo.collection("comments")




async function obterMovieComRatingMedioEComentarios(condicaoMatch)
{
  var ratingMovie = await usersCollection.aggregate([
    { $unwind: "$movies" },
    {
        $group: {
            _id: "$movies.movieid",
            ratingMedio: { $avg: "$movies.rating" },
        }
    },
    {
      $lookup: {
        from: "movies",
        localField: "_id",
        foreignField: "_id",
        as: "movieInfo",
    },
  },
  {
    $match:condicaoMatch
},
  { $unwind: "$movieInfo" },
  {
      $project: {
          _id: 0,
          title: "$movieInfo.title",
          year: "$movieInfo.ano",
          genros:"$movieInfo.genres",
          ratingMedio: "$ratingMedio"
      },
    },
    {
      $sort: {total5stars:-1}
    },
    {
      $limit:10
    }
]).toArray()

return ratingMovie
}





async function listaMoviesComRating(){
   var listarMovies = await usersCollection.aggregate([
    { $unwind: "$movies" },
    {
        $group: {
            _id: "$movies.movieid",
            ratingMinimo: { $min: "$movies.rating" },
            ratingMaximo: { $max: "$movies.rating" },
            ratingMedio: { $avg: "$movies.rating" },
            name : {$first: "$name" },
            utilizadorID : {$first: "$_id"}
        }
    },
    {
         $project: {
            _id: 0,
            utilizadorID: 1,
            ratingMinimo: 1,
            ratingMaximo:1,
            ratingMedio:1,
            name:1,
            
        },
      },
      {
        $sort: {ratingMedio:-1}
      },
      {
        $limit:50
      },
      
]).toArray()

return listarMovies;
}




async function listarMoviesComComentarios(){
   var listComentarios =  commentCollection.aggregate([
        {
            $group : {
                _id:"$movie_id",
                comentario : {$first:"$comment"},
                idComentario : {$first:"$_id"}
            },
            
        },
        {
            $lookup: {
                from: "movies",
                localField: "_id",
                foreignField: "_id",
                as: "moviecomentary"
            }
        },
        {$unwind:"$moviecomentary"},
        {
            $project:{
                _id:"$idComentario",
                comentario : "$comentario",
                movie :"$moviecomentary"
            }
        },

    ]).toArray()

    return listComentarios

}





module.exports = {
obterMovieComRatingMedioEComentarios,
listaMoviesComRating,
listarMoviesComComentarios
 }