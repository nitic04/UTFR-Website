import { Fade } from "react-awesome-reveal";
import GoToTop from '../GoToTop'
import HistoryCarousel from '../HistoryCarousel'

import CarCutout from '../../assets/HistoricCarPhotos/UT08/UT08-Cutout.png'
import OverviewImg from '../../assets/HistoricCarPhotos/UT08/2008-FStudent-1.jpg'
import CompImg1 from '../../assets/HistoricCarPhotos/UT08/2008-FStudent-2.jpg'
import CompImg2 from '../../assets/HistoricCarPhotos/UT08/2008-FSG-1.jpg'
import CarouselImg1 from '../../assets/HistoricCarPhotos/UT08/2008-FSG-2.jpg'
import CarouselImg2 from '../../assets/HistoricCarPhotos/UT08/2008-FStudent-3.jpg'
import CarouselImg3 from '../../assets/HistoricCarPhotos/UT08/2008-Shop-1.jpg'
import CarouselImg4 from '../../assets/HistoricCarPhotos/UT08/2008-Shop-2.jpg'
import CarouselImg5 from '../../assets/HistoricCarPhotos/UT08/2008-Shop-3.jpg'
import CarouselImg6 from '../../assets/HistoricCarPhotos/UT08/2008-Shop-4.jpg'
import CarouselImg7 from '../../assets/HistoricCarPhotos/UT08/2008-Team-1.jpg'

