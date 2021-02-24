import styled from 'styled-components'
import { mainRed } from '../../constants/Colors'


export const ErrorContainer = styled.div`
  height: 50%;
  width: 50%;
  position: fixed;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const AnimationContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const TextPage = styled.p`
  color: ${mainRed}; 
  margin-top: 10%;
  text-align: center;
`
