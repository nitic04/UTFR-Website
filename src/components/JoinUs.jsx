import React from 'react'
import HeaderImage from '../assets/TeamMembers/ActionPhotos/chassis_pic.jpeg'
// import DVPic from '../assets/TeamMembers/ActionPhotos/dv_pic.jpeg'
import ErgoPic from '../assets/TeamMembers/ActionPhotos/ergo_pic.jpeg'
import SuspensionPic from '../assets/TeamMembers/ActionPhotos/suspension_pic.jpeg'
import GoToTop from './GoToTop'

const History = () => {
  return (
    <div className='bg-[#181818]'>
      <div className='w-full h-screen' style={{
        backgroundImage: `url(${HeaderImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}>
      <h1 className='text-8xl text-white pt-[550px] px-12 font-bold'>Join Us</h1>
      </div>
      <div>
        <div className='text-white flex flex-col justify-center items-center w-full h-full'>
          <div className='h-full w-full about grid lg:grid-cols-2'>
            <div className='my-auto p-10'>
              <p className='text-lg pt-5'>The University of Toronto began its involvement in FSAE in 1997, and completed a prototype vehicle in 1998. Through testing and research on the vehicle, a second, lighter frame was constructed in 1999. In 2003, 2005, and 2006, the team took three overall championships at Formula Student UK - a record that would stand until 2016.</p>
              <p className='text-lg pt-5 text-white'>Over the course of the early 2000s, several different chassis concepts were explored, eventually moving from steel spaceframes, to hybrid concepts, to a full monocoque. In 2010, the team switched to the light single cylinder engines that still power our cars today. In 2016, our first aerodynamics package was created to improve high speed cornering capability. In 2019, the team continued to develop the hybrid chassis concept, and introduced prototypes for a drag reduction system and electric shifter. The team continues to place respectably in rankings in both static and dynamic competitions.</p>
            </div>
            <div className='w-full h-20vh' style={{
              backgroundImage: `url(${ErgoPic})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
              }}>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='text-white flex flex-col justify-center items-center w-full h-full'>
          <div className='h-full w-full about grid lg:grid-cols-2'>
            <div className='w-full h-20vh' style={{
                backgroundImage: `url(${SuspensionPic})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
                }}>
            </div>
            <div className='my-auto p-10'>
              <p className='text-lg pt-5'>The University of Toronto began its involvement in FSAE in 1997, and completed a prototype vehicle in 1998. Through testing and research on the vehicle, a second, lighter frame was constructed in 1999. In 2003, 2005, and 2006, the team took three overall championships at Formula Student UK - a record that would stand until 2016.</p>
              <p className='text-lg pt-5 text-white'>Over the course of the early 2000s, several different chassis concepts were explored, eventually moving from steel spaceframes, to hybrid concepts, to a full monocoque. In 2010, the team switched to the light single cylinder engines that still power our cars today. In 2016, our first aerodynamics package was created to improve high speed cornering capability. In 2019, the team continued to develop the hybrid chassis concept, and introduced prototypes for a drag reduction system and electric shifter. The team continues to place respectably in rankings in both static and dynamic competitions.</p>
            </div>
          </div>
        </div>
      </div>
      <div name='contact' className='w-full h-screen bg-[#131212] flex justify-center items-center px-10 p-4'>
        <form method='POST' action="https://getform.io/f/1060fb32-1dcc-4e30-8e7b-ba014a877625" className='flex flex-col max-w-[1000px] w-full'>
          <div className='pb-8'>
              <p className='text-4xl font-bold text-white'>Contact Us</p>
          </div>
          <input className='bg-gray-300 p-2' type="text" placeholder='Name' name='name' required/>
          <input className='my-4 p-2 bg-gray-300' type="email" placeholder='Email' name='email' required/>
          <textarea className='bg-gray-300 p-2' name="message" rows="10" placeholder='Message' required></textarea>
          <button className='text-white border-2 transition duration-500 hover:bg-[#ffffff58]
          px-10 py-3 my-8 mx-auto flex items-center'>Submit</button>
        </form>
      </div>
      <GoToTop />
    </div>
  )
}

export default History
