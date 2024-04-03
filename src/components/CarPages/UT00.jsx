import { Fade } from "react-awesome-reveal";
import GoToTop from '../GoToTop'
import HistoryCarousel from '../HistoryCarousel'

import CarCutout from '../../assets/HistoricCarPhotos/UT00/UT00-Cutout.png'
import OverviewImg from '../../assets/HistoricCarPhotos/UT00/2000-Competition-7.jpg'
import CompImg1 from '../../assets/HistoricCarPhotos/UT00/2000-Competition-10.jpg'
import CompImg2 from '../../assets/HistoricCarPhotos/UT00/2000-Competition-2.jpg'
import CarouselImg1 from '../../assets/HistoricCarPhotos/UT00/2000-Competition-1.jpg'
import CarouselImg2 from '../../assets/HistoricCarPhotos/UT00/2000-Competition-12.jpg'
import CarouselImg3 from '../../assets/HistoricCarPhotos/UT00/2000-Competition-13.jpg'
import CarouselImg4 from '../../assets/HistoricCarPhotos/UT00/2000-Competition-12.jpg'
import CarouselImg5 from '../../assets/HistoricCarPhotos/UT00/2000-Competition-3.jpg'
import CarouselImg6 from '../../assets/HistoricCarPhotos/UT00/2000-Competition-4.jpg'
import CarouselImg7 from '../../assets/HistoricCarPhotos/UT00/2000-Team-1.jpg'
import CarouselImg8 from '../../assets/HistoricCarPhotos/UT00/2000-Team-2.jpg'
import CarouselImg9 from '../../assets/HistoricCarPhotos/UT00/2000-Team-3.jpg'
import CarouselImg10 from '../../assets/HistoricCarPhotos/UT00/2000-Team-4.jpg'
import CarouselImg12 from '../../assets/HistoricCarPhotos/UT00/2000-Team-5.jpg'
import CarouselImg13 from '../../assets/HistoricCarPhotos/UT00/2000-Team-7.jpg'
import CarouselImg14 from '../../assets/HistoricCarPhotos/UT00/2000-Team-8.jpg'
import CarouselImg15 from '../../assets/HistoricCarPhotos/UT00/2000-Team-10.jpg'
import CarouselImg16 from '../../assets/HistoricCarPhotos/UT00/2000-Team-11.jpg'
import CarouselImg17 from '../../assets/HistoricCarPhotos/UT00/UT00.jpeg'
import CarouselImg18 from '../../assets/HistoricCarPhotos/UT00/utday-fsae2000.jpg'
import CarouselImg19 from '../../assets/HistoricCarPhotos/UT00/2000-Competition-5.jpg'
import CarouselImg20 from '../../assets/HistoricCarPhotos/UT00/2000-Competition-8.jpg'
import CarouselImg21 from '../../assets/HistoricCarPhotos/UT00/2000-Competition-9.jpg'

import TeamMembersSimpleComponents from "./TeamMembersSimpleComponent";

