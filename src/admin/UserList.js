import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import { API } from '../Config'

const UserList = () => {
    const windowSize = useRef(window.innerWidth)
    const [filteredResult, setFilteredResult] = useState([])
    const [search, setSearch] = useState('')
    const [user, setUser] = useState([])


    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    useEffect(() => {
        axios.get(`${API}/userlist`)
            .then(res => {
                setUser(res.data)
            })
            .catch(err => {
                console.error(err)
            })
    })
    useEffect(() => {
        if (search) {
            const filter = user.filter((user) =>
                user.name.toLowerCase().includes(search.toLowerCase())
            )
            setFilteredResult(filter)
        } else {
            setFilteredResult([])
        }
    }, [search])



    return (
        <>
            <ToastContainer theme='colored' position='top-center' />

            {windowSize.current > 576 &&
                <div className='input-wrapper'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <input type='search' value={search} className='form-control' onChange={handleChange} placeholder='Search' />
                </div>
            }
            <div className='item-list'>
                <div className='data'>


                    <table className='table table-bordered table-striped'>
                        <thead>
                            <tr>
                                {/* <th>S.N</th> */}
                                <th>User Name</th>
                                <th>Email</th>
                                <th>Location</th>
                            </tr>
                        </thead>
                        <tbody>

                            {filteredResult && filteredResult.map((user, i) =>

                                <tr key={i}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.location}</td>
                                    {/* <td>
                                        <div className='action'>
                                            <button className='btn btn-danger' onClick={() => Delete(item._id)}><FaTrash /></button>
                                            <button className='btn btn-success' onClick={() => Edit(item._id)}><FaPenAlt /></button>
                                        </div>
                                    </td> */}
                                </tr>
                            )

                            }
                            {
                                user && user.map((user, i) => (
                                    <tr key={i}>
                                        {/* <td>{SN}</td> */}
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.location}</td>
                                        {/* <td>
                                        <div className='action'>
                                            <button className='btn btn-danger' onClick={() => Delete(item._id)}><FaTrash /></button>
                                            <button className='btn btn-success' onClick={() => Edit(item._id)}><FaPenAlt /></button>
                                        </div>
                                    </td> */}
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>

                </div>
            </div>


        </>
    )
}

export default UserList