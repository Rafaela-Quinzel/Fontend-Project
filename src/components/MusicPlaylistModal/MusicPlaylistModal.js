import React  from 'react'
import * as S from './styled'
import { dateFormat } from '../../services/dateManager'
import { useParams } from 'react-router'
import axios from 'axios'
import { BASE_URL, axiosConfig } from '../../constants/RequestConfig'



export function MusicPlaylistModal(props) {

    const params = useParams()

    const removeMusicFromPlaylist = () => {
        if (window.confirm("Deseja apagar esta música?")){
            axios.delete(`${BASE_URL}/playlist/${params.id}/music?${props.music.id}`, axiosConfig)
            .then(response => {
                alert("Música removida")
                props.close()
            })
            .catch((error)=>{
                console.log(error.message)
            })
        }
    
    }


    return (
        <S.ModalContainer>
            <S.WrapperModal>
                <S.DeleteIconStyled onClick={removeMusicFromPlaylist} />
                <S.HeaderModal>{props.music.author}</S.HeaderModal>
                <S.TitleModal>{props.music.title}</S.TitleModal>
                <S.TextModal>
                    Albúm:
                    <br />
                    {props.music.album}
                    {props.music.name}
                </S.TextModal>
                <S.TextModal>
                    Gênero(s):
                {props.music.name}
                </S.TextModal>
                <S.FileContainer>
                    <S.Audio
                        src={props.music.file}
                        controls
                    />
                </S.FileContainer>
                <S.TextDate>
                    postado:
                    <br />
                    {dateFormat(props.music.date)}
                </S.TextDate>
                <S.CloseModal type="button">
                    <img
                        src="/icons/close.svg"
                        alt="Fechar modal"
                        onClick={props.close}
                    />
                </S.CloseModal>
                <S.LinkFileContainer>
                    arquivo postado:
                    <br />
                    <S.LinkFile
                        href={props.music.file}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {props.music.file}
                    </S.LinkFile>
                </S.LinkFileContainer>
            </S.WrapperModal>
        </S.ModalContainer>
    )
}