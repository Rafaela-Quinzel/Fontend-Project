import React from 'react'
import * as S from './styled'
import logo from '../../assets/logo.svg'
import { useHistory } from 'react-router'
import { goToPlaylists, goToMusics } from '../../routes/coordinator'


function HomePage() {
    const username = window.localStorage.getItem("username")

    const history = useHistory()

    return (
        <S.Wrapper>
            <S.MainContainer>
                <S.Logo src={logo} />
                <S.Title>Olá {username}!</S.Title>
                <S.Text>O que deseja fazer?</S.Text>

            </S.MainContainer>
            <S.SnackBarContainer>
                <S.SnackBar onClick={() => goToMusics(history)}>
                    MÚSICAS
                </S.SnackBar>
                <S.SnackBar onClick={() => goToPlaylists(history)}>
                    PLAYLISTS
                </S.SnackBar>
            </S.SnackBarContainer>
        </S.Wrapper>
    )
}
export default HomePage



