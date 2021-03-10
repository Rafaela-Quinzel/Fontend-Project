import React from 'react'
import * as S from './styled'
import logo from '../../assets/logo.svg'
import { useHistory } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { createPlaylist } from '../../services/Playlist'
import { TextField, Button } from '@material-ui/core'



export function PlaylistModal(props) {

    const { form, onChange } = useForm({
        title: "",
        subtitle: ""
    })

    const history = useHistory()


    const handleInputChange = (event) => {
        const { value, name } = event.target

        onChange(value, name)
        
    }

    const handleSubmit = (event) => {
        createPlaylist(form, history)
    }


    return (
        <S.ModalContainer>
            <S.Wrapper>
                <S.Logo src={logo} />
                <S.TitlePage>Criar Playlist</S.TitlePage>

                <S.FormConteiner onSubmit={handleSubmit}>
                    <TextField
                        value={form.title}
                        onChange={handleInputChange}
                        variant='outlined'
                        label='Título'
                        placeholder='Título da playlist'
                        name='title'
                        type='text'
                        required
                    />
                    <br />

                    <TextField
                        value={form.subtitle}
                        onChange={handleInputChange}
                        variant='outlined'
                        label='Subtítulo'
                        placeholder='Subtítulo da playlist'
                        name='subtitle'
                        type='text'
                        required
                    />
                    <br />
                    <Button
                        variant='contained'
                        color="primary"
                        type="submit"
                    >
                        CRIAR
                    </Button>
                    <S.AreaButton>
                        <Button
                            variant="outlined"
                            color="primary"
                            onClick={props.close}
                        >
                            VOLTAR
                    </Button>
                    </S.AreaButton>
                </S.FormConteiner>
            </S.Wrapper>
        </S.ModalContainer>
    )
}