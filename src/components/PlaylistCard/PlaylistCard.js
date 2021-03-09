import React, { useState } from 'react'
import * as S from './styled'



function PlaylistCard(props) {
    const [openModal, setOpenModal] = useState(false)
    const [idParams, setIdParams] = useState("")


    const handleOpenModal = () => {
        setOpenModal(!openModal)
        setIdParams(`${props.playlist.id}`)
    }


    return (
        <S.Wrapper>

            <S.SnackBar>
                <S.TextCard >{props.playlist.title}</S.TextCard>
                <S.TitleCard>{props.playlist.subtitle}</S.TitleCard>
            </S.SnackBar>

        </S.Wrapper>
    )
}
export default PlaylistCard