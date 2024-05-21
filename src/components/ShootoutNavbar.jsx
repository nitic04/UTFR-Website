import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import { NavLink } from 'react-router-dom';
import Logo2024 from '../assets/ShootoutPhotos/Shootout2024/24ShootoutLogo.png'

const ShootoutNavbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='navbar fixed w-full h-[80px] flex justify-between items-center px-10 text-white bg-[#18181849] z-20'>
      <div>
        <NavLink to="/Shootout" ><img src={Logo2024} alt="Logo" style={{width: '170px'}} /></NavLink>
      </div>

      <ul className='hidden lg:flex text-lg'>
        <NavLink to="/"><li className='transition duration-200 hover:text-gray-300'>Return to the UTFR Website</li></NavLink>
      </ul>

      <div onClick={handleClick} className='lg:hidden z-10 text-gray-300 hover:text-white cursor-pointer'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full text-3xl h-screen flex flex-col justify-center items-center text-gray-300 bg-[#181818]'}>
        <NavLink to="/" onClick={handleClick}><li className='py-6 transition duration-200 hover:text-white'>Back to UTFR Website</li></NavLink>
      </ul>
    </div>
  )
}

export default ShootoutNavbar
