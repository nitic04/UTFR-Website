import React from 'react'
import TeamPic from '../assets/TeamMembers/Team.png'
import GoToTop from './GoToTop'

const About = () => {
  return (
    <div className='w-full h-[100%] text-white bg-[#181818]'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='h-full w-full about grid lg:grid-cols-2'>
          <div className='my-auto p-10'>
            <p className='text-5xl font-bold inline border-b-4 border-[#ED3833]'>Who We Are</p>
            <p className='text-lg pt-5'>The University of Toronto Formula Racing team is a design team from the University of Toronto that designs and builds a small open wheel race car every year to compete in international Formula SAE/Student competitions.</p>
            <p className='text-lg pt-5 pb-5'>The University of Toronto Formula Racing team is a design team from the University of Toronto that designs and builds a small open wheel race car every year to compete in international Formula SAE/Student competitions.</p>
            <button className='text-white border-2 px-6 py-3 my-2 flex items-center transition duration-200 hover:bg-gray-300/50 hover:border-gray-300'>Learn More</button>
          </div>
          <div className='w-[100%]'>
            <img src={TeamPic} alt="team" className='w-[100%]'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
