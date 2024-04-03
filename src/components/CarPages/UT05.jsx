import { Fade } from "react-awesome-reveal";
import GoToTop from '../GoToTop'
import HistoryCarousel from '../HistoryCarousel'

import CarCutout from '../../assets/HistoricCarPhotos/UT05/UT05-Cutout.png'
import OverviewImg from '../../assets/HistoricCarPhotos/UT05/2005-Team-1.jpg'
import CompImg1 from '../../assets/HistoricCarPhotos/UT05/2005-Competition-1.jpg'
import CompImg2 from '../../assets/HistoricCarPhotos/UT05/2005-Car-1.jpg'
import CarouselImg1 from '../../assets/HistoricCarPhotos/UT05/2005-Cool-1.jpg'
import CarouselImg2 from '../../assets/HistoricCarPhotos/UT05/2005-Team-2.jpg'
import CarouselImg3 from '../../assets/HistoricCarPhotos/UT05/2005-Test-1.jpg'
import CarouselImg4 from '../../assets/HistoricCarPhotos/UT05/2005-Test-2.jpg'
import CarouselImg5 from '../../assets/HistoricCarPhotos/UT05/2005-Test-3.jpg'
import CarouselImg6 from '../../assets/HistoricCarPhotos/UT05/2005-Test-4.jpg'
import CarouselImg7 from '../../assets/HistoricCarPhotos/UT05/2005-Test-5.jpg'

