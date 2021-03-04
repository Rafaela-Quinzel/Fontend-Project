import axios from 'axios'
import { BASE_URL, axiosConfig } from '../constants/RequestConfig'
import { goToHome } from '../routes/coordinator'


export const addMusic = (body, history) => {
    axios.post(`${BASE_URL}/music/create`, body, axiosConfig)
        .then(response => {
            alert('Música inserida com sucesso!')
            goToHome(history)
        }).catch(error => {
            console.log(error.message)
        })
}