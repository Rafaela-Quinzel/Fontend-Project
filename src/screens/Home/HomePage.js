import React, { useState } from 'react'
import * as S from './styled'
import { useHistory, useParams } from 'react-router-dom'
import { useRequestData } from '../../hooks/useRequestData'
import { BASE_URL, axiosConfig } from '../../constants/RequestConfig'
import { Button } from '@material-ui/core'
import SearchAppBar from '../../components/AppBar/AppBar'
import LoadingInfo from '../../components/Loading/LoadingInfo'
import { goToAddMusics } from '../../routes/coordinator'
import { Modal } from '../../components/Modal/Modal'
import MusicsCard from '../../components/MusicsCard/MusicsCard'



function HomePage() {

    const history = useHistory()

    const getMusics = useRequestData(`${BASE_URL}/music`, undefined, axiosConfig)

    return getMusics ? (
        <S.MainContainer>
            <SearchAppBar />
            <S.TitlePageContainer>
                <S.TitlePage>Lista de Músicas</S.TitlePage>
            </S.TitlePageContainer>
            {getMusics && getMusics.map((music) => {
                return (
                    <MusicsCard
                        music={music}
                    />
                )
            })}
            <S.AddCircleContainer>
                <S.AddCircleIconStyled
                    style={{ fontSize: 70 }}
                    onClick={() => goToAddMusics(history)}
                />
            </S.AddCircleContainer>
        </S.MainContainer>

    ) : (
            <S.MainContainer>
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
                </S.NoResultsContainer>
            </S.MainContainer>
        )
}

//     ) : (
//     <>
//         <SearchAppBar />
//         <LoadingInfo />
//     </>
// )

export default HomePage



