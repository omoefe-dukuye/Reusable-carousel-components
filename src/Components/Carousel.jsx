import React from 'react';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Dot
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import classnames from 'classnames';
import Left from '../Images/Svgs/Arrowheads/Left';
import Right from '../Images/Svgs/Arrowheads/Right';

const Carousel = ({ totalSlides, visibleSlides, useDot }) => {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={125}
      totalSlides={totalSlides.length}
      visibleSlides={visibleSlides || 1}
      infinite
    >
      <Slider className="Slider">
        {totalSlides.map((item, index) => {
          return (
            <Slide
              key={index}
              index={index}
              className={classnames('slide', {
                'slide--not-last': index !== totalSlides.length - 1
              })}
            >
              {' '}
              <a href={item}>
                <img src={item} alt="" />
              </a>
            </Slide>
          );
        })}
      </Slider>
      <div className="arrows">
        <ButtonBack className="button left">
          <Left className="arrow-left arrow" />
        </ButtonBack>
        <ButtonNext className="button right">
          <Right className="arrow-right arrow" />
        </ButtonNext>
      </div>
      {useDot && (
        <div className="Slides">
          {totalSlides.map((item, index) => (
            <Dot className="slides" slide={index}>
              <img src={item} alt="" />
            </Dot>
          ))}
        </div>
      )}
    </CarouselProvider>
  );
};

export default Carousel;
