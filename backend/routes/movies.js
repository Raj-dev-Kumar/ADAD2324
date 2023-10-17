const express = require('express')
const router = express.Router()

// middleware that is specific to this router
router.use((req, res, next) => {
    next()
})
// define the home page route
router.get('/', (req, res) => {
  res.send('Show All Movies')
})

module.exports = router
