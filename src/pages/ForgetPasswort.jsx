import { useFormik } from 'formik'
import React from 'react'
import { API } from '../Config'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'



export const ForgetPasswort = () => {
    const navigate = useNavigate()
    const handleSubmit = async (values) => {
        try {
            await axios.post(`${API}/forgetpwd`, { email: values.email })
                .then(() => {
                    navigate('/emailcheckmessage')
                })


            // .then((res => {
            //     if (res) {
            //         toast.success('Reset Link is send in provided email')
            //     } else {
            //         toast.error("failed")
            //     }
            // })).catch(err => {
            //     toast.error('Failed', err)
            // })

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
            <ToastContainer theme='colored' position='top-center' />
            <div className='form-container'>
                <form onSubmit={formik.handleSubmit}>
                    <h2>Forget Password</h2>
                    <div className='mb-2'>
                        <label htmlFor='email'>Email&nbsp;&nbsp;</label>
                        <input type='email' className="control-label" name='email' id='Email'
                            value={formik.email} onChange={formik.handleChange} />
                    </div>
                    <div className='mb-2'>
                        <button type='submit' className='btn btn-success'>Send Password reset link</button>
                    </div>
                </form>
            </div>

        </>
    )
}
