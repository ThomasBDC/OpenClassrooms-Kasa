import { useNavigate, useParams } from "react-router-dom";
import accommodationList from '../../datas/accommodationList';
import styled from "styled-components";
import Collapse from "../../components/Collapse/collapse";
import HostName from "../../components/HostName/hostname";
import RatingStars from "../../components/RatingStars/ratingStars";
import Slider from "../../components/Slider/slider";
import { useEffect } from "react";

const TitleAccommodation = styled.h1`
    color: #FF6060;
    font-weight: 500;
    font-size: 18px;
    margin-top: 15px;
    @media all and (min-width: 1100px) {
    font-size: 36px;
    margin-top: 30px;
    margin-bottom:0;
`;

const Tags = styled.div`
    background-color: #FF6060;
    color:white;
    padding: 5px 20px;
    display : inline-block;
    margin-right:15px;
    border-radius:5px;
`;

const FirstLine = styled.div`
    display:flex;
    flex-direction: column;
    margin-bottom:30px;
`;

const SecondLine = styled.div`
    display:flex;
    flex-direction: row;
    margin-bottom:30px;
    justify-content: space-between;
    @media all and (min-width: 1100px) {
        flex-direction: column-reverse;
    justify-content: center;
}
`;

const Host = styled.div`
    display:flex;
    justify-content: flex-end;
    img{
        width: 64px;
        height: 64px;
        border-radius: 50%; 
    }
`;

const AllCollapses = styled.div`
    display:flex;
    justify-content: space-between;
    flex-direction:column;
    @media all and (min-width: 1100px) {
        flex-direction:row;
        > div{
            width:45%;
            display:inline-block;
        }
    }

   
`;
const FirstPart = styled.div`
    display:flex;
    flex-direction:column;
    @media all and (min-width: 1100px) {
        flex-direction:row;
        justify-content:space-between;
    }
`;

const Location = styled.p`
  font-weight: 500;
  font-size: 14px;
  margin-top: 5px;
  @media all and (min-width: 1100px) {
    font-size: 18px;
  }
`

const Accommodation = () =>  {
    const accomodationId = useParams().id;    
    const accommodation = accommodationList.find((acco) => acco.id === accomodationId);

    const navigate = useNavigate();
    useEffect(() => {
        if(!accommodation) {
            navigate('/error');
        }
    }, [accommodation, navigate]);

    try{
        return (
            <>
            <Slider allSlides={accommodation.pictures}></Slider>
            <FirstPart>
              <FirstLine>
                  <TitleAccommodation>{accommodation.title}</TitleAccommodation>
                  <Location>{accommodation.location}</Location>
                  <div>
                      {accommodation.tags.map(tag => (
                      <Tags>
                          {tag}
                      </Tags>
                      ))
                      }
                  </div>
              </FirstLine>
              <SecondLine>
                  <div>
                      <RatingStars rating={accommodation.rating} />
                  </div>
                  <Host>
                      <HostName name={accommodation.host.name}></HostName>
                      <img src={accommodation.host.picture} alt="hpst_picture"/>
                  </Host>
              </SecondLine>     
            </FirstPart>
             
      
              <AllCollapses>
                  <div>
                      <Collapse title="Description" description={accommodation.description}></Collapse>
                  </div>
                  <div>
                      <Collapse title="Equipements" description={accommodation.equipments.map(equipment => equipment + '<br/>').join('')}></Collapse>
                  </div>
              </AllCollapses>
            </>
          );
    }
    catch(e){
        console.log("Erreur");
    }
  };
  
  export default Accommodation;
  