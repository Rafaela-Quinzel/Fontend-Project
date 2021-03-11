import React, { useEffect, useState } from 'react'
import axios from 'axios'
import * as S from './styled'
import { useParams, useHistory } from 'react-router-dom'
import { BASE_URL, axiosConfig } from '../../constants/RequestConfig'
import { Button } from '@material-ui/core'
import SearchAppBar from '../../components/AppBar/AppBar'
import LoadingInfo from '../../components/Loading/LoadingInfo'
import { goToAddMusics, goBack } from '../../routes/coordinator'
import MusicsCard from '../../components/MusicsCard/MusicsCard'
import AddMusicsModal from '../../components/AddMusicsModal/AddMusicsModal'


function PlaylistDetailsPage(props) {
    const [tracks, setTracks] = useState(undefined)
    const [openModal, setOpenModal] = useState(false)
    const [paramsId, setParamsId] = useState('')

    const { id } = useParams()

    const history = useHistory()


    useEffect(() => {
        getPlaylistsDetails()
    }, [])

    const getPlaylistsDetails = () => {
        axios.get(`${BASE_URL}/playlist/${id}`, axiosConfig)
            .then((response) => {
                setTracks(response.data[1])
            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    
    const handleOpenModal = (id) => {
        setOpenModal(!openModal)
     

    }

    const handleCloseModal = (event) => {
        event.preventDefault()
        setOpenModal(false)
    }

    console.log(tracks)


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
                            <AddMusicsModal
                                close={handleCloseModal}
                            />
                        ) : (
                            <S.NoResults>
                                <p>Você ainda não cadastrou músicas</p>
                                <S.AreaButton>
                                    <Button
                                        variant='contained'
                                        color="secondary"
                                        type="submit"
                                        onClick={() => handleOpenModal(tracks.id)}
                                    >
                                        Cadastrar músicas
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
                                <MusicsCard
                                    key={music.id}
                                    music={music}
                                />
                            )
                        })}
                    </S.CardContainer>
                    {openModal ? (
                        <AddMusicsModal
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