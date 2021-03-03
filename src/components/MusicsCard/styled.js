import styled from 'styled-components'
import { primaryColor, mainGray } from '../../constants/Colors'


// Styled MusicCard //
export const TitleCard = styled.p`
  font-weight: bold;
  font-size: 22px;
  color: white;
`

export const TextCard = styled.div`
  color: ${mainGray};
  word-break: break-all;
`

export const SnackBar = styled.div`
  display: grid;
  bottom: 60px;
  width: 20vw;
  min-width: 250px;
  height: 110px;
  padding: 22px;
  border-radius: 10px;
  background-color: ${primaryColor};
  margin: 4%;
  cursor: pointer;  
`
