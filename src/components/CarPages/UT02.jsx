import { Fade } from "react-awesome-reveal";
import GoToTop from '../GoToTop'
import HistoryCarousel from '../HistoryCarousel'

import CarCutout from '../../assets/HistoricCarPhotos/UT02/UT02-Cutout.png'
import OverviewImg from '../../assets/HistoricCarPhotos/UT02/2002-Team-1.jpg'
import CompImg1 from '../../assets/HistoricCarPhotos/UT02/2002-Competition-2.jpg'
import CompImg2 from '../../assets/HistoricCarPhotos/UT02/2002-Competition-4.jpg'
import CarouselImg1 from '../../assets/HistoricCarPhotos/UT02/2002-Competition-1.jpg'
import CarouselImg3 from '../../assets/HistoricCarPhotos/UT02/2002-Shop-1.jpg'
import CarouselImg4 from '../../assets/HistoricCarPhotos/UT02/2002-Vehicle-1.jpg'
import CarouselImg5 from '../../assets/HistoricCarPhotos/UT02/2002-Team-2.jpg'
import CarouselImg6 from '../../assets/HistoricCarPhotos/UT02/2002-Team-3.jpg'
import CarouselImg7 from '../../assets/HistoricCarPhotos/UT02/2002-Team-4.jpg'
import TeamMembersSimpleComponents from "./TeamMembersSimpleComponent";

const UT02 = () => {
    const slides = [
        {
            image: CarouselImg1,
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
    ];

    const teamMembers = [
        { name: "Anthony Wei", specialization: "- Team Principal" },
        { name: "Jerry Zielinksi", specialization: "- Engine Team Member, Driver" },
        { name: "Matthew Ferraro", specialization: "- Chassis" },
        { name: "Adam Sinclair", specialization: "" },
        { name: "Jeremy Koudelka", specialization: "" },
        { name: "Akos Toth", specialization: "" },
        { name: "Enrico Diano", specialization: "" },
        { name: "Ruth Tan", specialization: "" },
        { name: "Nadia B", specialization: "" },
        { name: "Vinh Pham", specialization: "" },
    ];

  return (
    <div>
        {/* Header */}
        <div className="h-screen bg-[#B6C1D0]">
            <Fade cascade damping={0.2} triggerOnce>
            <h1 className="carTitle text-center text-[130px] md:text-[280px] font-bold text-white pt-[250px]">UT02</h1>
            <img className="mx-auto pt-10 w-[1000px]" src={CarCutout} alt="" />
            <div className='grid space-y-8 md:space-y-0 md:grid-cols-3 pt-10 md:pt-10'>
                <div>
                    <h2 className="text-[#3A4254] text-center text-xl md:text-2xl font-bold">Power</h2>
                    <h2 className="text-center text-white text-3xl md:text-4xl font-bold">~ 75 bhp</h2>
                </div>
                <div>
                    <h2 className="text-[#3A4254] text-center text-xl md:text-2xl font-bold">0 - 100 km/h</h2>
                    <h2 className="text-center text-white text-3xl md:text-4xl font-bold">2.9 s</h2>
                </div>
                <div>
                    <h2 className="text-[#3A4254] text-center text-xl md:text-2xl font-bold">150 - 0 km/h</h2>
                    <h2 className="text-center text-white text-3xl md:text-4xl font-bold">3.0 s</h2>
                </div>
            </div>
            </Fade>
        </div>

        {/* Overview Section */}
        <div className='bg-[#303949] grid lg:grid-cols-2 text-white'>
            <div className='px-10 py-10 lg:px-24 lg:py-32'>
                <Fade cascade damping={0.2} triggerOnce>
                <h1 className='text-4xl md:text-6xl font-bold pb-10'>OVERVIEW</h1>
                <p>In 2002, the team competed in their first ever European competition, attending Formula student UK. The University of Toronto Formula Racing Team is the first ever Canadian team to attend a Formula Student European competition. The team finished with a 2nd place overall result, winning first place awards in class 1 autocross, endurance, and overall performance. UTFR improved their result in Michigan, finishing 30th overall. The UT02 has custom Kodiak alloy wheels and custom fuel injection for the reliable Honda CBR600 F4. This car is a whole second faster in its 0 - 100 km/h than the UT01 which is a tremendous achievement for the team.</p>
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
            <div className='grid '>
                <div className='px-10'>
                    <div className='competitionCard h-[400px]' style={{
                        backgroundImage: `url(${CompImg1})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPositionY: "40%"
                        }}>
                    </div>
                    <Fade cascade damping={0.2} triggerOnce>
                    <h3 className='text-center text-2xl pt-5'>Formula SAE Michigan</h3>
                    <h3 className='text-center pb-10 md:pb-10 text-2xl font-bold'>30th Place Overall</h3>
                    <h3 className='text-center text-2xl font-bold hidden'>Highest Horespower Award</h3>
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
                    <h3 className='text-center text-2xl pt-5'>Formula Student UK</h3>
                    <h3 className='text-center pb-10 md:pb-0 text-2xl font-bold'>2nd Place Overall</h3>
                    <h3 className='text-center pb-10 md:pb-0 text-2xl font-bold'>Autocross (Class 1) - 1st Place</h3>
                    <h3 className='text-center pb-10 md:pb-0 text-2xl font-bold'>Endurance (Class 1) - 1st Place</h3>
                    <h3 className='text-center pb-10 md:pb-0 text-2xl font-bold'>Overall Performance (Class 1) - 1st Place</h3>
                    <h3 className='text-center pb-10 lg:pb-0 text-2xl font-bold'>Most Innovative Powertrain Award</h3>
                    </Fade>
                </div>
            </div>
            </Fade>
        </div>

        {/* Team Members Section */}
        <TeamMembersSimpleComponents teamMembers={teamMembers} year={"UT02"} />
        
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
                        <p className='md:text-2xl py-5 ml-auto'>Honda CBR600 F4</p>
                    </div>
                    <div className='flex border-b-2'>
                        <p className='md:text-2xl py-5'>Power</p>
                        <p className='md:text-2xl py-5 ml-auto'>~ 75 bhp</p>
                    </div>
                    <div className='flex border-b-2'>
                        <p className='md:text-2xl py-5'>0 - 100 km/h</p>
                        <p className='md:text-2xl py-5 ml-auto'>2.9 s</p>
                    </div>
                    <div className='flex border-b-2'>
                        <p className='md:text-2xl py-5'>150 - 0 km/h</p>
                        <p className='md:text-2xl py-5 ml-auto'>3.0 s</p>
                    </div>
                    <div className='flex border-b-2'>
                        <p className='md:text-2xl py-5'>Weight</p>
                        <p className='md:text-2xl py-5 ml-auto'>460 lbs</p>
                    </div>
                    <div className='flex border-b-2'>
                        <p className='md:text-2xl py-5'>Torsional Stiffness</p>
                        <p className='md:text-2xl py-5 ml-auto'>2400 ft-lb/deg</p>
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
export default UT02
