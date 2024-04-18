import React from 'react'
import { Link } from 'react-router-dom';


const Card = (props) => {
    // const { id, name, description, CategoryName } = props.item
    if (!props.item) {
        return <div>Loading...</div>; // Return a loading state or an error message if props.items is undefined
    }
    const { _id, item_name, item_category, item_description, item_price, } = props.item

    return (
        <>
            <div className='card-container'>
                <div className="card m-3" >
                    <img className="card-img-top" src='https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMGZyaWVkJTIwcmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt="pp" style={{ height: "120px", objectFit: 'fill', cursor: 'pointer' }} />
                    <div className="card-body">
                        <div className='card-name'>
                            <div className="card-title">{item_name}</div>
                            <div className="card-category">Category:-   {item_category}</div>
                        </div>

                        <div className='card-description'>
                            <div className="card-text">{item_description}</div>
                            <div className='d-inline ms-2 text-danger'>
                                Price:{item_price}
                            </div>
                        </div>

                        {/* <div className="card-container w-10 "> */}
                        {/* <select className='m-1 w-50 rounded' style={{ cursor: 'pointer' }}>
                                {Array.from(Array(6), (e, i) => {
                                    return (

                                        <option >{i + 1}</option>

                                        //   <option key={i + 1} value={i + 1}>{i + 1}</option> */}

                        {/* )
                                })}
                            </select> */}

                        <hr />
                        <Link to={`itemdetails/${_id}`} className='btn bg-warning mb-3'>View details</Link>
                        <Link to='' className='btn bg-success'>Add to Cart</Link>
                    </div>

                </div>
            </div>

        </>

    )
}

export default Card