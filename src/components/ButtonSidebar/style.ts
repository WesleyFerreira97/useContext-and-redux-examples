import styled from "styled-components";

export const ButtonWrap = styled.div`
    background-color: #252A34;
    border: none;
    outline: none;
    color: #fff;
    padding: 1rem;
    border-radius: .125rem;
    margin: .5rem;
    position: relative;
    user-select: none;
    
    cursor: pointer;
    text-align: center;
    font-family: 'montserrat';
    text-transform: uppercase;
    font-weight: 700;

    &:active {
        transition: .2s;
        transform: scale(.97);
    }
`