const UT00 = () => {
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
            image: CarouselImg12,
            description: ''
        },
        {
            image: CarouselImg13,
            description: ''
        },
        {
            image: CarouselImg14,
            description: ''
        },
        {
            image: CarouselImg15,
            description: ''
        },
        {
            image: CarouselImg16,
            description: ''
        },
        {
            image: CarouselImg17,
            description: ''
        },
        {
            image: CarouselImg18,
            description: 'The team at The University of Toronto day with the UT00'
        },
        {
            image: CarouselImg19,
            description: ''
        },
        {
            image: CarouselImg20,
            description: ''
        },
        {
            image: CarouselImg21,
            description: ''
        },
    ];
    
    const teamMembers = [
        { name: "Eric Rauch", specialization: "- Team Principal" },
        { name: "Wilson Yong", specialization: "- Business Director" },
        { name: "Maurizio Darini", specialization: "- Suspension" },
        { name: "Sandro Vono", specialization: "- Suspension" },
        { name: "Akos Toth", specialization: "- Engine Guru" },
        { name: "Yan Weizblit", specialization: "- Frame Design" },
        { name: "Ed Fazari", specialization: "- Ergonomics" },
        { name: "Ari Klejman", specialization: "- PR Student" },
        { name: "Greg Skvortsoff", specialization: "- Frame Design" },
        { name: "Dave Rubino", specialization: "- Shifter" },
        { name: "Noah Hansen", specialization: "- Differential" },
        { name: "Tony Kim", specialization: "" },
        { name: "Enrico Diano", specialization: "" },
        { name: "Vince Caleriano", specialization: "" },
        
    ];

  return (
    <div>
        {/* Header */}
        <div className="h-screen bg-[#B6C1D0]">
            <Fade cascade damping={0.2} triggerOnce>
            <h1 className="carTitle text-center text-[130px] md:text-[280px] font-bold text-white pt-[250px]">UT00</h1>
            <img className="mx-auto pt-10 w-[1000px]" src={CarCutout} alt="" />
            <div className='grid space-y-8 md:space-y-0 md:grid-cols-3 pt-10 md:pt-10'>
                <div>
                    <h2 className="text-[#3A4254] text-center text-xl md:text-2xl font-bold">Power</h2>
                    <h2 className="text-center text-white text-3xl md:text-4xl font-bold">81 hp</h2>
                </div>
                <div>
                    <h2 className="text-[#3A4254] text-center text-xl md:text-2xl font-bold">0 - 91 km/h</h2>
                    <h2 className="text-center text-white text-3xl md:text-4xl font-bold">4.2 s</h2>
                </div>
                <div>
                    <h2 className="text-[#3A4254] text-center text-xl md:text-2xl font-bold">Redline</h2>
                    <h2 className="text-center text-white text-3xl md:text-4xl font-bold">14,000 RPM</h2>
                </div>
            </div>
            </Fade>
        </div>

        {/* Overview Section */}
        <div className='bg-[#303949] grid grid-cols-2 text-white'>
            <div className='px-10 py-10 lg:px-24 lg:py-32'>
                <Fade cascade damping={0.2} triggerOnce>
                <h1 className='text-4xl md:text-6xl font-bold pb-10'>OVERVIEW</h1>
                <p>Marking the turn of the century, UTFR continued their pursuit to performing well at competitions and had significant results in both competitions. The team was incredibly close to a win at Formula Student UK winning numerous awards for their work. UTFR still finished with an impressive 2nd place overall result. The team also attended Formula SAE Detroit like last year, but jumped 46 places, finishing 8th place overall! Fun fact: our car had the most power in the aspiration class, placing higher than all turbocharged cars. The car featured a Zexel Torsen differential with a custom dry sump oil system.</p>
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
            <div className='grid lg:grid-cols-2 items-center pb-10'>
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
                    <h3 className='text-center text-2xl font-bold lg:pb-0'>8th Place Overall</h3>
                    <h3 className='text-center pb-10 lg:pb-0 text-2xl font-bold'>Highest Horsepower Award</h3>
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
                    <h3 className='text-center pb-10 md:pb-0 text-2xl font-bold'>Dynamic Stability Award & Endurance Event Award</h3>
                    </Fade>
                </div>
            </div>
            </Fade>
        </div>

        {/* Team Members Section */}
        <TeamMembersSimpleComponents teamMembers={teamMembers} year={"UT00"} />
        
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
                        <p className='md:text-2xl py-5 ml-auto'>Honda F4 with custom fuel injection</p>
                    </div>
                    <div className='flex border-b-2'>
                        <span className='hidden md:inline md:text-2xl py-5'>Redline</span>
                        <p className='md:text-2xl py-5 ml-auto'>14,000 RPM</p>
                    </div>
                    <div className='flex border-b-2'>
                        <p className='md:text-2xl py-5'>Power</p>
                        <p className='md:text-2xl py-5 ml-auto'>81 hp</p>
                    </div>
                    <div className='flex border-b-2'>
                        <p className='md:text-2xl py-5'>0 - 91 km/h</p>
                        <p className='md:text-2xl py-5 ml-auto'>4.2 s</p>
                    </div>
                    <div className='flex border-b-2'>
                        <p className='md:text-2xl py-5'>Chassis</p>
                        <p className='md:text-2xl py-5 ml-auto'>Cromoly steel tubular space frame</p>
                    </div>
                    <div className='flex border-b-2'>
                        <p className='md:text-2xl py-5'>Lap Time at the Mosport Driver Development Track</p>
                        <p className='md:text-2xl py-5 ml-auto'>51 s (dry)</p>
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
export default UT00
