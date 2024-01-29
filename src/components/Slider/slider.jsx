import styled from 'styled-components';
import Right from '../../assets/chevron_carousel_right.png'
import Left from '../../assets/chevron_carousel_left.png'
import { useState } from 'react';

const SliderContainer = styled.div`

width:100%;
height:415px;
margin:0 auto;
position: relative;


.leftArrow{
    left:0;
}
.rightArrow{
    right:0;
}

.leftArrow, 
.rightArrow{
    position: absolute;
    top:50%;
    margin:-25px 0 0 0;
    cursor: pointer;
}
`;

const Slides = styled.div`
    white-space: nowrap;
    width:100%;
    height:415px;
    overflow:hidden;
`;

const Slide = styled.div`
    height: 100%;
    width:100%;
    display: inline-block;
    border-radius: 10px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    transition: 1s;
    transform: translateX(${(props) => props.index*100*-1}%)
`;

const Bullets = styled.div`
    position: absolute;
    bottom: 10px;
    left:50%; 
    transform:translateX(-50%);
    display: flex;
    justify-content: center;
`;

const Bullet = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
  background-color: ${({ active }) => (active ? '#ffffff' : '#F2F2F2')};
  margin: 0 10px;
  cursor: pointer;
`

const Slider = ({ allSlides }) => {
    const [index, changeIndex] = useState(0);
    const max = allSlides.length-1;
    const min =0;
  return (
    
    <SliderContainer>
        <Slides>
            {
                allSlides.map(slide => (
                    <Slide index={index}
                        style={{ backgroundImage: `url(${slide})` }}>
                    </Slide>
                ))
            }
        </Slides>
        <img className='leftArrow' alt="ArrowLeft" src={Left} onClick={() => changeIndex(index-1 < min ? max : index-1)}></img>
        <img className='rightArrow' alt="ArrowRight" src={Right} onClick={() => changeIndex(index+1 > max ? min : index+1)}></img>
        <Bullets>
            {
                allSlides.map((slide, indexBullet) => (
                    <Bullet 
                        key={indexBullet}
                        active={indexBullet === index}
                        onClick={() => changeIndex(indexBullet)}
                    />
                ))
            }
        </Bullets>
    </SliderContainer>
    
  )
};

export default Slider;