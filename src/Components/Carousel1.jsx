import React from 'react';
import Carousel from './Carousel';
import imagesArray from '../Images/Carousel1Images';

// import '../Styles/font-awesome.scss';
const Carousel1 = () => {
  return (
    <div className="carousel-1-wrapper carousel-wrapper">
      <Carousel totalSlides={imagesArray} visibleSlides={3} />
    </div>
  );
};

export default Carousel1;
