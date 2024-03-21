import { Fade } from "react-awesome-reveal";
import GoToTop from '../GoToTop'
import HistoryCarousel from '../HistoryCarousel'

import CarCutout from '../../assets/HistoricCarPhotos/UT01/UT01-Cutout.png'
import OverviewImg from '../../assets/HistoricCarPhotos/UT01/2001-Team-1.jpg'
import CompImg1 from '../../assets/HistoricCarPhotos/UT01/2001-Competition-2.jpg'
import CompImg2 from '../../assets/HistoricCarPhotos/UT01/2001-Competition-7.jpg'
import CarouselImg1 from '../../assets/HistoricCarPhotos/UT01/2001-Competition-1.jpg'
import CarouselImg2 from '../../assets/HistoricCarPhotos/UT01/2001-Competition-3.jpg'
import CarouselImg3 from '../../assets/HistoricCarPhotos/UT01/2001-Competition-4.jpg'
import CarouselImg4 from '../../assets/HistoricCarPhotos/UT01/2001-Competition-5.jpg'
import CarouselImg5 from '../../assets/HistoricCarPhotos/UT01/2001-Competition-6.jpg'
import CarouselImg6 from '../../assets/HistoricCarPhotos/UT01/2001-Competition-8.jpg'
import CarouselImg7 from '../../assets/HistoricCarPhotos/UT01/2001-Competition-9.jpg'
import CarouselImg8 from '../../assets/HistoricCarPhotos/UT01/2001-Competition-10.jpg'
import CarouselImg9 from '../../assets/HistoricCarPhotos/UT01/2001-Diagram-1.jpeg'
import CarouselImg10 from '../../assets/HistoricCarPhotos/UT01/2001-Team-1.jpg'
import CarouselImg11 from '../../assets/HistoricCarPhotos/UT01/2001-Team-2.jpg'
import CarouselImg12 from '../../assets/HistoricCarPhotos/UT01/2001-Vehicle-1.jpg'
import CarouselImg13 from '../../assets/HistoricCarPhotos/UT01/2001-Vehicle-2.jpg'
import CarouselImg14 from '../../assets/HistoricCarPhotos/UT01/2001-Vehicle-3.jpg'
import CarouselImg15 from '../../assets/HistoricCarPhotos/UT01/2001-Vehicle-4.jpg'
import CarouselImg16 from '../../assets/HistoricCarPhotos/UT01/UT01.jpeg'

