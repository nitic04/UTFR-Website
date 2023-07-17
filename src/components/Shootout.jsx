import React from 'react'
import ShootoutHeader from '../assets/ShootoutPhotos/ShootoutHeader.jpeg'

const Shootout = () => {
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
    </div>
  )
}

export default Shootout
