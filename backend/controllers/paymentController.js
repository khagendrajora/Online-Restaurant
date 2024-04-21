const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

//process Payment

// exports.processPayment = async (req, res) => {
//     const paymentIntent = await stripe.paymentIntents.create({
//         amount: req.body.amount,
//         currency: 'npr',
//         metadata: { integration_check: 'accept_a_payment' } //the seplling must me exactly same.

//     })
//     res.json({ client_secret: paymentIntent.client_secret })
// }

// //send stripe api key to frontend

// exports.sendStripeApi = async (req, res) => {
//     res.json({
//         stripeApiKey: process.env.STRIPE_API_KEY
//     })
// }

exports.payment = async (req, res) => {
    const { products } = req.body
    const totalBill = req.body
    // console.log(totalBill)
    // console.log(products)
    const lineItems = products.map((product) => ({
        price_data: {
            currency: 'npr',
            product_data: {
                name: product.name

            },
            unit_amount: product.price * 100
        },
        quantity: product.quantity

    }))
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: lineItems,
        mode: "payment",
        success_url: process.env.FRONTEND_URL + '\/success\/',
        cancel_url: process.env.FRONTEND_URL + '\/failed\/'
    })
    res.json({ id: session.id })

}