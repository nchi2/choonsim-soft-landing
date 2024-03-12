import styled from "styled-components";

const StyledHeroSection = styled.div`
    width: 100%;
    height: 600px;
    text-align: center;
    font-size: 2em;
    color: #333;
    padding: 20px;
    background-color: lightgray;
`;

export default function HeroSection() {
    return <StyledHeroSection>Hero Section</StyledHeroSection>;
}
