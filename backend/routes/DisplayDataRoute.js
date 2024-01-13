const express = require('express')
const { DisplayData } = require('../controllers/DisplayData')

const router = express.Router()



router.post('/displaydata', DisplayData)


module.exports = router