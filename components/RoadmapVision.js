import styled from "styled-components";

const StyledRoadmapVision = styled.div`
    width: 100%;
    height: 600px;
    margin-top: 30px;
    text-align: center;
    font-size: 2em;
    color: #333;
    padding: 20px;
    background-color: cadetblue;
`;

export default function RoadmapVision() {
    return <StyledRoadmapVision>Roadmap & Vision</StyledRoadmapVision>;
}