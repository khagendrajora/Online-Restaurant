const express = require('express')
const { payment, paymentDirect } = require('../controllers/paymentController')
// const { processPayment, sendStripeApi } = require('../controllers/paymentController')
const router = express.Router()

// router.post('/process/payment', processPayment)
// router.get('/stripeapi', sendStripeApi)

router.post('/create-checkout-secession', payment)
router.post('/create-checkout-secessions', paymentDirect)

module.exports = router
