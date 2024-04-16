// import React, { useState, useEffect } from 'react'
// import { API } from '../Config'
// import axios from 'axios'
// import { Elements } from '@stripe/react-stripe-js'
// import { loadStripe } from '@stripe/stripe-js'
// import Payment from './Payment'

// export const PaymentElement = () => {
//     const [stripeApiKey, setStripeApiKey] = useState('')
//     useEffect(() => {
//         const getStripeApiKey = async () => {
//             const { data } = await axios.get(`${API}/stripeapi`)
//             setStripeApiKey(data.stripeApiKey)
//         }
//         getStripeApiKey()

//     }, [])
//     return (
//         <>
//             {stripeApiKey && (
//                 <Elements stripe={loadStripe(stripeApiKey)}>
//                     <Payment />
//                 </Elements>
//             )}

//         </>
//     )
// }
