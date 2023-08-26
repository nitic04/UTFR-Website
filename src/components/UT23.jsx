import React from 'react';
import UT23Header from '../assets/CzechRepublic2023/Czech14.jpeg';
// import UT23Cutout from '../assets/HistoricCarPhotos/UT23/UT23_Cutout.png';
import UT23Slant1 from '../assets/HistoricCarPhotos/UT23/UT23_Slant1.png';
import UT23Slant2 from '../assets/HistoricCarPhotos/UT23/UT23_Slant2.png';
// import ShootoutCard2021Image from '../assets/ShootoutPhotos/UTFRShootout2021Photo.jpeg';

import GoToTop from './GoToTop'
// import CarPartsDiagram from './CarPartsDiagram';
// import UT23Carousel from './UT23Carousel';

const UT23 = () => {
  return (
    <div className='text-white'>
        <div className='w-full h-screen' style={{
            backgroundImage: `url(${UT23Header})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            <h1 className='text-[200px] text-white relative top-[30%] px-12 font-bold'>UT23</h1>
            <div className='flex absolute bottom-10 gap-x-10'>
                <div>
                    <h1 className='text-2xl lg:text-5xl text-white px-12 flex justify-center font-bold '>500 km/h</h1>
                    <p className=' text-xl lg:text-[30px] text-white px-12 flex justify-center'>Top Speed</p>
                </div>
                <div>
                    <h1 className='text-2xl lg:text-5xl text-white px-12 flex justify-center font-bold'>3.6 s</h1>
                    <p className='text-xl lg:text-[30px] text-white px-12 flex justify-center'>0 - 100 km/h</p>
                </div>
                <div>
                    <h1 className='text-2xl lg:text-5xl text-white px-12 flex justify-center font-bold'>109 kW at 5500 RPM</h1>
                    <p className='text-xl lg:text-[30px] text-white px-12 flex justify-center'>Peak Power</p>
                </div>
            </div>
        </div>
        <div className='bg-[#2657A3]'>
            <div className='w-full'>
                <div className='grid lg:grid-cols-3'>
                    <div className='col-span-2'>
                        <img src={UT23Slant2} className='w-full' alt=""/>
                    </div>
                    <div className='pt-24 col-span-1 px-10'>
                        <h1 className='text-3xl pb-5'>A New Era of Engineering</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora quo libero quidem perspiciatis, quam quis praesentium cupiditate voluptas repellat laboriosam odio veniam modi eum, eveniet fugiat neque delectus! Consectetur, delectus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea rem itaque dolor! Tenetur dignissimos itaque odio voluptatibus quibusdam laudantium nulla odit blanditiis, ipsa facere deleniti ducimus soluta, optio nisi id! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi aut qui pariatur expedita minus earum id consequatur dicta voluptates vitae. Quisquam sed molestiae voluptatem minus nam doloremque nisi dignissimos labore!</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-evenly px-5 pt-14 lg:py-10'>
                <div>
                    <h1 className='flex justify-center text-3xl lg:text-6xl font-bold'>1st Place</h1>
                    <p className='flex justify-center text-xl pt-2'>New Hampshire 2023</p>
                </div>
                <div>
                    <h1 className='flex justify-center text-3xl lg:text-6xl font-bold'>5th Place</h1>
                    <p className='flex justify-center text-xl pt-2'>Michigan 2023</p>
                </div>
                <div>
                    <h1 className='flex justify-center text-3xl lg:text-6xl font-bold'>6th/1st Place in EV Efficiency</h1>
                    <p className='flex justify-center text-xl pt-2'>Czech Republic 2023</p>
                </div>
            </div>
            {/* <div className='flex justify-evenly px-5 py-10'>
                <div>
                    <h1 className='flex justify-center text-6xl font-bold'>573kg</h1>
                    <p className='flex justify-center text-xl pt-2'>Overall Weight (without driver)</p>
                </div>
                <div>
                    <h1 className='flex justify-center text-6xl font-bold'>1497mm</h1>
                    <p className='flex justify-center text-xl pt-2'>Width</p>
                </div>
                <div>
                    <h1 className='flex justify-center text-6xl font-bold'>EMRAX 228</h1>
                    <p className='flex justify-center text-xl pt-2'>Motor</p>
                </div>
            </div> */}
            <div>
                <div className='grid lg:grid-cols-3'>
                    <div className='pt-24 col-span-1 px-10'>
                        <h1 className='text-3xl pb-5'>Precision Engineering</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora quo libero quidem perspiciatis, quam quis praesentium cupiditate voluptas repellat laboriosam odio veniam modi eum, eveniet fugiat neque delectus! Consectetur, delectus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea rem itaque dolor! Tenetur dignissimos itaque odio voluptatibus quibusdam laudantium nulla odit blanditiis, ipsa facere deleniti ducimus soluta, optio nisi id! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi aut qui pariatur expedita minus earum id consequatur dicta voluptates vitae. Quisquam sed molestiae voluptatem minus nam doloremque nisi dignissimos labore!</p>
                    </div>
                    <div className='col-span-2'>
                        <img src={UT23Slant1} className='w-full' alt="" />
                    </div>
                </div>
            </div>
            {/* <CarPartsDiagram /> */}
            <div className='text-white flex justify-center py-20'>
                <div className='w-[700px] pb-3'>
                    <h1 className='text-4xl flex justify-center pb-10'>Technical Specifications</h1>
                    <div className='flex border-b-2'>
                        <p className='text-2xl py-5'>Overall Weight (Without Driver)</p>
                        <p className='text-2xl py-5 ml-auto'>573 lbs</p>
                    </div>
                    <div className='flex border-b-2'>
                        <p className='text-2xl py-5'>Width</p>
                        <p className='text-2xl py-5 ml-auto'>1497 mm</p>
                    </div>
                    <div className='flex border-b-2'>
                        <p className='text-2xl py-5'>Length</p>
                        <p className='text-2xl py-5 ml-auto'>2971 mm</p>
                    </div>
                    <div className='flex border-b-2'>
                        <p className='text-2xl py-5'>Height</p>
                        <p className='text-2xl py-5 ml-auto'>1191 mm</p>
                    </div>
                    <div className='flex border-b-2'>
                        <p className='text-2xl py-5'>Motor</p>
                        <p className='text-2xl py-5 ml-auto'>EMRAX 228 High Voltage</p>
                    </div>
                </div>
            </div>
        </div>
        {/* <UT23Carousel /> */}
        <GoToTop />
    </div>
  )
}

export default UT23
