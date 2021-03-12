import React, { useEffect, useState, useLayoutEffect } from 'react'
import axios from 'axios'
import * as S from './styled'
import { useParams, useHistory } from 'react-router-dom'
import { BASE_URL, axiosConfig } from '../../constants/RequestConfig'
import { Button } from '@material-ui/core'
import SearchAppBar from '../../components/AppBar/AppBar'
import LoadingInfo from '../../components/Loading/LoadingInfo'
import { goToAddMusics, goBack } from '../../routes/coordinator'
import MusicsPlaylistCard from '../../components/MusicsPlaylistCard/MusicsPlaylistCard'
import AddTrackToPLaylistModal from '../../components/AddTrackToPLaylistModal/AddTrackToPLaylistModal'


import { useRequestData } from '../../hooks/useRequestData'



function PlaylistDetailsPage() {
    const [tracks, setTracks] = useState(undefined)
    const [openModal, setOpenModal] = useState(false)
    const [paramsId, setParamsId] = useState('')

    const { id } = useParams()

    const history = useHistory()


    useLayoutEffect(() => {
        getPlaylistsDetails()
    }, [])

    const getPlaylistsDetails = () => {
        axios.get(`${BASE_URL}/playlist/${id}`, axiosConfig)
            .then((response) => {
                setTracks(response.data[1])
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    const getMusics = useRequestData(`${BASE_URL}/music`, undefined, axiosConfig)

    // console.log(getMusics)


   
    const handleOpenModal = (id) => {
        setOpenModal(!openModal)
    }

    console.log(tracks)

    const handleCloseModal = (event) => {
        event.preventDefault()
        setOpenModal(false)
    }



    return tracks ? (
        <S.MainContainer>
            <SearchAppBar wrapper="span" />
            {tracks.length === 0 ? (
                <S.MainContainer>
                    <S.AreaButton>
                        <Button
                            variant="outlined"
                            color="primary"
                            onClick={() => goBack(history)}
                        >
                            VOLTAR
                        </Button>
                    </S.AreaButton>
                    <S.NoResultsContainer>
                        {openModal ? (
                            <AddTrackToPLaylistModal
                                close={handleCloseModal}
                                update={getMusics}
                            />
                        ) : (
                            <S.NoResults>
                                <p>Você ainda não cadastrou músicas</p>
                                <S.AreaButton>
                                    <Button
                                        variant='contained'
                                        color="secondary"
                                        type="submit"
                                        onClick={handleOpenModal}
                                    >
                                        Adicionar músicas
                                    </Button>
                                </S.AreaButton>
                            </S.NoResults>
                        )}
                    </S.NoResultsContainer>
                </S.MainContainer>
            ) : (
                <S.MainContainer>
                    <S.AreaButton>
                        <Button
                            variant="outlined"
                            color="primary"
                            onClick={() => goBack(history)}
                        >
                            VOLTAR
                        </Button>
                    </S.AreaButton>
                    <S.TitlePageContainer>
                        <S.TitlePage>Lista de Músicas</S.TitlePage>
                    </S.TitlePageContainer>
                    <S.CardContainer>
                        {tracks && tracks.map((music) => {
                            return (
                                <MusicsPlaylistCard
                                    key={music.id}
                                    music={music}
                                />
                            )
                        })}
                    </S.CardContainer>
                    {openModal ? (
                        <AddTrackToPLaylistModal
                            close={handleCloseModal}
                        />
                    ) : (
                        <S.AddCircleContainer>
                            <S.AddCircleIconStyled
                                style={{ fontSize: 70 }}
                                onClick={handleOpenModal}
                                id={tracks.id}
                            />
                        </S.AddCircleContainer>
                    )}
                </S.MainContainer>
            )}
        </S.MainContainer>
    ) : (
        <S.MainContainer>
            <SearchAppBar wrapper="span" />
            <LoadingInfo />
        </S.MainContainer>
    )
}
export default PlaylistDetailsPage