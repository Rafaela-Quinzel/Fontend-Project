import React, { useState } from 'react'
import * as S from './styled'
import { MusicModal } from '../MusicModal/MusicModal'
import { deleteMusic } from '../../services/Music'
import DeleteIcon from '@material-ui/icons/Delete'



function MusicsCard(props) {
    const [openModal, setOpenModal] = useState(false)
    const [idParams, setIdParams] = useState("")


    const handleOpenModal = () => {
        setOpenModal(!openModal)
        setIdParams(`${props.music.id}`)
    }

    const handleCloseModal = () => {
        setOpenModal(false)
    }


    return (
        <S.Wrapper>
            { openModal ? (
                <MusicModal
                    close={handleCloseModal}
                    music={props.music}
                />
            ) : (
                <S.Wrapper>
                    <S.SnackBar onClick={handleOpenModal}>
                        <S.TextCard >{props.music.title}</S.TextCard>
                        <S.TitleCard>{props.music.author}</S.TitleCard>
                    </S.SnackBar>
                    <S.AreaButton>
                        <S.ButtonStyled
                            variant="contained"
                            size="small"
                            width='100%'
                            color="secondary"
                            startIcon={<DeleteIcon />}
                            onClick={() => deleteMusic(props.music.id)}
                        >
                            DELATAR MÚSICA
                        </S.ButtonStyled>
                    </S.AreaButton>

                </S.Wrapper>
            )}
        </S.Wrapper>
    )
}
export default MusicsCard