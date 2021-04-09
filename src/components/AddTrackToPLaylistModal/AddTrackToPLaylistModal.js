import React, { useState, useEffect } from 'react'
import * as S from './styled'
import logo from '../../assets/logo.svg'
import { useParams } from 'react-router-dom'
import { Button } from '@material-ui/core'
import { useProtectPage } from '../../hooks/useProtectPage'
import { addTrackToPlaylist } from '../../services/Playlist'
import { BASE_URL, axiosConfig } from '../../constants/RequestConfig'
import { useRequestData } from '../../hooks/useRequestData'



function AddTrackToPLaylistModal(props) {
    const [option, setOption] = useState('')
    const [musics, setMusics] = useState([])
    const [selectedMusic, setSelectedMusic] = useState(undefined)

    const params = useParams()

    useProtectPage()


    const getMusics = useRequestData(`${BASE_URL}/music`, undefined, axiosConfig)

    useEffect(() => {
        if (getMusics === true) {
            setOption(getMusics[0].title)
            setSelectedMusic(getMusics[0])
            setMusics(getMusics)
        } else{
            setOption(getMusics)
            setSelectedMusic(getMusics)
            setMusics(getMusics)
        }
    }, [getMusics])


    const handleChange = (event) => {
        const musicTitle = event.target.value
        setOption(musicTitle)
        const selectedMusic = musics.find((music) => music.title === musicTitle)
        setSelectedMusic(selectedMusic)
    }


    const onSubmitForm = (event) => {
        event.preventDefault()

        const body = {
            music_id: selectedMusic.id,
            playlist_id: params.id
        }

        addTrackToPlaylist(body)

    }


    return (
        <S.ModalContainer>
            <S.Wrapper>
                <S.Logo src={logo} />
                <S.TitlePage>Adcionar música</S.TitlePage>
                <S.FormConteiner onSubmit={onSubmitForm}>
                    <S.SelectContainer>
                        <S.Input list="historico" placeholder="Selecione ou pesquise uma música"/>
                        <S.Select onChange={handleChange} value={option} id="historico" >
                            <S.Options value="">Nenhum</S.Options>
                            {getMusics && getMusics.map((item) => {
                                if(item.length === 0 && item === undefined){
                                    return <p>Nenhuma música encontrada</p>
                                }
                                return (
                                    <S.Options
                                        key={item.id}
                                        value={item.title}
                                    >
                                       {item.author}
                                    </S.Options>
                                )
                            })}
                        </S.Select>
                    </S.SelectContainer>
                    <S.AreaButton>
                        <Button
                            variant='contained'
                            color="primary"
                            type="submit"
                            style={{ margin: '10px 0 10px 0' }}

                        >
                            ADICIONAR
                    </Button>

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