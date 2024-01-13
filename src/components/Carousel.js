import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Carousel = () => {

    const [filteredResult, setFilteredResult] = useState([])
    const [searchTerm, setSearch] = useState('')
    const [fetchedData, setFetchedData] = useState([])


    useEffect(() => {
        setFetchedData([global.sample]);
    //     console.log(global.sample)
    }, []);

    const handleChange = async (value) => {
        setSearch(value)

    }
    useEffect(() => {
        if (searchTerm && fetchedData.length>0) {
            const filtered = fetchedData.filter((data) =>
                data.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            setFilteredResult(filtered)
        } else {
            setFilteredResult('')
        }

    }, [fetchedData, searchTerm])

    return (
        <>
            <div>
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" style={{ height:'auto',  }}>
                    {/* <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol> */}
                    <div className="carousel-inner" id='carousel'>
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="https://source.unsplash.com/random/300×300/?burger" style={{ height:'500px',filter: "brightness(30%)",objectFit: "fill" }} alt="First slide" />
                            <div className="carousel-caption d-flex d-md-block" style={{ zIndex: "10" }}>
                                <form className="d-flex">
                                    <input className="form-control" type="search" placeholder="Search" aria-label="Search"
                                        value={searchTerm}
                                        onChange={(e) => handleChange(e.target.value)} />
                                    {/* <button className="btn btn-outline-success bg-success text-white ms-2 " type="submit">Search</button> */}
                                </form>
                                <h5>...</h5>
                                <p>...</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://source.unsplash.com/random/300×300/?Tea" style={{ height:'500px',filter: "brightness(30%)",objectFit: "contain" }} alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://source.unsplash.com/random/300×300/?pizza" style={{height:'500px', filter: "brightness(30%)",objectFit: "fill" }} alt="Third slide" />
                        </div>
                    </div>
                    <Link className="carousel-control-prev" to="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </Link>
                    <Link className="carousel-control-next" to="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </Link>
                </div>
                {filteredResult && filteredResult.map((item) => {
                    return (

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
                    )

                })}
            </div>
        </>
    )
}
