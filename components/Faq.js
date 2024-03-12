import styled from "styled-components";

const StyledFaq = styled.div`
    width: 100%;
    height: 600px;
    margin-top: 30px;
    text-align: center;
    font-size: 2em;
    color: #333;
    padding: 20px;
    background-color: blueviolet;
`;

export default function Faq() {
    return <StyledFaq>FAQ</StyledFaq>;
}