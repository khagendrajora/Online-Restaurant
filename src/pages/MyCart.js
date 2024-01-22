import React, { Fragment, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

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
    const IncreaseQty = ((i, price) => {
        const updateCart = [...mycartItem]
        updateCart[i].quantity += 1
        updateCart[i].price += price
        setMyCartItem(updateCart)
        localStorage.setItem(('cart'), JSON.stringify(updateCart))

    })
    //decrease quantity
    const DecreaseQty = ((quantity) => {
        const updateCart = [...mycartItem]
        updateCart[quantity].quantity -= 1
        setMyCartItem(updateCart)
        localStorage.setItem(('cart'), JSON.stringify(mycartItem))


    })
    return (
        <>
            <Navbar />
            {mycartItem.length > 0 ?
                mycartItem.map((item, i) => (
                    <Fragment key={i}>
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-lg-8">
                                <div className="p-5">
                                    <div className="d-flex justify-content-between align-items-center mb-5">
                                        <h1 className="fw-bold mb-0 text-black">Shopping Cart</h1>
                                        <h6 className="mb-0 text-muted">{mycartItem.length} items</h6>
                                    </div>
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
                                            <button className='btn bg-primary ' onClick={() => IncreaseQty(i, item.price)}>+ </button>
                                            <input type='number' name='qty' value={item.quantity} readOnly className='form-control' />
                                            <button className='btn bg-danger' onClick={() => DecreaseQty(i)}>-</button>
                                        </div>

                                        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                            <h6 className="mb-0">{item.price}</h6>
                                        </div>
                                    </div>
                                    <hr className="my-4" />
                                    <div className="pt-5">
                                        <Link to='/' className=' ' style={{ "fontFamily": 'monospace', "color": 'GrayText' }}  >Back To Home</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 bg-grey">
                                <div className="p-5">
                                    <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                                    <hr className="my-4" />
                                    <div className="d-flex justify-content-between mb-5">
                                        <h5 className="text-uppercase">Total price</h5>
                                        <h5>€ 137.00</h5>
                                    </div>
                                    <button type="button" className="btn btn-dark btn-block btn-lg"
                                        data-mdb-ripple-color="dark">Confirm Order</button>
                                </div>
                            </div>
                        </div>
                    </Fragment>
                )) : <div>
                    <h1 className='d-flex justify-conten-center'>Your Cart is empty</h1>
                </div>
            }
        </>
    )

}
export default MyCart