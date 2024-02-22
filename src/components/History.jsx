import React from 'react'
import HistoryHeader from '../assets/HistoricCarPhotos/UT08/UT08.jpeg'
import GoToTop from './GoToTop'
import Slider from "react-slick"
import HistoryUT05 from '../assets/TeamCarPhotos/HistoryUT05.jpeg'
// import { NavLink } from 'react-router-dom'
import { Fade } from "react-awesome-reveal";

import UT99 from '../assets/HistoricCarPhotos/UT99/UT99.jpeg'
import UT00 from '../assets/HistoricCarPhotos/UT00/UT00.jpeg'
import UT01 from '../assets/HistoricCarPhotos/UT01/UT01.jpeg'
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
      <div className='headerOverlay'>
      <div className='h-full flex flex-col justify-end'>
        <Fade triggerOnce>
        <h1 className='font-bold text-8xl md:text-9xl text-white text-center md:text-left md:pl-10 mb-40 md:mb-16'>History</h1>
        </Fade>
      </div>
      </div>
      </div>
      <div>
        <div className='text-white flex flex-col justify-center items-center w-full h-full bg-[#181818]'>
          <div className='h-full w-full about flex flex-col md:flex-row'>
            <div className='w-[130%] p-10'>
              <Fade cascade damping={0.2} triggerOnce>
              <p className='text-3xl md:text-4xl font-bold inline border-b-4 border-[#ED3833]'>History of The Team</p>
              <p className='pt-5'>The University of Toronto Formula SAE Racing Team was founded during the 1996-97 academic year. Leading up to our first competition season in 1999 the team was busy finding sponsors, conducting R&D and developing a prototype vehicle.</p>
              <p className='pt-5'>In 2003, 2005, and 2006, the team took three overall championships at Formula Student UK - a record that would stand until 2016! We also placed in the top 5 in 2002, 2004 and 2007.</p>
              <p className='pt-5'>Over the course of the 2000s, several different chassis concepts were explored, moving from steel space frames to hybrid concepts, and finally to a full carbon fibre monocoque by the end of the decade. Continuing our technical developments in 2016 we manufactured our first aerodynamics package, which included multi-element front and rear wings.</p>
              <p className='pt-5'>In 2022 we entered a new era, transitioning from an internal combustion engine to a fully electric vehicle. The 2023 season was the breakout year for our electric era! We attended New Hampshire Formula Hybrid + Electric for the first time and placed a remarkable first overall at our first competition with a running electric car!</p>
              <p className='pt-5'>For 2024 we have our sights set on returning to Formula Student Germany and for the first time we will be competing in the Driverless Cup! We continually work to build on previous successes and push the boundaries of what is possible in the pursuit of the ultimate lap time.</p>
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
              <img alt="" src={UT99}/>
              <h1 className="text-white text-xl font-bold py-2">UT99</h1>
            </div>
            <div className="carouselCard">
              <img alt="" src={UT00}/>
              <h1 className="text-white text-xl font-bold py-2">UT00</h1>
            </div>
            <div className="carouselCard">
              <img alt="" src={UT01}/>
              <h1 className="text-white text-xl font-bold py-2">UT01</h1>
            </div>
            <div className="carouselCard">
              {/* <NavLink to="/UT03"></NavLink> */}
              <img alt="" src={UT03}/>
              <h1 className="text-white text-xl font-bold py-2">UT03</h1>
            </div>
            <div className="carouselCard">
              <img alt="" src={UT05}/>
              <h1 className="text-white text-xl font-bold py-2">UT05</h1>
            </div>
            <div className="carouselCard">
              <img alt="" src={UT04}/>
              <h1 className="text-white text-xl font-bold py-2">UT06</h1>
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
