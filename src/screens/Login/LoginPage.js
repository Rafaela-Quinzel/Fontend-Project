import React from 'react'
import * as S from './styled'
import { useHistory } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { useForm } from '../../hooks/useForm'
import { useProtectPage } from '../../hooks/useProtectPage'
import { login } from '../../services/User'
import { goToSignUp } from '../../routes/coordinator'
import { TextField, Button } from '@material-ui/core'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'
import VisibilityIcon from '@material-ui/icons/Visibility'




function LoginPage() {

    const [showPassword, setShowPassword] = React.useState(false)


    const { form, onChange } = useForm({
        email: "",
        password: "",
    })

    useProtectPage()
    const history = useHistory()


    const handleInputChange = (event) => {
        const { value, name } = event.target

        onChange(value, name)
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        login(form, history)
    }



    const handleShowPassword = () => {
        if (showPassword) {
            setShowPassword(false)
        } else {
            setShowPassword(true)
        }
    }



    return (
        <S.Wrapper>
            <S.Logo src={logo} />
            <S.FormInputsLogin onSubmit={handleSubmit}>
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
                    value={form.password}
                    onChange={handleInputChange}
                    variant='outlined'
                    label='Senha'
                    placeholder='Mínimo 6 caracteres'
                    minlength="6"
                    name='password'
                    required
                    type={showPassword ? 'text' : 'password'}
                    InputProps={{
                        endAdornment: (
                            showPassword ? (
                                <VisibilityIcon
                                    onClick={handleShowPassword}
                                    fontSize={'small'}
                                />) : (
                                    <VisibilityOffIcon
                                        onClick={handleShowPassword}
                                        fontSize={'small'}
                                    />
                                )
                        ),
                    }}
                />
                <S.AreaButton>
                    <Button
                        variant='contained'
                        color="primary"
                        type="submit"
                    >
                        LOGIN
          </Button>
                    <Button
                        color="primary"
                    onClick={() => goToSignUp(history)}
                    >
                        Não possui cadastro?
                        Clique aqui.
          </Button>
                </S.AreaButton>
            </S.FormInputsLogin>
        </S.Wrapper>
    )
}
export default LoginPage

