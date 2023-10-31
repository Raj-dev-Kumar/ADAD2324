const express = require('express')
const router = express.Router()
const mongo = require("./../config/mongo.js")
const tipoObjectId = require("mongodb").ObjectId

const commentCollection = mongo.collection("comments")


router.post('/', async (req, res) => {

    var adicionarComments = await commentCollection.insertMany(req.body.comments)
    res.json({"Resultado":adicionarComments })
    
  })
  router.delete('/:commentid', async (req, res) => {

    var id_aprocurar = parseInt(req.params.commentid)
  
    var EliminarComment = await moviesCollection.deleteMany({"_id":id_aprocurar})
    if (EliminarComment.deletedCount <1 )
    EliminarComment = await moviesCollection.deleteMany({"_id":new tipoObjectId(req.params.commentid)})
    
    res.json({"Resultado":EliminarComment})
    
  })


module.exports = router