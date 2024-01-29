import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import styled from 'styled-components';
import Home from '../../pages/Home/home';

const StyledHeader = styled.header`
    display:flex;
    justify-content: space-between;
    margin:15px;
    align-items: center;
`;

const LogoHeader = styled.img`
    margin:10px;
    width:150px;
`;


const MenuNavHeader = styled.nav`
 a{
    margin:15px;
    color:black;
    text-decoration:none;
 }
`;

const Header = () => {
    return (<StyledHeader>
        <Link to="/">
            <LogoHeader src={logo} alt="logo_header"/>
        </Link>
        <MenuNavHeader>
            <Link to="/">Accueil</Link>
            <Link to="/about">A propos</Link>
        </MenuNavHeader>
    </StyledHeader>)
};

export default Header;