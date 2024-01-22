import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API } from '../Config'
import Navbar from '../components/Navbar'

export const ResetPassword = () => {
    const params = useParams()
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)
    const handleSubmit = async (password) => {
        const token = params.token
        return await fetch(`${API}/resetpassword/${token}`, {
            method: 'PUT',
            headers: {
                Accept: "application/json",
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ password })

        })
    }

    return (
        <>
            <Navbar />
            <form >

                <div className='container'>
                    <h2>New Password</h2>
                    <div className='mb-2'>
                        <label htmlFor='password'>New Password</label>
                        <input type='password' name='password' id='password'
                            value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <button className='btn byn-primary' onClick={handleSubmit}>Send</button>
                    </div>
                </div>
            </form>



        </>
    )
}
