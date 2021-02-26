import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import * as S from './styled'
import { goToLoginPage } from '../../routes/coordinator'
import Lottie from 'react-lottie'
import animationData from '../../animation/animation.json'




function SplashScreen() {

  const [ animationState ] = useState({
    isStopped: false, isPaused: false
  })

  const history = useHistory()

  useEffect(() => {
    setTimeout(() => {
      goToLoginPage(history)
    }, 3000)
  }, [history])



  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }


  return (
    <S.ContainerHome>
      <S.AnimationContainer>
      <Lottie options={defaultOptions}
        height={250}
        width={250}
        isStopped={animationState.isStopped}
        isPaused={animationState.isPaused}
      />
      </S.AnimationContainer>
    </S.ContainerHome>
  )
}
export default SplashScreen