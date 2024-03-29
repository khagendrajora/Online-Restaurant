const express = require('express')
const { postOrder, orderList, orderDetail, updateStatus, userOrderList } = require('../controllers/OrderController')
const { requireUser, requireAdmin } = require('../controllers/UserController')

const router = express.Router()


router.post('/postorder', postOrder)
router.get('/orderlist', orderList)
router.get('/orderdetail/:id', requireAdmin, orderDetail)
router.put('/updatestatus/:id', requireAdmin, updateStatus)
router.get('/userorderlist/:userid', requireUser, userOrderList)



module.exports = router