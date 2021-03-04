import styled from 'styled-components'
import { mainGray, mainColor } from '../../constants/Colors'



export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-left: 2.2rem;
  grid-row-gap: 2rem;
`

export const SnackBar = styled.div`
  display: grid;
  bottom: 60px;
  width: 20vw;
  min-width: 250px;
  height: 110px;
  padding: 22px;
  border-radius: 10px;
  background-color: ${mainColor};
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
  word-break: break-all;
`

export const TitleCard = styled.p`
  font-weight: bold;
  font-size: 22px;
  color: white;
`




