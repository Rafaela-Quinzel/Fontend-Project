import React from 'react'
import * as S from './styled'
import logo from '../../assets/logo.svg'
import { useHistory } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { signUp } from '../../services/User'
import { goBack } from '../../routes/coordinator'
import { Visibility, VisibilityOff } from "@material-ui/icons"
import { InputLabel, IconButton, InputAdornment, OutlinedInput, FormControl, TextField, Button } from '@material-ui/core'




function SignUpPage() {
  const [showPassword, setShowPassword] = React.useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false)
  

  const {form, onChange} = useForm({
    name: "",
    email: "",
    nickname: "",
    password: "", 
    confirmPassword: "" 
  })


  const history = useHistory()
  

  const handleInputChange = (event) => {
    const {value, name} = event.target

    onChange(value, name)
   
  }


  // Função para mostrar a senha ou não //
  const handleShowPassword = () => {
     setShowPassword(!showPassword)
  }

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword)
  }



   // para validar as duas senhas //
  const validate = (event) => {
    const passwordOne = form.password
    const passwordTwo = form.confirmPassword
    event.preventDefault()
    if (passwordOne === passwordTwo) {
      signUp(form, history)
    } else {
      alert("Por favor, confira sua senha")
    }
  }



  return (
    <S.Wrapper>
      <S.ArrowBackIosIconStyled onClick={() => goBack(history)}/>
      <S.AreaLogo>
      <S.Logo src={logo} />
      </S.AreaLogo>
      <S.TitlePage>Cadastrar</S.TitlePage>
        
      <S.FormConteiner onSubmit={validate}>

        <TextField 
          value={form.name} 
          onChange={handleInputChange}
          variant='outlined'
          label='Nome'
          placeholder='Nome e sobrenome'
          name='name'
          type='text'
          required
        />
        <br />

        <TextField 
          value={form.email}
          onChange={handleInputChange}
          variant='outlined'
          label='E-mail'
          placeholder='email@email.com'
          name='email'
          type='email'
          pattern='[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}'
          required
        />
        <br />

        <TextField 
          value={form.nickname} 
          onChange={handleInputChange}
          variant='outlined'
          label='Apelido'
          placeholder='Como gostaria de ser chamado'
          name='nickname'
          type='text'
          required
        />
        <br/>

        <FormControl variant="outlined" required="true">
          <InputLabel htmlFor="outlined-adornment-password" margin="dense">Senha</InputLabel>
            <OutlinedInput
              label="Senha"
              value={form.password}
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Mínimo 6 caracteres"
              onChange={handleInputChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleShowPassword}
                    edge="end"
                  >
                    {showPassword ? <Visibility fontSize={'small'}/> : <VisibilityOff fontSize={'small'}/>}
                  </IconButton>
                </InputAdornment>
              }
            />
        </FormControl>
        <br/>
        <FormControl variant="outlined" required="true" style={{ margin: '2px 0'}}>
          <InputLabel htmlFor="outlined-adornment-password" margin="dense">Confirmar</InputLabel>
            <OutlinedInput
              label="Confirmar"
              value={form.confirmPassword}
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirme a senha"
              onChange={handleInputChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleShowConfirmPassword}
                    edge="end"
                  >
                    {showConfirmPassword ? <Visibility fontSize={'small'}/> : <VisibilityOff fontSize={'small'}/>}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        <br/>
        <Button
          variant='contained'
          color="primary"
          type="submit"
        >
          CRIAR
        </Button>
      </S.FormConteiner>
    </S.Wrapper>
  )
}
export default SignUpPage