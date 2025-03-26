import styled from "styled-components";

import { Check2, X, Trash } from "react-bootstrap-icons"

export const ProdutoDiv = styled.div`
    position: relative;
    text-align: center;

    img {
        width: 100%;
    }

    svg {
        position: absolute;
        cursor: pointer;
        width: 24px;
        height: 24px;
    }

    div {
        display: flex;
        flex-direction: column;
    }

    input, label {
        font-size: 14px;
        text-align: left;
        margin: 8px 0;
        padding: 8px;
        height: 32px;
        border: none;
        outline: none;
        cursor: pointer;
        background: ${props => props.theme.secondColor};
        color: ${props => props.theme.mainColor};

        &::placeholder {
            color: ${props => props.theme.mainColor};
        }
    }

    input[type="file"] {
        display: none;
    }
`

export const CheckIcon = styled(Check2)`
    top: 10px;
    right: 10px;

    &:hover {
        color: ${props => props.theme.green};
    }
`

export const XIcon = styled(X)`
    top: 10px;
    right: 34px;

    &:hover {
        color: ${props => props.theme.red};
    }
`

export const TrashIcon = styled(Trash)`
    top: 10px;
    left: 10px;

    &:hover {
        color: ${props => props.theme.red};
    }
`

export const ProdutoTitle = styled.h2`
    margin: 16px 0 0;
    font-size: 17px;
    text-transform: uppercase;
    color: ${props => props.theme.mainColor};
    text-align: center;
    background: none;
    border: none;
    outline: none;
    width: 100%

    @media (max-width: 1200px) {
        font-size: 1.45vw;
    }

    @media (max-width: 1000px) {
        font-size: 1.7vw;
    }

    @media (max-width: 800px) {
        font-size: 2.3vw;
    }

    @media (max-width: 500px) {
        font-size: 4vw;
    }
`

export const ProdutoPrice = styled.p`
    margin-top: 8px;
    font-size: 15px;
    font-weight: bold;
    color: ${props => props.theme.mainColor};
    text-align: center;
    background: none;
    border: none;
    outline: none;
    width: 100%

    @media (max-width: 1200px) {
        font-size: 1.35vw;
    }

    @media (max-width: 1000px) {
        font-size: 1.6vw;
    }

    @media (max-width: 800px) {
        font-size: 2.2vw;
    }

    @media (max-width: 500px) {
        font-size: 3.6vw;
    }
`