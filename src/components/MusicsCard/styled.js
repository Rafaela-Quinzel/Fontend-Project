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
  width: 30vw;
  max-width: 420px;
  height: 110px;
  padding: 22px;
  border-radius: 10px;
  background-color: ${primaryColor};
  margin: 2%;
  cursor: pointer;  
`
