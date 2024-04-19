import React, { useEffect, useRef, useState } from 'react'
import Card from '../components/Card'

import { API } from '../Config'
import axios from 'axios'
import { Helmet } from 'react-helmet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Navbar from '../components/Navbar'


export const Home = () => {
  const windowSize = useRef(window.innerWidth)
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

  return (
    <>
      <Helmet>
        <title>Online Food Ordering App</title>
        <meta name="description" content="Order Foods online" />
      </Helmet>
      {windowSize.current > 576 &&
        <div className='input-wrapper'>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input placeholder='Search' value={search} onChange={handleChange} />
        </div>
      }
      <div>
        <div className='d-flex flex-row col-12 col-sm-12 flex-wrap justify-content-center'>
          {filteredResult && filteredResult.map((item, i) => {

            <div className="card m-3" style={{ "width": "18rem", "maxHeight": "460px" }}>
              <img className="card-img-top" src={item.img} alt="pp" />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <h3 className="card-title">{item.categoryName}</h3>
                <p className="card-text">{item.description}</p>
                <div className="container  ">
                  <select className='m-1 h-100 w-4 bg-success rounded'>
                    {Array.from(Array(6), (e, i) => {
                      return (
                        <option>{i + 1}</option>
                        //   <option key={i+1} value={i+1}>{i+1}</option>
                      )
                    })}
                  </select>
                  <div className='d-inline ms-2'>
                    Total Price
                  </div>
                </div>
              </div>
            </div>

          })}
          {
            items.map((items, i) => (
              <Card key={i} item={items}></Card>
            ))

          }


        </div>
        <hr />

      </div>
    </>
  )
}
