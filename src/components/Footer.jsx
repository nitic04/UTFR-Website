import React from 'react'
import {AiOutlineInstagram, AiOutlineTwitter} from 'react-icons/ai'
import {FaFacebookF, FaLinkedinIn} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full h-[60px] bg-black'>
      <div className='flex justify-center py-5'>
        <a className='text-4xl my-auto mx-3 text-gray-300 transition duration-200 hover:text-white' href="https://www.instagram.com/uoftfsae/" target="_blank" rel="noreferrer"><AiOutlineInstagram/></a>
        <a className='text-4xl my-auto mx-3 text-gray-300 transition duration-200 hover:text-white' href="https://twitter.com/uoftfsae" target="_blank" rel="noreferrer"><AiOutlineTwitter/></a>
        <a className='text-4xl my-auto mx-3 text-gray-300 transition duration-200 hover:text-white' href="https://www.facebook.com/uoftfsae/" target="_blank" rel="noreferrer"><FaFacebookF/></a>
        <a className='text-4xl my-auto mx-3 text-gray-300 transition duration-200 hover:text-white' href="https://www.linkedin.com/company/university-of-toronto-formula-sae-racing/mycompany/" target="_blank" rel="noreferrer"><FaLinkedinIn/></a>
      </div>
      <div className='flex justify-center'>
        <h2 className='text-center pb-2 pr-3 text-gray-300'>business@fsaeutoronto.ca</h2>
        <h2 className='text-center pb-2 text-gray-300'>team@fsaeutoronto.ca</h2>
      </div>
      <h2 className='text-center pb-5 text-gray-300'> © 2023 University of Toronto Formula Racing</h2>
    </div>
  )
}

export default Footer