const UT05 = () => {
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
    ];

  return (
    <div>
        {/* Header */}
        <div className="h-screen bg-[#B6C1D0]">
            <Fade cascade damping={0.2} triggerOnce>
            <h1 className="carTitle text-center text-[130px] md:text-[280px] font-bold text-white pt-[250px]">UT05</h1>
            <img className="mx-auto pt-10 w-[1000px]" src={CarCutout} alt="" />
            <div className='grid space-y-8 md:space-y-0 md:grid-cols-3 pt-10 md:pt-5'>
                <div>
                    <h2 className="text-[#3A4254] text-center text-xl md:text-2xl font-bold">Power</h2>
                    <h2 className="text-center text-white text-3xl md:text-4xl font-bold">75bhp @ 11,500 rpm</h2>
                </div>
                <div>
                    <h2 className="text-[#3A4254] text-center text-xl md:text-2xl font-bold">0 - 100 km/h</h2>
                    <h2 className="text-center text-white text-3xl md:text-4xl font-bold">2.9 s</h2>
                </div>
                <div>
                    <h2 className="text-[#3A4254] text-center text-xl md:text-2xl font-bold">Top Speed</h2>
                    <h2 className="text-center text-white text-3xl md:text-4xl font-bold">180 km/h</h2>
                </div>
            </div>
            </Fade>
        </div>

        {/* Overview Section */}
        <div className='bg-[#303949] grid lg:grid-cols-2 text-white'>
            <div className='px-10 py-10 lg:px-24 lg:py-32'>
                <Fade cascade damping={0.2} triggerOnce>
                <h1 className='text-4xl md:text-6xl font-bold pb-10'>OVERVIEW</h1>
                <p>In 2005, the team clinched the title of World Champions by securing the win at Formula Student UK. The UT05 showcased exceptional performance and innovation throughout the season. During this time, UTFR was known to have some of the best naturally aspirated inline 4 engines, beating some turbocharged engines. The team's collaborative spirit and dedication to innovation, coupled with strategic partnerships and mentorship, propelled UT05 to victory and solidified its legacy as a dominant force in Formula SAE history.</p>
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
            <div className='grid lg:grid-cols-2 pb-10'>
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
                    <h3 className='text-center text-2xl pt-5'>Formula SAE Michigan</h3>
                    <h3 className='text-center pb-10 lg:pb-0 text-2xl font-bold pb-10 lg:pb-0'>51st Place Overall</h3>
                    <h3 className='hidden text-center text-2xl font-bold lg:pb-0'>RESULT</h3>
                    <h3 className='hidden text-center text-2xl font-bold lg:pb-10'>RESULT</h3>
                    <h3 className='hidden text-center text-2xl font-bold lg:pb-10'>RESULT</h3>
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
                    <h3 className='text-center md:pb-0 text-2xl font-bold'>1st Place Overall</h3>
                    <h3 className='text-center text-2xl font-bold lg:pb-0'>Autocross - 1st Place</h3>
                    <h3 className='text-center text-2xl font-bold lg:pb-0'>Endurance - 1st Place</h3>
                    </Fade>
                </div>
            </div>
            </Fade>
        </div>

        {/* Team Members Section */}
        <div className='bg-[#303949] pb-10 px-10 text-[#222220]'>
            <Fade cascade damping={0.2} triggerOnce>
            <h1 className='text-5xl md:text-6xl font-bold pt-7 pb-10 text-center text-white'>UT05 TEAM MEMBERS</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            
            {/* Directors */}
            <div className="teamCard bg-gray-100 p-4 rounded-lg py-7">
                <Fade cascade damping={0.1} triggerOnce>
                <h2 className="text-2xl font-semibold mb-2 pl-4">DIRECTORS</h2>
                <ul className=''>
                <li>Huang Iu - Team Principal</li>
                <li>Jerry Zielinski - Business Director</li>
                </ul>
                </Fade>
            </div>
            {/* Drivetrain */}
            <div className="teamCard bg-gray-100 p-4 rounded-lg py-7">
                <Fade cascade damping={0.1} triggerOnce>
                <h2 className="text-2xl font-semibold mb-2 pl-4">DRIVETRAIN</h2>
                <ul className=''>
                <li>Stefan</li>
                <li>Jeremy</li>
                </ul>
                </Fade>
            </div>

            {/* Suspension */}
            <div className="teamCard bg-gray-100 p-4 rounded-lg py-7">
                <Fade cascade damping={0.1} triggerOnce>
                <h2 className="text-2xl font-semibold mb-2 pl-4">SUSPENSION</h2>
                <ul>
                    <li>Andrew</li>
                    <li>Vince</li>
                    <li>Matthew</li>
                </ul>
                </Fade>
            </div>

            {/* Chassis */}
            <div className="teamCard bg-gray-100 p-4 rounded-lg py-7">
                <Fade cascade damping={0.1} triggerOnce>
                <h2 className="text-2xl font-semibold mb-2 pl-4">CHASSIS</h2>
                <ul>        
                    <li>Maggie Lafreniere</li>
                    <li>Jeremy</li>
                    <li>Matthew</li>
                </ul>
                </Fade>
            </div>

            {/* Powertrain */}
            <div className="teamCard bg-gray-100 p-4 rounded-lg py-7">
                <Fade cascade damping={0.1} triggerOnce>
                <h2 className="text-2xl font-semibold mb-2 pl-4">POWERTRAIN</h2>
                <ul>
                    <li>Neal Persaud</li>
                    <li>Nilufar</li>
                    <li>Squib</li>
                    <li>Antonio</li>
                    <li>Leo</li>
                </ul>
                </Fade>
            </div>

            {/* Brakes */}
            <div className="teamCard bg-gray-100 p-4 rounded-lg py-7">
                <Fade cascade damping={0.1} triggerOnce>
                <h2 className="text-2xl font-semibold mb-2 pl-4">BRAKES</h2>
                <ul>        
                    <li>Jason Kao</li>
                    <li>Daxin</li>
                </ul>
                </Fade>
            </div>

            {/* Management */}
            <div className="teamCard bg-gray-100 p-4 rounded-lg py-7">
                <Fade cascade damping={0.1} triggerOnce>
                <h2 className="text-2xl font-semibold mb-2 pl-4">MANAGEMENT</h2>
                <ul>        
                    <li>Daniel Zanini</li>
                    <li>Nadia Boin</li>
                    <li>Huang Iu</li>
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
                        <p className='md:text-2xl py-5 ml-auto'>Honda CBR600</p>
                    </div>
                    <div className='flex border-b-2'>
                        <span className='hidden md:inline md:text-2xl py-5'>Redline</span>
                        <p className='md:text-2xl py-5 ml-auto'>13,000 rpm</p>
                    </div>
                    <div className='flex border-b-2'>
                        <p className='md:text-2xl py-5'>Power</p>
                        <p className='md:text-2xl py-5 ml-auto'>75 bhp @ 11,500 rpm</p>
                    </div>
                    <div className='flex border-b-2'>
                        <p className='md:text-2xl py-5'>0 - 100 km/h</p>
                        <p className='md:text-2xl py-5 ml-auto'>2.9 s</p>
                    </div>
                    <div className='flex border-b-2'>
                        <span className='hidden md:inline md:text-2xl py-5'>Top Speed</span>
                        <p className='md:text-2xl py-5 ml-auto'>180 km/h</p>
                    </div>
                    <div className='flex border-b-2'>
                        <p className='md:text-2xl py-5'>Lateral Acceleration</p>
                        <p className='md:text-2xl py-5 ml-auto'>1.8 g</p>
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
export default UT05