import styled from "styled-components"
 

//Styled Modal
export const ModalContainer = styled.div` 
    background: rgba(242, 243, 245, 0.2);
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
    background: rgba(182, 194, 204, 0.5);
    width: 100%;
    max-width: 400px;
    padding: 2rem 3rem;
    border-radius: 10px;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.4);
    text-align: center;
    position: relative;
` 

export const HeaderModal = styled.header` 
    font-size: 3.75rem;
    font-weight: 600;
    color: var(--blue);
    background-size: contain;
`

export const TitleModal = styled.strong` 
    font-size: 2.20rem;
    color: var(--title);
`

export const TextModal = styled.strong` 
    font-size: 1.25rem;
    color: var(--text);
    margin-top: 0.25rem;
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
