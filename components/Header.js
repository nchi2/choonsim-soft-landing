import styled from "styled-components";

const StyledHeader = styled.div`
    width: 100%;
    margin: 0 auto;
    text-align: center;
    font-size: 2em;
    color: #333;
    padding: 20px;
    background-color: lightblue;
`;

export default function Header() {
    return <StyledHeader>Choonsim-Soft-Landing!</StyledHeader>;
}
