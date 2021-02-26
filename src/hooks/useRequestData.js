import { useState, useEffect } from "react"
import axios from "axios"
import { axiosConfig } from '../constants/RequestConfig'

export function useRequestData(url, initialState) {
    const [data, setData] = useState(initialState)

    useEffect(() => {
        // const token = window.localStorage.getItem("token")

        axios
            .get(url, axiosConfig)
            .then((response) => {
                setData(response.data) 
                console.log(response) 
            })
            .catch((error) => {
                console.log(error.message.data)
            })
    }, [url])

    return data
}
