import React from 'react'
import UT23Header from '../assets/HistoricCarPhotos/UT23/UT23_Molson.jpeg';
import UT23Cutout from '../assets/HistoricCarPhotos/UT23/UT23_Cutout.png';
import ShootoutCard2021Image from '../assets/ShootoutPhotos/UTFRShootout2021Photo.jpeg';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';


import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <IoIosArrowForward className={className} style={{ ...style, display: "block", color: "white"}} onClick={onClick}/>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <IoIosArrowBack className={className} style={{ ...style, display: "block", color: "white"}} onClick={onClick}/>
  );
}

const UT23Carousel = () => {
    var settings = {
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

  return (
    <div>
      <div className=''>
        <Slider {...settings}>
            <div className="">
                <div className='grid grid-cols-2'>
                    <img className="h-[500px] object-cover" alt="" src={UT23Header}/>
                    <div className='bg-white h-[500px]'>
                    </div>
                </div>
            </div>
            <div className="">
                <img alt="" src={UT23Header}/>
            </div>
            <div className="">
                <img alt="" src={UT23Header}/>
            </div>
            <div className="">
                <img alt="" src={UT23Header}/>
            </div>
            </Slider>
        </div>
    </div>
  )
}

export default UT23Carousel
