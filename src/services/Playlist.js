import axios from 'axios'
import { BASE_URL, axiosConfig } from '../constants/RequestConfig'
import { goToHome } from '../routes/coordinator'


export const createPlaylist = (body, history) => {
    axios.post(`${BASE_URL}/playlist/create`, body, axiosConfig)
        .then(response => {
            window.localStorage.setItem('token', response.data.token)
            alert('Playlist criada com sucesso!')
            goToHome(history)
        }).catch(error => {
            console.log(error.message)
        })
}

export const deletePlaylist = (id, history) => {
    if (window.confirm("Deseja apagar esta Playlist?")){
        axios.delete(`${BASE_URL}/playlist/delete/${id}`, axiosConfig)
        .then(response => {
            alert("Playlist deletada!")
            goToHome(history)
        })
        .catch((error)=>{
            console.log(error.message)
        })
    }

}