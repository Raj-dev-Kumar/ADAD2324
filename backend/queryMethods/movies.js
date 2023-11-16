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
    $lookup: {
      from: "comments",
      localField: "movieInfo._id",
      foreignField: "movie_id",
      as: "comentarios",
  },
  },
  {
      $project: {
          _id: 0,
          title: "$movieInfo.title",
          year: "$movieInfo.ano",
          genros:"$movieInfo.genres",
          ratingMedio: "$ratingMedio",
          comentario :"$comentarios.comment"
      },
    },
    {
      $sort: {ratingMedio:-1}
    },

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
                comentarios: { $sum: 1 }
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
            $project: {
                _id: "$_id",
                title: "$moviecomentary.title",
                genres: "$moviecomentary.genres",
                ano: "$moviecomentary.ano",
                comentarios: 1
            }
        },
        {
            $sort: {comentarios:1}
          },

    ]).toArray()

    return listComentarios

}

async function moviesComMais5Estrelas(){
  var listaMoviesComMais5Estrelas = await usersCollection.aggregate([
    { $unwind: "$movies" },
    {
      $match : {
        "movies.rating" : 5
      }
    },
    {
        $group: {
            _id: "$movies.movieid",
            total5stars: { $sum: 1 },
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
            total5stars: 1
        },
      },
      {
        $sort: {total5stars:-1}
      },
      {
        $limit:10
      }
]).toArray()

return listaMoviesComMais5Estrelas

}

async function ratingPorOcupacao(){
 return await usersCollection.aggregate([
    {$unwind:"$movies"},
    {
      $group:{
          _id:"$occupation",
          ratingOcupacao: {$sum:1}
        
      }
    },
    {
      $project: {
        _id:0,
         ocupacao:"$_id",
         ratingOcupacao:1
      }
    }




  ]).toArray()





}

async function topMoviePorGenero(genero){
  return await usersCollection.aggregate([
    {$unwind:"$movies"},
    {
      $group:{
          _id:"$movies.movieid",
          top: {$max:"$movies.rating"}
        
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
      $match: {
        "movieInfo.genres":  {
          $elemMatch: {
            $eq: genero // Replace "action" with the genre you want to match
          }
        }
      }
    },
    {
        $project: {
            _id: 0,
            title: "$movieInfo.title",
            year: "$movieInfo.ano",
            genros:"$movieInfo.genres",
        },
      },




  ]).toArray()
}

async function topMoviePorGeneroAno(genero,ano){
  var tmpar = [genero]
console.log(tmpar)
  return await usersCollection.aggregate([
    {$unwind:"$movies"},
    {
      $group:{
          _id:"$movies.movieid",
          top: {$max:"$movies.rating"}
        
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
      $match: {
        "movieInfo.genres":  {
          $elemMatch: {
            $eq: genero // Replace "action" with the genre you want to match
          }
        },
        "movieInfo.ano":ano

      }
    },
    {
        $project: {
            _id: 0,
            title: "$movieInfo.title",
            year: "$movieInfo.ano",
            genros:"$movieInfo.genres",
        },
      },




  ]).toArray()
}

async function moviesComRating(order){

  return await usersCollection.aggregate([
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

}

async function moviesComRatingTop(maximo){

  return await usersCollection.aggregate([
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
]).limit(maximo)
.sort({"averageRating":-1})
.toArray()
}

async function numeroRatingIdadesEntre(minIdade, maxIdade){
  
  return await usersCollection.aggregate([
    { $unwind: "$movies" },
    {
      $match :{age: {$in:[minIdade,maxIdade] }}
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

}


async function originalTitle(){
  const aggregationPipeline = [
    {
      $match: {
        title: { $exists: true, $type: "string" } // Filter out null and non-string values
      }
    },
    {
      $limit: 20
    },
    {
      $addFields: {
        original_title: {
          $let: {
            vars: {
              titleParts: { $split: ["$title", "("] }
            },
            in: {
              $cond: {
                if: { $isArray: "$$titleParts" },
                then: {
                  $trim: {
                    input: {
                      $arrayElemAt: ["$$titleParts", 1]
                    },
                    chars: ")"
                  }
                },
                else: null
              }
            }
          }
        }
      }
    },
    {
      $match:{
        original_title: { $exists: true, $type: "string" }
      }
    }
  ];
  const result = await moviesCollection.aggregate(aggregationPipeline).toArray();

  return result
}

async function ratingPorUser(){

  return await usersCollection.aggregate([
    {$limit:1},
    { $unwind: "$movies" },
    {
    $lookup: {
      from: "movies",
      localField: "movies.movieid",
      foreignField: "_id",
      as: "movieInfo",
    }
  },
    {
        $group: {
            _id: "$_id",
            ratings: {
              $push: {
                movieid: "$movies.movieid",
                rating: "$movies.rating",
                movietitle:"$movieInfo.title"
              }
            },
            user_name: {$first:"$name"},
            user_id: {$first:"_id"}
            
        }
    },
  {
      $project: {
          _id:0,
          user_id:"$_id",
          user_name:1,
          ratings:1
          
      },
    },
    {
      $out:"ratings_by_user"
    },
   // {
     // $out: "ratings_by_user"
    //},


]).toArray()
}


module.exports = {
obterMovieComRatingMedioEComentarios,
listaMoviesComRating,
listarMoviesComComentarios,
moviesComMais5Estrelas,
ratingPorOcupacao,
topMoviePorGenero,
topMoviePorGeneroAno,
moviesComRating,
moviesComRatingTop,
numeroRatingIdadesEntre,
originalTitle,
ratingPorUser
 }