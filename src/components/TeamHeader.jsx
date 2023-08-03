import React from 'react'
import TeamPhotoUnveiling from '../assets/TeamMembers/TeamPhotoUnveiling.jpeg'
import BothCars from '../assets/TeamCarPhotos/BothCars.jpeg'
import GoToTop from './GoToTop'
import { FiArrowRight } from 'react-icons/fi'

const Team = () => {
  return (
    <div className='w-full h-[100%]'>
      <div className='w-full h-screen' style={{
      backgroundImage: `url(${TeamPhotoUnveiling})`,
      backgroundPosition: 'bottom',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
      }}>
      <h1 className='text-8xl text-white pt-[650px] px-12 font-bold'>2023 Team</h1>
      </div>
      <div>
        <div className='text-white flex flex-col justify-center items-center w-full h-full'>
          <div className='h-full w-full about grid md:grid-cols-2'>
            <div className='my-auto p-10'>
              <p className='text-4xl font-bold inline border-b-4 border-[#ED3833]'>Our Team</p>
              <p className='text-lg pt-5'>University of Toronto Formula Racing is structured into 4 categories: electrical engineering, mechanical engineering, driverless (DV) development, and business. Within each of these categories, there are numerous section leads, each in charge of leading a small team of junior & senior members focused on a specific aspect of the car / team. There are currently roughly 70 members actively involved in the team. We have 4 drivers, all of whom also take active roles in the team’s operation. Our team members are working hard to deliver a faster and more reliable car for the season ahead!</p>
            </div>
            <div className='w-full h-20vh' style={{
              backgroundImage: `url(${BothCars})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
              }}>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#2d2c2c] text-white py-10 px-10 text-lg'>
        <div className='flex'>
          <button className='flex items-center'>View Previous Teams<FiArrowRight className='mx-2 duration-500'/></button>
          <button className='pr-5'>2022 - 2023</button>
          <button className='pr-5'>2021 - 2022</button>
        </div>
      </div>
      <GoToTop />
    </div>
  )
}

export default Team
