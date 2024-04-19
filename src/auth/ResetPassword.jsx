import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API } from '../Config'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { formik, useFormik } from 'formik'

export const ResetPassword = () => {
    const params = useParams()
    // const [password, setPassword] = useState('')
    // const [error, setError] = useState('')
    // const [success, setSuccess] = useState(false)
    const token = params.token
    const handleSubmit = async (values) => {
        try {
            await axios.put(`${API}/resetpassword/${token}`, { password: values.password })
        }
        catch (error) {
            console.error(error)
        }
    }
    const formik = useFormik({
        initialValues: {
            password: '', // Set initial values for your form fields
        },
        onSubmit: handleSubmit,
    });

    return (
        <>
            <Navbar />
            <form onSubmit={formik.handleSubmit}>

                <div className='container'>
                    <h2>New Password</h2>
                    <div className='mb-2'>
                        <label htmlFor='password'>New Password</label>
                        <input type='password' className="control-label" name='password' id='password'
                            value={formik.password} onChange={formik.handleChange}
                        />
                    </div>
                    <div className='mb-2'>
                        <button type='submit' className='btn byn-primary'>Send</button>
                    </div>
                </div>
            </form>



        </>
    )
}
