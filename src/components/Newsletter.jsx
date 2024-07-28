import React from 'react'
import NewsletterHeader from '../assets/CzechRepublic2023/Czech8.jpeg'
import GoToTop from './GoToTop'
import NewsletterSignUp from './NewsletterSignUp'
import { IoMailOpenOutline } from "react-icons/io5";
import NewsletterCard from '../components/NewsletterCard'
import { Fade } from "react-awesome-reveal";


const Newsletter = () => {
    const newsletterEndpoint = 'https://ik.imagekit.io/18gwys9x0/Newsletters/PDFs/'
    const newsletterCoverEndpoint = 'https://ik.imagekit.io/18gwys9x0/Newsletters/CoverImages/'

  return (
    <div className='bg-[#181818]'>
        <div className='w-full h-screen relative' style={{
            backgroundImage: `url(${NewsletterHeader})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
            }}>
        <div className='headerOverlay'></div>
            <div className='h-full flex flex-col justify-end'>
            <Fade delay={0.2} triggerOnce><h1 className='font-bold text-[4.75rem] md:text-9xl text-white text-center md:text-left md:pl-10 mb-48 md:mb-24'>Newsletters</h1></Fade>
            </div>
        </div>

        <div className='bg-[#1e1e1e] text-white grid grid-cols-1 md:grid-cols-5 rounded-lg mb-5'>
            <div className='p-5 md:p-10 flex col-span-1 md:col-span-3'>
                <div className='pr-5 md:pr-10 flex justify-center items-center'>
                    <IoMailOpenOutline className='text-4xl md:text-6xl'/>
                </div>
                <div className=''>
                    <p className='py-2 w-full text-base md:text-xl font-bold'>Join us on our journey!</p>
                    <p className='text-md md:text-md'>Subscribe to our newsletter to receive the latest team updates in your inbox each month!</p>
                </div>
            </div>
            <div className='pt-5 md:pt-10 md:pr-5 col-span-1 md:col-span-2 pl-5 pb-5 md:pb-0 md:pl-0 flex justify-center items-center'>
                <div className='flex-grow' style={{ minWidth: '200px', width: '100%' }}>
                    <NewsletterSignUp />
                </div>
            </div>
        </div>


        <div className='mx-5 md:mx-10 pt-5'>
            <Fade cascade delay={150} damping={0.2} triggerOnce>
            <p className='text-2xl pl-2 text-red-600 md:text-3xl font-bold border-l-4 border-[#DC2626]'>The Latest From Us</p>
            <a href={newsletterEndpoint + "June_2024_Newsletter.pdf"} target="_blank" rel="noreferrer">
                <div className='newsletterCard text-white px-12 py-12'>
                    <div className='grid grid-cols-2 md:grid-cols-3'>
                        <div className='col-span-2 pr-5 pb-12'>
                            <h1 className='text-4xl font-bold'>June Issue</h1>
                            <div className="flex justify-between">
                                <p className='text-gray-400 pt-2'>04/06/24</p>
                            </div>
                            <p className='pt-1 pr-14'>Fresh off their New Hampshire win, the team tested their complete aerodynamic package at Ford’s Allen Park facility, gaining vital data for FSAE Michigan. Explore the latest mechanical and electrical developments the team has made this month, including a new cooling system and launch control system, preparing UT24 for peak performance on the track! The driverless team has also made significant advancements in their pursuit to develop a fully driverless system within the car! Finally, this month’s “Deep Dives” series features an insightful interview with Electrical Technical Director Jake Sprenger, whose dedication and competitive spirit has been pivotal in UTFR’s innovation and success! ✈️</p>
                        </div>
                        <div className='col-span-1 w-full rounded-lg' style={{
                            backgroundImage: `url(https://ik.imagekit.io/18gwys9x0/Newsletters/CoverImages/June_2024_NewsCover.jpg)`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'
                            }}>
                                <div className=''></div>
                        </div>
                    </div>
                </div>
            </a>
            </Fade>
        </div>
        <div className='w-full text-white px-5 md:px-10 py-5 pt-10'>
            <Fade cascade delay={150} damping={0.2} triggerOnce>
            <div className='flex'>
            <p className='text-2xl pl-2 text-red-600 md:text-3xl font-bold border-l-4 border-[#DC2626]'>Other Stories From The 2024 Season</p>
            </div>
                <div className='col-span-3'>
                    <div className='pt-5 flex grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                        <NewsletterCard title={"May Issue"} summary={"Celebrate UTFR’s first-place finish at New Hampshire and get an insider look at fine-tuning UT24 at Multimatic, plus read an interview with team principal Daniel LaRosa! 🏆"} date={"06/05/24"} link={newsletterEndpoint + "May_2024_Newsletter.pdf"} image_link={newsletterCoverEndpoint + "May_2024_NewsCover.png"}/>

                        <NewsletterCard title={"April Issue"} summary={"Experience UT24’s unveiling and explore advancements in acceleration, skidpad times, mechanical fine-tuning, and thermal testing! 🧰"} date={"01/04/24"} link={newsletterEndpoint + "April_2024_Newsletter.pdf"} image_link={newsletterCoverEndpoint + "April_2024_NewsCover.png"}/>

                        <NewsletterCard title={"March Issue"} summary={"In March, UTFR achieved many things with the mechanical team hitting the rolling car milestone to the electrical team’s lightning-fast battery pack assembly. ⚙️"} date={"04/03/24"} link={newsletterEndpoint + "March_2024_Newsletter.pdf"} image_link={newsletterCoverEndpoint + "March_2024_NewsCover.jpg"}/>

                        <NewsletterCard title={"February Issue"} summary={"Discover the team’s revolutionary LIDAR advancements and read about UTFR’s 25th anniversary with the grand unveiling of UT24! 🏁"} date={"05/02/24"} link={newsletterEndpoint + "February_2024_Newsletter.pdf"} image_link={newsletterCoverEndpoint + "February_2024_NewsCover.png"}/>

                        <NewsletterCard title={"January Issue"} summary={"Starting the year off strong, UTFR made progress on their groundbreaking battery pack temperature sensing innovation for UT24! 🚀"} date={"08/01/24"} link={newsletterEndpoint + "January_2024_Newsletter.pdf"} image_link={newsletterCoverEndpoint + "January_2024_NewsCover.jpg"}/>

                        <NewsletterCard title={"December Issue"} summary={"The team ended the year on a high reaching new engineering feats with UT24’s lightweight harness, composite internal wing, and printed circuit boards’ assembly. 🏎️"} date={"04/12/23"} link={newsletterEndpoint + "December_2023_Newsletter.pdf"} image_link={newsletterCoverEndpoint + "December_2023_NewsCover.jpg"}/>

                        <NewsletterCard title={"November Issue"} summary={"Get the inside scoop on UT24’s throttle pedal redesign and cutting-edge SLAM developments. Also read about the team’s experience at Toronto Shootout! 💫"} date={"06/11/23"} link={newsletterEndpoint + "November_2023_Newsletter.pdf"} image_link={newsletterCoverEndpoint + "November_2023_NewsCover.png"}/>

                        <NewsletterCard title={"October Issue"} summary={"Relive the excitement of UTFR’s Women in Motorsports Panel and explore the team’s latest traction control and undertray innovations! 🌟"} date={"02/10/23"} link={newsletterEndpoint + "October_2023_Newsletter.pdf"} image_link={newsletterCoverEndpoint + "October_2023_NewsCover.png"}/>

                        <NewsletterCard title={"September Issue"} summary={"Checkout UTFR’s UT23 victories and read about the team’s thrilling upcoming events including the Toronto Shootout! 🔧"} date={"05/09/23"} link={newsletterEndpoint + "September_2023_Newsletter.pdf"} image_link={newsletterCoverEndpoint + "September_2023_NewsCover.jpg"}/>
                    </div>
                </div>
            </Fade>
        </div>
        <GoToTop />
        
    </div>
  )
}

export default Newsletter
