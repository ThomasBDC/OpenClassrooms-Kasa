import styled from 'styled-components';

const StyledBanner = styled.div`
    position:relative;
    border-radius:15px;
`;

const StyledImageBanner = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
    filter: brightness(0.7);
    &.About {
    height: 223px;
    }
`;

const StyledTitle = styled.h1`
    font-size: 24px;
    font-weight: 500;
    color: #ffffff;
    width: 100%;
    position: absolute;
    top:0;
    height:100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 0;
    padding:0px 30px;
    @media all and (min-width: 1100px) {
        justify-content: center;
        font-size: 48px;
        font-weight: 500;
    }
`;

const BannerTitre = ({img, title}) => {
    return (
    <StyledBanner>
        <StyledImageBanner src={img} alt="logo_footer" />
        <StyledTitle>
            {title}
        </StyledTitle>
    </StyledBanner>)
};

export default BannerTitre;