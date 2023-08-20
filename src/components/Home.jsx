import React from 'react'
import Background from '../assets/CzechRepublic2023/Czech23_1.jpeg'

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
        <h1 className='lg:text-7xl text-white px-12 font-bold text-6xl'>Design. Build. Race.</h1>
      </div>
    </div>
  )
}

export default Home
