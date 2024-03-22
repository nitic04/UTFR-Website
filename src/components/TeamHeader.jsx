import React from 'react'
import TeamPhotoUnveiling from '../assets/TeamMembers/TeamPhotoUnveiling.webp'
import BothCars from '../assets/TeamCarPhotos/Car.jpeg'
import GoToTop from './GoToTop'
import { Fade } from "react-awesome-reveal";

const Team = () => {
  return (
    <div className='w-full h-[100%]'>
      <div className='w-full h-screen relative' loading="style" style={{
      backgroundImage: `url(${TeamPhotoUnveiling})`,
      backgroundPosition: 'bottom',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
      }}>
      <div className='h-full flex flex-col justify-end'>
        <Fade delay={0.2} triggerOnce><h1 className='font-bold text-8xl md:text-9xl text-white text-center md:text-left md:pl-10 md:mb-16 mb-40'>2024 Team</h1></Fade>
      </div>
      </div>
      <div>
        <div className='text-white flex flex-col justify-center items-center w-full'>
          <div className='w-full about grid md:grid-cols-2'>
            <div className='my-auto px-10 py-14'>
              <Fade cascade delay={0.3} damping={0.3} triggerOnce>
              <p className='text-4xl font-bold inline border-b-4 border-[#ED3833] pr-1'>Our Team</p>
              <p className='pt-5'>The University of Toronto Formula Racing team is structured into 4 operating departments: Electrical, Mechanical, Driverless (DV) development, and Business. Within each of these departments, there are several Section Leads, each in charge of leading a team of Junior & Senior members focused on a specific aspect of the car / team. Our 4 racing drivers also all take active roles in the team’s operation. There are over 70 members actively involved with the team, working hard to deliver a faster and more reliable car for the season ahead!</p>
              </Fade>
            </div>
            <div className='' style={{
              backgroundImage: `url(${BothCars})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
              }}>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='bg-[#2d2c2c] text-white py-10 px-10 text-lg'>
        <div className='flex'>
          <button className='flex items-center'>View Previous Teams<FiArrowRight className='mx-2 duration-500'/></button>
          <button className='pr-5'>2022 - 2023</button>
          <button className='pr-5'>2021 - 2022</button>
        </div>
      </div> */}
      <GoToTop />
    </div>
  )
}

export default Team
