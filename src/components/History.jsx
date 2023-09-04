import React from 'react'
import HistoryHeader from '../assets/HistoricCarPhotos/UT08/UT08.jpeg'
import GoToTop from './GoToTop'
import Slider from "react-slick"
import HistoryUT05 from '../assets/TeamCarPhotos/HistoryUT05.jpeg'
// import { NavLink } from 'react-router-dom'
import { Fade } from "react-awesome-reveal";

import UT03 from '../assets/HistoricCarPhotos/UT03/UT03.jpeg'
import UT04 from '../assets/HistoricCarPhotos/UT04/UT04.png'
import UT05 from '../assets/HistoricCarPhotos/UT05/UT05.jpeg'
import UT07 from '../assets/HistoricCarPhotos/UT07/UT07.jpeg'
import UT08 from '../assets/HistoricCarPhotos/UT08/UT08_4.jpeg'
import UT09 from '../assets/HistoricCarPhotos/UT09/UT09.jpeg'
import UT10 from '../assets/HistoricCarPhotos/UT10/UT10.jpeg'
import UT11 from '../assets/HistoricCarPhotos/UT11/UT11.jpeg'
import UT15 from '../assets/HistoricCarPhotos/UT15/UT15.jpeg'
import UT16 from '../assets/HistoricCarPhotos/UT16/UT16.jpeg'
import UT17 from '../assets/HistoricCarPhotos/UT17/UT17.jpeg'
import UT18 from '../assets/HistoricCarPhotos/UT18/UT18.jpeg'
import UT19 from '../assets/HistoricCarPhotos/UT19/UT19.jpeg'
import UT21 from '../assets/HistoricCarPhotos/UT21/UT21.jpeg'
import UT22 from '../assets/HistoricCarPhotos/UT22/UT22.jpeg'
import UT23 from '../assets/HistoricCarPhotos/UT23/UT23_Molson.jpeg'

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

const History = () => {
  var settings = {
    className: "center",
    centerMode: true,
    centerPadding: "60px",
    dots: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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
    <div className='h-[100%]'>
      <div className='w-full h-screen' style={{
        backgroundImage: `url(${HistoryHeader})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}>
      <Fade triggerOnce>
      <h1 className='text-8xl text-white absolute bottom-24 px-12 font-bold'>History</h1>
      </Fade>
      </div>
      <div>
        <div className='text-white flex flex-col justify-center items-center w-full h-full bg-[#181818]'>
          <div className='h-full w-full about grid lg:grid-cols-2'>
            <div className='my-auto p-10'>
              <Fade cascade damping={0.2} triggerOnce>
              <p className='text-3xl md:text-4xl font-bold inline border-b-4 border-[#ED3833]'>History of The Team</p>
              <p className='pt-5'>The University of Toronto began its involvement in FSAE in 1997, and completed a prototype vehicle in 1998. Through testing and research on the vehicle, a second, lighter frame was constructed in 1999. In 2003, 2005, and 2006, the team took three overall championships at Formula Student UK - a record that would stand until 2016.</p>
              <p className='pt-5 text-white'>Over the course of the early 2000s, several different chassis concepts were explored, eventually moving from steel spaceframes, to hybrid concepts, to a full monocoque. In 2010, the team switched to the light single cylinder engines that still power our cars today. In 2016, our first aerodynamics package was created to improve high speed cornering capability. In 2019, the team continued to develop the hybrid chassis concept, and introduced prototypes for a drag reduction system and electric shifter. The team continues to place respectably in rankings in both static and dynamic competitions.</p>
              </Fade>
            </div>
            <div className='w-full h-20vh' style={{
              backgroundImage: `url(${HistoryUT05})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
              }}>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#131212]'>
        <div className="px-8 py-10">
          <Slider {...settings}>
            <div className="carouselCard">
              {/* <NavLink to="/UT03"></NavLink> */}
              <img alt="" src={UT03}/>
              <h1 className="text-white text-xl font-bold py-2">UT03</h1>
            </div>
            <div className="carouselCard">
              <img alt="" src={UT04}/>
              <h1 className="text-white text-xl font-bold py-2">UT04</h1>
            </div>
            <div className="carouselCard">
              <img alt="" src={UT05}/>
              <h1 className="text-white text-xl font-bold py-2">UT05</h1>
            </div>
            <div className="carouselCard">
              <img alt="" src={UT07}/>
              <h1 className="text-white text-xl font-bold py-2">UT07</h1>
            </div>
            <div className="carouselCard">
              <img alt="" src={UT08}/>
              <h1 className="text-white text-xl font-bold py-2">UT08</h1>
            </div>
            <div className="carouselCard">
              <img alt="" src={UT09}/>
              <h1 className="text-white text-xl font-bold py-2">UT09</h1>
            </div>
            <div className="carouselCard">
              <img alt="" src={UT10}/>
              <h1 className="text-white text-xl font-bold py-2">UT10</h1>
            </div>
            <div className="carouselCard">
              <img alt="" src={UT11}/>
              <h1 className="text-white text-xl font-bold py-2">UT11</h1>
            </div>
            <div className="carouselCard">
              <img alt="" src={UT15}/>
              <h1 className="text-white text-xl font-bold py-2">UT15</h1>
            </div>
            <div className="carouselCard">
              <img alt="" src={UT16}/>
              <h1 className="text-white text-xl font-bold py-2">UT16</h1>
            </div>
            <div className="carouselCard">
              <img alt="" src={UT17}/>
              <h1 className="text-white text-xl font-bold py-2">UT17</h1>
            </div>
            <div className="carouselCard">
              <img alt="" src={UT18}/>
              <h1 className="text-white text-xl font-bold py-2">UT18</h1>
            </div>
            <div className="carouselCard">
              <img alt="" src={UT19}/>
              <h1 className="text-white text-xl font-bold py-2">UT19</h1>
            </div>
            <div className="carouselCard">
              <img alt="" src={UT21}/>
              <h1 className="text-white text-xl font-bold py-2">UT21</h1>
            </div>
            <div className="carouselCard">
              <img alt="" src={UT22}/>
              <h1 className="text-white text-xl font-bold py-2">UT22</h1>
            </div>
            <div className="carouselCard">
              <img alt="" src={UT23}/>
              <h1 className="text-white text-xl font-bold py-2">UT23</h1>
            </div>
          </Slider>
        </div>
      </div>
      
      <GoToTop />
    </div>
  )
}

export default History
