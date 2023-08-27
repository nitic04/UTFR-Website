import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import CoolCarMan from '../assets/HighQualityImage.jpeg';
import TeamPhoto from '../assets/NewHampshire2023/TeamPhoto.jpeg';
import UnveilingPhoto from '../assets/TeamMembers/TeamPhotoUnveiling.jpeg';
import MichiganPhoto from '../assets/Michigan2023/Michigan23Win.jpeg';
import CzechPhoto from '../assets/CzechRepublic2023/Czech23Win.jpeg';
import { NavLink } from 'react-router-dom';


function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block"}}
      onClick={onClick}
    />
  );
}

const HomeCarousel = () => {
  var settings = {
    className: "center",
    centerMode: true,
    centerPadding: "60px",
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 1,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
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
    <div className="w-full h-[100%] bg-[#181818]">
      <div className="px-8 py-10">
        <Slider {...settings}>
          <div className="carouselCard">
            <img alt="" src={CzechPhoto}/>
            <h1 className="text-white text-xl font-bold py-2">A Win in Czech Republic</h1>
            <p className="text-white">The team was awarded 1st place in efficiency in the EV division and 6th overall!</p>
          </div>
          <div className="carouselCard">
            <img alt="" src={MichiganPhoto}/>
            <h1 className="text-white text-xl font-bold py-2">Remarkable Results in Michigan!</h1>
            <p className="text-white">The University of Toronto Formula Racing Team finished 5th overall!</p>
          </div>
          <div className="carouselCard">
            <NavLink to="/nh23blog"><img alt="" src={TeamPhoto}/></NavLink>
            <h1 className="text-white text-xl font-bold py-2">A Win in New Hampshire!</h1>
            <p className="text-white">The team secured a 1st place victory in the 2023 Formula SAE competition in New Hampshire</p>
          </div>
          <div className="carouselCard">
            <img alt="" src={UnveilingPhoto}/>
            <h1 className="text-white text-xl font-bold py-2">Unveiling the UT23</h1>
            <p className="text-white">The 2023 formula car was unveiled in Toronto</p>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default HomeCarousel
