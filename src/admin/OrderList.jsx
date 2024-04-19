
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
                        Accept: "application.json",
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
    }, [])
    return (
        <>
            <div className='order-container'>
                {
                    orderItem && orderItem.length > 0 ? (
                        orderItem.map((order, i) => (
                            <div className='order-card' key={order._id}>
                                <div className='order-info table table-bordered table-striped'>
                                    <div className='id'>Order_ID: {order._id}</div>
                                    <hr />
                                    {
                                        order.orderItem.length > 0 &&
                                        order.orderItem.map((orderitem, j) => (
                                            <>
                                                {
                                                    order.status === 'Pending' ? (
                                                        <div className='info-content' style={{ backgroundColor: 'red' }}>
                                                            <div className='order-id'>Food_ID:&nbsp;&nbsp;&nbsp;&nbsp;{orderitem._id}</div>
                                                            <div className='food-name'>Food_Item:&nbsp;&nbsp;&nbsp;&nbsp;{orderitem.item_name}</div>
                                                            <div className='quantity'>Quantity:&nbsp;&nbsp;&nbsp;&nbsp;{orderitem.quantity}</div>
                                                            <div className='location'>Location:&nbsp;&nbsp;&nbsp;&nbsp;{order.shippingAddress1}</div>
                                                            <div className='status'>Status:&nbsp;&nbsp;&nbsp;&nbsp;{order.status}</div>
                                                        </div>
                                                    ) : (
                                                        <div className='info-content' style={{ backgroundColor: 'green' }}>
                                                            <div className='id'>Food_ID:&nbsp;&nbsp;&nbsp;&nbsp;{orderitem._id}</div>
                                                            <div className='food-name'>Food_Item:&nbsp;&nbsp;&nbsp;&nbsp;{orderitem.item_name}</div>
                                                            <div className='quantity'>Quantity:&nbsp;&nbsp;&nbsp;&nbsp;{orderitem.quantity}</div>
                                                            <div className='location'>Location:&nbsp;&nbsp;&nbsp;&nbsp;{order.shippingAddress1}</div>
                                                            <div className='status'>Status:&nbsp;&nbsp;&nbsp;&nbsp;{order.status}</div>
                                                            <hr />
                                                        </div>
                                                    )

                                                }
                                            </>
                                        ))}

                                    <div className='price'>Total_Price:&nbsp;&nbsp;&nbsp;&nbsp;{order.totalPrice}</div>
                                    <div className='customer-name'>Customer_Name:&nbsp;&nbsp;&nbsp;&nbsp;{order.user.name}</div>
                                    <div className='id'>Customer_ID:&nbsp;&nbsp;&nbsp;&nbsp;{order.user._id}</div>
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
