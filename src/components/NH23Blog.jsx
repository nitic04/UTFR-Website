import React from 'react'
import TeamPhoto from '../assets/NewHampshire2023/TeamPhoto.jpeg'
import UofTRun1 from '../assets/NewHampshire2023/UofTRun1.mp4'
import GoToTop from './GoToTop'

const NH23Blog = () => {
  return (
    <div className='w-full h-[100%] bg-[#181818]'>
      <div className='md:px-80'>
        <div className='text-white pt-20 font-sans'>
          <h1 className='text-7xl font-medium'>A Win In New Hampshire</h1>
          <div className='pt-5 flex'>
            <div className='flex'>
              <p className='pr-2 flex font-bold'>DATE</p>
              <p className='pr-5 font-extralight'>04.06.2023</p>
            </div>
            <div className='flex'>
              <p className='pr-2 flex font-bold'>READ TIME</p>
              <p className='pr-5 font-extralight'>2 MIN</p>
            </div>
          </div>
          <p className='text-2xl pt-5'>The University of Toronto Formula Racing Team came home with a first place overall victory at the the 2023 New Hampshire Formula Sae Competition.</p>
        </div>
      </div>
      <div>
          <img src={TeamPhoto} alt="" className='headerImage w-full py-10'/>
      </div>
      <div className='px-80 text-white text-lg'>
        <h1 className='text-2xl pb-5 font-medium '>Starting off the season with a win!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci rem dolorem vitae veniam a voluptatum, aperiam consectetur officia nihil reiciendis quae expedita mollitia accusamus quis obcaecati enim cumque porro neque!
        </p>
        <p className='pt-5'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci rem dolorem vitae veniam a voluptatum, aperiam consectetur officia nihil reiciendis quae expedita mollitia accusamus quis obcaecati enim cumque porro neque!
        </p>
        <p className='pt-5'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci rem dolorem vitae veniam a voluptatum, aperiam consectetur officia nihil reiciendis quae expedita mollitia accusamus quis obcaecati enim cumque porro neque!
        </p>
        <p className='pt-5'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci rem dolorem vitae veniam a voluptatum, aperiam consectetur officia nihil reiciendis quae expedita mollitia accusamus quis obcaecati enim cumque porro neque!
        </p>
        <p className='pt-5'>Here is one of our runs!</p>
      </div>
      <video width="100%" height="100%" className='px-32 pt-5 pb-10' controls>
        <source src={UofTRun1} type="video/mp4" />
      </video>
      <GoToTop />
    </div>
  )
}

export default NH23Blog
