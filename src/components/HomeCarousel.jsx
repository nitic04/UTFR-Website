import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import TeamPhoto from '../assets/2023/NewHampshire2023/TeamPhoto.jpeg';
import MichiganPhoto from '../assets/2023/Michigan2023/Michigan23Win.jpeg';
import CzechPhoto from '../assets/2023/CzechRepublic2023/Czech23Win.jpeg';
import ArticlePhoto from '../assets/2023/VarsityArticleImage.jpg';
import NH24Win from '../assets/2024/2024NHWin.jpg';
import Michigan24 from '../assets/2024/Michigan_2024.JPG'

// import { NavLink } from 'react-router-dom';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="carouselArrow nextArrow">
      <FaChevronRight className={className}
      style={{ ...style, fill: 'white'}}
      onClick={onClick}/>
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="carouselArrow nextArrow">
      <FaChevronLeft className={className}
      style={{ ...style, fill: 'white'}}
      onClick={onClick}/>
    </div>
  );
}

const HomeCarousel = () => {
  var settings = {
    // className: "center",
    // centerMode: true,
    // centerPadding: "100px",
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          // centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
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
    <div className="w-full h-[100%] bg-[#181818]">
      <div className="px-8 md:px-16 py-10">
        <Slider {...settings}>
          <div className="carouselCard">
            <img className="w-full" alt="" src="https://ik.imagekit.io/18gwys9x0/UT24/DVWorks.gif"/>
            <h1 className="text-white text-xl font-bold py-2">UT24 becomes Canada's first driverless FSAE car!</h1>
            <p className="text-white">After two years of hard work, the driverless team has successfully tested their autonomous system with UT24!</p>
          </div>
          <div className="carouselCard">
            <img alt="" src={Michigan24}/>
            <h1 className="text-white text-xl font-bold py-2">Top ten finish in Michigan!</h1>
            <p className="text-white">UTFR reached design finals and placed 9th overall in Formula SAE Electric Michigan this year!</p>
          </div>
          <div className="carouselCard">
            <img alt="" src={NH24Win}/>
            <h1 className="text-white text-xl font-bold py-2">2-time New Hampshire Champions!</h1>
            <p className="text-white">UTFR secured its second win in a row at Formula Hybrid + Electric</p>
          </div>
          <div className="carouselCard">
            <a href="https://thevarsity.ca/2023/10/29/faster-and-faster-u-of-ts-formula-racing-team-innovates-and-dominates/" target="_blank" rel="noreferrer"><img alt="" src={ArticlePhoto}/></a>
            <h1 className="text-white text-xl font-bold py-2">Faster and Faster: U of T’s Formula Racing Team innovates and dominates</h1>
            <p className="text-white">Checkout The Varsity's article about the team!</p>
          </div>
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
            {/* <NavLink to="/nh23blog"></NavLink> */}
            <img alt="" src={TeamPhoto}/>
            <h1 className="text-white text-xl font-bold py-2">A Win in New Hampshire!</h1>
            <p className="text-white">The team secured 1st place overall in the 2023 Formula SAE competition in New Hampshire</p>
          </div>
          <div className="carouselCard">
            <img alt="" src="https://i.postimg.cc/SKbsdRtW/Team-Photo-Unveiling.webp"/>
            <h1 className="text-white text-xl font-bold py-2">Unveiling the UT23</h1>
            <p className="text-white">UTFR's first electric and driverless capable car was unveiled!</p>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default HomeCarousel
