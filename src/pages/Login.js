import { useFormik } from 'formik'
import React from 'react'
import { Link, useNavigate, } from 'react-router-dom'
import Navbar from '../components/Navbar'

export const Login = () => {
  const navigate = useNavigate()
  const handleSubmit = async (values) => {
    const response = await fetch('http://localhost:5000/api/login', {
      method: 'POST',
      headers: {
        Accept: "application.json",
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values)
    })

    if (!response.ok) {
      alert("invalid")

    } if (response.ok) {
      const data = await response.json()
      localStorage.setItem("authToken", data.authToken)
      localStorage.setItem("logedinUser", values.email)

      console.log(localStorage.getItem("authToken"))
      console.log(localStorage.getItem("logedinUser"))

      navigate('/')
    }


  }
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: (values) => {
      handleSubmit(values)
    },
  })
  return (
    <>
      <Navbar />
      <div className='form-container' >
        <form onSubmit={formik.handleSubmit}>
          <div className='form-body'>


            <div className="htmlForm-group">
              <label htmlFor="exampleInputEmail1">Email address:</label>
              <input type="email" className="control-label" name='email' id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                onChange={formik.handleChange}
                value={formik.email} />
              {formik.touched.name && formik.errors.email ? <div>{formik.errors.email}</div> : null}
            </div>
            <div className="htmlForm-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password" className="control-label" name='password' id="exampleInputPassword1" placeholder="Password"
                onChange={formik.handleChange}
                value={formik.password} />
              {formik.touched.name && formik.errors.password ? <div>{formik.errors.password}</div> : null}
            </div>
            <div>
              <div className='d-flex justify-content-between '>
                <button type="submit" className="m-3 btn btn-success">Login</button>
                <Link to="#" className='mt-4'>Forget Password</Link>
              </div>
              <p>Don`t have an account?<Link to='/signup' className='m-3  btn-danger'>Signup</Link></p>
            </div>
          </div>
        </form>
      </div>


    </>
  )
}

