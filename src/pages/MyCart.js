import React, { Fragment, useEffect, useState } from 'react'
import { Link, json } from 'react-router-dom'
import { FaTrash, FaPenAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';

const MyCart = () => {
    const [cartItem, setCartItem] = useState([])
    const [mycartItem, setMyCartItem] = useState([])


    useEffect(() => {
        const fetchCart = async () => {
            const cartDetails = JSON.parse(localStorage.getItem('cart'))
            setCartItem(cartDetails)
        }
        fetchCart()
    }, [])
    useEffect(() => {
        if (cartItem) {
            const user = localStorage.getItem('logedinUser')
            const cart = cartItem.filter(item => item.userId === user)

            if (cart) {
                setMyCartItem(cart)
                // console.log(cartItem)
                console.log(cart)
            } else {
                console.log('not found')
            }
        }


    }, [cartItem])

    //increase quantity
    const IncreaseQty = ((i, id, total, price) => {
        const updateCart = [...mycartItem]

        updateCart[i].quantity += 1
        updateCart[i].totalPrice = total + price

        setMyCartItem(updateCart)
        localStorage.setItem(('cart'), JSON.stringify(updateCart))

    })
    //decrease quantity
    const DecreaseQty = ((i, id, total, price) => {
        const updateCart = [...mycartItem]
        if (updateCart[i].quantity > 1) {
            updateCart[i].quantity -= 1
            updateCart[i].totalPrice = total - price
            setMyCartItem(updateCart)
            localStorage.setItem(('cart'), JSON.stringify(mycartItem))


        }






    })
    const Delete = (id) => {
        const cartDetails = JSON.parse(localStorage.getItem('cart'))
        const filterCart = cartDetails.filter((item) => item.id !== id)
        setCartItem(filterCart)
        localStorage.setItem(('cart'), JSON.stringify(filterCart))
        toast.success('Item Removed form the cart')


    }
    // const Edit = (id) => {

    // }
    return (
        <>
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="d-flex column align-items-center mb-5">
                    <h1 className="fw-bold mb-0 text-black">Shopping Cart</h1>
                    <h6 className="">{mycartItem.length} items</h6>
                </div>
                {mycartItem.length > 0 ?
                    mycartItem.map((item, i) => (
                        <Fragment key={i}>

                            <div className="col-lg-8">
                                <div className="p-5">

                                    <hr className="my-4" />
                                    <div className="row mb-4 d-flex justify-content-between align-items-center">
                                        <div className="col-md-2 col-lg-2 col-xl-2">
                                            <img
                                                src=""
                                                className="img-fluid rounded-3" alt="" />
                                        </div>
                                        <div className="col-md-3 col-lg-3 col-xl-3">
                                            <h6 className="text-muted">{item.name}</h6>
                                            <h6 className="text-black mb-0">{item.category}</h6>
                                        </div>

                                        <div className='col-md-3 col-lg-3 col-xl-2 d-flex'>
                                            <button className='btn bg-primary ' onClick={() => IncreaseQty(i, item.id, item.price * item.quantity, item.price)}>+ </button>
                                            <input type='number' name='qty' value={item.quantity} readOnly className='form-control' />
                                            <button className='btn bg-danger' onClick={() => DecreaseQty(i, item.id, item.totalPrice, item.price)}>-</button>
                                        </div>

                                        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                            <h6 className="mb-0">Rs.{item.price}</h6>
                                        </div>
                                        <div className='buttons d-flex ' style={{ justifyContent: 'space-between' }}>
                                            <div className='col-md-3 col-lg-2 col-xl-2 offset-lg-1 mr-2'>
                                                <button className='btn btn-danger' onClick={() => Delete(item.id)}><FaTrash /></button>
                                                {/* <button className='btn btn-success' onClick={() => Edit(i, item._id)}><FaPenAlt /></button> */}
                                            </div>
                                            <div className='total_Price '><h5>Total Price:<br />
                                                {item.quantity}*{item.price}= Rs. {item.quantity * item.price} </h5></div>
                                        </div>

                                    </div>
                                    <hr className="my-4" />

                                </div>
                            </div>


                        </Fragment>
                    )) : <div>
                        <h1 className='d-flex justify-conten-center'>Your Cart is empty</h1>
                    </div>
                }
                <div className="col-lg-4 bg-grey">
                    <div className="p-5">
                        <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                        <hr className="my-4" />

                        <h2>Total Units: {mycartItem.reduce((ac, item) => ac + item.quantity, 0)}</h2>
                        <hr className="my-4" />
                        <div className="d-flex justify-content-between mb-5">
                            <h2 className="text-uppercase">Total Bill</h2>

                            <h2>Rs. {mycartItem.reduce((totalBill, item) => totalBill + item.totalPrice, 0)}</h2>


                        </div>
                        <button type="button" className="btn btn-dark btn-block btn-lg"
                            data-mdb-ripple-color="dark">Confirm Order</button>
                    </div>
                </div>
                <div className="pt-5">
                    <Link to='/' className=' ' style={{ "fontFamily": 'monospace', "color": 'GrayText' }}  >Back To Home</Link>
                </div>
            </div >
        </>
    )

}
export default MyCart