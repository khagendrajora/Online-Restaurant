// import React, { useState, useEffect } from 'react'
// import { API } from '../Config'
// import axios from 'axios'
// import { useStripe, useElements, CardNumberElement, CardCvcElement, CardExpiryElement } from '@stripe/react-stripe-js'
// import { ToastContainer, toast } from 'react-toastify'
// import { useNavigate } from 'react-router-dom'


// const options = {
//     style: {
//         base: {
//             fontSize: '16px'
//         },
//         invalid: {
//             color: "#9e2146"
//         }
//     }
// }

// const Payment = () => {
//     const stripe = useStripe()
//     const Elements = useElements()
//     const cartItems = JSON.parse(localStorage.getItem('cart'))
//     const shippingInfo = JSON.parse(localStorage.getItem('shippingInfo'))
//     const navigate = useNavigate()
//     const order = {
//         orderItem: cartItems,
//         shippingAdress: shippingInfo.shippingAdress,
//         phone: shippingInfo.phone,
//         user: cartItems.userId


//     }
//     const orderInfo = JSON.parse(sessionStorage.getItem('orderInfo'))
//     const paymentData = {
//         amount: Math.round(orderInfo.totalBill * 100)
//     }
//     const sumbitHandler = async (e) => {
//         e.preventDefault()
//         document.querySelector('#pay-btn').disabled = true
//         let res
//         try {
//             const config = {
//                 headers: {
//                     'Content-Type': 'application/json'
//                 }
//             }


//         }
//         catch (error) {

//         }

//     }
//     return (
//         <>
//             <ToastContainer theme='colored' />
//             <div className='container'>
//                 <div className='row '>
//                     <div className='col-15 shadow p-4 '>
//                         <form onSubmit={sumbitHandler}>
//                             <h2 className='mb-4'>Card Information</h2>
//                             <div className='mb-3'>
//                                 <label htmlFor='card-number'>Card Number</label>
//                                 <CardNumberElement type='text' className='form-control' id='card-number' options={options} />
//                             </div>
//                             <div className='mb-3'>
//                                 <label htmlFor='card-number'>Card Number</label>
//                                 <CardExpiryElement type='text' className='form-control' id='card-expiry' options={options} />
//                             </div>
//                             <div className='mb-3'>
//                                 <label htmlFor='card-number'>Card Number</label>
//                                 <CardCvcElement type='text' className='form-control' id='card-cvc' options={options} />
//                             </div>
//                             <div className='mb-3'>
//                                 <button className='btn btn-warning form-control' id='pay-btn'>
//                                     Pay Now
//                                 </button>
//                             </div>
//                         </form>
//                     </div>

//                 </div>

//             </div>




//         </>
//     )
// }

// export default Payment