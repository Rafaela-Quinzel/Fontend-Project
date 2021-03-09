import styled from 'styled-components'
import { secondaryColor, mainLightGray } from '../../constants/Colors'
import AddCircleIcon from '@material-ui/icons/AddCircle'



export const MainContainer = styled.div`
  width: 100vw;
`

export const NoResultsContainer = styled.div`
  margin: auto 0 auto;
`

export const NoResults = styled.div`
  display: grid;
  justify-items: center;
  margin: 15%;
`

export const AreaButton = styled.div`
  margin: 5%;
`

export const TitlePageContainer = styled.div`
  text-align: center;
  margin: 5%;
`

export const TitlePage = styled.h2`
  color: ${mainLightGray};
`
export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding-left: 4%;
  grid-row-gap: 3.4rem;
`

export const AddCircleContainer = styled.div`
  position: fixed;
  right: 20px;
  bottom: 20px;
  cursor: pointer;
`

export const AddCircleIconStyled = styled(AddCircleIcon)`
  color: ${secondaryColor};
`













