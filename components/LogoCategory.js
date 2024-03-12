import styled from "styled-components";
import { HeaderLogo, HeaderCategory } from "@/DataBase/HeaderDB";

const StyledLogoCategory = styled.div`
    width: 1200px;
    height:70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    text-align: center;
    font-size: 16px;
    color: #333;
`;

const LogoBox = styled.div`
    width: 300px;
    height: 70px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    font-size: 16px;
    padding-left: 20px;
    color: #333;
    /* background-color: gray; */
`;

const CategoryBox = styled.div`
    width: 750px;
    height: 70px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-align: center;
    margin-right: 20px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
    /* background-color: whitesmoke; */
    gap: 30px;
`;

export default function Partners() {
    return <StyledLogoCategory>
        <LogoBox>
            <img src={HeaderLogo.src} alt={HeaderLogo.alt} style={{ width: 'auto', height: '30px' }} />
        </LogoBox>
        <CategoryBox>
        {HeaderCategory.map((item) => (
                    <a key={item.id} href={item.link} style={{ textDecoration: 'none', color: '#333' }}>
                        {item.name}
                    </a>
                ))}
        </CategoryBox>
    </StyledLogoCategory>;
}