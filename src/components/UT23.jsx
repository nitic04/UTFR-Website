import React from 'react'
import UT23Header from '../assets/HistoricCarPhotos/UT23/UT23_Molson.jpeg'
import UT23Cutout from '../assets/HistoricCarPhotos/UT23/UT23_Cutout.png'

import GoToTop from './GoToTop'

const UT23 = () => {
  return (
    <div className='text-white'>
        <div className='w-full h-screen' style={{
            backgroundImage: `url(${UT23Header})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            <h1 className='text-8xl text-white pt-[500px] px-12 font-bold'>UT23</h1>
        </div> 
        <div className='flex justify-center space-x-10 py-10'>
            <div>
                <h1 className='flex justify-center text-6xl font-bold'>536 lbs</h1>
                <p className='flex justify-center'>Overall Weight</p>
            </div>
            <div>
                <h1 className='flex justify-center text-6xl font-bold'>546V Peak</h1>
                <p className='flex justify-center'>Voltage</p>
            </div>
            <div>
                <h1 className='flex justify-center text-6xl font-bold'>EMRAX 228</h1>
                <p className='flex justify-center'>Motor</p>
            </div>
        </div>
        <div className='h-screen bg-gradient-to-r from-[#08235f] to-[#011e41]'>
            <div className='p-32 w-[700px]'>
                <h1 className='text-2xl py-3'>Engineered Perfection</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt nesciunt provident, earum consectetur, a expedita iure enim, suscipit doloribus sequi quibusdam optio repudiandae labore ullam quaerat quae quisquam error? Dolorum!</p>
            </div>
            <img src={UT23Cutout} className='absolute top-[130%]'/>
        </div>
        <div className='flex justify-center space-x-10 py-10'>
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
        </div>
        <GoToTop />
    </div>
  )
}

export default UT23
