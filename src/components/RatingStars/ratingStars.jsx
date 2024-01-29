import styled from 'styled-components';
import RedStar from '../../assets/red_star.png';
import GrayStar from '../../assets/grey_star.png';

const ratings = [1,2,3,4,5];
const RatingStar = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 5px;
  @media all and (min-width: 1100px) {
    height: 30px;
    width: 30px;
    margin-right: 0;
    margin-left: 10px;
    margin-top: 24px;
  }
`;

const RatingStars = ({ rating }) => {
  
  return (
    <>
    {
      ratings.map(ratingLoop => (
        <RatingStar 
          src={rating >= ratingLoop ? RedStar : GrayStar}
          alt={rating >= ratingLoop ? 'red star' : 'gray star'} />
      ))
    }
    </>
  )
};

export default RatingStars;