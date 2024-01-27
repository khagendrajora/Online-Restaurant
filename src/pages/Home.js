import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import { Carousel } from '../components/Carousel'
import { API } from '../Config'
import axios from 'axios'


export const Home = () => {
  // const [foodItems, setFoodItems] = useState([])
  // const [foodCategory, setFoodCategory] = useState([])
  // const loadData = async () => {
  //   let response = await fetch('http://localhost:5000/api/displaydata', {
  //     method: 'POST',
  //     headers: {
  //       Accept: "application.json",
  //       'Content-Type': 'application/json'
  //     },
  //   })
  //   response = await response.json()
  //   console.log(response[0], response[1])
  //   setFoodItems(response[0])
  //   setFoodCategory(response[1])

  // }

  const [items, setitems] = useState([])
  useEffect(() => {
    const fetchItem = async () => {
      try {

        const res = await axios.get(`${API}/itemlist`, {
          method: "POST",
          headers: {
            Accept: "application.json",
            'Content-Type': 'application/json'
          }
        }
        )
        setitems(res.data)
      } catch (error) {
        console.error("error in fetch", error)
      }
      //res = await res.json()

    }
    fetchItem()
  }, []
  )
  // loadData()



  return (
    <>

      <Carousel />
      {/* {
          foodCategory && foodCategory.map((data) => {
            return (
              <div>
                <div>{data.CategoryName}</div>
                <div className='d-flex flex-row col-12 col-sm-12 flex-wrap justify-content-center'>
                  {
                    foodItems && foodItems.filter((item) => item.CategoryName === data.CategoryName)
                      .map(filterdata => {
                        return (
                          <Card key={filterdata._id} item={filterdata}></Card>
                        )
                      })
                  }
                </div>
                <hr />
              </div>
            )
          })

        } */}
      <div>
        <div className='d-flex flex-row col-12 col-sm-12 flex-wrap justify-content-center'>
          {
            // Array.isArray(items) &&
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
