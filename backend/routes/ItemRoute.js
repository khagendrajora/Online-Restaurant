const express = require('express')
const router = express.Router()
const { ItemUpload, itemDetails, itemList } = require('../controllers/ItemController')
const { validation } = require('../validation/Validation')
//const upload = require('../middleware/fileUpload')

//router.post('/itemupload', upload.single('item_image'), ItemUpload)
router.post('/itemupload', ItemUpload, validation)
router.get('/itemdetails/:id', itemDetails)
router.get('/itemlist', itemList)

module.exports = router