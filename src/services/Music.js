import axios from 'axios'
import { BASE_URL } from '../constants/RequestConfig'
import { goToHome } from '../routes/coordinator'


export const addMusic = (body, history) => {
    axios.post(`${BASE_URL}/music/create`, body)
        .then(response => {
            window.localStorage.setItem('token', response.data.token)
            alert('Música inserida com sucesso!')
            goToHome(history)
        }).catch(error => {
            console.log(error.message)
        })
}