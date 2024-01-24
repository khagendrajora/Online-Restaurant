import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { API } from '../Config'


const UpdateItem = () => {
    const params = useParams()
    const [data, setData] = useState({})

    useEffect(() => {
        const id = params.data_id
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