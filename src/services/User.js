import axios from 'axios'
import { BASE_URL } from '../constants/RequestConfig'
import { goToHomePage } from '../routes/coordinator'



export const login = (body, history) => {

    axios.post(`${BASE_URL}/user/login`, body).then((response) => {
        localStorage.setItem("token", response.data.token)
        goToHomePage(history)

    }).catch(error => {
        alert('E-mail ou senha inválidos!')
        console.log(error.message)
    })
}


export const signUp = (body, history) => {
    axios.post(`${BASE_URL}/user/signup`, body)
        .then(response => {
            window.localStorage.setItem('token', response.data.token)
            goToHomePage(history)
        }).catch(error => {
            console.log(error.message)
        })
}

