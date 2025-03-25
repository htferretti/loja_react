import styled from "styled-components";

export const AddProdutoForm = styled.form`
    width: 50%;
    margin: 0 auto;

    @media (max-width: 1000px) {
        width: 70%;
    }

    @media (max-width: 800px) {
        width: 85%;
    }

    @media (max-width: 500px) {
        width: 100%;
    }
`

export const AddProdutoTitle = styled.p`
    color: ${props => props.theme.mainColor};
    text-align: center;
    font-size: 16px;
`

export const InputDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 16px;
    margin: 8px 0;

    input {
        background: ${props => props.theme.secondColor};
        color: ${props => props.theme.mainColor};
        width: 100%;
        padding: 8px;
        border: none;
        border-radius: 8px;

        &:hover {
            filter: brightness(90%);
        }

        &:focus {
            outline: solid 1px ${props => props.theme.mainColor};
        }
    }

    label {
        color: ${props => props.theme.mainColor};
        font-size: 15px;
        display:inline-block;
        margin-top: 8px;
    }
`

export const InputImg = styled.input`
    height: 100%;
    cursor: pointer;
`

export const InputName = styled.input`
    height: 40px;
    margin-bottom: 16px;
    cursor: text;
`

export const InputPrice = styled.input`
    height: 40px;
    cursor: text;
    resize: none;
`

export const ButtonDiv = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 16px;
    margin: 16px 0 48px;

    button {
        height: 40px;
        background: ${props => props.theme.mainColor};
        color: ${props => props.theme.backgroundColor};
        border: none;
        border-radius: 8px;
        cursor: pointer;
    }
`

export const AddButton = styled.button`
    &:hover {
        background: ${props => props.theme.green};
    }
`

export const CancelButton = styled.button`
    &:hover {
        background: ${props => props.theme.red};
    }
`