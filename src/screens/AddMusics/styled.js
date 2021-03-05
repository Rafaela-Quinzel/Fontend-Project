import styled from "styled-components"
import { mainColor } from "../../constants/Colors"


export const Wrapper = styled.div` 
  width: 100%;
  max-width: 420px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`

export const Logo = styled.img`
  width: 5rem;
`

export const TitlePage = styled.p`
  font-size: 14px;
  font-weight: bold;
  letter-spacing: -0.40px;
  color: ${mainColor};
  margin: 8% 0 2% 0;
`

export const FormConteiner = styled.form`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 338px;
  max-width: 300px;
  border-radius: 2px;
`

export const AreaButton = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2%;
`

