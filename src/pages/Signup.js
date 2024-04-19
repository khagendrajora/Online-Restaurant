import React from 'react'
import { useFormik, } from 'formik'
import { Link } from 'react-router-dom'



export const Signup = () => {

    const handleSubmit = async (values) => {
        const response = await fetch('http://localhost:5000/api/createUser', {
            method: 'POST',
            headers: {
                Accept: "application.json",
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })
        console.log(values)
        if (!response.ok) {
            alert('invalid')
        }
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            location: '',
            email: '',
            password: '',
            //image: ''
        },
        onSubmit: (values, { resetForm }) => {
            handleSubmit(values)
            resetForm(
                formik.initialValues
            )
        },

        validate: values => {
            let errors = {}
            if (!values.name) {
                errors.name = "Required"
            }
            if (!values.location) {
                errors.location = "Required"
            }

            if (!values.email) {
                errors.email = "Required"
            }

            if (!values.password) {
                errors.password = "Required"
            }

            return errors

        },
        enableReinitialize: true,
    })
    return (
        <>
            <div className='form-container' >
                <form className='htmlForm-horizontal' onSubmit={formik.handleSubmit}>
                    <div className='form-body'>
                        <div className="htmlForm-group ">
                            <label htmlFor="name">Name:</label>
                            <input type="text" className="control-label" name='name' placeholder="Enter name"
                                onChange={formik.handleChange}
                                value={formik.name} />
                            {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}

                        </div>
                        <div className="htmlForm-group ">
                            <label htmlFor="location">Location</label>
                            <input type="text" className="control-label" name='location' id="location" placeholder="location"
                                onChange={formik.handleChange}
                                value={formik.location} />
                            {formik.touched.location && formik.errors.location ? <div>{formik.errors.location}</div> : null}
                        </div>
                        <div className="htmlForm-group">
                            <label htmlFor="email">Email address</label>
                            <input type="email" className="control-label" name='email' id="Email" aria-describedby="emailHelp" placeholder="Enter email"
                                onChange={formik.handleChange}
                                value={formik.email} />
                            {formik.touched.name && formik.errors.email ? <div>{formik.errors.email}</div> : null}

                        </div>
                        <div className="htmlForm-group ">
                            <label htmlFor="password">Password</label>
                            <input type="text" className="control-label" name='password' id="Password" placeholder="Password"
                                onChange={formik.handleChange}
                                value={formik.password} />
                            {formik.touched.name && formik.errors.password ? <div>{formik.errors.password}</div> : null}
                        </div>
                        {/* <div className="htmlForm-group ">
                            <label htmlFor="image">Image</label>
                            <input type="file" className="control-label" name='image' id="image"
                                onChange={formik.handleChange}
                                value={formik.image} />

                        </div> */}

                        <button type="submit" className="m-3 btn btn-success">Sign Up</button>
                        <Link to='/login' className='m-3 btn btn-danger'>Login</Link>
                    </div>

                </form>

            </div>

        </>
    )
}
