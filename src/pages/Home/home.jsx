import homeCover from '../../assets/home_cover.png';
import BannerTitre from '../../components/BannerTitre/bannerTitre';
import accommodationList from '../../datas/accommodationList';
import GalleryCard from '../../components/GalleryCard/galleryCard';
import styled from 'styled-components';

const GalleryContainer = styled.div`
  display:flex;
  flex-wrap: wrap;
  background-color:#F6F6F6;
  border-radius:15px;
  padding:30px;
  margin: 30px 0px;
  justify-content: center;
`;

const Home = () =>  {
  return (
    <>
      <BannerTitre img={homeCover} title="Chez vous, partout et ailleurs" />
      <GalleryContainer>
        {accommodationList.map(accomodation => (
            <GalleryCard url={"/accommodation/"+accomodation.id} img={accomodation.cover} title={accomodation.title}/>
          ))
        }
      </GalleryContainer>
    </>
  );
};

export default Home;
