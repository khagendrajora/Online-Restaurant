
import React, { useEffect, useState } from 'react'
import { API } from '../Config'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'

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

    const handelDeliver = async (id) => {
        try {
            await axios.put(`${API}/updatestatus/${id}`, { status: "delivered" })
        } catch (error) {
            console.error(error)
        }

    }
    const handelDelete = async (id) => {
        try {
            await axios.delete(`${API}/deleteorder/${id}`)
                .then(res => {
                    toast.success('Order Deleted')
                    setOrderItem(orderItem.filter(i => i._id !== id))

                }).catch(err => {
                    toast.error("failed to delete")
                })

        } catch (error) {
            console.error(error)
        }
    }
    return (
        <>
            <ToastContainer theme='colored' color='green' position='top-center' />
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
                                    <div className="order-btn d-flex">
                                        <button className='btn btn-danger' onClick={() => handelDeliver(order._id)}>Delivered</button>
                                        <button className='btn btn-primary' onClick={() => handelDelete(order._id)}>Delete</button>
                                    </div>
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
