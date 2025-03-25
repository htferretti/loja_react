import styled, { createGlobalStyle } from "styled-components";

const MyGlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
        transition: .2s;
        cursor: default;
    }

    body {
        background: ${props => props.theme.backgroundColor};
    }
`
export const Container = styled.div`
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 0 16px;
`

export default MyGlobalStyle