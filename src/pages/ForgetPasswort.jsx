import { useFormik } from 'formik'
import React from 'react'
import { API } from '../Config'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



export const ForgetPasswort = () => {
    const navigate = useNavigate()
    const handleSubmit = async (values) => {
        try {
            await axios.post(`${API}/forgetpwd`, { email: values.email })
            navigate('/emailcheckmessage')
        } catch (error) {
            console.error(error)
        }
        // navigate('/emailcheckmessage')
    }

    const formik = useFormik({
        initialValues: {
            email: '', // Set initial values for your form fields
        },
        onSubmit: handleSubmit,

    });


    return (
        <>
            <div className='form-container'>
                <form onSubmit={formik.handleSubmit}>
                    <h2>Forget Password</h2>
                    <div className='mb-2'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' className="control-label" name='email' id='Email'
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
