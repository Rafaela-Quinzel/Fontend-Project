import axios from 'axios'
import { BaseUrl } from '../constants/BaseUrl'



export const login = (body, history) => {

    axios.post(`${BaseUrl}/login`, body).then((response) => {
        localStorage.setItem('user', response.data.user)

        if (response.data.user.hasAddress) {
            localStorage.setItem("token", response.data.token)
            alert(`Olá ${response.data.user.name}! Estou te redirecionando para o feed`)


        } else {
            localStorage.setItem("token", response.data.token)

        }
    }).catch(error => {
        alert('E-mail ou senha inválidos!')
        console.log(error.message)
    })
}

