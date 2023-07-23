import React from 'react'
// import UT03Image from '../assets/HighQualityImage.jpeg'

import UT03Image from '../assets/HistoricCarPhotos/UT03/UT03.jpeg'
import UT03Image2 from '../assets/HistoricCarPhotos/UT03/UT03_2.jpeg'
import UT03Image3 from '../assets/HistoricCarPhotos/UT03/UT03_3.jpeg'
import GoToTop from './GoToTop'
import Slider from "react-slick"

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

const UT03 = () => {
    var settings = {
        className: "center",
        centerMode: true,
        centerPadding: "60px",
        dots: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />,
        autoplay: true,
        autoplaySpeed: 3000,
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
        <div className='w-full h-screen' style={{
        backgroundImage: `url(${UT03Image})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}>
        <h1 className='text-4xl text-white pt-[600px] flex justify-center font-open font-bold'>2003</h1>
        <h1 className='text-8xl text-white flex justify-center font-open px-12 font-bold'>UT03</h1>
      </div>
      <div className='text-center pt-10 h-[150px] bg-white text-black'>
        <p className='text-4xl font-bold'>Competitions</p>
        <p className='text-3xl'>Formula Student UK 2003 - Overall Winner</p>
      </div>
      <div className='px-8 py-10'>
        <Slider {...settings}>
            <div className="carouselCard">
              <img alt="" src={UT03Image}/>
              <h1 className="text-white text-xl font-bold py-2">UT03</h1>
            </div>
            <div className="carouselCard">
              <img alt="" src={UT03Image2}/>
              <h1 className="text-white text-xl font-bold py-2">UT03</h1>
            </div>
            <div className="carouselCard">
              <img alt="" src={UT03Image3}/>
              <h1 className="text-white text-xl font-bold py-2">UT03</h1>
            </div>
        </Slider>
      </div>
      <GoToTop />
    </div>
  )
}

export default UT03
