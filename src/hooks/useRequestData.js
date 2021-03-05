import { useState, useEffect } from "react"
import axios from "axios"
import { axiosConfig } from '../constants/RequestConfig'

export function useRequestData(url, initialState) {
    const [data, setData] = useState(initialState)

    useEffect(() => {
        axios
            .get(url, axiosConfig)
            .then((response) => {
                setData(response.data) 
                console.log(response.data) 
            })
            .catch((error) => {
                console.log(error.message)
            })
    }, [url])

    return data
}
