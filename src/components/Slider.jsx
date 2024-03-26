import React, { useState } from 'react';
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import styled from 'styled-components';
import { sliderItems } from '../Data';
import { mobile } from '../responsive';


const Container = styled.div`

  position:fixed;
  width: 100%;
  height: 80%;
  display: flex;
  position: relative;
  overflow-x: hidden;
  ${mobile({ display: 'none' })}
`;

const Wrapper = styled.div`
margin-top:80px;
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 50%;
  margin-left:100px;
  margin-top:150px;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 40px;
`;

const Title = styled.h1`
 
  font-size: 70px;
  font-family: 'El Messiri';
  font-weight: 300; /* Lighter font weight */

  
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  font-weight: 400; /* Lighter font weight */
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #B2A4D4;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === 'left' && '10px'};
  right: ${(props) => props.direction === 'right' && '10px'};
  cursor: pointer;
  opacity: 0.2;
  z-index: 2;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === 'left') {
      setSlideIndex((prev) => (prev > 0 ? prev - 1 : sliderItems.length - 1));
    } else if (direction === 'right') {
      setSlideIndex((prev) => (prev < sliderItems.length - 1 ? prev + 1 : 0));
    }
  };

  return (
    <Container id='home'>
      <Arrow direction="left" onClick={() => handleClick('left')}>
        <ArrowLeftOutlinedIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide key={item.id} bg={item.bg}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              
                
              
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick('right')}>
        <ArrowRightOutlinedIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
