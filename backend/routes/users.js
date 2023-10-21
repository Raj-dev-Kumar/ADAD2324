const express = require('express')
const router = express.Router()
const mongo = require("./../config/mongo.js")


router.use((req, res, next) => {
    next()
})

// Utilizador por ID
router.get('/:userid', async (req, res) => {

  var id_aprocurar = parseInt(req.params.userid)
  var usercollection = mongo.collection("users")
  
  users = await usercollection.find({"_id":id_aprocurar}).toArray()

  res.send(users)
  
})

router.post('/', async (req, res) => {

  idUtilizadorInserido = []
  req.body.users.forEach(async user => {
    var usercollection = mongo.collection("users")
    var adicionarUtilizador = await usercollection.insertMany([user])
    idUtilizadorInserido.push(adicionarUtilizador.insertedIds)
  });


  res.json({"Resultado":idUtilizadorInserido})
  
})

// Todos os utilizadores - (Limitado a 50)
router.get('/', async (req, res) => {
  
  var usercollection = mongo.collection("users")
  users = await usercollection.find({}).limit(50).toArray()
  res.send(users)
  
})

module.exports = router
