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


export const addTrackToPlaylist = (body, update) => {
   
    axios.put(`${BASE_URL}/playlist/track`, body, axiosConfig)
        .then(response => {
            console.log(response.data)
            alert('Música inserida com sucesso!')
           update()
        }).catch(error => {
            console.log(error.message)
            alert('Erro ao adicionar música!')
        })
}

// export const addMusic = (body, history) => {
    
//     axios.post(`${BASE_URL}/music/create`, body, axiosConfig)
//         .then(response => {
           
//             console.log(response)
//             alert('Música criada com sucesso!')
          
//         }).catch(error => {
//             console.log(error.message)
//         })
// }

// export const addTrackToPlaylist = (body, history, id) => {
//     axios.put(`${BASE_URL}/playlist/${id}/track?music_id=${body}`, body, axiosConfig)
//         .then(response => {
//             alert('Música inserida com sucesso!')
//             goToHome(history)
//         }).catch(error => {
//             console.log(error.message)
//         })
// }


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


export const removeMusicFromPlaylist = (paramsId, musicId) => {
    if (window.confirm("Deseja apagar esta música?")){
        axios.delete(`${BASE_URL}/playlist/${paramsId}/music/${musicId}`, axiosConfig)
        .then(response => {
            alert("Música removida")
            
        })
        .catch((error)=>{
            console.log(error.message)
        })
    }

}