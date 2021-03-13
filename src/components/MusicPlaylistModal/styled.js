import styled from "styled-components"
import {
    primaryColor,
    mainLightGray,
    secondaryColor
} from '../../constants/Colors'
import DeleteIcon from '@material-ui/icons/Delete'



export const ModalContainer = styled.div` 
    background: rgba(242, 243, 245, 0.9);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
   

    display: flex;
    justify-content: center;
    align-items: center;
`

export const WrapperModal = styled.div`
    display: grid; 
    background: white;
    width: 100%;
    max-width: 480px;
    padding: 3rem 3.2rem;
    border-radius: 10px;
    box-shadow: 0 0 60px rgba(0, 0, 0.4, 0.4);
    position: relative;
    word-break: break-all;
`

export const HeaderModal = styled.header` 
    font-size: 1.6rem;
    font-weight: 500;
    color: ${primaryColor};
    background-size: contain;
    text-transform: capitalize; 
`

export const TitleModal = styled.strong` 
    font-size: 1.4rem;
    color: ${mainLightGray};
    margin-top: 1rem;
    text-transform: capitalize;    
`

export const TextModal = styled.strong` 
    font-size: 0.8rem;
    color: ${mainLightGray};
    margin: 4% 0 5% 0;
`

export const FileContainer = styled.div`
    font-size: 0.8rem;
    margin: 2% 4% 2% 0;
    display: flex;
    align-self: center;
`;

export const Audio = styled.audio`
    width: 25rem;
    height: 2rem;
`;


export const TextDate = styled.p` 
    font-size: 0.7rem;
    color: ${mainLightGray};
    margin-top: 12%;
`

export const CloseModal = styled.button` 
    color: ${mainLightGray};
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    background: transparent;
    border: 0;
    font-size: 0;
    cursor: pointer;
`

export const LinkFileContainer = styled.div`
    color: ${mainLightGray};
    font-size: 0.8rem;
    margin: 4% 0 0 0;
`;

export const LinkFile = styled.a`
    font-size: 0.7rem;
    margin: 8% 4% 0 0;
    text-decoration: none;
`;

export const DeleteIconStyled = styled(DeleteIcon)`
    color: ${mainLightGray};
    width: 15px;
    position: absolute;
    top: 0.8rem;
    left: 0.8rem;
    border: 0;
    font-size: 0;
    cursor: pointer;
`
