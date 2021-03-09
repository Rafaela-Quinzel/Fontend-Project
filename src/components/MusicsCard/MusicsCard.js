import React, { useState } from 'react'
import * as S from './styled'
import { Modal } from '../../components/Modal/Modal'



function MusicsCard(props) {
    const [openModal, setOpenModal] = useState(false)
    const [idParams, setIdParams] = useState("")


    const handleOpenModal = () => {
        setOpenModal(!openModal)
        setIdParams(`${props.music.id}`)
    }


    const handleCloseModal = (event) => {
        event.preventDefault()
        setOpenModal(false)
    }


    return (
        <S.Wrapper>
            { openModal ? (
                <Modal
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
export default MusicsCard