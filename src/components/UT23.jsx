import React, { useState } from 'react';
import UT23Header from '../assets/HistoricCarPhotos/UT23/UT23_Molson.jpeg';
import UT23Cutout from '../assets/HistoricCarPhotos/UT23/UT23_Cutout.png';
import UT23Slant1 from '../assets/HistoricCarPhotos/UT23/UT23_Slant1.png';
import UT23Slant2 from '../assets/HistoricCarPhotos/UT23/UT23_Slant2.png';
import ShootoutCard2021Image from '../assets/ShootoutPhotos/UTFRShootout2021Photo.jpeg';

import GoToTop from './GoToTop'
import CarPartsDiagram from './CarPartsDiagram';
import UT23Carousel from './UT23Carousel';

const UT23 = () => {
  return (
    <div className='text-white'>
        <div className='w-full h-screen' style={{
            backgroundImage: `url(${ShootoutCard2021Image})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            <h1 className='text-[200px] text-white relative top-[30%] px-12 font-bold'>UT23</h1>
            <div className='flex absolute bottom-10 gap-x-10'>
                <div>
                    <h1 className='text-[50px] text-white px-12 flex justify-center font-bold'>500 km/h</h1>
                    <p className='text-[30px] text-white px-12 flex justify-center'>Top Speed</p>
                </div>
                <div>
                    <h1 className='text-[50px] text-white px-12 flex justify-center font-bold'>1.3 s</h1>
                    <p className='text-[30px] text-white px-12 flex justify-center'>0 - 100 km/h</p>
                </div>
                <div>
                    <h1 className='text-[50px] text-white px-12 flex justify-center font-bold'>800 kW</h1>
                    <p className='text-[30px] text-white px-12 flex justify-center'>Power</p>
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
            <div className='grid lg:grid-cols-3'>
                <div className='bg-[#03153c] col-span-2'>
                    <img src={UT23Slant2} className='w-full' />
                </div>
                <div className='bg-[#03153c] pt-16 col-span-1 px-10'>
                    <h1 className='text-3xl pb-5'>A New Era of Engineering</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora quo libero quidem perspiciatis, quam quis praesentium cupiditate voluptas repellat laboriosam odio veniam modi eum, eveniet fugiat neque delectus! Consectetur, delectus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea rem itaque dolor! Tenetur dignissimos itaque odio voluptatibus quibusdam laudantium nulla odit blanditiis, ipsa facere deleniti ducimus soluta, optio nisi id! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi aut qui pariatur expedita minus earum id consequatur dicta voluptates vitae. Quisquam sed molestiae voluptatem minus nam doloremque nisi dignissimos labore!</p>
                </div>
            </div>
        </div>
        <div className='flex justify-evenly px-5 py-10 bg-[#181818]'>
            <div>
                <h1 className='flex justify-center text-6xl font-bold'>564kg</h1>
                <p className='flex justify-center'>Overall Weight</p>
            </div>
            <div>
                <h1 className='flex justify-center text-6xl font-bold'>1497mm</h1>
                <p className='flex justify-center'>Width</p>
            </div>
            <div>
                <h1 className='flex justify-center text-6xl font-bold'>EMRAX 228</h1>
                <p className='flex justify-center'>Motor</p>
            </div>
        </div>
        <div>
            <div className='grid lg:grid-cols-3'>
                <div className='bg-[#03153c] pt-24 col-span-1 px-10'>
                    <h1 className='text-3xl pb-5'>Precision Engineering</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora quo libero quidem perspiciatis, quam quis praesentium cupiditate voluptas repellat laboriosam odio veniam modi eum, eveniet fugiat neque delectus! Consectetur, delectus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea rem itaque dolor! Tenetur dignissimos itaque odio voluptatibus quibusdam laudantium nulla odit blanditiis, ipsa facere deleniti ducimus soluta, optio nisi id! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi aut qui pariatur expedita minus earum id consequatur dicta voluptates vitae. Quisquam sed molestiae voluptatem minus nam doloremque nisi dignissimos labore!</p>
                </div>
                <div className='bg-[#03153c] col-span-2'>
                    <img src={UT23Slant1} className='w-full' />
                </div>
            </div>
        </div>
        {/* <CarPartsDiagram /> */}
        <div className='bg-[#181818] text-white flex justify-center py-20'>
            <div className='w-[700px] pb-3'>
                <h1 className='text-4xl flex justify-center pb-10'>Technical Specifications</h1>
                <div className='flex'>
                    <p className='text-2xl py-5'>Displacement</p>
                    <p className='text-2xl py-5 ml-auto'>100</p>
                </div>
                <div className='flex'>
                    <p className='text-2xl py-5'>Displacement</p>
                    <p className='text-2xl py-5 ml-auto'>100</p>
                </div>
                <div className='flex'>
                    <p className='text-2xl py-5'>Displacement</p>
                    <p className='text-2xl py-5 ml-auto'>100</p>
                </div>
                <div className='flex'>
                    <p className='text-2xl py-5'>Displacement</p>
                    <p className='text-2xl py-5 ml-auto'>100</p>
                </div>
                <div className='flex'>
                    <p className='text-2xl py-5'>Displacement</p>
                    <p className='text-2xl py-5 ml-auto'>100</p>
                </div>
            </div>
        </div>
        {/* <UT23Carousel /> */}
        <GoToTop />
    </div>
  )
}

export default UT23
