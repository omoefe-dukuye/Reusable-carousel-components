import React from 'react';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import classnames from 'classnames';
import Left from '../Images/Svgs/Arrowheads/left';
import Right from '../Images/Svgs/Arrowheads/right';

const Carousel = ({ totalSlides, visibleSlides }) => {
  // const slides = useMemo(() => {

  // }, [JSON.stringify(totalSlides)])

  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={125}
      totalSlides={totalSlides.length}
      visibleSlides={visibleSlides || 1}
      infinite
    >
      <Slider>
        {totalSlides.map((item, index) => (
          <Slide
            index={index}
            className={classnames('slide', {
              'slide--not-last': index !== totalSlides.length - 1
            })}
          >
            <img src={item} alt="" />
          </Slide>
        ))}
      </Slider>
      <div className="arrows">
        <ButtonBack className="button left">
          <Left className="arrow-left arrow" />
        </ButtonBack>
        <ButtonNext className="button right">
          <Right className="arrow-right arrow" />
        </ButtonNext>
      </div>
    </CarouselProvider>
  );
};

export default Carousel;
