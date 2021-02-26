import React from 'react'
import * as S from './styled'
// import { useHistory } from 'react-router-dom'
import { useRequestData } from '../../hooks/useRequestData'
import { BASE_URL, axiosConfig  } from '../../constants/RequestConfig'
// import Loading from '../Loading/Loading'


function HomePage() {
   
    // const history = useHistory()


    const getMusics = useRequestData(`${BASE_URL}/music`, undefined, axiosConfig)

 
    return getMusics && getMusics === 0 ? (
       
        <div>
            <p>Você ainda não cadastrou músicas :(</p>
            <button> Cadastrar músicas </button>

        </div>
        
    ) : (
            <S.Wrapper>
                {/* { getMusics.length === 0 ? <Loading /> :
                    <S.Wrapper>
                        <S.CircularProgressStyled
                            color='primary'
                        />
                    </S.Wrapper>
                } */}
           
                <S.HistoryUserContainer>
                    <p>Lista de Músicas</p>
                </S.HistoryUserContainer>
                <S.LineHeader />
            </S.Wrapper>

        )

}
export default HomePage



