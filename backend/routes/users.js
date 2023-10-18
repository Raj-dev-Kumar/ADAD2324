const express = require('express')
const router = express.Router()
const mongo = require("./../config/mongo.js")


router.use((req, res, next) => {
    next()
})

// Utilizador por ID
router.get('/:userid', async (req, res) => {

  var id_aprocurar = parseInt(req.params.userid)
  
  users = await mongo.collection("users").find({"_id":id_aprocurar}).toArray()
  res.send(users)
  
})

router.post('/createuser', async (req, res) => {
  res.json({requestBody: req.body})
  
})

// Todos os utilizadores - (Limitado a 50)
router.get('/', async (req, res) => {
  users = await mongo.collection("users").find({}).limit(50).toArray()
  res.send(users)
  
})

module.exports = router
