import React from 'react'
import SponsorHeader from '../assets/HighQualityImage.jpeg'
import SponsorshipPackage from '../assets/TheUniversityofTorontoFormulaRacingSponsorshipPackage2023.pdf'


const Sponsors = () => {
  return (
    <div>
        <div className='w-full h-screen' style={{
        backgroundImage: `url(${SponsorHeader})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
        }}>
        <h1 className='text-8xl text-white pt-[500px] px-12 font-bold'>Sponsors & Partners</h1>
        </div>
        <div className='text-white bg-[#181818] pb-10'>
            <h1 className='flex justify-center text-4xl font-bold pt-10'>How our team thrives on your support</h1>
            <p className='flex justify-center text-center text-lg px-10 py-5'>Our sponsors and community partners are vital to our success. The organizations listed on this page support our team with a variety of monetary, product, and service contributions to our team. 
            Since 1998, the University of Toronto Formula Racing Team has enjoyed great success in both Europe and North America, all thanks to the help of our sponsors and community partners. We depend on the products and services offered by these generous businesses and individuals in order to accomplish our goals every year. In return, we thank them with all the publicity we can offer on our car, at our public appearances, and online. We’ve worked with a variety of supporters to draw attention to our partnership, and we continue to work hard to make our partnerships mutually beneficial.</p>
            <div className='flex justify-center'>
                <button className='r4 text-white group border-2 px-6 py-3 my-2 transition duration-200 hover:bg-[#0190cd] hover:border-[#0190cd]'><a href={SponsorshipPackage} target="_blank">View Our Sponsorship Package</a></button>
            </div>
        </div>
        <div className='text-white bg-[#131212] py-10'>
            <h1 className='flex justify-center text-6xl font-bold'>Diamond Sponsors</h1>
            <div className='grid grid-cols-3'>
                <div className=''>

                </div>

            </div>

        </div>
      
    </div>
  )
}

export default Sponsors
