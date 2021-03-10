import styled from 'styled-components'
import { mainGray, mainColor } from '../../constants/Colors'
import Button from '@material-ui/core/Button'


export const Wrapper = styled.div`
  display: grid;
  width: 20vw;
  min-width: 250px;
`

export const SnackBar = styled.div`
  display: grid;
  bottom: 60px;
  width: 20vw;
  min-width: 250px;
  height: 25vh;
  padding: 28px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: ${mainColor};
  word-break: break-all;
  cursor: pointer; 
  &:hover{
    background-color: rgb(165, 13, 196);
    transition: background-color 0.4s;
  } 
`

export const TextCard = styled.div`
  color: ${mainGray};
  margin-bottom: 20px;
  font-size: 18px;
`

export const TitleCard = styled.p`
  font-weight: bold;
  font-size: 20px;
  color: white;
  position: relative;
`

export const DateCard = styled.p`
  color: ${mainGray};
  margin-top: 32%;
  font-size: 12px;
`


export const AreaButton = styled.div`
  margin: 0;
  position: relative;
`

export const ButtonStyled = styled(Button)`
  width: 100%;
`




