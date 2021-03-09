import React from 'react'
import * as S from './styled'
import { useHistory } from 'react-router-dom'
import { useRequestData } from '../../hooks/useRequestData'
import { BASE_URL, axiosConfig } from '../../constants/RequestConfig'
import { Button } from '@material-ui/core'
import SearchAppBar from '../../components/AppBar/AppBar'
import LoadingInfo from '../../components/Loading/LoadingInfo'
import { goToAddMusics } from '../../routes/coordinator'
import PlaylistCard from '../../components/PlaylistCard/PlaylistCard'




function HomePage() {

    const history = useHistory()

    const getPlaylists = useRequestData(`${BASE_URL}/playlist`, undefined, axiosConfig)

    console.log(getPlaylists)


    return getPlaylists ? (
        <S.MainContainer>
            <SearchAppBar wrapper="span" />
            {getPlaylists.length === 0 ? (
                <S.MainContainer>
                    <S.NoResultsContainer>
                        <S.NoResults>
                            <p>Você ainda não tem Playlists</p>
                            <S.AreaButton>
                                <Button
                                    variant='contained'
                                    color="secondary"
                                    type="submit"
                                    onClick={() => goToAddMusics(history)}
                                >
                                    Cadastrar Playlist
                            </Button>
                            </S.AreaButton>
                        </S.NoResults>
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
                    <S.AddCircleContainer>
                        <S.AddCircleIconStyled
                            style={{ fontSize: 70 }}
                            onClick={() => goToAddMusics(history)}
                        />
                    </S.AddCircleContainer>

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
export default HomePage



