import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API } from '../Config'


const UpdateItem = () => {
    const params = useParams()
    const [categories, setCategory] = useState([])
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
        axios.get(`${API}itemupdate/${id}`)
            .then(res => setData(res.data))
            .catch(err => console.log(err))

    }, [params.data_id])
    return (
        <>


        </>
    )
}

export default UpdateItem