import styled from "styled-components"
import { mainColor } from "../../constants/Colors"


//Styled SignUp
export const Wrapper = styled.div` 
  width: 100vw;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  margin: 0 auto;
` 

export const FormConteiner = styled.form`
  display:flex;
  flex-direction: column;
  align-self: center;
  width: 338px;
  max-width: 300px;
  border-radius: 2px;
  margin-right: 5%;
`

export const Logo = styled.img`
  width: 5rem;
  margin: 5%;
`

export const TitlePage = styled.p`
  font-size: 14px;
  font-weight: bold;
  letter-spacing: -0.40px;
  text-align: center;
  color: ${mainColor};
  padding: 8px 35px;
`

export const AreaLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`