
import React from 'react'
import { useNavigate } from 'react-router-dom'


export const Admin = () => {
    const navigate = useNavigate()
    const handleAdd = () => {
        navigate('/admin/itemupload')

    }
    const handleOrder = () => {
        navigate('/admin/orderlist')
    }
    const handleDelete = () => {
        navigate('/admin/itemlist')
    }
    return (
        <>

            <div className='admin-container'>
                <div className='sub-container' onClick={handleOrder} style={{ backgroundColor: 'yellow' }}>
                    <div className='content'>
                        Order List
                    </div>
                </div>

                <div className='sub-container' onClick={handleAdd} style={{ backgroundColor: 'green' }}>
                    <div className='content'>
                        Add Food Item
                    </div>
                </div>

                <div className='sub-container' onClick={handleDelete} style={{ backgroundColor: 'red' }}>
                    <div className='content'>
                        Food Items List
                    </div>
                </div>

                <div className='sub-container' style={{ backgroundColor: 'pink' }}>
                    <div className='content'>
                        Update Food Item
                    </div>
                </div>

                <div className='sub-container' style={{ backgroundColor: 'whitesmoke' }}>
                    <div className='content'>
                        Update Order Status
                    </div>
                </div>

            </div>


        </>
    )
}
