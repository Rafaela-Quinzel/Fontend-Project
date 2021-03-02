import React from 'react'
import * as S from './styled'



export function Modal(props) {

    return (
        <S.ModalContainer>
            <S.WrapperModal>
                <S.HeaderModal>Titulo</S.HeaderModal>

                <S.TitleModal>Albúm</S.TitleModal>
                <S.TextModal>Música</S.TextModal>

                <S.CloseModal type="button">
                    <img
                        src="/icons/close.svg"
                        alt="Fechar modal"
                        onClick={props.close}
                    />
                </S.CloseModal>
            </S.WrapperModal>

        </S.ModalContainer>
    )
}