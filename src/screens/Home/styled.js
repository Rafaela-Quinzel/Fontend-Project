import styled from 'styled-components'
import { mainGray, secondaryColor, primaryColor } from '../../constants/Colors'
import AddCircleIcon from '@material-ui/icons/AddCircle'


// Styled HomePage //
export const MainContainer = styled.div`
  width: 100vw;
  /* height: 100vh; */
  /* max-width: 420px; */
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  /* margin: 0 auto;  */
  background-color: yellow;
`

export const NoResultsContainer = styled.div`
  margin: auto 0 auto;
`

export const TitlePageContainer = styled.div`
  text-align: center;
  margin: 4%;
  color: ${mainGray};
`

export const TitlePage = styled.h2`
  color: ${mainGray};
`

export const Wrapper = styled.div`
  width: 100vw;
  /* max-width: 420px; */
  margin: 0 auto;
   display: grid;
  grid-template-columns: repeat(4, 1fr);
  /* gap: 2rem; */
  background-color: green;
`

export const NoResults = styled.div`
  display: grid;
  justify-items: center;
  margin: 15%;
`

export const AreaButton = styled.div`
  margin: 5%;
`
export const AddCircleIconStyled = styled(AddCircleIcon)`
  color: ${secondaryColor};
`

export const AddCircleContainer = styled.div`
  position: fixed;
  right: 20px;
  bottom: 20px;
  cursor: pointer;
`











