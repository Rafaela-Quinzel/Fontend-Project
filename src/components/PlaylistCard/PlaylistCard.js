import React, { useState } from 'react'
import * as S from './styled'
import { goToPlaylistDetails } from '../../routes/coordinator'
import { useHistory } from 'react-router'



function PlaylistCard(props) {

    const history = useHistory()

    // console.log(props.playlist.id)


    return (
        <S.Wrapper>

            <S.SnackBar onClick={() => goToPlaylistDetails(history, props.playlist.id)}>
                <S.TextCard >{props.playlist.title}</S.TextCard>
                <S.TitleCard>{props.playlist.subtitle}</S.TitleCard>
            </S.SnackBar>

        </S.Wrapper>
    )
}
export default PlaylistCard