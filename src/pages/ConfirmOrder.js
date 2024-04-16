// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// import { API } from '../Config'
// import { useNavigate } from 'react-router-dom'

// const ConfirmOrder = () => {
//     const navigate = useNavigate()
//     const [user, setUser] = useState([])
//     const [cartItems, setCartItems] = useState([])
//     const [myCartItems, setMyCartItems] = useState([])
//     const [totalBill, setTotalBill] = useState()

//     const shippingInfo = JSON.parse(localStorage.getItem('shippingInfo'))

//     useEffect(() => {
//         const cartItems = JSON.parse(localStorage.getItem('cart'))
//         setCartItems(cartItems)

//         const loginedUserId = localStorage.getItem('logedinUser')
//         axios.get(`${API}/userdetails/${loginedUserId}`, {
//             method: 'POST',
//             headers: {
//                 Accept: 'application.json',
//                 'Content-Type': 'application/json'
//             },
//         })
//             .then((res => setUser(res.data)))
//             .catch(err => console.log(err))


//         const filter = cartItems.filter(item => item.userId === user._id)
//         if (filter) {
//             setMyCartItems(filter)
//         } else {
//             console.log('not found')
//         }

//         const totalBill = filter.reduce((ac, item) => ac + item.totalPrice, 0)
//         setTotalBill(totalBill)
//         console.log(loginedUserId)
//         console.log(filter)
//         setMyCartItems(filter)
//         console.log(cartItems)
//     })
//     const processToPayment = () => {
//         const data = {
//             totalBill
//         }
//         sessionStorage.setItem('orderInfo', JSON.stringify(data))
//         navigate('/payment')
//     }

//     return (
//         <>
//             <div className='container my-5'>
//                 <div className='row d-flex justify-content-evenly'>
//                     <h2 className='text-center'>Shipping Info</h2>
//                     <div className='col-6 offset-md-3'>
//                         {user._id}
//                         {user.name}
//                         {user.location}
//                         {user.email}
//                         {myCartItems.map((item, i) => (
//                             <div key={i}>

//                                 <div>
//                                     <b>Food Item Name</b>
//                                     <span className='text-muted'>
//                                         {item.name}
//                                     </span>
//                                 </div >
//                                 <div>
//                                     <b>Category</b>
//                                     <span className='text-muted'>
//                                         {item.category}
//                                     </span>
//                                 </div>
//                                 <div>
//                                     <b>Food item ID</b>
//                                     <span className='text-muted'>
//                                         {item.id}
//                                     </span>
//                                 </div>
//                                 <div>
//                                     <b>Quantity</b>
//                                     <span className='text-muted'>
//                                         {item.quantity}
//                                     </span>
//                                 </div>
//                                 <div>
//                                     <b>Price</b>
//                                     <span className='text-muted'>
//                                         {item.totalPrice}
//                                     </span>
//                                 </div>


//                             </div>

//                         ))}
//                         <div>
//                             <div>
//                                 <b>Total Bill</b>
//                                 <span className='text-muted'>
//                                     {totalBill}
//                                 </span>
//                             </div>
//                             <b>Phone</b>
//                             <span className='text-muted'>
//                                 {shippingInfo.phone}
//                             </span>
//                         </div>
//                         <div>
//                             <b>Address</b>
//                             <span className='text-muted'>
//                                 {shippingInfo.shippingAddress}
//                             </span>
//                         </div>


//                     </div>
//                 </div>

//                 <hr />
//                 <button className='btn btn-warning' onClick={processToPayment}>Proceed to Payment</button>
//             </div>

//         </>
//     )
// }

// export default ConfirmOrder