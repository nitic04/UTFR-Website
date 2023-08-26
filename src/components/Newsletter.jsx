import React from 'react'
import NewsletterHeader from '../assets/HighQualityImage.jpeg'
import GoToTop from './GoToTop'

const Newsletter = () => {
  return (
    <div>
        <div className='w-full h-screen' style={{
        backgroundImage: `url(${NewsletterHeader})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
        }}>
        <h1 className='text-8xl text-white pt-[650px] px-12 font-bold'>Newsletters</h1>
        </div>
        <GoToTop />
        <div className='bg-[#181818]'>
            <h1 className='flex justify-center text-4xl font-bold pt-10 text-white'>View Our Newsletters</h1>
            <div className='flex justify-center'>
            <div className='grid grid-cols-3 p-10 gap-x-16'>
                <div className='h-[550px] w-[450px] bg-gray-100 rounded-md'>
                    <img src={NewsletterHeader} className='rounded-t-md' alt="" />
                    <h1 className='flex justify-center text-3xl font-bold pt-10 text-black'>September Issue</h1>
                    <p className='flex justify-center text-lg py-3 text-gray-400'>09/01/23</p>
                    <div className='flex justify-center'>
                        <a href="https://www.google.ca/"><button className='mt-8 py-3 px-12 bg-gray-300 font-bold rounded-md'>Read</button></a>
                    </div>
                </div>
                <div className='h-[550px] w-[450px] bg-gray-100 rounded-md'>
                    <img src={NewsletterHeader} className='rounded-t-md' alt="" />
                    <h1 className='flex justify-center text-3xl font-bold pt-10 text-black'>September Issue</h1>
                    <p className='flex justify-center text-lg py-3 text-gray-400'>09/01/23</p>
                    <div className='flex justify-center'>
                        <a href="https://www.google.ca/"><button className='mt-8 py-3 px-12 bg-gray-300 font-bold rounded-md'>Read</button></a>
                    </div>
                </div>
                <div className='h-[550px] w-[450px] bg-gray-100 rounded-md'>
                    <img src={NewsletterHeader} className='rounded-t-md' alt="" />
                    <h1 className='flex justify-center text-3xl font-bold pt-10 text-black'>September Issue</h1>
                    <p className='flex justify-center text-lg py-3 text-gray-400'>09/01/23</p>
                    <div className='flex justify-center'>
                        <a href="https://www.google.ca/"><button className='mt-8 py-3 px-12 bg-gray-300 font-bold rounded-md'>Read</button></a>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Newsletter
