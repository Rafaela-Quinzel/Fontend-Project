import React from 'react'
import * as S from './styled'
import { goToPlaylistDetails } from '../../routes/coordinator'
import { useHistory } from 'react-router'
import { deletePlaylist } from '../../services/Playlist'
import DeleteIcon from '@material-ui/icons/Delete'
import { dateFormat } from '../../services/dateManager'



function PlaylistCard(props) {

    const history = useHistory()

    return (
        <S.Wrapper>
            <S.SnackBar onClick={() => goToPlaylistDetails(history, props.playlist.id)}>
                <S.TextCard >{props.playlist.title}</S.TextCard>
                <S.TitleCard>{props.playlist.subtitle}</S.TitleCard>
                <S.DateCard>Data de Criação {dateFormat(props.playlist.date)}</S.DateCard>
            </S.SnackBar>
            <S.AreaButton>
            <S.ButtonStyled
                variant="contained"
                size="small"
                width='100%'
                color="secondary"
                startIcon={<DeleteIcon />}
                onClick={() => deletePlaylist(props.playlist.id)}
            >
                DELETAR PLAYLIST
            </S.ButtonStyled>
            </S.AreaButton>
        </S.Wrapper>
    )
}
export default PlaylistCard