import styled from "styled-components";

const StyledHeader = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    color: #333;
    background-color: orange;
`;

export default function Header({children}) {
    return <StyledHeader>{children}</StyledHeader>;
}
