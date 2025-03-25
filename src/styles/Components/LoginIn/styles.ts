import styled from "styled-components";

type Props = {
    $variant: 'green' | 'red';
}

export const LoginDiv = styled.div`
    width: 30%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    input {
        margin: 8px 0;
        padding: 8px;
        background: ${props => props.theme.secondColor};
        color: ${props => props.theme.mainColor};
        height: 40px;
        border: none;
        outline: none;
        cursor: text;

        &::placeholder {
            color: ${props => props.theme.mainColor};
        }
    }

    div {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;
        margin-top: 8px;

        button {
            height: 40px;
            background: none;
            font-weight: bolder;
            color: ${props => props.theme.mainColor};
            border: 2px solid ${props => props.theme.mainColor};
            border-radius: 40px;
            cursor: pointer;

            &:hover {
                background: ${props => props.theme.mainColor};
                color: ${props => props.theme.backgroundColor};
            }
        }
    }

    p {
        color: ${props => props.theme.mainColor};
        text-align: center;
        font-size: 14px;
        font-weight: bolder;
        margin-top: 32px;
    }

    @media (max-width: 1000px) {
        width: 40%;
    }

    @media (max-width: 800px) {
        width: 50%;
    }

    @media (max-width: 500px) {
        width: 65%;
    }
`

export const SpanMessage = styled.span<Props>`
    color: ${({ $variant }) => $variant === 'green' ? (props => props.theme.green) : (props => props.theme.red)};
    margin: 8px 0;
    font-size: 14px;
    text-align: center;
`