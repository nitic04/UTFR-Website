import React from 'react'
import ShootoutHeader from '../assets/ShootoutPhotos/Shootout2022/ShootoutHeader.jpeg'
import Shootout2022_1 from '../assets/ShootoutPhotos/Shootout2022/Shootout2022.jpg'
import Shootout2022_2 from '../assets/ShootoutPhotos/Shootout2022/Shootout2022_2.JPG'
import Shootout2022_3 from '../assets/ShootoutPhotos/Shootout2022/Shootout2022_3.JPG'
import Shootout2022_4 from '../assets/ShootoutPhotos/Shootout2022/Shootout2022_4.JPG'
import Shootout2022_5 from '../assets/ShootoutPhotos/Shootout2022/Shootout2022_5.jpg'
import Shootout2022_6 from '../assets/ShootoutPhotos/Shootout2022/Shootout2022_6.jpg'
import Shootout2022_7 from '../assets/ShootoutPhotos/Shootout2022/Shootout2022_7.jpg'
import Shootout2022_8 from '../assets/ShootoutPhotos/Shootout2022/Shootout2022_8.JPG'
import Shootout2022_9 from '../assets/ShootoutPhotos/Shootout2022/Shootout2022_9.JPG'
import Shootout2022_10 from '../assets/ShootoutPhotos/Shootout2022/Shootout2022_10.JPG'
import Shootout2022_11 from '../assets/ShootoutPhotos/Shootout2022/Shootout2022_11.JPG'
import Shootout2022_12 from '../assets/ShootoutPhotos/Shootout2022/Shootout2022_12.JPG'
import Shootout2022_13 from '../assets/ShootoutPhotos/Shootout2022/Shootout2022_13.JPG'
import Shootout2022_14 from '../assets/ShootoutPhotos/Shootout2022/Shootout2022_14.JPG'

import HoosierLogo from '../assets/ShootoutPhotos/Shootout2022/HoosierLogo.png'
import Mobil1Logo from '../assets/ShootoutPhotos/Shootout2022/Mobil1Logo.png'
import SAEOntarioLogo from '../assets/ShootoutPhotos/Shootout2022/SAEOntarioLogo.png'
import ShiftedLogo from '../assets/ShootoutPhotos/Shootout2022/ShiftedLogo.png'

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

const Shootout = () => {
  var settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div>
        <div className='w-full h-screen' style={{
        backgroundImage: `url(${ShootoutHeader})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
        }}>
            <h1 className='text-8xl text-white pt-[550px] px-12 font-bold'>Shootout 2023</h1>
        </div>
        <div className='text-white bg-[#181818] pb-10'>
            <h1 className='flex justify-center text-4xl font-bold pt-10'>UTFR SHOOTOUT is an annual formula student competition hosted by UTFR.</h1>
            <p className='flex justify-center text-center text-lg px-10 py-5'>This year’s event took place on Saturday, October 1, 2022, at Brechin Motorsports Park where the team successfully held a design expo of various cars from FSAE teams across North America.</p>
            <div className='flex justify-center'>
                <button className='r4 text-white group border-2 px-6 py-3 my-2 transition duration-200 hover:bg-[#0190cd] hover:border-[#0190cd]'><a target="_blank">View Our Sponsorship Package</a></button>
            </div>
        </div>
        <div className='flex justify-center py-10'>
          <Slider {...settings} className='w-[1200px]'>
              <div className="carouselCard">
                <img src={Shootout2022_1}/>
              </div>
              <div className="carouselCard">
                <img src={Shootout2022_2}/>
              </div>
              <div className="carouselCard">
                <img src={Shootout2022_3}/>
              </div>
              {/* <div className="carouselCard">
                <img src={Shootout2022_4}/>
              </div> */}
              <div className="carouselCard">
                <img src={Shootout2022_5}/>
              </div>
              <div className="carouselCard">
                <img src={Shootout2022_6}/>
              </div>
              {/* <div className="carouselCard">
                <img src={Shootout2022_7}/>
              </div> */}
              <div className="carouselCard">
                <img src={Shootout2022_8}/>
              </div>
              <div className="carouselCard">
                <img src={Shootout2022_9}/>
              </div>
              {/* <div className="carouselCard">
                <img src={Shootout2022_10}/>
              </div> */}
              <div className="carouselCard">
                <img src={Shootout2022_12}/>
              </div>
              <div className="carouselCard">
                <img src={Shootout2022_13}/>
              </div>
              <div className="carouselCard">
                <img src={Shootout2022_14}/>
              </div>
          </Slider>
        </div>
        <div className='text-white bg-[#181818] pb-10'>
          <h1 className='flex justify-center text-4xl font-bold pt-10'>Previous Years</h1>
          <div className='flex justify-center pt-5 space-x-5'>
            <div className='w-[450px] h-[300px]' style={{
            backgroundImage: `url(${ShootoutHeader})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
            }}>
            </div>
            <div className='w-[450px] h-[300px]' style={{
            backgroundImage: `url(${ShootoutHeader})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
            }}>
            </div>
            <div className='w-[450px] h-[300px]' style={{
            backgroundImage: `url(${ShootoutHeader})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
            }}>
            </div>
          </div>
          {/* <div className='w-[300px] h-[200px]' style={{
            backgroundImage: `url(${ShootoutHeader})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
            }}>
              <h1 className='text-8xl text-white px-12 font-bold'>Shootout 2023</h1>
          </div> */}
        </div>
    </div>
  )
}

export default Shootout
