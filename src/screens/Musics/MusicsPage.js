import React, { useState } from 'react'
import * as S from './styled'
import { useHistory } from 'react-router-dom'
import { useRequestData } from '../../hooks/useRequestData'
import { BASE_URL, axiosConfig } from '../../constants/RequestConfig'
import { Button } from '@material-ui/core'
import LoadingInfo from '../../components/Loading/LoadingInfo'
import { goToHome } from '../../routes/coordinator'
import MusicsCard from '../../components/MusicsCard/MusicsCard'
import AddMusicsModal from '../../components/AddMusicModal/AddMusicModal'
import { useProtectPage } from '../../hooks/useProtectPage'
import SearchField from '../../components/SearchField/SearchField'



function MusicsPage() {
    const [openModal, setOpenModal] = useState(false)

    useProtectPage()

    const history = useHistory()

    const handleOpenModal = () => {
        setOpenModal(!openModal)
    }

    const handleCloseModal = (event) => {
        event.preventDefault()
        setOpenModal(false)
    }

    

  
    const getMusics = useRequestData(`${BASE_URL}/music`, undefined, axiosConfig)

  


    return getMusics ? (
        <S.MainContainer>
            <S.Wapper>
                <Button
                    variant="outlined"
                    color="primary"
                    style={{ width: "120px", height: "40px" }}
                    onClick={() => goToHome(history)}
                >
                    VOLTAR
            </Button>
                <SearchField/>
            </S.Wapper>
            {getMusics.length === 0 ? (
                <S.MainContainer>
                    {openModal ? (
                        <AddMusicsModal
                            close={handleCloseModal}
                        />
                    ) : (
                        <S.NoResultsContainer>
                            <S.NoResults>
                                <p>Você ainda não cadastrou músicas</p>
                                <S.AreaButton>
                                    <Button
                                        variant='contained'
                                        color="secondary"
                                        type="submit"
                                        onClick={handleOpenModal}
                                    >
                                        Cadastrar músicas
                            </Button>
                                </S.AreaButton>
                            </S.NoResults>
                        </S.NoResultsContainer>
                    )}
                </S.MainContainer>
            ) : (
                <S.MainContainer>
                    <S.TitlePageContainer>
                        <S.TitlePage>Lista de Músicas</S.TitlePage>
                    </S.TitlePageContainer>
                    <S.CardContainer>
                        {getMusics && getMusics.map((music) => {
                            return (
                                <MusicsCard
                                    key={music.id}
                                    music={music}
                                />
                            )
                        })}
                    </S.CardContainer>
                    {openModal ? (
                        <AddMusicsModal
                            close={handleCloseModal}
                        />
                    ) : (
                        <S.AddCircleContainer>
                            <S.AddCircleIconStyled
                                style={{ fontSize: 70 }}
                                onClick={handleOpenModal}
                            />
                        </S.AddCircleContainer>
                    )}
                </S.MainContainer>
            )}
        </S.MainContainer>
    ) : (
        <S.MainContainer>
            <LoadingInfo />
        </S.MainContainer>
    )
}
export default MusicsPage



