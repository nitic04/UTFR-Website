import { Fade } from "react-awesome-reveal";
import GoToTop from '../GoToTop'
import HistoryCarousel from '../HistoryCarousel'

import CarCutout from '../../assets/HistoricCarPhotos/UT18/UT18-Cutout.png'
import OverviewImg from '../../assets/HistoricCarPhotos/UT18/2018-Shootout-1.jpg'
import CompImg1 from '../../assets/HistoricCarPhotos/UT18/2018-Michigan-1.jpg'
import CompImg2 from '../../assets/HistoricCarPhotos/UT18/2018-Shootout-2.jpg'
import CarouselImg1 from '../../assets/HistoricCarPhotos/UT18/2018-Michigan-2.jpg'
import CarouselImg2 from '../../assets/HistoricCarPhotos/UT18/2018-Michigan-3.jpg'
import CarouselImg3 from '../../assets/HistoricCarPhotos/UT18/2018-PittShootout-1.jpg'
import CarouselImg4 from '../../assets/HistoricCarPhotos/UT18/2018-PittShootout-2.jpg'
import CarouselImg5 from '../../assets/HistoricCarPhotos/UT18/2018-Shop-1.jpg'
import CarouselImg6 from '../../assets/HistoricCarPhotos/UT18/2018-Testing-1.jpg'
import TeamMembersSimpleComponents from "./TeamMembersSimpleComponent";

