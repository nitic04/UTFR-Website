import React from 'react'
import NewsletterHeader from '../assets/CzechRepublic2023/Czech8.jpeg'
import GoToTop from './GoToTop'
import NewsletterSignUp from './NewsletterSignUp'
import {AiOutlineInstagram} from 'react-icons/ai'
import {FaLinkedinIn, FaTiktok} from 'react-icons/fa'

import Feb2024Cover from '../assets/Newsletters/2023/Feb2024NewsletterCover.png'
import Jan2024Cover from '../assets/Newsletters/2023/Jan2024NewsletterCover.jpg'
import Dec2023Cover from '../assets/Newsletters/2023/Dec2023NewsletterCover.jpg'
import Nov2023Cover from '../assets/Newsletters/2023/Nov2023NewsletterCover.png'
import Oct2023Cover from '../assets/Newsletters/2023/Oct2023NewsletterCover.png'
import Sep2023Cover from '../assets/Newsletters/2023/Sep2023NewsletterCover.jpg'

import Feb2024Issue from '../assets/Newsletters/2023/Feb2024Newsletter.pdf'
import Jan2024Issue from '../assets/Newsletters/2023/Jan2024Newsletter.pdf'
import Dec2023Issue from '../assets/Newsletters/2023/Dec2023Newsletter.pdf'
import Nov2023Issue from '../assets/Newsletters/2023/Nov2023Newsletter.pdf'
import Oct2023Issue from '../assets/Newsletters/2023/Oct2023Newsletter.pdf'
import Sep2023Issue from '../assets/Newsletters/2023/Sep2023Newsletter.pdf'

