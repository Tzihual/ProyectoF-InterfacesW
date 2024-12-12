// src/components/Carousel.js
import React from 'react';
import Slider from 'react-slick';
import CardCarrusel from './CardCarousel';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ movies }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    
    <Slider {...settings}>
      {movies.map(movie => (
        <div key={movie.id}>
          <CardCarrusel movie={movie} />
        </div>
        
      ))}
    </Slider>
  );
};

export default Carousel;

