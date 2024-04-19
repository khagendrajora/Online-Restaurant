import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { API } from '../Config';
import { ToastContainer, toast } from 'react-toastify';


const Card = (props) => {
    const [item, setItem] = useState({})
    const [clickedAddToCart, setAddToCart] = useState(false)
    const { _id, item_name, item_category, item_description, item_price, } = props.item
    useEffect(() => {
        // if (clickedAddToCart && _id) {
        axios.get(`${API}/itemdetails/${_id}`)
            .then(res => setItem(res.data))
            .catch(err => console.log(err))
        console.log(item)

    }, [clickedAddToCart, _id])


    if (!props.item) {
        return <div>Loading...</div>; // Return a loading state or an error message if props.items is undefined
    }

    const handleCart = async () => {
        setAddToCart(true)
        const authToken = localStorage.getItem('authToken')
        const userEmail = localStorage.getItem('logedinUserEmail')
        const userEmailId = localStorage.getItem('logedinUser')
        if (authToken) {
            const cartItem = JSON.parse(localStorage.getItem('cart')) || []
            //const cartEmail= JSON.parse(localStorage.getItem('cart'))
            const NewCartItem = {
                id: item._id,
                name: item.item_name,
                category: item.item_category,
                description: item.item_description,
                price: item.item_price,
                userEmail: userEmail,
                userId: userEmailId,
                quantity: 1,
                totalPrice: item.item_price

            }
            const existingEmail = cartItem.find((item) => item.userEmail === NewCartItem.userEmail && item.id === NewCartItem.id) //this process is called combinational check of id and email in a particular cart item.

            //const existingItem = cartItem.find((item => item.id === NewCartItem.id))  this process checks the user email and id in entire cart
            if (existingEmail) {
                toast.error("Item already in cart")
            } else {
                cartItem.push(NewCartItem)
                localStorage.setItem('cart', JSON.stringify(cartItem))
                toast.success(`${NewCartItem.name} added to cart`)
            }
        }
        else {
            toast.error('Please login or signup first')
        }
    }
    return (
        <>
            <ToastContainer theme='colored' position='top-right' />
            <div className='card-container'>
                <div className="card m-3" >
                    <img className="card-img-top" src='https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMGZyaWVkJTIwcmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt="pp" style={{ height: "120px", objectFit: 'fill', cursor: 'pointer' }} />
                    <div className="card-body">
                        <div className='card-name'>
                            <div className="card-title">{item_name}</div>
                            <div className="card-category">Category:-   {item_category}</div>
                        </div>

                        <div className='card-description'>
                            <div className="card-text">{item_description}</div>
                            <div className='d-inline ms-2 text-danger'>
                                Price:{item_price}
                            </div>
                        </div>

                        {/* <div className="card-container w-10 "> */}
                        {/* <select className='m-1 w-50 rounded' style={{ cursor: 'pointer' }}>
                                {Array.from(Array(6), (e, i) => {
                                    return (

                                        <option >{i + 1}</option>

                                        //   <option key={i + 1} value={i + 1}>{i + 1}</option> */}

                        {/* )
                                })}
                            </select> */}

                        <hr />
                        <Link to={`itemdetails/${_id}`} className='btn bg-warning mb-3'>View details</Link>
                        <button className='btn bg-success' onClick={handleCart}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Card