import React from 'react'
import { Link } from 'react-router-dom';


const Card = (props) => {
    // const { id, name, description, CategoryName } = props.item
    if (!props.item) {
        return <div>Loading...</div>; // Return a loading state or an error message if props.items is undefined
    }
    const { _id, item_name, item_category, item_description, item_price, } = props.item
    // const navigateTo=useNavigate()
    // const navigate=()=>{
    //     navigateTo(`/itemdetails/${id}`)
    // }s
    return (
        <>
            {/* <div className='d-flex flex-row'>
                {Array.from(Array(6), (e, i) => {
                    return ( */}
            {/* <option>{i+1}</option>
                          <option key={i+1} value={i+1}>{i+1}</option> */}
            {/* <Link to='/itemdetails'> */}

            {/* <div className="card m-3" style={{ "width": "18rem", "maxHeight": "460px" }} >
                <img className="card-img-top" src={img} alt="pp" style={{ height: "120px", objectFit: 'fill', cursor: 'pointer' }} />
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <h4 className="card-title">{CategoryName}</h4>

                    <p className="card-text">{description}</p>
                    <div className="card-container w-10 ">
                        <select className='m-1 w-50 rounded' style={{ cursor: 'pointer' }}>
                            {Array.from(Array(6), (e, i) => {
                                return (

                                    <option >{i + 1}</option> */}

            {/* <option key={i + 1} value={i + 1}>{i + 1}</option> 

                                )
                            })}
                        </select>
                        <div className='d-inline ms-2'>
                            Total Price
                        </div>
                        <hr />
                        <Link to={`/itemdetail/${id}`} className='btn bg-success'>view details</Link>
                    </div>

                </div>
            </div> */}





            <div className="card m-3" style={{ "width": "18rem", "maxHeight": "460px" }} >
                <img className="card-img-top" src='https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMGZyaWVkJTIwcmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt="pp" style={{ height: "120px", objectFit: 'fill', cursor: 'pointer' }} />
                <div className="card-body">
                    <h2 className="card-title">{item_name}</h2>
                    <h4 className="card-title">{item_category}</h4>

                    <p className="card-text">{item_description}</p>
                    <div className="card-container w-10 ">
                        <select className='m-1 w-50 rounded' style={{ cursor: 'pointer' }}>
                            {Array.from(Array(6), (e, i) => {
                                return (

                                    <option >{i + 1}</option>

                                    //   <option key={i + 1} value={i + 1}>{i + 1}</option> */}

                                )
                            })}
                        </select>
                        <div className='d-inline ms-2'>
                            Price:{item_price}
                        </div>
                        <hr />
                        <Link to={`itemdetails/${_id}`} className='btn bg-success'>View details</Link>
                    </div>

                </div>
            </div>

        </>

    )
}

export default Card