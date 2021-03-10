import React  from 'react'
import * as S from './styled'
import { removeMusic } from '../../services/Music'
import { dateFormat } from '../../services/dateManager'



export function MusicModal(props) {


    // console.log(props.music)

    return (
        <S.ModalContainer>
            <S.WrapperModal>
            <S.DeleteIconStyled onClick={() => removeMusic(props.music.id)}/>
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
                {/* {props.music.name.map((genre) => {
                    return <p>{genre}</p>  
                })} */}
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