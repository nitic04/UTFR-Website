import { Fade } from "react-awesome-reveal";
import GoToTop from '../GoToTop'
import HistoryCarousel from '../HistoryCarousel'

import CarCutout from '../../assets/HistoricCarPhotos/UT19/UT19-Cutout.png'
import OverviewImg from '../../assets/HistoricCarPhotos/UT19/UT19_10.jpg'
import CompImg1 from '../../assets/HistoricCarPhotos/UT19/UT19_7.jpg'
import CompImg2 from '../../assets/HistoricCarPhotos/UT19/UT19_12.jpg'
import CarouselImg1 from '../../assets/HistoricCarPhotos/UT19/UT19.jpeg'
import CarouselImg2 from '../../assets/HistoricCarPhotos/UT19/UT19_11.jpg'
import CarouselImg3 from '../../assets/HistoricCarPhotos/UT19/UT19_13.jpg'
import CarouselImg4 from '../../assets/HistoricCarPhotos/UT19/UT19_14.jpg'
import CarouselImg5 from '../../assets/HistoricCarPhotos/UT19/UT19_15.JPG'
import CarouselImg6 from '../../assets/HistoricCarPhotos/UT19/UT19_16.JPG'
import CarouselImg7 from '../../assets/HistoricCarPhotos/UT19/UT19_2.jpg'
import CarouselImg8 from '../../assets/HistoricCarPhotos/UT19/UT19_3.jpg'
import CarouselImg9 from '../../assets/HistoricCarPhotos/UT19/UT19_6.jpg'
import CarouselImg10 from '../../assets/HistoricCarPhotos/UT19/UT19_8.jpg'
import CarouselImg11 from '../../assets/HistoricCarPhotos/UT19/UT19_9.jpg'

import TeamMembersSimpleComponents from "./TeamMembersSimpleComponent";

const UT19 = () => {
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
        {
            image: CarouselImg7,
            description: ''
        },
        {
            image: CarouselImg8,
            description: ''
        },
        {
            image: CarouselImg9,
            description: ''
        },
        {
            image: CarouselImg10,
            description: ''
        },
        {
            image: CarouselImg11,
            description: ''
        },
    ];

    const teamMembers = [
        { name: 'Ben Sprenger', specialization: 'Team Principal, Brakes, Team Lead'},
        { name: 'Kyle McCarroll', specialization: 'Engine, Drivetrain, Electrical'},
        { name: 'Areg Nazarians-Armavil', specialization: 'Engine, Drivetrain'},
        { name: 'Johnathan Lee', specialization: 'Chassis'},
        { name: 'Roberts Strenga', specialization: 'Driver'},
        { name: 'Jonathan Libby', specialization: 'Business, Driver'},
        { name: 'Daniel Wing', specialization: ''},
        { name: 'Julian Sisera', specialization: ''},
        { name: 'Damian Sisera', specialization: ''},
        { name: 'Saiyam Patel', specialization: ''},
    ];

  return (
    <div>
        {/* Header */}
        <div className="h-screen bg-[#B6C1D0]">
            <Fade cascade damping={0.2} triggerOnce>
            <h1 className="carTitle text-center text-[130px] md:text-[280px] font-bold text-white pt-[250px]">UT19</h1>
            <img className="mx-auto pt-10 w-[1000px]" src={CarCutout} alt="" />
            <div className='grid space-y-8 md:space-y-0 md:grid-cols-3 pt-10 md:pt-5'>
                <div>
                    <h2 className="text-[#3A4254] text-center text-xl md:text-2xl font-bold">Engine</h2>
                    <h2 className="text-center text-white text-3xl md:text-4xl font-bold">Honda TRX 450</h2>
                </div>
                <div>
                    <h2 className="text-[#3A4254] text-center text-xl md:text-2xl font-bold">Power</h2>
                    <h2 className="text-center text-white text-3xl md:text-4xl font-bold">51 hp</h2>
                </div>
                <div>
                    <h2 className="text-[#3A4254] text-center text-xl md:text-2xl font-bold">Weight</h2>
                    <h2 className="text-center text-white text-3xl md:text-4xl font-bold">375 lbs</h2>
                </div>
            </div>
            </Fade>
        </div>

        {/* Overview Section */}
        <div className='bg-[#303949] grid lg:grid-cols-2 text-white'>
            <div className='px-10 py-10 lg:px-24 lg:py-32'>
                <Fade cascade damping={0.2} triggerOnce>
                <h1 className='text-4xl md:text-6xl font-bold pb-10'>OVERVIEW</h1>
                <p>In 2019, UTFR celebrated its 20th year of competition. The team participated in Formula Student Czech Republic for the first time, and continued their participation and organization of UTFR Shootout. Powered by a Honda TRX 450 engine delivering 51hp, UTFR's technical prowess was evident through their innovative approach. The hybrid steel tube frame chassis, reinforced with CFRP (Carbon Fiber Reinforced Panels), provided a lightweight yet robust foundation, weighing in at 375lbs. Noteworthy advancements such as custom fuel injection highlighted the team's innovative spirit and dedication to pushing the boundaries of engineering. As UTFR embarked on its 20th year of competition, they continued to uphold the team's legacy of excellence while embracing new challenges and opportunities for growth.</p>
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
                    <h3 className='text-center lg:pb-0 text-2xl font-bold'>51st Place Overall</h3>
                    <h3 className='text-center text-2xl font-bold pb-10 lg:pb-0'>Business - 2nd Place</h3>
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
                    <h3 className='text-center text-2xl pt-5'>Formula Student Czech Republic</h3>
                    <h3 className='hidden text-center pb-10 lg:pb-0 text-2xl font-bold'>RESULT</h3>
                    <h3 className='hidden text-center lg:pb-0 text-2xl font-bold'>RESULT</h3>
                    </Fade>
                </div>
            </div>
            </Fade>
        </div>

        {/* Team Members Section */}  
        <TeamMembersSimpleComponents teamMembers={teamMembers} year={"UT19"}/>

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
                        <p className='md:text-2xl py-5 ml-auto'>51 hp</p>
                    </div>
                    <div className='flex border-b-2'>
                        <p className='md:text-2xl py-5'>Weight</p>
                        <p className='md:text-2xl py-5 ml-auto'>375 lbs</p>
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
export default UT19
