import React from 'react'
import GoToTop from './GoToTop'
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
import ShootoutCard2019Image from '../assets/ShootoutPhotos/UTFRShootout2019GroupPhoto.jpeg'
import ShootoutCard2021Image from '../assets/ShootoutPhotos/UTFRShootout2021Photo.jpeg'

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
          <div className='flex justify-center pt-10'>
          <div className='grid grid-cols-1 lg:grid-cols-3'>
            <div className='shootoutCard w-[450px] h-[300px] mx-5 mb-5' style={{
            backgroundImage: `url(${ShootoutCard2019Image})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
            }}>
              <h1 className='flex justify-center text-5xl font-bold pt-32'>Shootout 2019</h1>
              <div className='flex pt-3 justify-center space-x-5'>
                <a href="https://docs.google.com/spreadsheets/d/1YENFcnf0Cyh2U3froM9PQei7RHiANrUHWjx8A5oifwg/edit#gid=224179064" target="_blank"><p className='text-lg hover:font-bold transition duration-200'>Official Results</p></a>
                <a href="https://drive.google.com/drive/u/3/folders/14EwBEUBqF-8kOvZG1zvI1CQpSOmkyS5j"><p className='text-lg hover:font-bold transition duration-200' >Official Photography</p></a>
              </div>
            </div>
            <div className='shootoutCard w-[450px] h-[300px] mx-5 mb-5' style={{
            backgroundImage: `url(${ShootoutCard2021Image})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
            }}>
              <h1 className='flex justify-center text-5xl font-bold pt-32'>Shootout 2021</h1>
              <div className='flex pt-3 justify-center space-x-5'>
                <a href="https://docs.google.com/spreadsheets/u/4/d/149xlNqXhhEaQdj7Bto80WQzUqyR0rrDdc8-bdC4OVwU/edit?usp=sharing" target="_blank"><p className='text-lg hover:font-bold transition duration-200'>Official Results</p></a>
                <a href="https://drive.google.com/drive/u/3/folders/1w77s7Mhibkfyakz1BfZ6w1TiKGmTew2A" target="_blank"><p className='text-lg hover:font-bold transition duration-200'>Official Photography</p></a>
              </div>
            </div>
            <div className='shootoutCard w-[450px] h-[300px] mx-5 mb-5' style={{
            backgroundImage: `url(${Shootout2022_14})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
            }}>
              <h1 className='flex justify-center text-5xl font-bold pt-32'>Shootout 2022</h1>
              <div className='flex pt-3 justify-center space-x-5'>
                <a href=""><p className='text-lg hover:font-bold transition duration-200'>Official Results</p></a>
                <a href=""><p className='text-lg hover:font-bold transition duration-200'>Official Photography</p></a>
              </div>
            </div>
          </div>
          </div>
        </div>
        <div className='w-full h-[300px] bg-[#131212]'>
        </div>
        <GoToTop />
    </div>
  )
}

export default Shootout
