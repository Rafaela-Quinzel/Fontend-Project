import styled from 'styled-components'
import {primaryColor, secondaryColor, mainWhite} from '../../constants/Colors'
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import { CircularProgress } from '@material-ui/core'
import EditIcon from "@material-ui/icons/Edit"



// Styled HomePage //
export const MainContainer = styled.div`
    width: 100vw;
    max-width: 420px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 70px; 
    margin: 0 auto; 
`

export const CardContainer = styled.div`
    width: 100vw;
    max-width: 420px;
    margin-bottom: 70px;
    margin: 0 auto 10px;
    border-radius: 10px;
`

export const NoResultsContainer = styled.div`
    margin: 30px auto 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const NoResults = styled.span`
    font-weight: bold;
`

export const directionNamesFilter = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin: 0;
  padding: 0;
`

export const ArrowLeftIconStyled = styled(ArrowLeftIcon)`
   float: left;   
`

export const ArrowRightIconStyled = styled(ArrowRightIcon)`
   float: right;
`


// Styled Card com tempo de entrega do pedido finalizado
export const Text = styled.p`
    font-weight: bold;
    color: white;
    margin-bottom: 8px;
`

export const SnackBar = styled.div`
    display: grid;
    grid-template-columns: 50px 1fr;
    position: fixed;
    bottom: 60px;
    width: 100vw;
    max-width: 420px;
    height: 110px;
    padding: 22px;
    border-radius: 10px;
    background-color: ${primaryColor};
`

export const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: stretch;
    margin-left: 32px;
`

export const Subtotal = styled.p`
    height: 18px;
    margin: 7px 0 0;
    font-family: Roboto;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: -0.39px;
    color: #000000;
`

/*Estilizando  Material UI*/
export const CircularProgressStyled = styled(CircularProgress)`
  margin: 65% 45%;
`

export const EditIconStyled = styled(EditIcon)`
  float: right;
  margin-top: 4%;
  margin-right: 5%;
  margin-left: 15%;
  color: ${secondaryColor};
`

export const HistoryUserContainer = styled.div`
  margin-top: 8%;
  margin-left: 4%;
  &:active {
    background-color: ${mainWhite};
  }
`

export const InfoUserContainer = styled.div`
  margin-top: 5%;
  margin-left: 4%;
  word-break: break-all;
  &:active {
    background-color: ${mainWhite};
  }
`

export const LineHeader = styled.hr`
  width: 97%;
`

export const Wrapper = styled.div`
  width: 100vw;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  margin: 0 auto;
` 









