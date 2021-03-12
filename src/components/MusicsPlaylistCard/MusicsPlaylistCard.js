import React, { useState } from 'react'
import * as S from './styled'
import { MusicPlaylistModal } from  '../../components/MusicPlaylistModal/MusicPlaylistModal'



function MusicsPlaylistCard(props) {
    const [openModal, setOpenModal] = useState(false)
    const [idParams, setIdParams] = useState("")


    const handleOpenModal = () => {
        setOpenModal(!openModal)
        setIdParams(`${props.music.id}`)
    }


    const handleCloseModal = () => {
        setOpenModal(false)
    }

    // console.log(props.music)
 
    return (
        <S.Wrapper>
            { openModal ? (
                <MusicPlaylistModal
                    close={handleCloseModal}
                    music={props.music}
                />
            ) : (
                    <S.SnackBar onClick={handleOpenModal}>
                        <S.TextCard >{props.music.title}</S.TextCard>
                        <S.TitleCard>{props.music.author}</S.TitleCard>
                    </S.SnackBar>
                )}
        </S.Wrapper>
    )
}
export default MusicsPlaylistCard