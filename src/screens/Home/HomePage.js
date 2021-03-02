import React, { useState } from 'react'
import * as S from './styled'
import { useHistory } from 'react-router-dom'
import { useRequestData } from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/RequestConfig'
import { Button } from '@material-ui/core'
import SearchAppBar from '../../components/AppBar/AppBar'
import LoadingInfo from '../../components/Loading/LoadingInfo'
import { goToAddMusics } from '../../routes/coordinator'
import { Modal } from '../../components/Modal/Modal'
import MusicsCard from '../../components/MusicsCard/MusicsCard'



function HomePage() {

    const [openModal, setOpenModal] = useState(false)


    const axiosConfig = {
        headers: {
            Authorization: window.localStorage.getItem('token')
        }
    }

    const history = useHistory()


    const getMusics = useRequestData(`${BASE_URL}/music`, undefined, axiosConfig)

    const handleOpenModal = () => {
        setOpenModal(!openModal)
    }

    const handleCloseModal = (event) => {
        event.preventDefault()
        setOpenModal(false)
    }


    return getMusics ? (
        <S.Wrapper>
            {getMusics.length === 0 ? (
                <S.NoResultsContainer>
                    <SearchAppBar />
                    <S.NoResults>
                        <p>Você ainda não cadastrou músicas</p>
                        <S.AreaButton>
                            <Button
                                variant='contained'
                                color="secondary"
                                type="submit"
                                onClick={() => goToAddMusics(history)}
                            >
                                Cadastrar músicas
                            </Button>
                        </S.AreaButton>
                    </S.NoResults>
                </S.NoResultsContainer>) : (
                    <div>
                        <SearchAppBar />
                        <S.TitlePageContainer>
                            <S.TitlePage>Lista de Músicas</S.TitlePage>
                        </S.TitlePageContainer>

                        {getMusics && getMusics.map((music) => {

                            return (
                                <S.Wrapper

                                >
                                    {openModal ? (
                                        <Modal
                                            close={handleCloseModal}
                                        />
                                    ) : (
                                            <S.MainContainer>
                                                <MusicsCard
                                                    music={music}
                                                    open={handleOpenModal}
                                                />
                                            </S.MainContainer>
                                        )}

                                </S.Wrapper>
                            )
                        })}
                    </div>
                )}
        </S.Wrapper>

    ) : (
            <>
                <SearchAppBar />
                <LoadingInfo />
            </>
        )
}
export default HomePage



