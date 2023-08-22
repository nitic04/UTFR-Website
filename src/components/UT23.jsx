import React from 'react';
import UT23Header from '../assets/HistoricCarPhotos/UT23/UT23_Molson.jpeg';
import UT23Cutout from '../assets/HistoricCarPhotos/UT23/UT23_Cutout.png';
import UT23Slant1 from '../assets/HistoricCarPhotos/UT23/UT23_Slant1.png';
import UT23Slant2 from '../assets/HistoricCarPhotos/UT23/UT23_Slant2.png';
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
            <h1 className='text-[250px] text-white relative top-[30%] px-12 font-bold'>UT23</h1>
            <div className='flex absolute bottom-10 space-x-10'>
                <div>
                    <h1 className='text-[70px] text-white px-12 flex justify-center font-bold'>500 km/h</h1>
                    <p className='text-[40px] text-white px-12 flex justify-center'>Top Speed</p>
                </div>
                <div>
                    <h1 className='text-[70px] text-white px-12 flex justify-center font-bold'>1.3 s</h1>
                    <p className='text-[40px] text-white px-12 flex justify-center'>0 - 100 km/h</p>
                </div>
                <div>
                    <h1 className='text-[70px] text-white px-12 flex justify-center font-bold'>800 kW</h1>
                    <p className='text-[40px] text-white px-12 flex justify-center'>Power</p>
                </div>
            </div>
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
            <div className='grid grid-cols-3'>
                <div className='bg-[#03153c] col-span-2'>
                    <img src={UT23Slant2} className='w-full' />
                </div>
                <div className='bg-[#03153c] pt-24 col-span-1'>
                    <div>
                        <h1 className='flex justify-center text-6xl font-bold'>564kg</h1>
                        <p className='flex justify-center'>Overall Weight</p>
                    </div>
                    <div className='pt-16'>
                        <h1 className='flex justify-center text-6xl font-bold'>1497mm</h1>
                        <p className='flex justify-center'>Width</p>
                    </div>
                    <div className='pt-16'>
                        <h1 className='flex justify-center text-6xl font-bold'>EMRAX 228</h1>
                        <p className='flex justify-center'>Motor</p>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div className='grid grid-cols-2'>
                <img src={UT23Slant2} alt="" />
                <img src={UT23Slant1} alt="" />
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
