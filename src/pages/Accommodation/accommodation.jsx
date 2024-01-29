import { useParams } from "react-router-dom";
import accommodationList from '../../datas/accommodationList';

const Accommodation = () =>  {
    const accomodationId = useParams().id;    
    const accommodation = accommodationList.find((acco) => acco.id == accomodationId);
    return (
      <div>Accomodation N° {accommodation.title}</div>
    );
  };
  
  export default Accommodation;
  