import React, { useState } from 'react';
import Carousel from './SingleSlideCarousel';
import imgaesArray from '../Images/Carousel3Images';

const Carousel3 = () => {
  // const [imageIndex, setImageIndex] = useState(0);
  // console.log(imageIndex);
  return (
    <div className="slideshow">
      <div className="carousel-wrapper carousel-3-wrapper">
        <Carousel totalSlides={imgaesArray} useDot={true} />
      </div>
      <div className="slides">
        <img src={imgaesArray[0]} alt="" />
        <img src={imgaesArray[1]} alt="" />
        <img src={imgaesArray[2]} alt="" />
        <img src={imgaesArray[3]} alt="" />
      </div>
    </div>
  );
};

export default Carousel3;
