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

export const removeMusic = (id, history) => {
    if (window.confirm("Deseja apagar esta música?")){
        axios.delete(`${BASE_URL}/music/delete/${id}`, axiosConfig)
        .then(response => {
            alert("Música removida")
            goToHome(history)
        })
        .catch((error)=>{
            console.log(error.message)
        })
    }

}