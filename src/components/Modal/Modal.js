import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import * as S from './styled'

import axios from 'axios'

import { useRequestData } from '../../hooks/useRequestData'
import { BASE_URL, axiosConfig } from '../../constants/RequestConfig'



export function Modal(props) {
    // const [musicInfo, setMusicInfo] = useState({})

    // const { id } = useParams()


    // const getMusicsDetails = useRequestData(`${BASE_URL}/music/${props.music.id}`, [], axiosConfig)

    // console.log(getMusicsDetails)

    // const params = useParams()


    return (
        <div>
             {/* {getMusicsDetails && getMusicsDetails.map((music) => {
                return ( */}
                    <S.ModalContainer idMusic={props.id}>
                        <S.WrapperModal>
                            <S.HeaderModal>{props.title}</S.HeaderModal>

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
            {/* })}  */}
        </div>
    )
}