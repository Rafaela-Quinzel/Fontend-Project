import React from 'react'
import * as S from './styled'
import logo from '../../assets/logo.svg'
import { useHistory } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { TextField, Button } from '@material-ui/core'
import { useProtectPage } from '../../hooks/useProtectPage'
import { addMusic } from '../../services/Music'



function AddMusicModal(props) {

    const { form, onChange } = useForm({
        title: "",
        author: "",
        file: "",
        album: "",
        genre: ""
    })


    useProtectPage()

    const history = useHistory()

    const handleInputChange = (event) => {
        const { value, name } = event.target

        onChange(value, name)
    }


    const sendGenre = (event) => {
        event.preventDefault()

        let genre = form.genre.split(" ")
        for (let i = 0; i < genre.length; i++) {
            genre[i] = genre[i].replace("#", "")
        }

        const body = {
            title: form.title,
            author: form.author,
            file: form.file,
            album: form.album,
            genre: genre,
        }

        addMusic(body, history)
    }

    
    return (
        <S.ModalContainer>
            <S.Wrapper>
                <S.Logo src={logo} />
                <S.TitlePage>Adcionar música</S.TitlePage>

                <S.FormConteiner onSubmit={sendGenre}>
                    <TextField
                        value={form.title}
                        onChange={handleInputChange}
                        variant='outlined'
                        label='Título'
                        placeholder='título da música'
                        name='title'
                        type='text'
                        required
                        inputProps={{ maxLength: 35 }}
                    />
                    <br />

                    <TextField
                        value={form.author}
                        onChange={handleInputChange}
                        variant='outlined'
                        label='Author'
                        placeholder='author da música'
                        name='author'
                        type='text'
                        required
                        inputProps={{ maxLength: 20 }}
                    />
                    <br />

                    <TextField
                        value={form.file}
                        onChange={handleInputChange}
                        variant='outlined'
                        label='URL'
                        placeholder='Link da música'
                        name='file'
                        type='url'
                        required
                    />
                    <br />

                    <TextField
                        value={form.album}
                        onChange={handleInputChange}
                        variant='outlined'
                        label='Albúm'
                        placeholder='nome do albúm da música'
                        name='album'
                        type='text'
                        required
                        inputProps={{ maxLength: 20 }}
                    />
                    <br />

                    <TextField
                        value={form.genre}
                        onChange={handleInputChange}
                        variant='outlined'
                        label='Gênero'
                        placeholder='gênero da música'
                        name='genre'
                        type='text'
                        required
                        inputProps={{ maxLength: 30 }}
                    />
                    <br />

                    <Button
                        variant='contained'
                        color="primary"
                        type="submit"
                       
                    >
                        ADICIONAR
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
export default AddMusicModal