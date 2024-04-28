import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API } from '../Config'
import axios from 'axios'
import { useFormik } from 'formik'

export const ResetPassword = () => {
    const params = useParams()
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

            <form onSubmit={formik.handleSubmit}>

                <div className='container d-flex justify-content-center'>
                    <h2>New Password</h2>
                    <div className='mb-2'>
                        <label htmlFor='password'>New Password&nbsp;&nbsp;</label>
                        <input type='password' className="control-label" name='password' id='password'
                            value={formik.password} onChange={formik.handleChange}
                        />
                    </div>
                    <div className='mb-2'>
                        <button type='submit' className='btn btn-success'>Send</button>
                    </div>
                </div>
            </form>



        </>
    )
}
