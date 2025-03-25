import styled from "styled-components";

export const ProdutosDiv = styled.div`
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
`