const UT01 = () => {
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
    ];

  return (
    <div>
        {/* Header */}
        <div className="h-screen bg-[#B6C1D0]">
            <Fade cascade damping={0.2} triggerOnce>
            <h1 className="carTitle text-center text-[130px] md:text-[280px] font-bold text-white pt-[250px]">UT01</h1>
            <img className="mx-auto pt-10 w-[1000px]" src={CarCutout} alt="" />
            <div className='grid space-y-8 md:space-y-0 md:grid-cols-3 pt-10 md:pt-10'>
                <div>
                    <h2 className="text-[#3A4254] text-center text-xl md:text-2xl font-bold">Top Speed</h2>
                    <h2 className="text-center text-white text-3xl md:text-4xl font-bold">200 km/h+</h2>
                </div>
                <div>
                    <h2 className="text-[#3A4254] text-center text-xl md:text-2xl font-bold">0 - 100 km/h</h2>
                    <h2 className="text-center text-white text-3xl md:text-4xl font-bold">3.9 s</h2>
                </div>
                <div>
                    <h2 className="text-[#3A4254] text-center text-xl md:text-2xl font-bold">Lateral Acceleration</h2>
                    <h2 className="text-center text-white text-3xl md:text-4xl font-bold">1.2 g</h2>
                </div>
            </div>
            </Fade>
        </div>

        {/* Overview Section */}
        <div className='bg-[#303949] grid lg:grid-cols-2 text-white'>
            <div className='px-10 py-10 lg:px-24 lg:py-32'>
                <Fade cascade damping={0.2} triggerOnce>
                <h1 className='text-4xl md:text-6xl font-bold pb-10'>OVERVIEW</h1>
                <p>Marking the turn of the century, UTFR continued their pursuit to performing well at competitions and had significant results in both competitions. The team was incredibly close to a win at Formula Student UK winning numerous awards for their work. UTFR still finished with an impressive 2nd place overall result. The team also attended Formula SAE Detroit like last year, but jumped 46 places, finishing 8th place overall! Fun fact: our car had the most power in the aspiration class, placing higher than all turbocharged cars. The car featured a Zexel Torsen differential with a custom dry sump oil system. Additionally, 2001 was the start of UTFR Shootout, the formula racing competition that is still run to this day!</p>
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
            <div className='grid grid-cols-2 '>
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
                    <h3 className='text-center pb-10 md:pb-10 text-2xl font-bold'>40th Place Overall</h3>
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
                    <h3 className='text-center text-2xl pt-5'>SCCA Solo (Texas)</h3>
                    <h3 className='hidden text-center pb-10 md:pb-0 text-2xl font-bold'>2nd Place Overall</h3>
                    <h3 className='hidden text-center pb-10 md:pb-0 text-2xl font-bold'>Dynamic Stability Award & Endurance Event Award</h3>
                    </Fade>
                </div>
            </div>
            </Fade>
        </div>

        {/* Team Members Section */}
        <div className='bg-[#303949] pb-10 px-10 text-[#222220]'>
            <Fade cascade damping={0.2} triggerOnce>
            <h1 className='text-5xl md:text-6xl font-bold pt-7 pb-10 text-center text-white'>UT01 TEAM MEMBERS</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            
            {/* Directors */}
            <div className="teamCard bg-gray-100 p-4 rounded-lg py-7">
                <Fade cascade damping={0.1} triggerOnce>
                <h2 className="text-2xl font-semibold mb-2 pl-4">DIRECTORS</h2>
                <ul className=''>
                <li>Vincent Valeriano - Team Principal</li>
                <li>Tony Kazulin - Business Director</li>
                <li>Enrico Diano - Communications Director</li>
                <li>David Rubino - Technical Director</li>
                <li>Akos Toth - Technical Director</li>
                <li>Aaron Klejman - P/R Rep</li>
                </ul>
                </Fade>
            </div>
            {/* Mechanical */}
            <div className="teamCard bg-gray-100 p-4 rounded-lg py-7">
                <Fade cascade damping={0.1} triggerOnce>
                <h2 className="text-2xl font-semibold mb-2 pl-4">ELECTRONICS</h2>
                <ul className=''>
                <li>Matthew Ferraro</li>
                <li>Akos Toth</li>
                <li>Elena Andreeva</li>
                <li>Sue Redekop</li>
                <li>Jim Quattrociocchi</li>
                <li>Vijay Khatri</li>
                </ul>
                </Fade>
            </div>

            {/* Engine */}
            <div className="teamCard bg-gray-100 p-4 rounded-lg py-7">
                <Fade cascade damping={0.1} triggerOnce>
                <h2 className="text-2xl font-semibold mb-2 pl-4">ENGINE</h2>
                <ul>
                <li>Mark Rabo</li>
                <li>Akos Toth</li>
                <li>Wayne Lo</li>
                <li>Aaron Klejman</li>
                </ul>
                </Fade>
            </div>

            {/* Chassis */}
            <div className="teamCard bg-gray-100 p-4 rounded-lg py-7">
                <Fade cascade damping={0.1} triggerOnce>
                <h2 className="text-2xl font-semibold mb-2 pl-4">CHASSIS</h2>
                <ul>        
                <li>Enrico Diano</li>
                <li>Tony Kim</li>
                <li>Wilson Yong</li>
                <li>Gavin Hay</li>
                <li>David Rubino</li>
                <li>Justin Knight</li>
                </ul>
                </Fade>
            </div>

            {/* Suspension */}
            <div className="teamCard bg-gray-100 p-4 rounded-lg py-7">
                <Fade cascade damping={0.1} triggerOnce>
                <h2 className="text-2xl font-semibold mb-2 pl-4">SUSPENSION</h2>
                <ul>
                <li>Ed Fazari</li>
                <li>Vince Valeriano</li>
                </ul>
                </Fade>
            </div>

            {/* General Team Members */}
            <div className="teamCard bg-gray-100 p-4 rounded-lg py-7">
                <Fade cascade damping={0.1} triggerOnce>
                <h2 className="text-2xl font-semibold mb-2 pl-4">GENERAL MEMBERS</h2>
                <ul>        
                    <li>Vinh Pham</li>
                    <li>Jerry Zielinksi</li>
                </ul>
                </Fade>
            </div>
            </div>
            </Fade>
        </div>

        
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
                        <p className='md:text-2xl py-5 ml-auto'>Honda CBR 600 F4, naturally aspirated</p>
                    </div>
                    <div className='flex border-b-2'>
                        <p className='md:text-2xl py-5'>Top Speed</p>
                        <p className='md:text-2xl py-5 ml-auto'>200 km/h+</p>
                    </div>
                    <div className='flex border-b-2'>
                        <p className='md:text-2xl py-5'>0 - 100 km/h</p>
                        <p className='md:text-2xl py-5 ml-auto'>3.9 s</p>
                    </div>
                    <div className='flex border-b-2'>
                        <p className='md:text-2xl py-5'>Lateral Acceleration</p>
                        <p className='md:text-2xl py-5 ml-auto'>1.2 g</p>
                    </div>
                    <div className='flex border-b-2'>
                        <p className='md:text-2xl py-5'>Chassis</p>
                        <p className='md:text-2xl py-5 ml-auto'>Cromoly steel tubular space frame</p>
                    </div>
                    <div className='flex border-b-2'>
                        <p className='md:text-2xl py-5'>Suspension</p>
                        <p className='md:text-2xl py-5 ml-auto'>A-arm pushrod system with anti-roll bars</p>
                    </div>
                    <div className='flex border-b-2'>
                        <p className='md:text-2xl py-5'>Weight</p>
                        <p className='md:text-2xl py-5 ml-auto'>484 lbs</p>
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
export default UT01
