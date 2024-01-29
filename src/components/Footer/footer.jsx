import styled from 'styled-components';
import logo from '../../assets/logo_footer.png';

const StyledFooter = styled.footer`
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color:black;
    height:200px;
    color:white;
    text-align: center;
    display:flex;
    flex-direction:column;
    justify-content: center;
`;

const StyledLogoFooter = styled.img`
    width:120px;
    margin: 15px auto;
`;

const Footer = () => {
    return (
    <StyledFooter>
        <StyledLogoFooter src={logo} alt="logo_footer" />
        © 2020 Kasa. All rights reserved
    </StyledFooter>)
};

export default Footer;