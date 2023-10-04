import React from 'react'
import {AiOutlineInstagram} from 'react-icons/ai'
import {FaLinkedinIn, FaTiktok} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full h-[60px] bg-black'>
      <div className='flex justify-center py-5 align-center'>
        <a className='text-4xl my-auto mx-3 text-gray-300 transition duration-200 hover:text-white' href="https://www.instagram.com/uoftfsae/" target="_blank" rel="noreferrer"><AiOutlineInstagram/></a>
        <a className='text-4xl my-auto mx-3 text-gray-300 transition duration-200 hover:text-white' href="https://www.linkedin.com/company/university-of-toronto-formula-sae-racing/mycompany/" target="_blank" rel="noreferrer"><FaLinkedinIn/></a>
        <a className='text-3xl my-auto mx-3 text-gray-300 transition duration-200 hover:text-white' href="https://www.tiktok.com/@uoftfsae" target="_blank" rel="noreferrer"><FaTiktok/></a>
      </div>
      <div className='flex justify-center text-[0.96rem] md:text-[1.05rem]'>
        <h2 className='text-center pb-2 pr-3 text-gray-300'>business@fsaeutoronto.ca</h2>
        <h2 className='text-center pb-2 text-gray-300'>team@fsaeutoronto.ca</h2>
      </div>
      <h2 className='text-center text-[1.0rem] md:text-[1.05rem] text-gray-300 pb-3'> © 2023 University of Toronto Formula Racing</h2>
      <h2 className='text-center pb-5 text-gray-300'> Designed and built by: <a className="transition duration-200 hover:text-white" href="https://www.linkedin.com/in/niti-chaudhary-81913426b/">Niti Chaudhary</a></h2>
    </div>
  )
}

export default Footer
