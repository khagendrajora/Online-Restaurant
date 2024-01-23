import { useFormik } from 'formik'
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { API } from '../Config'



export const ForgetPasswort = () => {
    // const [email, setEmail] = useState('')
    // const [error, setError] = useState('')
    // const [success, setSuccess] = useState(false)
    const handleSubmit = async (email) => {
        return await fetch(`${API}/forgetpwd`, {
            method: 'POST',
            headers: {
                Accept: "application/json",
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email })

        })

        // .then(res => {
        //     return res.json()
        // })
        // .catch(err => console.log(err))

    }
    const formik = useFormik({
        onSubmit: (values) => {
            //  values.preventDefault()
            handleSubmit(values)
        },
    })

    return (
        <>
            <div className='form-container'>
                <form onSubmit={formik.handleSubmit}>
                    <h2>Forget Password</h2>
                    <div className='mb-2'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' name='email' id='Email'
                            value={formik.email} onChange={formik.handleChange} />
                    </div>
                    <div className='mb-2'>
                        <button type='submit' className='btn byn-primary'>Send Password reset link</button>
                    </div>
                </form>
            </div>


        </>
    )
}
