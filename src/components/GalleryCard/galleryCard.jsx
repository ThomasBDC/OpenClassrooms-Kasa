import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledBanner = styled.div`
    position:relative;
    border-radius:15px;
    margin:15px;
    height:340px;
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

const StyledTitle = styled.span`
    color: #ffffff;
    width: 50%;
    position: absolute;
    bottom:10px;
    height:100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    margin: 10px;
    padding:0px 30px;
    font-weight:700`;

const LinkGalleryCard = styled(Link)`
    flex-basis: 100%;
    @media all and (min-width: 740px) {
        flex-basis: 50%;
    }
    @media all and (min-width: 1100px) {
        flex-basis: 33.33333%;
    }

`;
const GalleryCard = ({url, img, title}) => {
    return (
        <LinkGalleryCard to={url}>
            <StyledBanner>
                <StyledImageBanner src={img} alt="image_gallery_card" />
                <StyledTitle>
                    {title}
                </StyledTitle>
            </StyledBanner>
        </LinkGalleryCard>
    )
};

export default GalleryCard;