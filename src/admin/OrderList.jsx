
import React, { useEffect, useState } from 'react'
import { API } from '../Config'
import axios from 'axios'

export const OrderList = () => {
    const [orderItem, setOrderItem] = useState([])

    useEffect(() => {
        const fetchOrder = async () => {
            try {
                const response = await axios.get(`${API}/orderlist`, {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        'Content-Type': 'application/json'
                    }
                }
                )
                setOrderItem(response.data)

            }
            catch (error) {
                console.log('error in fetching orfder', error)
            }
        }
        fetchOrder()
    })
    return (
        <>
            <div className='order-container'>
                {
                    orderItem && orderItem.length > 0 ? (
                        orderItem.map((order, i) => (

                            <div className='order-card' key={order._id}>

                                <div className='order-info'>

                                    <div className='id'><span>Order_ID</span>{order._id}</div>
                                    <hr />

                                    {
                                        order.orderItem.length > 0 &&
                                        order.orderItem.map((orderitem, j) => (
                                            <>
                                                {
                                                    order.status === 'Pending' ? (
                                                        <div className='info-content' style={{ backgroundColor: 'red' }}>
                                                            <div className='id'><span>Food_ID:</span>{orderitem._id}</div>
                                                            <div className='food-name'><span>Food_Item:</span>{orderitem.item.item_name}</div>
                                                            <div className='quantity'><span>Quantity:</span>{orderitem.quantity}</div>
                                                            <div className='location'><span>Location:</span>{order.shippingAddress1}</div>
                                                            <div className='status'><span>Status:</span>{order.status}</div>
                                                        </div>
                                                    ) : (
                                                        <div className='info-content' style={{ backgroundColor: 'green' }}>
                                                            <div className='id'><span>Food_ID:</span>{orderitem._id}</div>
                                                            <div className='food-name'><span>Food_Item:</span>{orderitem.item.item_name}</div>
                                                            <div className='quantity'><span>Quantity:</span>{orderitem.quantity}</div>
                                                            <div className='location'><span>Location:</span>{order.shippingAddress1}</div>
                                                            <div className='status'><span>Status:</span>{order.status}</div>
                                                            <hr />
                                                        </div>
                                                    )

                                                }
                                            </>
                                        ))}

                                    <div className='price'><span>Total_Price:</span>{order.totalPrice}</div>
                                    <div className='customer-name'><span>Customer_Name:</span>{order.user.name}</div>
                                    <div className='id'><span>Customer_ID:</span>{order.user._id}</div>
                                </div>
                            </div>
                        ))

                    ) : (
                        <p>No order available</p>
                    )
                }

            </div >
        </>
    )
}
