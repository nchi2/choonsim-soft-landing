import styled from "styled-components";

const StyledCenter = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: white;
`;

export default function Center({ children}) {
    return <StyledCenter>{children}</StyledCenter>;
}