const UT08 = () => {
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
            <h1 className="carTitle text-center text-[130px] md:text-[280px] font-bold text-white pt-[250px]">UT08</h1>
            <img className="mx-auto pt-10 w-[1000px]" src={CarCutout} alt="" />
            <div className='grid space-y-8 md:space-y-0 md:grid-cols-3 pt-10 md:pt-5'>
                <div>
                    <h2 className="text-[#3A4254] text-center text-xl md:text-2xl font-bold">0 - 200 km/h</h2>
                    <h2 className="text-center text-white text-3xl md:text-4xl font-bold">3.2 s</h2>
                </div>
                <div>
                    <h2 className="text-[#3A4254] text-center text-xl md:text-2xl font-bold">Top Speed</h2>
                    <h2 className="text-center text-white text-3xl md:text-4xl font-bold">180 km/h</h2>
                </div>
                <div>
                    <h2 className="text-[#3A4254] text-center text-xl md:text-2xl font-bold">Lateral Acceleration</h2>
                    <h2 className="text-center text-white text-3xl md:text-4xl font-bold">1.8 g</h2>
                </div>
            </div>
            </Fade>
        </div>

        {/* Overview Section */}
        <div className='bg-[#303949] grid lg:grid-cols-2 text-white'>
            <div className='px-10 py-10 lg:px-24 lg:py-32'>
                <Fade cascade damping={0.2} triggerOnce>
                <h1 className='text-4xl md:text-6xl font-bold pb-10'>OVERVIEW</h1>
                <p>In 2008, UTFR unveiled the groundbreaking Monocoque design for the UT08, singalling a new era of innovation for the team. Despite facing challenges including an 11th place finish at Formula SAE Michigan, the team's achievements were notable, securing the prestigious Powertrain Development Award. UT08's first apperance at Formula Student Germany, resulted in a 10th place finish. Despite an increase in weight compared to the previous year, strategic innovations such as custom laser-cut brake discs, and a third gen LSD (Limited Slip Differential) and carbon fiber driveshafts enhanced performance. The integration of cutting-edge technologies such as the Ricardo Wave Engine simulation and custom 4-to-1 exhaust system has set the stage for continued future successes.</p>
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
                        backgroundPositionY: "10%"
                        }}>
                    </div>
                    <Fade cascade damping={0.2} triggerOnce>
                    <h3 className='text-center text-2xl pt-5'>Formula SAE Michigan</h3>
                    <h3 className='text-center lg:pb-0 text-2xl font-bold'>11th Place Overall</h3>
                    <h3 className='text-center text-2xl font-bold pb-10 lg:pb-0'>Powertrain Development Award - 1st Place</h3>
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
                    <h3 className='text-center text-2xl pt-5'>Formula Student Germany</h3>
                    <h3 className='text-center lg:pb-0 text-2xl font-bold'>10th Place Overall</h3>
                    <h3 className='hidden text-center lg:pb-0 text-2xl font-bold'>RESULT</h3>
                    </Fade>
                </div>
            </div>
            </Fade>
        </div>

        {/* Car Video Section */}
        <div className='bg-[#13191F]'>
            <Fade cascade damping={0.2} triggerOnce>
            <h1 className='text-4xl md:text-6xl font-bold pt-10 pb-10 text-center text-white'>SEE THE UT08 IN ACTION</h1>
            <iframe className="w-[100vw] h-[30vh] md:w-[80vw] md:h-[50vh] lg:w-[70vw] lg:h-[80vh] mx-auto pb-10" src="https://www.youtube.com/embed/U_TuVRTa40M?si=ksW-zhGvgip5RWoy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </Fade>
        </div>

        {/* Team Members Section */}
        <div className='bg-[#303949] pb-10 px-10 text-[#222220]'>
            <Fade cascade damping={0.2} triggerOnce>
            <h1 className='text-5xl md:text-6xl font-bold pt-7 pb-10 text-center text-white'>UT08 TEAM MEMBERS</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            
            {/* Directors */}
            <div className="teamCard bg-gray-100 p-4 rounded-lg py-7">
                <Fade cascade damping={0.1} triggerOnce>
                <h2 className="text-2xl font-semibold mb-2 pl-4">DIRECTORS</h2>
                <ul className=''>
                <li>Christopher Wong - Team Principal</li>
                </ul>
                </Fade>
            </div>

            {/* Drivetrain */}
            <div className="teamCard bg-gray-100 p-4 rounded-lg py-7">
                <Fade cascade damping={0.1} triggerOnce>
                <h2 className="text-2xl font-semibold mb-2 pl-4">DRIVETRAIN</h2>
                <ul className=''>
                <li>Stefan Kloppenborg</li>
                </ul>
                </Fade>
            </div>

            {/* Suspension */}
            <div className="teamCard bg-gray-100 p-4 rounded-lg py-7">
                <Fade cascade damping={0.1} triggerOnce>
                <h2 className="text-2xl font-semibold mb-2 pl-4">MECHANICAL</h2>
                <ul>
                    <li>Nilufar Damji - Engine</li>
                    <li>Saqib Siddiqi - Exhaust</li>
                    <li>Leo Simonis - Fuel & Oil</li>
                    <li>Vince Libertucci - Suspension</li>
                </ul>
                </Fade>
            </div>

            {/* Brakes */}
            <div className="teamCard bg-gray-100 p-4 rounded-lg py-7">
                <Fade cascade damping={0.1} triggerOnce>
                <h2 className="text-2xl font-semibold mb-2 pl-4">BRAKES</h2>
                <ul>        
                    <li>Saad Ullah Khan</li>
                    <li>Mark Osmokrovic</li>
                </ul>
                </Fade>
            </div>

            {/* Chassis */}
            <div className="teamCard bg-gray-100 p-4 rounded-lg py-7">
                <Fade cascade damping={0.1} triggerOnce>
                <h2 className="text-2xl font-semibold mb-2 pl-4">ELECTRICAL</h2>
                <ul>        
                    <li>Daniel Ly</li>
                </ul>
                </Fade>
            </div>

            {/* Management */}
            <div className="teamCard bg-gray-100 p-4 rounded-lg py-7">
                <Fade cascade damping={0.1} triggerOnce>
                <h2 className="text-2xl font-semibold mb-2 pl-4">GRAPHIC DESIGN</h2>
                <ul>        
                    <li>Jessica Hoang</li>
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
                        <p className='md:text-2xl py-5 ml-auto'>2004 Honda CBR600</p>
                    </div>
                    <div className='flex border-b-2'>
                        <span className='hidden md:inline md:text-2xl py-5'>Max Engine Speed</span>
                        <p className='md:text-2xl py-5 ml-auto'>11,500 rpm</p>
                    </div>
                    <div className='flex border-b-2'>
                        <p className='md:text-2xl py-5'>0 - 100 km/h</p>
                        <p className='md:text-2xl py-5 ml-auto'>3.2 s</p>
                    </div>
                    <div className='flex border-b-2'>
                        <p className='md:text-2xl py-5'>Lateral Acceleration</p>
                        <p className='md:text-2xl py-5 ml-auto'>1.8 g (50-ft skidpad)</p>
                    </div>
                    <div className='flex border-b-2'>
                        <p className='md:text-2xl py-5'>Top Speed</p>
                        <p className='md:text-2xl py-5 ml-auto'>180 km/h</p>
                    </div>
                    <div className='flex border-b-2'>
                        <p className='md:text-2xl py-5'>Weight</p>
                        <p className='md:text-2xl py-5 ml-auto'>455 lbs</p>
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
export default UT08
