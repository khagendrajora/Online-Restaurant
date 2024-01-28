import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API } from '../Config'


const UpdateItem = () => {
    const params = useParams()

    const id = params.itemId
    const [initialValues, setInitialValues] = useState({})
    const [item_name, setItemName] = useState('')
    const [item_category, setItemCategory] = useState('')
    const [item_description, setItemDescription] = useState('')
    const [item_price, setItemPrice] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)
    const [data, setData] = useState({})

    useEffect(() => {
        //const params = params.data_id  
        axios.get(`${API}itemdetails/${id}`)
            .then(res => {
                const data = res.data
                setInitialValues(data)
                setItemName(data.item_name)
                setItemCategory(data.item_category)
                setItemDescription(data.item_description)
                setItemPrice(data.item_price)
            })
            .catch(err => console.log(err))


    }, [id])
    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const formData = new FormData()
            formData.append('item_name', item_name)
            formData.append('item_price', item_price)
            formData.append('item_description', item_description)
            formData.append('item_category', item_category)

            const response = await axios.put(`${API}/itemupdate/${id}`, formData)
            setSuccess(true)
            setError("")
        }
        catch (err) {
            setError(err.response.data.err)
            setSuccess(false)
        }

    }
    return (
        <>
            <div className="container">

                <form className="shadow p-3">

                    <h3 className="text-ceter text-muted">Update Item Form</h3>
                    <div className="mb-2">
                        <label htmlFor="pname">Item Name:</label>
                        <input
                            type="text"
                            name="item_name"
                            id="title"
                            className="form-control"
                            onChange={e => setItemName(e.target.value)}
                            value={item_name}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="price">Item Price:</label>
                        <input
                            type="number"
                            name="item_price"
                            id="price"
                            className="form-control"
                            onChange={e => setItemPrice(e.target.value)}
                            value={item_price || initialValues.item_price}
                        />
                    </div>
                    {/* <div className="mb-2">
                                <label htmlFor="stock">Stock Quantity:</label>
                                <input
                                    type="number"
                                    name="stock"
                                    id="stock"
                                    className="form-control"
                                    onChange={e => setCountInStock(e.target.value)}
                                    value={countInStock}
                                />
                            </div> */}
                    <div className="mb-2">
                        <label htmlFor="description">Item Description:</label>
                        <textarea
                            name="item_description"
                            id="description"
                            className="form-control"
                            rows="10"
                            cols="30"
                            onChange={e => setItemDescription(e.target.value)}
                            value={item_description || initialValues.item_description}
                        ></textarea>
                    </div>
                    {/* <div className="mb-2">
                                <label htmlFor="image">Product Image:</label>
                                <input
                                    type="file"
                                    name="image"
                                    id="image"
                                    className="form-control"
                                    onChange={e => setProductImage(e.target.files[0])}
                                />
                            </div> */}
                    <div className="mb-2">
                        <label htmlFor="category">Category:</label>
                        <input
                            type="text"
                            name="item_category"
                            id="category"
                            className="form-control"
                            onChange={e => setItemCategory(e.target.value)}
                            value={item_category || initialValues.item_category}
                        />
                    </div>
                    <div className="mb-2">
                        <button className="btn btn-primary" onClick={handleSubmit}>
                            Update
                        </button>
                    </div>
                </form>
            </div>


        </>
    )
}

export default UpdateItem