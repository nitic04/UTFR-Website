import React from 'react';
import UT23Header from '../assets/HistoricCarPhotos/UT23/UT23_Molson.jpeg';
import UT23Cutout from '../assets/HistoricCarPhotos/UT23/UT23_Cutout.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import GoToTop from './GoToTop'

const UT23 = () => {
    var settings = {
        speed: 500,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

  return (
    <div className='text-white'>
        <div className='w-full h-screen' style={{
            backgroundImage: `url(${UT23Header})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            <h1 className='text-8xl text-white pt-[650px] px-12 font-bold'>UT23</h1>
        </div>
        <div className='flex justify-evenly px-5 py-10 bg-[#181818]'>
            <div>
                <h1 className='flex justify-center text-6xl font-bold'>1st Place</h1>
                <p className='flex justify-center'>New Hampshire 2023</p>
            </div>
            <div>
                <h1 className='flex justify-center text-6xl font-bold'>5th Place</h1>
                <p className='flex justify-center'>Michigan 2023</p>
            </div>
            <div>
                <h1 className='flex justify-center text-6xl font-bold'>1st Place</h1>
                <p className='flex justify-center'>Germany 2023</p>
            </div>
            <div>
                <h1 className='flex justify-center text-6xl font-bold'>1st Place</h1>
                <p className='flex justify-center'>Czechia 2023</p>
            </div>
        </div>
        <div className='w-full'>
            <div className='grid grid-cols-2'>
                <div className='bg-gradient-to-r from-[#03153c] to-[#000000] pt-24'>
                    <div>
                        <h1 className='flex justify-center text-6xl font-bold'>536 lbs</h1>
                        <p className='flex justify-center'>Overall Weight</p>
                    </div>
                    <div className='py-16'>
                        <h1 className='flex justify-center text-6xl font-bold'>546V Peak</h1>
                        <p className='flex justify-center'>Voltage</p>
                    </div>
                    <div className='pb-16'>
                        <h1 className='flex justify-center text-6xl font-bold'>EMRAX 228</h1>
                        <p className='flex justify-center'>Motor</p>
                    </div>
                </div>
                <div className='w-full h-[600px]' style={{
                    backgroundImage: `url(${UT23Header})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}>
                </div>
            </div>
        </div>
        {/* <div className='flex justify-center py-10'>
          <Slider {...settings} className='w-[1200px]'>
              <div className="carouselCard">
                <img alt="" src={UT23Header}/>
              </div>
              <div className="carouselCard">
                <img alt="" src={UT23Header}/>
              </div>
              <div className="carouselCard">
                <img alt="" src={UT23Header}/>
              </div>
          </Slider>
        </div> */}
        <GoToTop />
    </div>
  )
}

export default UT23
