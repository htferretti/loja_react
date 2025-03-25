import styled from 'styled-components'

import { Check2, X } from "react-bootstrap-icons"

export const HeaderDiv = styled.div`
    color: ${props => props.theme.mainColor};
    padding: 80px 0;
    align-items: center;
    display: flex;

    svg {
        font-size: 24px;
        cursor: pointer;

        &:hover {
            filter: brightness(150%);
        }
    }

    @media (max-width: 800px) {
        padding: 8vw 0;

        svg {
            font-size: 4vw;
        }
    }
`

export const HeaderTitle = styled.input`
    color: ${props => props.theme.mainColor};
    font-size: 30px;
    background: none;
    border: none;
    text-align: center;

    &:focus {
        outline: none;
    }

    @media (max-width: 800px) {
        font-size: 4vw;
    }
`

export const CheckIcon = styled(Check2)`
    &:hover {
        color: ${props => props.theme.green};
    }
`

export const XIcon = styled(X)`
    &:hover {
        color: ${props => props.theme.red};
    }
`

export const LeftDiv = styled.div`
    width: 15%;
    display: flex;
    justify-content: left;
`

export const CenterDiv = styled.div`
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    display: flex;
`

export const RightDiv = styled.div`
    width: 15%;
    display: flex;
    justify-content: right;
    align-items: center;
    font-size: 16px;

    p {
        margin-right: 16px;
    }

    span {
        font-weight: bolder;
        cursor: pointer;

        &:hover {
            color: ${props => props.theme.red};
        }
    }

    @media (max-width: 800px) {
        flex-direction: column;
        align-items: flex-end;

        p {
            margin-right: 0;
        }
    }
`