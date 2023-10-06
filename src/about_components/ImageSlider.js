import { SliderData } from './sliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';


const ImageSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    useEffect(() => {
      const timer = setInterval(() => {
        setCurrent(current === length - 1 ? 0 : current + 1);
      }, 5000);
      return () => {
        /* cleanup */
        clearInterval(timer);
      };
    /* on component render*/
    }, );

    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
      return null;
    }

    return (
      <section className='slider'>
        <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
        <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
        {SliderData.map((slide, index) => {
          return (
            <div
              className={index === current ? 'slide active' : 'slide'}
              key={index}
            >
              {index === current && (
                <img src={slide.image} alt='slide' className='image' />
              )}
            </div>
          );
        })}
      </section>
    );
  };

  export default ImageSlider;