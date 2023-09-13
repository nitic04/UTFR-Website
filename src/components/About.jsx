import React from 'react'
import CarPic from '../assets/CzechRepublic2023/Czech1.jpeg'
import GoToTop from './GoToTop'
import { Fade } from "react-awesome-reveal";
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <div className='w-full h-[100%] text-white bg-[#181818]'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='h-full w-full about flex flex-col md:flex-row'>
          <div className='p-10 lg:w-[130%]'>
              <Fade cascade damping={0.2} triggerOnce>
              <p className='text-4xl font-bold inline border-b-4 border-[#ED3833] pr-2'>Who We Are</p>
              <p className='pt-5'>The University of Toronto Formula Racing Team stands as an enterprising and driven student-led design collective hailing from the University of Toronto. Each year, the team undertakes the exhilarating challenge of crafting a compact, open-wheel race car from scratch.</p>
              <p className='pt-5 pb-5'>Since its inception in 1997, the University of Toronto Formula Racing Team has consistently exemplified student-led excellence. Over the years, they have embraced innovation, expanding their horizons to include the creation of an electric vehicle. Their international participation in Formula SAE/Student competitions serves as a testament to their fervor for motorsports, as well as their continuous pursuit of achieving the highest standards in their field.</p>
              <NavLink to="/UT23"><button className='text-white border-2 px-6 py-3 mt-2 flex items-center transition duration-200 hover:bg-[#0190cd] hover:border-[#0190cd]'>Learn More</button></NavLink>
              </Fade>
          </div>
          <div className='w-[100%]'>
            <img src={CarPic} alt="team" className='h-full w-full'/>
          </div>
        </div>
      </div>
      <GoToTop />
    </div>
  )
}

export default About
