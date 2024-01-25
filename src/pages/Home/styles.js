import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 100px;
`

export const Containeritems = styled.div`
    display: grid;
    /*grid-template-columns: 240px 240px 240px 240px;*/
    grid-template-columns: repeat(4, 240px);
    gap: 16px;
`