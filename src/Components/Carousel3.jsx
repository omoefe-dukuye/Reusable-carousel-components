import React from 'react';
import Carousel from './SingleSlideCarousel';
import imgaesArray from '../Images/Carousel3Images';

const Carousel3 = () => {
  // const [imageIndex, setImageIndex] = useState(0);
  // console.log(imageIndex);
  return (
    <div className="carousel-wrapper carousel-3-wrapper">
      <Carousel totalSlides={imgaesArray} useDot={true} />
    </div>
  );
};

export default Carousel3;
