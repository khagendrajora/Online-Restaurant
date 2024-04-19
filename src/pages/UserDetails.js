import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { API } from '../Config'




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
    }, [])


    return (
        <>

            <div className='user-detail'>
                <div className='user-image'>
                    <img src='' alt='userimage' />

                </div>
                <div className='user-info'>
                    <div className='user-name mb-3'><span className='user-titles'>Name:</span>{user.name} </div>
                    <div className='user-email mb-3'><span className='user-titles'>Email:</span>{user.email}</div>
                    <div className='user-location mb-5'><span className='user-titles'>Location:</span>{user.location}</div>
                    <div className='btn d-flex'>
                        <Link class="btn bg-success text-white me-2" to="#">Edit</Link>
                        <Link class="btn bg-danger text-white me-2" to="#">Delete</Link>
                    </div>
                </div>
            </div>

        </>
    )
}
