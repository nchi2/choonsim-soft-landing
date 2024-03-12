import styled from "styled-components";

const StyledAbout = styled.div`
    width: 100%;
    height: 600px;
    margin-top: 30px;
    text-align: center;
    font-size: 2em;
    color: #333;
    padding: 20px;
    background-color: lightblue;
`;

export default function About() {
    return <StyledAbout>About</StyledAbout>;
}