const UT18 = () => {
    const slides = [
        {
            image: CarouselImg1,
            description: ''
        },
        {
            image: CarouselImg2,
            description: ''
        },
        {
            image: CarouselImg3,
            description: ''
        },
        {
            image: CarouselImg4,
            description: ''
        },
        {
            image: CarouselImg5,
            description: ''
        },
        {
            image: CarouselImg6,
            description: ''
        },
    ];

    const teamMembers = [
        { name: 'Tyler Turnbull', specialization: '- Team Principal, Technical Director, Suspension, Driver'},
        { name: 'Dave Perez', specialization: '- Engine & Drivetrain'},
        { name: 'Kyle', specialization: '- Engine & Drivetrain'},
        { name: 'Areg Armavil', specialization: '- Engine & Drivetrain'},
        { name: 'Ken', specialization: '- Chassis'},
        { name: 'Ben Sprenger', specialization: '- Brakes'},
        { name: 'Jason Lee', specialization: '- Electrical'},
        { name: 'Roberts Strenga', specialization: '- Driver'},
        { name: 'Matt Aspro', specialization: '- Business'},
        { name: 'Jonathan Libby', specialization: '- Driver'},
    ];

  return (
    <div>
        {/* Header */}
        <div className="h-screen bg-[#B6C1D0]">
            <Fade cascade damping={0.2} triggerOnce>
            <h1 className="carTitle text-center text-[130px] md:text-[280px] font-bold text-white pt-[250px]">UT18</h1>
            <img className="mx-auto pt-10 w-[1000px]" src={CarCutout} alt="" />
            <div className='grid space-y-8 md:space-y-0 md:grid-cols-3 pt-10 md:pt-5'>
                <div>
                    <h2 className="text-[#3A4254] text-center text-xl md:text-2xl font-bold">0 - 100 km/h</h2>
                    <h2 className="text-center text-white text-3xl md:text-4xl font-bold">3.3 s</h2>
                </div>
                <div>
                    <h2 className="text-[#3A4254] text-center text-xl md:text-2xl font-bold">Top Speed</h2>
                    <h2 className="text-center text-white text-3xl md:text-4xl font-bold">130 km/h</h2>
                </div>
                <div>
                    <h2 className="text-[#3A4254] text-center text-xl md:text-2xl font-bold">Downforce</h2>
                    <h2 className="text-center text-white text-3xl md:text-4xl font-bold">50 kg @ 60 km/h</h2>
                </div>
            </div>
            </Fade>
        </div>

        {/* Overview Section */}
        <div className='bg-[#303949] grid lg:grid-cols-2 text-white'>
            <div className='px-10 py-10 lg:px-24 lg:py-32'>
                <Fade cascade damping={0.2} triggerOnce>
                <h1 className='text-4xl md:text-6xl font-bold pb-10'>OVERVIEW</h1>
                <p>In 2018, UTFR Shootout, UTFR's very own Formula SAE event relocated to Gamebridge. Powered by a Honda TRX 450 engine producing 45hp, UT18 exhibited impressive performance, accelerating from 0 to 100 km/h in 3.3 seconds, reaching a top speed of 130 km/h, and maintaining a lateral acceleration of 1.8g on a 50-ft skidpad. The hybrid steel tube frame chassis, reinforced with CFRP (Carbon Fiber Reinforced Panels), provided a sturdy yet lightweight foundation, weighing in at 390 lbs. Notably, the car boasted 50kg of downforce at 60 km/h, enhancing stability and cornering capabilities. The incorporation of 20 sensors around the car and Ohlins TTX25 Dampers with adjustable high and low-speed rebound and compression damping underscored the team's commitment to innovation and performance optimization.</p>
                </Fade>
            </div>
            <div className='mx-auto my-auto px-10 pb-10 lg:pt-10 lg:pr-24'>
                <Fade cascade damping={0.2} triggerOnce>
                <img src={OverviewImg} alt="" />
                </Fade>
            </div>
        </div>

        {/* Competitions Section */}
        <div className='bg-[#062644] text-white'>
            <Fade cascade damping={0.2} triggerOnce>
            <h1 className='text-4xl md:text-6xl font-bold py-10 text-center'>COMPETITIONS</h1>
            <div className='grid lg:grid-cols-3 items-center pb-10'>
                <div className='px-10'>
                    <div className='competitionCard h-[400px]' style={{
                        backgroundImage: `url(${CompImg1})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPositionY: "10%"
                        }}>
                    </div>
                    <Fade cascade damping={0.2} triggerOnce>
                    <h3 className='text-center text-2xl pt-5'>Formula SAE Michigan</h3>
                    <h3 className='text-center pb-10 lg:pb-0 text-2xl font-bold'>71st Place Overall</h3>
                    <h3 className='hidden text-center text-2xl font-bold pb-10 lg:pb-0'>RESULT</h3>
                    </Fade>
                </div>
                <div className='px-10'>
                    <div className='competitionCard h-[400px]' style={{
                        backgroundImage: `url(${CompImg2})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPositionY: "80%"
                        }}>
                    </div>
                    <Fade cascade damping={0.2} triggerOnce>
                    <h3 className='text-center text-2xl pt-5'>UTFR Shootout</h3>
                    <h3 className='hidden text-center pb-10 lg:pb-0 text-2xl font-bold'>5th Place Overall</h3>
                    <h3 className='hidden text-center lg:pb-0 text-2xl font-bold'>RESULT</h3>
                    </Fade>
                </div>
            </div>
            </Fade>
        </div>

        {/* Team Members Section */}  
        <TeamMembersSimpleComponents teamMembers={teamMembers} year={"UT18"}/>

        {/* Photo Gallery Section */}
        <div className='bg-[#13191F] px-10 md:px-0'>
            <div className=''>
            <Fade cascade damping={0.2} triggerOnce>
                <h1 className='text-4xl text-white pt-10 text-center md:text-6xl pb-5 flex justify-center font-bold'>PHOTO GALLERY</h1>
                <div className='lg:px-52 pb-5'>
                    <HistoryCarousel slides={slides}/>
                </div>
            </Fade>
            </div>
        </div>

        {/* Technical Specifications Section */}
        <div className=' bg-[#062644]'>
            <Fade cascade damping={0.2} triggerOnce>
            <h1 className='text-4xl text-white pt-10 text-center md:text-6xl pb-5 flex justify-center font-bold'>TECHNICAL SPECIFICATIONS</h1>
            <div className='flex text-white justify-center pb-10'>
                <div className='w-[850px] pb-3 px-5'>
                    <Fade cascade damping={0.1} triggerOnce>
                    <div className='flex border-b-2'>
                        <p className='md:text-2xl py-5'>Engine</p>
                        <p className='md:text-2xl py-5 ml-auto'>Honda TRX 450</p>
                    </div>
                    <div className='flex border-b-2'>
                        <span className='hidden md:inline md:text-2xl py-5'>Power</span>
                        <p className='md:text-2xl py-5 ml-auto'>45 hp</p>
                    </div>
                    <div className='flex border-b-2'>
                        <p className='md:text-2xl py-5'>0 - 100 km/h</p>
                        <p className='md:text-2xl py-5 ml-auto'>3.3 s</p>
                    </div>
                    <div className='flex border-b-2'>
                        <p className='md:text-2xl py-5'>Top Speed</p>
                        <p className='md:text-2xl py-5 ml-auto'>130 km/h</p>
                    </div>
                    <div className='flex border-b-2'>
                        <p className='md:text-2xl py-5'>Lateral Acceleration</p>
                        <p className='md:text-2xl py-5 ml-auto'>1.8 g (50-ft skidpad)</p>
                    </div>
                    <div className='flex border-b-2'>
                        <p className='md:text-2xl py-5'>Weight</p>
                        <p className='md:text-2xl py-5 ml-auto'>390 lbs</p>
                    </div>
                    <div className='flex border-b-2'>
                        <p className='md:text-2xl py-5'>Downforce</p>
                        <p className='md:text-2xl py-5 ml-auto'>50 kg @ 60 km/h</p>
                    </div>
                    </Fade>
                </div>
            </div>
            </Fade>
        </div>
        <GoToTop />
    </div>
  )
}
export default UT18
