import axios from 'axios'
import { BASE_URL } from '../constants/RequestConfig'
import { goToHome } from '../routes/coordinator'


export const login = (body, history) => {
    axios.post(`${BASE_URL}/user/login`, body)
        .then((response) => {
            localStorage.setItem("accessToken", response.data.token.accessToken)
            localStorage.setItem("username", response.data.token.username)
            alert(`Olá ${response.data.token.username}! Bem vindo(a)!`)
            goToHome(history)
        
        }).catch(error => {
            alert('E-mail ou senha inválidos!')
            console.log(error.message)
        })
}


export const signUp = (body, history) => {
    axios.post(`${BASE_URL}/user/signup`, body)
        .then(response => {
            window.localStorage.setItem('token', response.data.token)
            alert('Cadastro efetuado com sucesso!')
            goToHome(history)
        }).catch(error => {
            console.log(error.message)
        })
}

