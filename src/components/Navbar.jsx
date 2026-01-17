import React, {useState} from 'react'
import RedLogo from '../assets/UTFRLogoRed.png'
import {FaBars, FaTimes} from 'react-icons/fa'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='navbar fixed w-full h-[70px] flex justify-between items-center px-10 text-white bg-[#18181849] z-20'>
      <div>
        <NavLink to="/" ><img src={RedLogo} alt="Logo" style={{width: '170px'}} /></NavLink>
      </div>

      <ul className='hidden lg:flex text-lg'>
        <NavLink to="/team"><li className='transition duration-200 hover:text-gray-300'>Team</li></NavLink>
        <NavLink to="/UT25"><li className='transition duration-200 hover:text-gray-300'>UT25</li></NavLink>
        <NavLink to="/history"><li className='transition duration-200 hover:text-gray-300'>History</li></NavLink>
        {/* <NavLink to="/events"><li className='transition duration-200 hover:text-gray-300'>Events</li></NavLink> */}
        <NavLink to="/shootout"><li className='transition duration-200 hover:text-gray-300'>Shootout</li></NavLink>
        <NavLink to="/sponsors"><li className='transition duration-200 hover:text-gray-300'>Sponsors</li></NavLink>
        <NavLink to="/blog"><li className='transition duration-200 hover:text-gray-300'>Blog</li></NavLink>
        <NavLink to="/joinUs"><li className='transition duration-200 hover:text-gray-300'>Join Us</li></NavLink>
        <NavLink to="https://www.gofundme.com/f/support-utfrs-road-to-michigan-germany" target="_blank" rel="noreferer"><li className='transition duration-200 hover:text-gray-300'>Donate</li></NavLink>
      </ul>

      <div onClick={handleClick} className='lg:hidden z-10 text-gray-300 hover:text-white cursor-pointer'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full text-3xl h-screen flex flex-col justify-center items-center text-gray-300 bg-[#181818]'}>
        <NavLink to="/team" onClick={handleClick}><li className='py-6 transition duration-200 hover:text-white'>Team</li></NavLink>
        <NavLink to="/UT25" onClick={handleClick}><li className='py-6 transition duration-200 hover:text-white'>UT25</li></NavLink>
        <NavLink to="/history" onClick={handleClick}><li className='py-6 transition duration-200 hover:text-white'>History</li></NavLink>
        {/* <NavLink to="/events" onClick={handleClick}><li className='py-6 transition duration-200 hover:text-white'>Events</li></NavLink> */}
        <NavLink to="/shootout" onClick={handleClick}><li className='py-6 transition duration-200 hover:text-white'>Shootout</li></NavLink>
        <NavLink to="/sponsors" onClick={handleClick}><li className='py-6 transition duration-200 hover:text-white'>Sponsors</li></NavLink>
        <NavLink to="/blog" onClick={handleClick}><li className='py-6 transition duration-200 hover:text-white'>Blog</li></NavLink>
        <NavLink to="/joinUs" onClick={handleClick}><li className='py-6 transition duration-200 hover:text-white'>Join Us</li></NavLink>
        <NavLink to="http://gofundme.com/f/university-of-toronto-formula-racing-donations" target="_blank" rel="noreferer" onClick={handleClick}><li className='py-6 transition duration-200 hover:text-white'>Donate</li></NavLink>
      </ul>
    </div>
  )
}

export default Navbar
