import styled from "styled-components";

const StyledService = styled.div`
    width: 100%;
    height: 600px;
    margin-top: 30px;
    text-align: center;
    font-size: 2em;
    color: #333;
    padding: 20px;
    background-color: lightsteelblue;
`;

export default function Service() {
    return <StyledService>Service</StyledService>;
}