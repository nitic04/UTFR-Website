import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="carouselArrow nextArrow">
      <FaChevronRight className={className} style={{ ...style, fill: 'white'}} onClick={onClick}/>
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="carouselArrow nextArrow">
      <FaChevronLeft className={className} style={{ ...style, fill: 'white'}} onClick={onClick}/>
    </div>
  );
}

const HistoryCarousel = ({ slides = [] }) => {
  var settings = {
    speed: 500,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: '40px',
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div className="w-full mx-auto py-5">
      <div className="px-8">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="carouselCard flex flex-col items-center justify-center">
              {slide.link ? (
                <a href={slide.link} target="_blank" rel="noreferrer" className="flex justify-center items-center">
                  <img alt="" src={slide.image} className="max-w-full max-h-32" />
                </a>
              ) : (
                <img alt="" src={slide.image} className="mx-auto max-w-full max-h-[700px]" />
              )}
              <p className="text-white text-center py-2">{slide.description}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HistoryCarousel;
