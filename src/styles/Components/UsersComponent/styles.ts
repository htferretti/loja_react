import styled from "styled-components";

type Props = {
    $variant: 'green' | 'red';
}

export const ComponentTitle = styled.p`
    margin-top: 8px;
    font-weight: bolder;
    color: ${props => props.theme.mainColor};
`

export const UsersDiv = styled.div`
    margin: 16px 0;
    display: grid;
    grid-gap: 16px;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    @media (max-width: 1000px) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media (max-width: 800px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 500px) {
        grid-template-columns: 1fr;
    }

    div {
        position: relative;
        background: ${props => props.theme.secondColor};
        color: ${props => props.theme.backgroundColor};
        padding: 16px;

        span {
            font-weight: bolder;
        }

        svg {
            position: absolute;
            cursor: pointer;
            width: 20px;
            height: 20px;
            right: 8px;

            &:hover {
                color: ${props => props.theme.red};
            }
        }
    }
`

export const AdmSpan = styled.span<Props>`
    cursor: pointer;
    text-decoration: underline;

    &:hover {
        color: ${({ $variant }) => $variant === 'green' ? (props => props.theme.green) : (props => props.theme.red)};
    }
`

export const Dica = styled.p`
    margin-top: 48px;
    color: ${props => props.theme.mainColor};

    input {
        margin-right: 8px;
    }
`