import { Fade } from "react-awesome-reveal";
import GoToTop from '../GoToTop'
import HistoryCarousel from '../HistoryCarousel'

import CarCutout from '../../assets/HistoricCarPhotos/UT99/UT99-Cutout.png'
import OverviewImg from '../../assets/HistoricCarPhotos/UT99/1999-Competition-1.jpg'
import CompImg1 from '../../assets/HistoricCarPhotos/UT99/1999-Competition-2.jpg'
import CarouselImg1 from '../../assets/HistoricCarPhotos/UT99/1999-Competition-3.jpg'
import CarouselImg2 from '../../assets/HistoricCarPhotos/UT99/1999-Team-1.jpg'
import CarouselImg3 from '../../assets/HistoricCarPhotos/UT99/1999-Competition-4.jpg'
import CarouselImg4 from '../../assets/HistoricCarPhotos/UT99/1999-Competition-5.jpg'
import CarouselImg5 from '../../assets/HistoricCarPhotos/UT99/1999-Team-2.jpg'
import CarouselImg6 from '../../assets/HistoricCarPhotos/UT99/1999-Team-3.jpg'
import CarouselImg7 from '../../assets/HistoricCarPhotos/UT99/1999-Vehicle-1.jpg'
import CarouselImg8 from '../../assets/HistoricCarPhotos/UT99/1999-Vehicle-2.jpg'

import TeamMembersSimpleComponents from "./TeamMembersSimpleComponent";

const UT99 = () => {
    const slides = [
        {
          image: CarouselImg1,
          description: 'The team\'s UT99, competing at Formula SAE Detroit.'
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
    ];

    const teamMembers = [
        { name: 'Aaron Tsang', specialization: '- Team Principal' },
        { name: 'Maurizio Darini', specialization: '' },
        { name: 'Sandro Vono', specialization: '' },
        { name: 'Akos Toth', specialization: '' },
        { name: 'Yan Weizblit', specialization: '' },
        { name: 'Manzar Akber', specialization: '' },
        { name: 'Paul Marttila', specialization: '' },
        { name: 'Jason Maristanez', specialization: '' },
        { name: 'Liung Liao', specialization: '' }
    ];


  return (
    <div>
        {/* Header */}
        <div className="h-screen bg-[#B6C1D0]">
            <Fade cascade damping={0.2} triggerOnce>
            <h1 className="carTitle text-center text-[130px] md:text-[280px] font-bold text-white pt-[250px]">UT99</h1>
            <img className="mx-auto pt-10 w-[1000px]" src={CarCutout} alt="" />
            </Fade>
        </div>

        {/* Overview Section */}
        <div className='bg-[#303949] grid lg:grid-cols-2 text-white'>
            <div className='px-10 py-10 lg:px-24 lg:py-32'>
                <Fade cascade damping={0.2} triggerOnce>
                <h1 className='text-4xl md:text-6xl font-bold pb-10'>OVERVIEW</h1>
                <p>In 1999, UTFR competed at its first ever competition, Formula SAE Detroit. The team worked very hard throughout the year to get the car competition ready. From January 1999 to March 1999, the team was testing and driver training. During this time they were also working on marketing the team. April 1999 to May 1999 concluded testing just in time for the competition in May. The team placed 54th overall out of 100 teams which is an impressive result for the team's first competition. Fun fact: the team had to tape pool noodles to the car's nose because it was too pointy for the regulations.</p>
                </Fade>
            </div>
            <div className='mx-auto my-auto px-10 pb-10 lg:py-10 lg:pr-24'>
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
                        backgroundPositionY: "80%"
                        }}>
                    </div>
                    <Fade cascade damping={0.2} triggerOnce>
                    <h3 className='text-center text-2xl pt-5'>Formula SAE Detroit</h3>
                    <h3 className='text-center text-2xl font-bold pb-5 lg:pb-0'>54th Place Overall out of 100 teams!</h3>
                    </Fade>
                </div>
            </div>
            </Fade>
        </div>

        {/* Team Members Section */}
        <TeamMembersSimpleComponents teamMembers={teamMembers} year={"UT99"}/>
        
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
                        <p className='md:text-2xl py-5 ml-auto'>Yamaha YZF 600</p>
                    </div>
                    <div className='flex border-b-2'>
                        <span className='hidden md:inline md:text-2xl py-5'>Chassis</span>
                        <p className='md:text-2xl py-5 ml-auto'>Cromoly steel tubular space frame</p>
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
export default UT99
