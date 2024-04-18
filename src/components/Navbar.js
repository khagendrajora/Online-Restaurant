import React, { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { API } from '../Config'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faRightToBracket, faUserPlus, faBurger, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import axios from 'axios';



const Navbar = () => {
    const [showDropdown, setDropdown] = useState(false)
    const [showSearchBar, setSearchBar] = useState(false)
    const [filteredResult, setFilteredResult] = useState([])
    const [search, setSearch] = useState('')
    const [items, setitems] = useState([])
    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    useEffect(() => {
        const fetchItem = async () => {
            try {

                const res = await axios.get(`${API}/itemlist`, {

                }
                )
                setitems(res.data)
            } catch (error) {
                console.error("error in fetch", error)
            }
            if (search) {
                const filter = items.filter((item) =>
                    item.name.tolowerCase().includes(search.toLowerCase())
                )
                setFilteredResult(filter)
            }


        }
        fetchItem()
    }, [])


    const windowSize = useRef(window.innerWidth)
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
    const token = localStorage.getItem('authToken')
    const toogleDropdown = () => {
        setDropdown(!showDropdown)
    }
    const closeDropdown = () => {
        setDropdown(false)
    }
    const handleSearchBar = () => {
        setSearchBar(!showSearchBar)
    }

    return (
        <>

            <nav className='nav'>
                <ul className='fs-3 m-2'>
                    <Link to='/' className='text-black'><em>Happy Meal</em></Link>
                </ul>
                {windowSize.current > 576 &&
                    <>
                        {token &&
                            <ul className='col-5 d-flex justify-content-end'>
                                <Link to='/mycart'> <li><FontAwesomeIcon icon={faCartShopping} size='2x' className='me-4 text-black' /></li></Link>
                                <li>
                                    <FontAwesomeIcon icon={faUser} size='2x' className='me-3 text-black' onClick={toogleDropdown} />
                                    {showDropdown && (
                                        <ul className='dropdown' onClick={closeDropdown}>
                                            <li><Link to={`/userdetails/${loginId}`} className='text-white '>Profile</Link></li>
                                            <li><Link to='/login' onClick={handleLogOut} className='text-white'>Logout</Link ></li>
                                        </ul>
                                    )
                                    }
                                </li>
                            </ul>
                        }
                        {!token &&
                            <ul className='col-5 d-flex justify-content-end'>
                                <Link to='/login'> <li><FontAwesomeIcon icon={faRightToBracket} size='2x' className='me-5 text-black' /></li></Link>
                                <Link to='/signup'><li><FontAwesomeIcon icon={faUserPlus} size='2x' className='me-3 text-black' /></li> </Link>

                            </ul>
                        }
                    </>
                }
                {windowSize.current <= 576 &&
                    <>
                        <li className='mobile'>
                            <FontAwesomeIcon icon={faMagnifyingGlass} size='2x' className='me-3 m-2 text-black' onClick={handleSearchBar} />
                            {showSearchBar && (
                                <div className='input-wrapper'>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                    <input placeholder='Search' value={search} onChange={handleChange} />
                                </div>
                            )

                            }
                            <FontAwesomeIcon icon={faBurger} size='2x' className='me-3 m-2 text-black' onClick={toogleDropdown} />

                            {showDropdown && (
                                <div className='menuDropdown' onClick={closeDropdown}>
                                    <li><Link to={`/userdetails/${loginId}`} className='text-white p-3  '>Profile</Link></li>
                                    <li><Link to='/mycart' className='text-white p-3' >My Cart</Link></li>
                                    <li><Link to='/login' onClick={handleLogOut} className='text-white p-3'>Logout</Link ></li>
                                </div>
                            )

                            }
                        </li>
                    </>

                }
            </nav >
        </>
    )
}

export default Navbar