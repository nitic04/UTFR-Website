import { Fade } from "react-awesome-reveal";
import GoToTop from '../GoToTop'
import HistoryCarousel from '../HistoryCarousel'

import CarCutout from '../../assets/HistoricCarPhotos/UT'
import OverviewImg from '../../assets/HistoricCarPhotos/UT'
import CompImg1 from '../../assets/HistoricCarPhotos/UT'
import CompImg2 from '../../assets/HistoricCarPhotos/UT'
import CompImg3 from '../../assets/HistoricCarPhotos/UT'
import CarouselImg1 from '../../assets/HistoricCarPhotos/UT'
import CarouselImg2 from '../../assets/HistoricCarPhotos/UT'
import CarouselImg3 from '../../assets/HistoricCarPhotos/UT'
import CarouselImg4 from '../../assets/HistoricCarPhotos/UT'
import CarouselImg5 from '../../assets/HistoricCarPhotos/UT'
import CarouselImg6 from '../../assets/HistoricCarPhotos/UT'
import CarouselImg7 from '../../assets/HistoricCarPhotos/UT'

const UT21 = () => {
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
            <h1 className="carTitle text-center text-[130px] md:text-[280px] font-bold text-white pt-[250px]">TITLE</h1>
            <img className="mx-auto pt-10 w-[1000px]" src={CarCutout} alt="" />
            <div className='grid space-y-8 md:space-y-0 md:grid-cols-3 pt-10 md:pt-5'>
                <div>
                    <h2 className="text-[#3A4254] text-center text-xl md:text-2xl font-bold">TITLE</h2>
                    <h2 className="text-center text-white text-3xl md:text-4xl font-bold">SPEC</h2>
                </div>
                <div>
                    <h2 className="text-[#3A4254] text-center text-xl md:text-2xl font-bold">TITLE</h2>
                    <h2 className="text-center text-white text-3xl md:text-4xl font-bold">SPEC</h2>
                </div>
                <div>
                    <h2 className="text-[#3A4254] text-center text-xl md:text-2xl font-bold">TITLE</h2>
                    <h2 className="text-center text-white text-3xl md:text-4xl font-bold">SPEC</h2>
                </div>
            </div>
            </Fade>
        </div>

        {/* Overview Section */}
        <div className='bg-[#303949] grid lg:grid-cols-2 text-white'>
            <div className='px-10 py-10 lg:px-24 lg:py-32'>
                <Fade cascade damping={0.2} triggerOnce>
                <h1 className='text-4xl md:text-6xl font-bold pb-10'>OVERVIEW</h1>
                <p>PARAGRAPH</p>
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
                    <h3 className='text-center pb-10 lg:pb-0 text-2xl font-bold'>5th Place Overall</h3>
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
                    <h3 className='text-center text-2xl pt-5'>Formula Student UK</h3>
                    <h3 className='text-center pb-10 lg:pb-0 text-2xl font-bold'>5th Place Overall</h3>
                    <h3 className='hidden text-center lg:pb-0 text-2xl font-bold'>RESULT</h3>
                    </Fade>
                </div>
                <div className='px-10'>
                    <div className='competitionCard h-[400px]' style={{
                        backgroundImage: `url(${CompImg3})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPositionY: "80%"
                        }}>
                    </div>
                    <Fade cascade damping={0.2} triggerOnce>
                    <h3 className='text-center text-2xl pt-5'>Formula SAE East</h3>
                    <h3 className='text-center lg:pb-0 text-2xl font-bold'>5th Place Overall</h3>
                    <h3 className='text-center lg:pb-0 text-2xl font-bold'>Efficiency - 1st Place</h3>
                    </Fade>
                </div>
            </div>
            </Fade>
        </div>

        {/* Car Video Section */}
        <div className='bg-[#13191F]'>
            <Fade cascade damping={0.2} triggerOnce>
            <h1 className='text-4xl md:text-6xl font-bold pt-10 pb-10 text-center text-white'>SEE THE YEAR IN ACTION</h1>
            <iframe className="w-[100vw] h-[30vh] md:w-[80vw] md:h-[50vh] lg:w-[70vw] lg:h-[80vh] mx-auto pb-10" src="https://www.youtube.com/embed/ilPiE-aTMGQ?si=iaf0mMtAU3mIGKkK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </Fade>
        </div>

        {/* Team Members Section */}
        <div className='bg-[#303949] pb-10 px-10 text-[#222220]'>
            <Fade cascade damping={0.2} triggerOnce>
            <h1 className='text-5xl md:text-6xl font-bold pt-7 pb-10 text-center text-white'>UT06 TEAM MEMBERS</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            
            {/* Directors */}
            <div className="teamCard bg-gray-100 p-4 rounded-lg py-7">
                <Fade cascade damping={0.1} triggerOnce>
                <h2 className="text-2xl font-semibold mb-2 pl-4">DIRECTORS</h2>
                <ul className=''>
                <li>Nadia Boin - Team Principal</li>
                <li>Maggie Lafreniere - Technical Director</li>
                </ul>
                </Fade>
            </div>

            {/* Powertrain */}
            <div className="teamCard bg-gray-100 p-4 rounded-lg py-7">
                <Fade cascade damping={0.1} triggerOnce>
                <h2 className="text-2xl font-semibold mb-2 pl-4">POWERTRAIN</h2>
                <ul>
                    <li>Nilufar Damji</li>
                    <li>Antonio Gomes</li>
                    <li>Leo Simonis</li>
                    <li>Neal Persaud</li>
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
                <h2 className="text-2xl font-semibold mb-2 pl-4">SUSPENSION</h2>
                <ul>
                    <li>Vince Libertucci</li>
                    <li>Andrew Wong</li>
                </ul>
                </Fade>
            </div>

            {/* Chassis */}
            <div className="teamCard bg-gray-100 p-4 rounded-lg py-7">
                <Fade cascade damping={0.1} triggerOnce>
                <h2 className="text-2xl font-semibold mb-2 pl-4">CHASSIS</h2>
                <ul>        
                    <li>Maggie Lafreniere</li>
                </ul>
                </Fade>
            </div>

            {/* Brakes */}
            <div className="teamCard bg-gray-100 p-4 rounded-lg py-7">
                <Fade cascade damping={0.1} triggerOnce>
                <h2 className="text-2xl font-semibold mb-2 pl-4">BRAKES</h2>
                <ul>        
                    <li>Jason Kao</li>
                </ul>
                </Fade>
            </div>

            {/* Management */}
            <div className="teamCard bg-gray-100 p-4 rounded-lg py-7">
                <Fade cascade damping={0.1} triggerOnce>
                <h2 className="text-2xl font-semibold mb-2 pl-4">MANAGEMENT</h2>
                <ul>        
                    <li>Daniel Zanini</li>
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
                        <p className='md:text-2xl py-5'>TITLE</p>
                        <p className='md:text-2xl py-5 ml-auto'>SPEC</p>
                    </div>
                    <div className='flex border-b-2'>
                        <span className='hidden md:inline md:text-2xl py-5'>TITLE</span>
                        <p className='md:text-2xl py-5 ml-auto'>SPEC</p>
                    </div>
                    <div className='flex border-b-2'>
                        <p className='md:text-2xl py-5'>TITLE</p>
                        <p className='md:text-2xl py-5 ml-auto'>SPEC</p>
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
export default UT21
