import React, { useState, useEffect } from 'react'
import * as S from './styled'
import logo from '../../assets/logo.svg'
import { useHistory, useParams } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
// import { addMusic } from '../../services/Music'
import { Button } from '@material-ui/core'
import { useProtectPage } from '../../hooks/useProtectPage'
// import { addTrackToPlaylist,  } from '../../services/Playlist'
import { addTrackToPlaylist } from '../../services/Playlist'


import { BASE_URL, axiosConfig } from '../../constants/RequestConfig'
import { useRequestData } from '../../hooks/useRequestData'



function AddTrackToPLaylistModal(props) {
    const [option, setOption] = useState('')
    const [musics, setMusics] = useState([])
    const [selectedMusic, setSelectedMusic] = useState(undefined)

    const params = useParams()


    const getMusics = useRequestData(`${BASE_URL}/music`, undefined, axiosConfig)

    useEffect(() => {
        if (getMusics) {
            setOption(getMusics[0].title)
            setSelectedMusic(getMusics[0])
            setMusics(getMusics)
        }
    }, [getMusics])


    console.log(getMusics)

    const handleChange = (event) => {
        const musicTitle = event.target.value
        setOption(musicTitle)
        const selectedMusic = musics.find((music) => music.title === musicTitle)
        setSelectedMusic(selectedMusic)
    }


    const onSubmitForm = (event) => {
        event.preventDefault()

        const body = {
            musicId: selectedMusic.id,
            playlistId: musics.id
        }

        addTrackToPlaylist(body, props.update)
    }

    console.log(option)
  
    return (
        <S.ModalContainer>
            <S.Wrapper>
                <S.Logo src={logo} />
                <S.TitlePage>Adcionar música</S.TitlePage>
                <S.FormConteiner onSubmit={onSubmitForm}>
                <select onChange={handleChange}>
                    <option value="">Nenhum</option>
                    {getMusics && getMusics.map((item) => {
                        return (
                            <option key={item.id} value={option}>{item.author} - {item.title}</option>
                        )
                    })}
                </select>

                <Button
                        variant='contained'
                        color="primary"
                        type="submit"

                    >
                        ADICIONAR
                    </Button>
                    <S.AreaButton>
                        <Button
                            variant="outlined"
                            color="primary"
                            onClick={props.close}
                        >
                            VOLTAR
                    </Button>
                    </S.AreaButton>
                </S.FormConteiner>
            </S.Wrapper>
        </S.ModalContainer>
    )
}
export default AddTrackToPLaylistModal