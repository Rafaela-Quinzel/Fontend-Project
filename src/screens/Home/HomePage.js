import React from 'react'
import * as S from './styled'
import { useHistory } from 'react-router-dom'
import { useRequestData } from '../../hooks/useRequestData'
import { BASE_URL, axiosConfig } from '../../constants/RequestConfig'
import { Button } from '@material-ui/core'
import SearchAppBar from '../../components/AppBar/AppBar'
import LoadingInfo from '../../components/Loading/LoadingInfo'
import { goToAddMusics } from '../../routes/coordinator'
import MusicsCard from '../../components/MusicsCard/MusicsCard'



function HomePage() {

    const history = useHistory()

    const getMusics = useRequestData(`${BASE_URL}/music`, undefined, axiosConfig)

    return getMusics ? (
        <S.MainContainer>
            <SearchAppBar wrapper="span"/>
            {getMusics.length === 0 ? (
                <S.MainContainer>
                    <S.NoResultsContainer>
                        <S.NoResults>
                            <p>Você ainda não cadastrou músicas</p>
                            <S.AreaButton>
                                <Button
                                    variant='contained'
                                    color="secondary"
                                    type="submit"
                                    onClick={() => goToAddMusics(history)}
                                >
                                    Cadastrar músicas
                            </Button>
                            </S.AreaButton>
                        </S.NoResults>
                    </S.NoResultsContainer>
                </S.MainContainer>
            ) : (
                    <S.MainContainer>
                        <S.TitlePageContainer>
                            <S.TitlePage>Lista de Músicas</S.TitlePage>
                        </S.TitlePageContainer>
                        <S.CardContainer>
                            {getMusics && getMusics.map((music) => {
                                return (
                                    <MusicsCard
                                        key={music.id}
                                        music={music}
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
                <SearchAppBar wrapper="span"/>
                <LoadingInfo />
            </S.MainContainer>
        )
}
export default HomePage



