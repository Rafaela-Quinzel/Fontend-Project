import React from 'react'
import * as S from './styled'
import dayjs from 'dayjs'
import { goToPlaylistDetails } from '../../routes/coordinator'
import { useHistory } from 'react-router'
import { deletePlaylist } from '../../services/Playlist'
import DeleteIcon from '@material-ui/icons/Delete'



function PlaylistCard(props) {

    const history = useHistory()

    const dateFormat = dayjs(props.playlist.date).format("DD/MM/YYYY")

    return (
        <div>
            <S.SnackBar onClick={() => goToPlaylistDetails(history, props.playlist.id)}>
                <S.TextCard >{props.playlist.title}</S.TextCard>
                <S.TitleCard>{props.playlist.subtitle}</S.TitleCard>
                <S.DateCard>Data de Criação {dateFormat}</S.DateCard>
            </S.SnackBar>
            <S.ButtonStyled
                variant="contained"
                size="small"
                color="secondary"
                startIcon={<DeleteIcon />}
                onClick={() => deletePlaylist(props.playlist.id)}
            >
                Delete playlist
            </S.ButtonStyled>
        </div>
    )
}
export default PlaylistCard