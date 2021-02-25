import styled from "styled-components"



//Styled Login
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


export const FormInputsLogin = styled.form`
  display:flex;
  flex-direction: column;
  width: 338px;
  max-width: 320px;
  border-radius: 2px;
  margin: 4% 10% 5% 15%;
`


export const AreaButton = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2em;
  margin: 20px 0 20px;
`

export const Logo = styled.img`
  width: 250px;
  margin: 5%;
`