import React, { useState } from 'react'
import * as S from './styled'
import { Modal } from '../../components/Modal/Modal'
import { useHistory, useParams } from 'react-router-dom'

import { useRequestData } from '../../hooks/useRequestData'
import { BASE_URL, axiosConfig } from '../../constants/RequestConfig'



function MusicsCard(props) {
    const [openModal, setOpenModal] = useState(false)

    const params = useParams()

    const history = useHistory()


    const handleOpenModal = () => {
        setOpenModal(!openModal)
    }

    const handleCloseModal = (event) => {
        event.preventDefault()
        setOpenModal(false)
    }

    // const getMusicsDetails = useRequestData(`${BASE_URL}/music/${props.music.id}`, undefined, axiosConfig)

    // console.log(getMusicsDetails)


    // console.log(props.music.id)

    return (
        <S.Wrapper>
            { openModal ? (
                <Modal
                    close={handleCloseModal}
                    onClick={() => history.push(`/pagina-principal/${props.music.id}`)}
                />
            ) : (
                    <S.SnackBar onClick={handleOpenModal}>
                        <S.TextCard>{props.music.title}</S.TextCard>
                        <S.TitleCard>{props.music.author}</S.TitleCard>
                    </S.SnackBar>
                )}
        </S.Wrapper>

    )

}
export default MusicsCard