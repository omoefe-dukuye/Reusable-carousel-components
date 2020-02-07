import React from 'react';
import imagesArray from '../Images/Carousel4Images';
import { CarouselProvider, Slider, Slide, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import classnames from 'classnames';
import Right from '../Images/Svgs/Arrowheads/Right';

const Carousel4 = () => {
  return (
    <div className="carousel-4-wrapper">
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={imagesArray.length}
        visibleSlides={1}
        infinite
        interval={10000}
      >
        <Slider className="Slider">
          {imagesArray.map(({ pic, text }, index) => {
            return (
              <Slide
                key={index}
                index={index}
                className={classnames('slide', {
                  'slide--not-last': index !== imagesArray.length - 1
                })}
              >
                <div
                  className="image-div"
                  style={{
                    background: `url(${pic})`,
                    backgroundPosition: 'center top',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                  }}
                >
                  <header
                    className={classnames('image-div-text', {
                      right: index % 3 === 1,
                      left: index % 3 === 0,
                      center: index % 3 === 2,
                      'color-white': index % 3 === 2
                    })}
                  >
                    <h5>{text.small}</h5>
                    <h1>{text.large}</h1>
                    <button href="#">
                      <h5>DISCOVER MORE</h5>
                    </button>
                  </header>
                </div>
                {/* <img src={pic} alt="" /> */}
              </Slide>
            );
          })}
        </Slider>
        <div className="carousel-dots">
          {imagesArray.map(({}, index) => (
            <Dot className="slides" slide={index}></Dot>
          ))}
        </div>
        <div className="carousel-text">
          {imagesArray.map(({ text: { large, small } }, index) => {
            let h6;
            if (small) {
              h6 = small;
            } else {
              [h6, large] = large.split(' ');
            }

            return (
              <Dot className="" slide={index}>
                <h6>{h6}</h6>
                <h4>{large}</h4>
              </Dot>
            );
          })}
        </div>
        <div className="media">
          <Right />
          <Right />
          <Right />
        </div>
      </CarouselProvider>
    </div>
  );
};

export default Carousel4;
