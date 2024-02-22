import React from 'react';
import UT23Header from '../assets/CzechRepublic2023/Czech14.webp';
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
            <div className='headerOverlay'>
            <div className='h-full flex flex-col justify-end'>
            <Fade cascade damping={0.2} triggerOnce>
            <h1 className='font-bold text-[9rem] text-white text-center md:text-left md:pl-10 mb-96 pb-10 md:pb-0 md:mb-52'>UT23</h1>
            <div className='pl-14 md:flex absolute space-y-2 bottom-10 gap-x-10 mt-24 md:mt-0'>
                <div>
                    <h1 className='text-2xl lg:text-5xl text-white lg:px-12 flex md:justify-center font-bold'>116 km/h</h1>
                    <p className=' text-xl lg:text-[30px] text-white lg:px-12 flex md:justify-center'>Top Speed</p>
                </div>
                <div>
                    <h1 className='text-2xl lg:text-5xl text-white lg:px-12 flex md:justify-center font-bold'>4.26 s</h1>
                    <p className='text-xl lg:text-[30px] text-white lg:px-12 flex md:justify-center'>75m Acceleration</p>
                </div>
                <div>
                    <h1 className='text-2xl lg:text-5xl text-white lg:px-12 flex md:justify-center font-bold'>109 kW at 5500 RPM</h1>
                    <p className='text-xl lg:text-[30px] text-white lg:px-12 flex md:justify-center'>Peak Power</p>
                </div>
            </div>
            </Fade>
            </div>
            </div>
        </div>
        <div className='bg-[#2657A3]'>
            <div className='w-full'>
                <div className='grid lg:grid-cols-3'>
                    <div className='col-span-2'>
                        <img src={UT23Slant2} className='w-full' alt=""/>
                    </div>
                    <div className='pt-16 col-span-1 px-10'>
                        <Fade cascade damping={0.2} triggerOnce>
                        <h1 className='text-2xl pb-5 font-medium'>A New Era of Precision Engineering</h1>
                        <p className='text-lg'>With a history rooted in pushing the boundaries of engineering, UTFR has undertaken a monumental challenge this year that marks a paradigm shift in their journey. For the first time UTFR has designed, developed, and competed with a fully electric and driverless capable vehicle. The transition from traditional combustion engines to fully electric powertrains demanded a thorough rethinking of every aspect of vehicle design. Team members had to grapple with new considerations, such as battery management, electric propulsion systems, and efficiency; a true testament to the team's adaptability and engineering prowess.</p>
                        </Fade>
                    </div>
                </div>
            </div>
            <div className='md:flex justify-evenly px-5 pt-14 lg:py-10'>
                <Fade triggerOnce>
                <div className='py-2'>
                    <h1 className='flex justify-center text-3xl lg:text-5xl font-bold'>1st Place Overall</h1>
                    <p className='flex justify-center text-xl pt-2'>New Hampshire 2023</p>
                </div>
                <div className='py-2'>
                    <h1 className='flex justify-center text-3xl lg:text-5xl font-bold'>5th Place Overall</h1>
                    <p className='flex justify-center text-xl pt-2'>Michigan 2023</p>
                </div>
                <div className='py-2'>
                    <h1 className='flex justify-center text-3xl lg:text-5xl font-bold'>6th Place Overall</h1>
                    <p className='flex justify-center text-xl pt-2'>Czech Republic 2023</p>
                </div>
                </Fade>
            </div>
            <div>
                <div className='grid lg:grid-cols-3'>
                    <div className='pt-12 col-span-1 px-10'>
                        <Fade cascade damping={0.2} triggerOnce>
                        <h1 className='text-2xl pb-5 font-medium'>Driving Forward... Autonomously</h1>
                        <p className='text-lg pb-5'>This year, the team began the development of a driverless team to compete in autonomous events during competition. Our state-of-the-art perception system utilizes real-time machine learning to decode track intricacies, complemented by stereo cameras that grant exceptional depth perception. Navigational precision is achieved through optimal trajectory planning, seamlessly translated into action by our advanced drive-by-wire control system. This amalgamation empowers our vehicle to navigate dynamically, anticipate obstacles, and execute maneuvers with unmatched accuracy, signifying a leap forward in technological innovation within the competitive landscape.</p>
                        </Fade>
                    </div>
                    <div className='col-span-2'>
                        <img src={UT23Slant1} className='w-full' alt="" />
                    </div>
                </div>
            </div>
            <div>
                <div className='flex text-white justify-center py-20'>
                    <div className='w-[700px] pb-3 px-5'>
                        <Fade cascade damping={0.2} triggerOnce>
                        <h1 className='text-3xl pb-5 md:text-4xl flex justify-center md:pb-10'>Technical Specifications</h1>
                        <div className='flex border-b-2'>
                            <span className='hidden md:inline md:text-2xl py-5'>Overall Weight (Without Driver)</span>
                            <span className='inline md:hidden md:text-2xl py-5'>Overall Weight (w/o Driver)</span>
                            <p className='md:text-2xl py-5 ml-auto'>260 kg</p>
                        </div>
                        <div className='flex border-b-2'>
                            <p className='md:text-2xl py-5'>Length</p>
                            <p className='md:text-2xl py-5 ml-auto'>2971 mm</p>
                        </div>
                        <div className='flex border-b-2'>
                            <p className='md:text-2xl py-5'>Width</p>
                            <p className='md:text-2xl py-5 ml-auto'>1497 mm</p>
                        </div>
                        <div className='flex border-b-2'>
                            <p className='md:text-2xl py-5'>Height</p>
                            <p className='md:text-2xl py-5 ml-auto'>1191 mm</p>
                        </div>
                        <div className='flex border-b-2'>
                            <p className='md:text-2xl py-5'>Motor</p>
                            <p className='md:text-2xl py-5 ml-auto'>EMRAX 228 High Voltage</p>
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
