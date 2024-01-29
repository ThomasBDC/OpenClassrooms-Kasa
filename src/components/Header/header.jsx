import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import styled from 'styled-components';

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

 a.active{
    text-decoration:underline;
 }
`;

const Header = () => {
    const location = useLocation();

    return (<StyledHeader>
        <Link to="/">
            <LogoHeader src={logo} alt="logo_header"/>
        </Link>
        <MenuNavHeader>
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>Accueil</Link>
            <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>A propos</Link>
        </MenuNavHeader>
    </StyledHeader>)
};

export default Header;