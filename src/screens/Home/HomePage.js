import React from 'react'
import * as S from './styled'
import { useHistory } from 'react-router-dom'
import { useRequestData } from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/RequestConfig'
import { Button } from '@material-ui/core'
import SearchAppBar from '../../components/AppBar/AppBar'
import LoadingInfo from '../../components/Loading/LoadingInfo'
import { goToAddMusics } from '../../routes/coordinator'


function HomePage() {
    const axiosConfig = {
        headers: {
            Authorization: window.localStorage.getItem('token')
        }
    }

    const history = useHistory()


    const getMusics = useRequestData(`${BASE_URL}/music`, undefined, axiosConfig)


    return getMusics ? (
        <S.Wrapper>
            {getMusics.length === 0 ? (
                <S.NoResultsContainer>
                    <SearchAppBar />
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
                </S.NoResultsContainer>) : (
                    <div>
                        <SearchAppBar />
                        <S.TitlePageContainer>
                            <h1>Lista de Músicas</h1>
                        </S.TitlePageContainer>

                        {getMusics && getMusics.map((music) => {

                            return (
                                <S.MainContainer key={music.id}>
                                    <S.CardContainer>
                                        <p>{music.title}</p>
                                        <p>{music.author}</p>
                                    </S.CardContainer>

                                </S.MainContainer>
                            )
                        })}
                    </div>
                )}

        </S.Wrapper>

    ) : (
            <>
                <SearchAppBar />
                <LoadingInfo />
            </>


        )
}
export default HomePage



