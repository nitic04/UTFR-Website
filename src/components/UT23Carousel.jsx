import React from 'react';
import UT23Header from '../assets/CzechRepublic2023/Czech14.jpeg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Motor from "../assets/CarParts/Emrax228Motor.jpeg";
import Aero from "../assets/CarParts/UT23_Unveiling_Aerodynamics.gif";

const UT23Carousel = () => {
  var settings = {
    className: "center",
    centerMode: true,
    centerPadding: "60px",
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div>
      <div className="px-8 py-10">
        <Slider {...settings}>
          <div className="carouselCard">
            <img alt="" src={Aero}/>
            <h1 className="text-white text-xl py-2">Aerodynamics</h1>
          </div>
          <div className="carouselCard">
            <img alt="" src={Motor}/>
            <h1 className="text-white text-xl py-2">Motor</h1>
          </div>
          <div className="carouselCard">
            <img alt="" src={UT23Header}/>
            <h1 className="text-white text-xl py-2">Suspension</h1>
          </div>
          <div className="carouselCard">
            <img alt="" src={UT23Header}/>
            <h1 className="text-white text-xl py-2">Brakes</h1>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default UT23Carousel
