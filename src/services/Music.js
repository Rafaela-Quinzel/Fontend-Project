import axios from 'axios'
import { BASE_URL, axiosConfig } from '../constants/RequestConfig'
import { goToMusics } from '../routes/coordinator'



export const addMusic = (body, history) => {
    axios.post(`${BASE_URL}/music/create`, body, axiosConfig)
        .then(response => {
            alert('Música criada com sucesso!')
            goToMusics(history)
        }).catch(error => {
            console.log(error.message)
        })
}


export const deleteMusic = (id) => {
    if (window.confirm("Deseja deletar esta música?")){
        axios.delete(`${BASE_URL}/music/delete/${id}`, axiosConfig)
        .then(response => {
            console.log(response)
            alert("Música removida")
        })
        .catch((error)=>{
            console.log(error.message)
        })
    }
}

