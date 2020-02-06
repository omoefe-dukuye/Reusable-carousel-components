import React from 'react';
import imgaesArray from '../Images/Carousel4Images';
import { CarouselProvider, Slider, Slide, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import classnames from 'classnames';
import DotSvg from '../Images/Svgs/Dots';

const Carousel4 = () => {
  return (
    <div className="carousel-4-wrapper">
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={imgaesArray.length}
        visibleSlides={1}
        infinite
        interval={10000}
      >
        <Slider className="Slider">
          {imgaesArray.map(({ pic, text }, index) => {
            return (
              <Slide
                key={index}
                index={index}
                className={classnames('slide', {
                  'slide--not-last': index !== imgaesArray.length - 1
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
                      center: index % 3 === 2
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
          {imgaesArray.map(({}, index) => (
            <Dot className="slides" slide={index}></Dot>
          ))}
        </div>
      </CarouselProvider>
    </div>
  );
};

export default Carousel4;
