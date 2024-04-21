import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API } from '../Config'
import { FaPenAlt, FaTrash } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'


export const ItemList = () => {
    const [item, setitem] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        axios.get(`${API}/itemlist`)
            .then(res => {
                setitem(res.data)
            }).catch(err => console.log(err))
    })
    const Delete = id => {
        const confirmed = window.confirm('Are you sur you want to delete this food item')
        if (confirmed) {
            axios.delete(`${API}/deleteitem/${id}`)
                .then(res => {
                    toast.success('item deleted')
                    setitem(item.filter(i => i._id !== id))
                }).catch(err => {
                    toast.error('failed tom delete')
                })
        }
    }

    const Edit = id => {
        navigate(`/admin/itemupdate/${id}`)


    }
    return (
        <>
            <ToastContainer theme='colored' position='top-center' />
            <div className='item-list'>
                <table className='table table-bordered table-striped'>
                    <thead>
                        <tr>
                            <th>Item Name</th>
                            <th>Price/plate</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            item && item.map((item, i) => (
                                <tr key={i}>
                                    <td>{item.item_name}</td>
                                    <td>{item.item_price}</td>
                                    <td>
                                        <div className='action'>
                                            <button className='btn btn-danger' onClick={() => Delete(item._id)}><FaTrash /></button>
                                            <button className='btn btn-success' onClick={() => Edit(item._id)}><FaPenAlt /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}
