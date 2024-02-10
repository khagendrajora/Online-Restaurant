import React, { useState } from 'react'
// import { countries } from 'countries-list'
import { useNavigate } from 'react-router-dom'


export const CheckOut = () => {
    const navigate = useNavigate()
    // const countries = Object.values(countries)
    const shippingInfo = JSON.parse(localStorage.getItem('shippingInfo')) || {}

    const [shippingAddress, setShippingAddress] = useState(shippingInfo.shippingAddress || '')
    const [phone, setPhone] = useState(shippingInfo.phone || '')

    const SubmitOrder = (e) => {
        e.preventDefault()
        const shippingInfo = {
            shippingAddress,
            phone

        }
        localStorage.setItem('shippingInfo', JSON.stringify(shippingInfo))
        navigate('/confirmed')

    }
    return (
        <>
            <div className='container' style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <div style={{ width: '600px' }}>
                    <label htmlFor='address'>Shipping Address</label>
                    <input type='text' className='form-control' id='address' onChange={(e) => setShippingAddress(e.target.value)} value={shippingAddress} />
                </div>
                <div style={{ width: '600px' }}>
                    <label htmlFor='phone'>Phone</label>
                    <input type='number' className='form-control' id='phone' onChange={(e) => setPhone(e.target.value)} value={phone} />
                </div>
                <div>

                    <button className='btn btn-success' onClick={SubmitOrder}>Continue</button>
                </div>


            </div>


        </>
    )
}
