import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API } from '../Config'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navbar'

export const ItemDetails = () => {
  const params = useParams()
  const [item, setItem] = useState({})
  useEffect(() => {
    const id = params.item_id
    axios.get(`${API}/itemdetails/${id}`)
      .then(res => setItem(res.data))
      .catch(err => console.log(err))
  }, [params.item_id])

  const addToCart = () => {

    const authToken = localStorage.getItem('authToken')
    const userEmail = localStorage.getItem('logedinUserEmail')
    const userEmailId = localStorage.getItem('logedinUser')

    // if (userEmail) {
    //   const userEmail=

    // }
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
      <Navbar />
      <ToastContainer theme='colored' position='top-right' />
      <div className="container d-flex md-flex-column">
        <div className="  ">
          <img src="https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMGZyaWVkJTIwcmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt={item.item_name} />
        </div>
        <div className="item-info">
          <h2>{item.item_name}</h2><hr />
          <h2>Price Rs.{item.item_price} <span className='ms-4' style={{ "fontStyle": "italic" }}>/ plate</span></h2><hr />
          <h3>Category:{item.item_category}</h3><hr />
          <p>{item.item_description}</p><hr />
          <div className='my-2 d-flex justify-content-evenly'>
            <button className='btn btn-warning' onClick={addToCart}>Add to Cart</button>
            <button className='btn btn-success '>Buy</button>
          </div>
        </div>
      </div>
    </>
  )
}
