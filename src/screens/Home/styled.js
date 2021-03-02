import styled from 'styled-components'
import { mainGray } from '../../constants/Colors'


// Styled HomePage //
export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  /* max-width: 420px; */
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin: 0 auto; 
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
`

export const NoResults = styled.div`
  display: grid;
  justify-items: center;
  margin: 15%;
`

export const AreaButton = styled.div`
  margin: 5%;
`











