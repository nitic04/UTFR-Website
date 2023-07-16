import React from 'react'
import Background from '../assets/TeamCarPhotos/Car.jpeg'
import Fade from 'react-reveal/Fade';

const Home = () => {

  return (
    <div>
      <div className='w-full h-screen' style={{
        backgroundImage: `url(${Background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}>
        <h1 className='text-9xl text-white pt-[550px] px-12 font-bold'>UTFR</h1>
        <Fade Bottom>
          <h1 className='text-7xl text-white px-12 font-bold'>Design. Build. Race</h1>
        </Fade>
      </div>
    </div>
  )
}

export default Home
