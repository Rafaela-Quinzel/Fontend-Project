import React from 'react'
import * as S from './styled'
import dayjs from 'dayjs'


export function Modal(props) {

    const dateFormat = dayjs(props.music.date).format("DD/MM/YYYY")

    return (
        <S.ModalContainer>
            <S.WrapperModal>
                <S.HeaderModal>{props.music.author}</S.HeaderModal>
                <S.TitleModal>{props.music.title}</S.TitleModal>
                <S.TextModal>
                    Albúm:
                    <br />
                    {props.music.album}
                </S.TextModal>
                <S.FileContainer>
                    <S.Audio
                        width="800"
                        height="240"
                        src={props.music.file}
                        controls
                    />
                </S.FileContainer>
                <S.TextDate>
                    postado:
                    <br />
                    {dateFormat}
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