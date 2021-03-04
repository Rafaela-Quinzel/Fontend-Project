import styled from "styled-components"
import {
    primaryColor,
    mainLightGray,
    secondaryColor
} from '../../constants/Colors'


//Styled Modal
export const ModalContainer = styled.div` 
    background: rgba(242, 243, 245, 0.8);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: capitalize;
`

export const WrapperModal = styled.div`
    display: grid; 
    background: white;
    width: 100%;
    max-width: 480px;
    padding: 3rem 2rem;
    border-radius: 10px;
    box-shadow: 0 0 60px rgba(0, 0, 0.4, 0.4);
    position: relative;
    word-break: break-all;
`

export const HeaderModal = styled.header` 
    font-size: 2.70rem;
    font-weight: 500;
    color: ${primaryColor};
    background-size: contain;
`

export const TitleModal = styled.strong` 
    font-size: 2rem;
    color: ${mainLightGray};
`

export const TextModal = styled.strong` 
    font-size: 0.9rem;
    color: ${mainLightGray};
    margin: 2% 4% 5% 0;
`

export const FileContainer = styled.div`
    font-size: 0.8rem;
    margin: 5% 4% 2% 0;
    border: solid 2px ${secondaryColor};
    border-radius: 10px;
`;

export const Audio = styled.audio`
    align-self: center;
    width: 100%;
`;


export const TextDate = styled.p` 
    font-size: 0.9rem;
    color: ${mainLightGray};
    margin-top: 10%;
`

export const CloseModal = styled.button` 
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    background: transparent;
    border: 0;
    font-size: 0;
    cursor: pointer;
`

export const LinkFileContainer = styled.div`
    font-size: 0.8rem;
    margin: 8% 4% 0 0;
`;

export const LinkFile = styled.a`
    font-size: 0.8rem;
    margin: 8% 4% 0 0;
    text-decoration: none;
`;
