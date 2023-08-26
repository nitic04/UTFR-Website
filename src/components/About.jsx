import React from 'react'
import CarPic from '../assets/CzechRepublic2023/Czech1.jpeg'
import GoToTop from './GoToTop'
import Reveal from './Reveal'

const About = () => {
  return (
    <div className='w-full h-[100%] text-white bg-[#181818]'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='h-full w-full about grid lg:grid-cols-2'>
          <div className='my-auto p-10'>
            <Reveal>
              <p className='text-5xl font-bold inline border-b-4 border-[#ED3833]'>Who We Are</p>
            </Reveal>
            <Reveal>
              <p className='text-lg pt-5'>The University of Toronto Formula Racing Team stands as an enterprising and driven student-led design collective hailing from the University of Toronto. Each year, the team undertakes the exhilarating challenge of crafting a compact, open-wheel race car from scratch.</p>
            </Reveal>
            <Reveal>
              <p className='text-lg pt-5 pb-5'>Since its inception in 1997, the University of Toronto Formula Racing Team has consistently exemplified student-led excellence. Over the years, they have embraced innovation, expanding their horizons to include the creation of an electric vehicle. Their international participation in Formula SAE/Student competitions serves as a testament to their fervor for motorsports, as well as their continuous pursuit of achieving the highest standards in their field.</p>
            </Reveal>
            <Reveal>
              <button className='text-white border-2 px-6 py-3 mt-2 flex items-center transition duration-200 hover:bg-gray-300/50 hover:border-gray-300'>Learn More</button>
            </Reveal>
          </div>
          <div className='w-[100%]'>
            <Reveal>
            <img src={CarPic} alt="team" className='w-[100%]'/>
            </Reveal>
          </div>
        </div>
      </div>
      <GoToTop />
    </div>
  )
}

export default About
