import React from 'react';
import UT23Header from '../assets/CzechRepublic2023/Czech14.jpeg';
// import UT23Cutout from '../assets/HistoricCarPhotos/UT23/UT23_Cutout.png';
import UT23Slant1 from '../assets/HistoricCarPhotos/UT23/UT23_Slant1.png';
import UT23Slant2 from '../assets/HistoricCarPhotos/UT23/UT23_Slant2.png';
// import ShootoutCard2021Image from '../assets/ShootoutPhotos/UTFRShootout2021Photo.jpeg';
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import GoToTop from './GoToTop'
// import UT23Carousel from './UT23Carousel';
// import CarPartsDiagram from './CarPartsDiagram';
import { Fade } from "react-awesome-reveal";

const UT23 = () => {
  return (
    <div className='text-white'>
        <div className='w-full h-screen' style={{
            backgroundImage: `url(${UT23Header})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            <Fade cascade damping={0.2} triggerOnce>
            <h1 className='text-[100px] md:text-[200px] text-white pt-[450px] px-12 font-bold'>UT23</h1>
            <div className='flex absolute bottom-10 gap-x-10'>
                <div>
                    <h1 className='text-2xl lg:text-5xl text-white px-12 flex justify-center font-bold '>116 km/h</h1>
                    <p className=' text-xl lg:text-[30px] text-white px-12 flex justify-center'>Top Speed</p>
                </div>
                <div>
                    <h1 className='text-2xl lg:text-5xl text-white px-12 flex justify-center font-bold'>3.76 s</h1>
                    <p className='text-xl lg:text-[30px] text-white px-12 flex justify-center'>0 - 100 km/h</p>
                </div>
                <div>
                    <h1 className='text-2xl lg:text-5xl text-white px-12 flex justify-center font-bold'>109 kW at 5500 RPM</h1>
                    <p className='text-xl lg:text-[30px] text-white px-12 flex justify-center'>Peak Power</p>
                </div>
            </div>
            </Fade>
        </div>
        <div className='bg-[#2657A3]'>
            <div className='w-full'>
                <div className='grid lg:grid-cols-3'>
                    <div className='col-span-2'>
                        <img src={UT23Slant2} className='w-full' alt=""/>
                    </div>
                    <div className='pt-24 col-span-1 pr-14'>
                        <Fade cascade damping={0.2} triggerOnce>
                        <h1 className='text-2xl pb-5 font-medium'>A New Era of Precision Engineering</h1>
                        <p className='text-lg'>2023 marks the first year the team has developed and competed a fully electric vehicle. </p>
                        </Fade>
                    </div>
                </div>
            </div>
            <div className='flex justify-evenly px-5 pt-14 lg:py-10'>
                <Fade triggerOnce>
                <div>
                    <h1 className='flex justify-center text-3xl lg:text-5xl font-bold'>1st Place Overall</h1>
                    <p className='flex justify-center text-xl pt-2'>New Hampshire 2023</p>
                </div>
                <div>
                    <h1 className='flex justify-center text-3xl lg:text-5xl font-bold'>5th Place Overall</h1>
                    <p className='flex justify-center text-xl pt-2'>Michigan 2023</p>
                </div>
                <div>
                    <h1 className='flex justify-center text-3xl lg:text-5xl font-bold'>6th Place Overall</h1>
                    <p className='flex justify-center text-xl pt-2'>Czech Republic 2023</p>
                </div>
                </Fade>
            </div>
            <div>
                <div className='grid lg:grid-cols-3'>
                    <div className='pt-24 col-span-1 pl-14'>
                        <Fade cascade damping={0.2} triggerOnce>
                        <h1 className='text-2xl pb-5 font-medium'>Driving Forward... Autonomously</h1>
                        <p className='text-lg'>This year, the team began the development of a driverless team to compete in autonomous events during competition. The perception system employs state-of-the-art real-time machine learning algorithms to decode track intricacies, while the integration of stereo cameras provides a remarkable depth perception capability. Navigation orchestrates optimal trajectories, effortlessly translated into action through our advanced drive-by-wire control system.</p>
                        </Fade>
                    </div>
                    <div className='col-span-2'>
                        <img src={UT23Slant1} className='w-full' alt="" />
                    </div>
                </div>
            </div>
            <div>
                <div className='flex text-white justify-center py-20'>
                    <div className='w-[700px] pb-3'>
                        <Fade cascade damping={0.2} triggerOnce>
                        <h1 className='text-4xl flex justify-center pb-10'>Technical Specifications</h1>
                        <div className='flex border-b-2'>
                            <p className='text-2xl py-5'>Overall Weight (Without Driver)</p>
                            <p className='text-2xl py-5 ml-auto'>573 lbs</p>
                        </div>
                        <div className='flex border-b-2'>
                            <p className='text-2xl py-5'>Length</p>
                            <p className='text-2xl py-5 ml-auto'>2971 mm</p>
                        </div>
                        <div className='flex border-b-2'>
                            <p className='text-2xl py-5'>Width</p>
                            <p className='text-2xl py-5 ml-auto'>1497 mm</p>
                        </div>
                        <div className='flex border-b-2'>
                            <p className='text-2xl py-5'>Height</p>
                            <p className='text-2xl py-5 ml-auto'>1191 mm</p>
                        </div>
                        <div className='flex border-b-2'>
                            <p className='text-2xl py-5'>Motor</p>
                            <p className='text-2xl py-5 ml-auto'>EMRAX 228 High Voltage</p>
                        </div>
                        </Fade>
                    </div>
                </div>
            </div>
            {/* <CarPartsDiagram /> */}
            {/* <UT23Carousel /> */}
        </div>
        <GoToTop />
    </div>
  )
}

export default UT23
