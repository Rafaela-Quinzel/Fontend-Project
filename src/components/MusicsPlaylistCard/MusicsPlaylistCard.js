import React, { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'
import * as S from './styled'
import { BASE_URL, axiosConfig } from '../../constants/RequestConfig'
import { MusicPlaylistModal } from '../../components/MusicPlaylistModal/MusicPlaylistModal'
import DeleteIcon from '@material-ui/icons/Delete'



function MusicsPlaylistCard(props) {
    const [openModal, setOpenModal] = useState(false)
    const [idParams, setIdParams] = useState("")


    const params = useParams()

    const handleOpenModal = () => {
        setOpenModal(!openModal)
        setIdParams(`${props.music.id}`)
    }


    const handleCloseModal = () => {
        setOpenModal(false)
    }

    const removeMusicFromPlaylist = () => {
        if (window.confirm("Deseja apagar esta música?")) {
            axios.delete(`${BASE_URL}/playlist/${props.music.id}/music?${params.id}`, axiosConfig)
                .then(response => {
                    alert("Música removida")
                })
                .catch((error) => {
                    console.log(error.message)
                })
        }

    }


    return (
        <S.Wrapper>
            { openModal ? (
                <MusicPlaylistModal
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
                            onClick={removeMusicFromPlaylist}
                        >
                            REMOVER MÚSICA
                        </S.ButtonStyled>
                    </S.AreaButton>
                </S.Wrapper>
            )}
        </S.Wrapper>
    )
}
export default MusicsPlaylistCard