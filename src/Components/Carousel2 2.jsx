import React from 'react';
import Carousel from './Carousel';
import imagesArray from '../Images/Carousel2Images';
import useWindowResize from '../Hooks/useWindowSize';

const Carousel2 = () => {
  const { width } = useWindowResize();
  const visibleSlides = width < 1080 && width > 700 ? 2 : width < 700 ? 1 : 2.6;
  return (
    <div className="carousel-wrapper carousel-2-wrapper">
      <Carousel totalSlides={imagesArray} visibleSlides={visibleSlides} />
    </div>
  );
};

export default Carousel2;
