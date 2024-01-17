const express = require('express')
const { postOrder, orderList, orderDetail, updateStatus, userOrderList } = require('../controllers/OrderController')

const router = express.Router()


router.post('/postorder', postOrder)
router.get('/orderlist', orderList)
router.get('/orderdetail/:id', orderDetail)
router.put('/updatestatus/:id', updateStatus)
router.get('/userorderlist/:userid', userOrderList)



module.exports = router