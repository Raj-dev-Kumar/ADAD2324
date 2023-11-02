// Imports
const express = require('express')
const router = express.Router()
const mongo = require("./../config/mongo.js")
const tipoObjectId = require("mongodb").ObjectId

//Variaveis Globais
const usercollection = mongo.collection("users")
const ratingcollection = mongo.collection("ratings_by_user")

router.use((req, res, next) => {
    next()
})

// Utilizador por ID
router.get('/:userid', async (req, res) => {

  var id_aprocurar = parseInt(req.params.userid)
  
  users = await usercollection.find({"_id":id_aprocurar}).toArray()
  if(users.length<1)
  users = await usercollection.find({"_id":new tipoObjectId(req.params.userid)}).toArray()

  res.send(users)
  
})

router.delete('/:userid', async (req, res) => {

  var id_aprocurar = parseInt(req.params.userid)

  var EliminarUtilizador = await usercollection.deleteMany({"_id":id_aprocurar})
  if (EliminarUtilizador.deletedCount <1 )
  EliminarUtilizador = await usercollection.deleteMany({"_id":new tipoObjectId(req.params.userid)})
  
  res.json({"Resultado":EliminarUtilizador})
  
})

router.post('/', async (req, res) => {

  var adicionarUtilizador = await usercollection.insertMany(req.body.users)
  res.json({"Resultado":adicionarUtilizador})
  
})

// Todos os utilizadores - (Limitado a 50)
router.get('/', async (req, res) => {
  
  users = await usercollection.find({}).limit(50).toArray()
  res.send(users)
  
})

router.put('/:userid', async (req, res) => {
  var id_aprocurar = parseInt(req.params.userid)
  var updateUsers =  await usercollection.updateMany({"_id":id_aprocurar},{$set: 
    {
      name : req.body.name,
      gender : req.body.gender,
      age : req.body.age,
      ocupation : req.body.ocupation,
      movies : req.body.movies
    }})

    if(updateUsers.matchedCount <1)
    var updateUsers =  await usercollection.updateMany({"_id":new tipoObjectId(req.params.userid)},{$set: 
      {
        name : req.body.name,
        gender : req.body.gender,
        age : req.body.age,
        ocupation : req.body.ocupation,
        movies : req.body.movies
      }})
  res.json({"Resultado":updateUsers})



})

module.exports = router
