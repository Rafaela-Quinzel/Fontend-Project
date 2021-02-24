import React, { useState } from 'react'
import * as S from './styled'
import Lottie from 'react-lottie'
import animationData from '../../animation/animationError.json'


function NotFoundPage() {

  const [animationState] = useState({
    isStopped: false, isPaused: false
  })

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <S.ErrorContainer>

      <S.AnimationContainer>
        <Lottie options={defaultOptions}
          isStopped={animationState.isStopped}
          isPaused={animationState.isPaused}
        />
      </S.AnimationContainer>
      <S.TextPage>
        Erro: 404 - página não encontrada :(
        </S.TextPage>
    </S.ErrorContainer>
  )

}
export default NotFoundPage
