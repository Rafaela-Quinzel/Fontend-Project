import axios from 'axios'
import { BASE_URL, axiosConfig } from '../constants/RequestConfig'
import { goToPlaylists } from '../routes/coordinator'



export const createPlaylist = (body, history) => {
    axios.post(`${BASE_URL}/playlist/create`, body, axiosConfig)
        .then(response => {
            window.localStorage.setItem('token', response.data.token)
            alert('Playlist criada com sucesso!')
            goToPlaylists(history)
        }).catch(error => {
            console.log(error.message)
        })
}


export const addTrackToPlaylist = (body) => {
    axios.put(`${BASE_URL}/playlist/track`, body, axiosConfig)
        .then(response => {
            alert('Música inserida com sucesso!')
        }).catch(error => {
            console.log(error.message)
            alert('Erro ao adicionar música!')
        })
}



export const deletePlaylist = (id, history) => {
    if (window.confirm("Deseja deletar esta Playlist?")){
        axios.delete(`${BASE_URL}/playlist/delete/${id}`, axiosConfig)
        .then(response => {
            alert("Playlist deletada!")
            goToPlaylists(history)
        })
        .catch((error)=>{
            console.log(error.message)
        })
    }

}
