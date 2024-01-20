import React from 'react'
import Navbar from '../components/Navbar'
import { useFormik } from 'formik'
import { API } from '../Config'
import { ToastContainer, toast } from 'react-toastify'

const ItemUpload = () => {
    const handleSubmit = async (values) => {
        const response = await fetch(`${API}/itemupload`, {
            method: 'POST',
            headers: {
                Accept: "application.json",
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })
        if (!response.ok) {
            toast.error('Details invalid')

        }
        if (response.ok) {
            toast.success('Item Uploaded ')

        }

    }
    const formik = useFormik({
        initialValues: {
            item_name: '',
            item_category: '',
            Item_description: '',
            item_price: '',
            // item_img: ''

        },
        onSubmit: (values, { setSubmitting }) => {
            setSubmitting(true)
            handleSubmit(values)


        },
        validate: values => {
            let errors = {}
            if (!values.item_name) {
                errors.item_name = "Required"
            }
            if (!values.item_category) {
                errors.item_category = "Required"
            }

            if (!values.item_description) {
                errors.item_description = "Required"
            }

            if (!values.item_price) {
                errors.item_price = "Required"
            }
            return errors

        },
    }
    )




    return (
        <>
            <Navbar />

            <ToastContainer theme='colored' position='top-right' />

            <form onSubmit={formik.handleSubmit}  >

                <div className="form-group">
                    <label htmlfor="title">Item Name</label>
                    <input type="text" className="form-control" name='item_name' id="title" aria-describedby="emailHelp" placeholder="Name of the item"
                        onChange={formik.handleChange}
                        value={formik.name} />
                    {formik.touched.item_name && formik.errors.item_name ? <div>{formik.errors.item_name}</div> : null}

                </div>
                <div className="form-group">
                    <label htmlfor="Category">Item Category</label>
                    <input type="text" name='item_category' className="form-control" id="category" placeholder="Item Category"
                        onChange={formik.handleChange}
                        value={formik.item_category} />
                    {formik.touched.item_category && formik.errors.item_category ? <div>{formik.errors.item_category}</div> : null}

                </div>

                <div className="form-group">
                    <label htmlfor="Description">Item Description</label>
                    <input type="text" name='item_description' className="form-control" id="description" placeholder="Item Description"
                        onChange={formik.handleChange}
                        value={formik.item_description} />
                    {formik.touched.item_description && formik.errors.item_description ? <div>{formik.errors.item_description}</div> : null}

                </div>


                <div className="form-group">
                    <label htmlfor="exampleInputPassword1">Item Price</label>
                    <input type="number" name='item_price' className="form-control" id="price" placeholder="Item Price"
                        onChange={formik.handleChange}
                        value={formik.item_price} />
                    {formik.touched.item_price && formik.errors.item_price ? <div>{formik.errors.item_price}</div> : null}

                </div>
                {/* <div className="form-group">
                    <label htmlfor="file">Image</label>
                    <input type="file" name='image' className="form-control" id="image"
                        onChange={formik.handleChange}
                        value={formik.image} />
                     {formik.touched.item_price && formik.errors.item_price ? <div>{formik.errors.item_price}</div> : null} 

                </div> */}

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>


        </>
    )
}

export default ItemUpload