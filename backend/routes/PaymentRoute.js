const express = require('express')
const { payment } = require('../controllers/paymentController')
// const { processPayment, sendStripeApi } = require('../controllers/paymentController')
const router = express.Router()

// router.post('/process/payment', processPayment)
// router.get('/stripeapi', sendStripeApi)

router.post('/create-checkout-secession', payment)

module.exports = router
