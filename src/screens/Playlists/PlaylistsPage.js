import React, { useState } from 'react'
import * as S from './styled'
import { useRequestData } from '../../hooks/useRequestData'
import { BASE_URL, axiosConfig } from '../../constants/RequestConfig'
import { Button } from '@material-ui/core'
import LoadingInfo from '../../components/Loading/LoadingInfo'
import PlaylistCard from '../../components/PlaylistCard/PlaylistCard'
import { PlaylistModal } from '../../components/PlaylistModal/PlaylistModal'
import { goToHome } from '../../routes/coordinator'
import { useHistory } from 'react-router'



function PlaylistPage() {
    const [openModal, setOpenModal] = useState(false)

    const history = useHistory()

    const handleOpenModal = () => {
        setOpenModal(!openModal)
    }

    const handleCloseModal = (event) => {
        event.preventDefault()
        setOpenModal(false)
    }


    const getPlaylists = useRequestData(`${BASE_URL}/playlist`, undefined, axiosConfig)

    return getPlaylists ? (
        <S.MainContainer>
            <Button
                variant="outlined"
                color="primary"
                style={{ margin: '15px 0 0 20px' }}
                onClick={() => goToHome(history)}
            >
                VOLTAR
            </Button>
            {getPlaylists.length === 0 ? (
                <S.MainContainer>
                    <S.NoResultsContainer>
                        {openModal ? (
                            <PlaylistModal
                                close={handleCloseModal}
                            />
                        ) : (
                            <S.NoResults>
                                <p>Você ainda não tem Playlists</p>
                                <S.AreaButton>
                                    <Button
                                        variant='contained'
                                        color="secondary"
                                        type="submit"
                                        onClick={handleOpenModal}
                                    >
                                        Cadastrar Playlist
                                </Button>
                                </S.AreaButton>
                            </S.NoResults>
                        )}
                    </S.NoResultsContainer>
                </S.MainContainer>
            ) : (
                <S.MainContainer>
                    <S.TitlePageContainer>
                        <S.TitlePage>Lista de Playlists</S.TitlePage>
                    </S.TitlePageContainer>
                    <S.CardContainer>
                        {getPlaylists && getPlaylists.map((playlist) => {
                            return (
                                <PlaylistCard
                                    key={playlist.id}
                                    playlist={playlist}
                                />
                            )
                        })}
                    </S.CardContainer>
                    {openModal ? (
                        <PlaylistModal
                            close={handleCloseModal}
                        />
                    ) : (
                        <S.AddCircleContainer>
                            <S.AddCircleIconStyled
                                style={{ fontSize: 70 }}
                                onClick={handleOpenModal}
                            />
                        </S.AddCircleContainer>
                    )}
                </S.MainContainer>
            )}
        </S.MainContainer>
    ) : (
        <S.MainContainer>
            <LoadingInfo />
        </S.MainContainer>
    )
}
export default PlaylistPage



