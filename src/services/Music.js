import axios from 'axios'
import { BASE_URL, axiosConfig } from '../constants/RequestConfig'
import { goToHome, goToMusics } from '../routes/coordinator'



export const addMusic = (body, history) => {
    axios.post(`${BASE_URL}/music/create`, body, axiosConfig)
        .then(response => {
            alert('Música criada com sucesso!')
            goToMusics(history)
        }).catch(error => {
            console.log(error.message)
        })
}


export const addTrackToPlaylist = (body, history, id, musicId) => {
    axios.put(`${BASE_URL}/playlist/${id}/track?music_id=${musicId}`, body, axiosConfig)
        .then(response => {
            alert('Música inserida com sucesso!')
            goToHome(history)
        }).catch(error => {
            console.log(error.message)
        })
}

// export const addMusicToPlaylist = (body, history, id, paramsId) => {
   
//     axios.post(`${BASE_URL}/music/playlist/${id}?playlist=${paramsId}`, body, axiosConfig)
//         .then(response => {
     
//             alert('Música inserida com sucesso!')
//             goToHome(history)
//         }).catch(error => {
//             console.log(error.message)
//         })
// }

export const deleteMusic = (id) => {
    if (window.confirm("Deseja apagar esta música?")){
        axios.delete(`${BASE_URL}/music/delete/${id}`, axiosConfig)
        .then(response => {
            alert("Música removida")
        })
        .catch((error)=>{
            console.log(error.message)
        })
    }

}
