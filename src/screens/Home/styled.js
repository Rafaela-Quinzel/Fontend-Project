import styled from 'styled-components'
import { primaryColor } from '../../constants/Colors'
import { mainGray, mainColor } from '../../constants/Colors'



export const Wrapper = styled.div`
  align-self: center;
  margin: 2rem;
`

export const AreaButton = styled.div`
  margin: 2% 2% 0 2%;
`

export const MainContainer = styled.div`
  width: 100vw;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`

export const Logo = styled.img`
  width: 250px;
  margin: 5%;
`

export const Title = styled.h2`
  font-weight: bold;
  color: ${mainColor};
  position: relative;
`

export const Text = styled.p`
  color: ${mainGray};
  margin-bottom: 20px;
  font-size: 16px;
  margin-top: 2%;
`

export const SnackBarContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const SnackBar = styled.div`
  display: grid;
  justify-items: center;
  margin: 2%;
  width: 20vw;
  min-width: 250px;
  height: 4.5rem;
  padding: 28px;
  border-radius: 10px;
  background-color: ${primaryColor};
  word-break: break-all;
  font-weight: bold;
  font-size: 20px;
  color: white;
  cursor: pointer; 
  &:hover{
    transform: scale(1.2);
    background-color: rgb(165, 13, 196);
    transition: background-color 0.4s;
    transition: transform 0.4s;
  } 
`
















