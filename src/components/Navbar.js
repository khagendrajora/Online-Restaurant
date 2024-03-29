import React from 'react'
import { Link } from 'react-router-dom'
import { API } from '../Config'


const Navbar = () => {
    // const navigate = useNavigate()
    //const params = useParams()
    const handleLogOut = () => {
        localStorage.removeItem('authToken')
        localStorage.removeItem('logedinUser')
        localStorage.removeItem('logedinUserEmail')
        return fetch(`${API}/signout`, {
            method: 'POST'
        })
            .then(res => {
                console.log('signout', res)
            })
            .catch(err => console.log(err))


    }
    //const authToken = localStorage.getItem('authToken');
    const loginId = localStorage.getItem('logedinUser')

    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-dark">
                <Link class="navbar-brand text-white  fs-2 ps-4" to="#"><em>Foody</em></Link>
                <button class="navbar-toggler bg-light" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav me-auto ">
                        <li class="nav-item ">
                            <Link class="nav-link text-white" to="/">Home <span class="sr-only"></span></Link>
                        </li>

                        <li class="nav-item">
                            <Link class="nav-link text-white" to="#">Pricing</Link>
                        </li>

                        {(localStorage.getItem("authToken")) ?
                            <li class="nav-item ">
                                <Link class="nav-link text-white" to="#">My Orders <span class="sr-only"></span></Link>
                            </li>
                            : ""}
                    </ul>

                    {(!localStorage.getItem('authToken')) ?

                        <div className='me-4 d-flex'>

                            <Link class="btn bg-primary text-white me-2" to="/login">Login</Link>

                            <Link class="btn bg-primary text-white" to="/signup">Signup</Link>

                        </div>
                        : <div className='me-4 d-flex'>
                            <Link class="btn bg-primary text-white me-2" to="mycart">MyCart</Link>
                            <Link class="btn bg-primary text-white" to={`admin/itemupload`}>Upload Item</Link>
                            <Link class="btn bg-primary text-white" to={`/userdetails/${loginId}`}>Profile</Link>
                            <Link class="btn bg-primary text-white" onClick={handleLogOut} to="/">LogOut</Link>

                        </div>
                    }
                </div>

            </nav>
        </>
    )
}

export default Navbar