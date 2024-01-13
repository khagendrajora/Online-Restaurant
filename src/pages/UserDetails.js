import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { API } from '../Config'
import Navbar from '../components/Navbar'



export const UserDetails = () => {
    const params = useParams()
    const [user, setUser] = useState({})
    useEffect(() => {
        const id = params.user_id
        axios.get(`${API}/userdetails/${id}`, {
            method: 'POST',
            headers: {
                Accept: "application.json",
                'Content-Type': 'application/json'
            },

        })
            .then(res => setUser(res.data))
            .catch(err => console.log(err))
    }, [params.user_id])


    return (
        <>
        <Navbar/>
            <div className='profile'  >
                <div className='body'>
                    <div className='img'>
                        <img src='' alt='userimage' style={{"height":"200px"}} />
                        <div className='btn d-flex'>

                        <Link class="btn bg-success text-white me-2" to="#">Edit</Link>
                        <Link class="btn bg-danger text-white me-2" to="#">Delete</Link>
                        </div>

                    </div>
                    <div className='info'>
                        <div><b>Name:</b>    {user.name} </div><hr/>
                        <div><b>Email:</b> {user.email}</div><hr/>
                        <div><b>Location:</b>   :{user.location}</div><hr/>
                    </div>
                    
                </div>
               



            </div>
          
        </>
    )
}
