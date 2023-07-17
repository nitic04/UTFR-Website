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
      
    </div>
  )
}

export default Shootout