const Newsletter = () => {
  return (
    <div className='bg-[#181818]'>
        <div className='w-full h-screen relative' style={{
        backgroundImage: `url(${NewsletterHeader})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
        }}>
        <div className='headerOverlay'></div>
        <div className='absolute top-[150px] md:top-[400px] left-0 w-full lg:pl-24 z-10'>
            <h1 className='text-4xl md:text-7xl text-white font-bold text-center lg:text-left'>UTFR</h1>
            <h1 className='text-6xl md:text-9xl text-white font-bold text-center lg:text-left'>Newsletters</h1>
        </div>
        </div>
        <div className='mx-5 md:mx-24 pt-5'>
            <p className='text-2xl pl-2 text-red-600 md:text-3xl font-bold border-l-4 border-[#DC2626]'>The Latest From Us</p>
            <a href={Feb2024Issue} target="_blank" rel="noreferrer">
                <div className='newsletterCard text-white px-12 py-12'>
                    
                    <div className='grid md:grid-cols-3'>
                        <div className='col-span-2 pr-5 pb-12'>
                            <h1 className='text-4xl font-bold'>February Issue</h1>
                            <p className='pt-1'>The UTFR team has been working tirelessly (no pun intended) to bring UT24 to life. Join us on March 22nd as we unveil the car that marks our 25th anniversary of racing. This month the driverless perception team has made large advancements using a brand new LIDAR upgrade taking our cone-spotting precision to the next level. Take a look at our Low Voltage In-Segment PCB used for gathering data from our battery cells. Check out our newsletter to learn more and stay tuned for more updates! 🏁</p>
                            <p className='text-gray-400'>02/05/24</p>
                        </div>
                        <div className='w-full rounded-lg' style={{
                            backgroundImage: `url(${Feb2024Cover})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'
                            }}>
                                <div className=''></div>
                        </div>
                    
                    </div>
                </div>
            </a>
        </div>
        <div className='w-full text-white px-5 md:px-24 py-5 pt-10'>
            <div className='flex'>
            <p className='text-2xl pl-2 text-red-600 md:text-3xl font-bold border-l-4 border-[#DC2626]'>Other Stories From The 2024 Season</p>
            </div>
            <div className='grid md:grid-cols-4'>
                <div className='col-span-3 md:pr-5'>

                    <a href={Jan2024Issue} target="_blank" rel="noreferrer">
                    <div className='newsletterCard grid md:grid-cols-4 py-7 px-7 mb-5'>
                        <div className='col-span-3 pr-5'>
                            <h1 className='text-3xl font-bold'>January Issue</h1>
                            <p className='text-md pt-1'>Happy New Year from the UTFR team! Get ready to embark on an exciting journey as we step into the new year with thrilling announcements and groundbreaking developments. Despite the holiday buzz, our dedicated team has been hard at work and have achieved remarkable progress on the UT24. We also are excited to introduce our first-ever distributed battery pack temperature sensing solution, a game-changer in our pursuit of innovation. Curious for more details? Read the full newsletter to embark on this exciting journey with us and discover our latest developments! 🚀</p>
                            <p className='text-sm text-gray-400'>01/08/24</p>
                        </div>
                        <div className='w-full rounded-lg' style={{
                        backgroundImage: `url(${Jan2024Cover})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                        }}>
                            <div className=''></div>
                        </div>
                    </div>
                    </a>
                    
                    <a href={Dec2023Issue} target="_blank" rel="noreferrer">
                    <div className='newsletterCard grid md:grid-cols-4 py-7 px-7 mb-5'>
                        <div className='col-span-3 pr-5'>
                            <h1 className='text-3xl font-bold'>December Issue</h1>
                            <p className='text-md pt-1'>As we bid farewell to 2023, the UTFR team is excited to share our December newsletter, packed with highlights from a month filled with manufacturing and groundbreaking developments on UT24. Read about the secrets behind our lightweight and durable harness design, the commencement of our printed circuit boards’ assembly and the engineering marvels of our composite internal wing. Dive into the full newsletter for an immersive experience and join us as we pave the way for a thrilling 2024! 🏎️💨</p>
                            <p className='text-sm text-gray-400'>04/12/23</p>
                        </div>
                        <div className='w-full rounded-lg' style={{
                        backgroundImage: `url(${Dec2023Cover})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                        }}>
                            <div className=''></div>
                        </div>
                    </div>
                    </a>

                    <a href={Nov2023Issue} target="_blank" rel="noreferrer">
                    <div className='newsletterCard grid md:grid-cols-4 pb-5 py-7 px-7 mb-5'>
                        <div className='col-span-1 md:col-span-3 md:pr-5'>
                            <h1 className='text-3xl font-bold'>November Issue</h1>
                            <p className='text-md pt-1'>Welcome back to the pulse-pounding world of speed, innovation, and motorsport with UTFR’s November newsletter! Get an exclusive peek into the redesign of UT24’s throttle pedal, focusing on driver comfort and precision. Explore the fast-paced developments in our Simultaneous Localization and Mapping (SLAM) algorithm as we gear up for thorough performance validation in our simulation environment, a crucial step before the upcoming hardware testing. Stay tuned for more updates as we shift into high gear and work on cutting-edge developments that drive us forward. 💫</p>
                            <p className='text-sm text-gray-400'>06/11/23</p>
                        </div>
                        <div className='w-full rounded-lg' style={{
                        backgroundImage: `url(${Nov2023Cover})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                        }}>
                            <div className=''></div>
                        </div>
                    </div>
                    </a>
                    <a href={Oct2023Issue} target="_blank" rel="noreferrer">
                    <div className='newsletterCard grid md:grid-cols-4 pb-5 py-7 px-7 mb-5'>
                        <div className='col-span-3 md:pr-5'>
                            <h1 className='text-3xl font-bold'>October Issue</h1>
                            <p className='text-md pt-1'>This past month was a whirlwind of excitement as we delved into a series of thrilling events. We proudly hosted our second annual Women in Motorsport Panel, showcasing inspiring Canadian women and celebrating diversity in the motorsport industry. Explore our latest developments, including a state-of-the-art traction control system and our inaugural undertray, pushing us towards FSAE competition excellence. As we unravel the highlights, experience the dynamic atmosphere that fuels our passion for motorsports. 🌟</p>
                            <p className='text-sm text-gray-400'>02/10/23</p>
                        </div>
                        <div className='w-full rounded-lg' style={{
                        backgroundImage: `url(${Oct2023Cover})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                        }}>
                            <div className=''></div>
                        </div>
                    </div>
                    </a>

                    <a href={Sep2023Issue} target="_blank" rel="noreferrer">
                    <div className='newsletterCard grid md:grid-cols-4 pb-5 py-7 px-7'>
                        <div className='col-span-3 md:pr-5'>
                            <h1 className='text-3xl font-bold'>September Issue</h1>
                            <p className='text-md pt-1'>UTFR’s summer was filled with achievements, securing 1st place in New Hampshire and completing our European venture where we finished 6th overall. Read the newsletter to see how we placed in Efficiency 👀. Looking ahead, the team has some big events in store including our annual Women in Motorsport Panel, and Toronto Shootout, the thrilling season finisher featuring 20 teams from across Canada and the United States. Read our newsletter and follow along for the exciting ride! 🔧</p>
                            <p className='text-sm text-gray-400'>05/08/23</p>
                        </div>
                        <div className='w-full rounded-lg md:w-auto' style={{
                        backgroundImage: `url(${Sep2023Cover})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        }}>
                            <div className=''></div>
                        </div>
                    </div>
                    </a>
                </div>
                <div className='pt-5 md:pt-0 col-span-3 md:col-span-1 text-white flex'>
                    <div className='line md:ml-2'></div>
                    <div className='pl-6 pt-5 w-full'>
                        <h1 className='text-3xl font-bold'>Sign Up</h1>
                        <p className='py-2 w-full'>Subscribe to our newsletter to join us in our journey!</p>
                        <NewsletterSignUp  />
                        <h1 className='pt-10 text-2xl font-bold'>Check Out Our Socials</h1>
                        <div className='flex py-5 items-center text-gray-300 transition duration-200 hover:text-white'>
                            <a className='flex items-center' href="https://www.instagram.com/uoftfsae/" target="_blank" rel="noreferrer"><AiOutlineInstagram className='pr-2 text-4xl'/>
                            <p>@uoftfsae</p>
                            </a>
                        </div>
                        <div className='flex py-5 items-center text-gray-300 transition duration-200 hover:text-white'>
                            <a className='flex items-center' href="https://www.tiktok.com/@uoftfsae" target="_blank" rel="noreferrer"><FaTiktok className='pr-3 text-4xl'/>
                            <p>@uoftfsae</p>
                            </a>
                        </div>
                        <div className='flex py-5 items-center text-gray-300 transition duration-200 hover:text-white'>
                            <a className='flex items-center' href="https://www.linkedin.com/company/university-of-toronto-formula-sae-racing/mycompany/" target="_blank" rel="noreferrer"><FaLinkedinIn className='pr-2 text-4xl'/>
                            <p>@utfr</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <GoToTop />
        
    </div>
  )
}

export default Newsletter
