import React from 'react';
import Carousel from './SingleSlideCarousel';
import imagesArray from '../Images/Carousel1Images';
import useWindowResize from '../Hooks/useWindowSize';

const Carousel1 = () => {
  const { width } = useWindowResize();
  const visibleSlides = width < 1080 ? 1 : 3;
  console.log(width, visibleSlides);
  return (
    <div className="carousel-1-wrapper carousel-wrapper">
      <Carousel totalSlides={imagesArray} visibleSlides={visibleSlides} />
    </div>
  );
};

export default Carousel1;
