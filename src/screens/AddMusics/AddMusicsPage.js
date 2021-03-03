import React, { useState } from 'react'
import * as S from './styled'
import logo from '../../assets/logo.svg'
import { useHistory } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { addMusic } from '../../services/Music'
import { goBack } from '../../routes/coordinator'
import { TextField, Button } from '@material-ui/core'
import GenreToggleGroup from '../../components/GenreToggleGroup/GenreToggleGroup'


function AddMusicsPage() {

    const [genres, setGenres] = useState([])

    const { form, onChange } = useForm({
        title: "",
        author: "",
        file: "",
        album: ""
    })

    const history = useHistory()


    const handleToggleChange = (event, genres) => {
        setGenres(genres)
    }

    const handleInputChange = (event) => {
        const { value, name } = event.target

        onChange(value, name)
    }

    const onSubmitForm = (event) => {
        event.preventDefault()

        const body = {
            title: form.title,
            author: form.author,
            file: form.file,
            genres,
            album: form.album
        }

        addMusic(body, history)
    }



    return (
        <S.Wrapper>
            <S.ArrowBackIosIconStyled onClick={() => goBack(history)} />
            <S.AreaLogo>
                <S.Logo src={logo} />
            </S.AreaLogo>
            <S.TitlePage>Adcionar música</S.TitlePage>

            <S.FormConteiner onSubmit={onSubmitForm}>
                <TextField
                    value={form.title}
                    onChange={handleInputChange}
                    variant='outlined'
                    label='Título'
                    placeholder='título da música'
                    name='title'
                    type='text'
                    required
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
                />
                <br />

                <TextField
                    value={form.file}
                    onChange={handleInputChange}
                    variant='outlined'
                    label='URL'
                    placeholder='Link da música'
                    name='file'
                    type='text'
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
                />
                <br />

                <GenreToggleGroup
                    value={genres}
                    onChange={handleToggleChange}
                />  
                <br />

                <Button
                    variant='contained'
                    color="primary"
                    type="submit"
                >
                    ADICIONAR
                </Button>
            </S.FormConteiner>
        </S.Wrapper>
    )
}
export default AddMusicsPage