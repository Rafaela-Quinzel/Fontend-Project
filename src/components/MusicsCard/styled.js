import styled from 'styled-components'
import { mainGray, mainColor } from '../../constants/Colors'



export const Wrapper = styled.div`
`

export const SnackBar = styled.div`
  display: grid;
  bottom: 60px;
  width: 20vw;
  min-width: 250px;
  height: 130px;
  padding: 28px;
  border-radius: 10px;
  background-color: ${mainColor};
  word-break: break-all;
  cursor: pointer; 
  &:hover{
    transform: scale(1.1);
    background-color: rgb(165, 13, 196);
    transition: background-color 0.4s;
    transition: transform 0.4s;
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




