import React from 'react';
import Carousel from './Carousel';
import imgaesArray from '../Images/Carousel3Images';

const Carousel3 = () => {
  return (
    <div className="carousel-wrapper carousel-3-wrapper">
      <Carousel totalSlides={imgaesArray} useDot={true} />
    </div>
  );
};

export default Carousel3;
