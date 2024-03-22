import { Fade } from "react-awesome-reveal";
import GoToTop from '../GoToTop'
import HistoryCarousel from '../HistoryCarousel'

import CarCutout from '../../assets/HistoricCarPhotos/UT10/UT10-Cutout.png'
import OverviewImg from '../../assets/HistoricCarPhotos/UT10/2010-Shootout-1.jpg'
import CompImg1 from '../../assets/HistoricCarPhotos/UT10/2010-FSG-1.jpg'
import CarouselImg1 from '../../assets/HistoricCarPhotos/UT10/2010-FSG-2.jpg'
import CarouselImg2 from '../../assets/HistoricCarPhotos/UT10/2010-FSG-3.jpg'
import CarouselImg3 from '../../assets/HistoricCarPhotos/UT10/2010-FSG-4.jpg'
import CarouselImg4 from '../../assets/HistoricCarPhotos/UT10/2010-FSG-5.jpg'
import CarouselImg5 from '../../assets/HistoricCarPhotos/UT10/2010-FSG-6.jpg'
import CarouselImg6 from '../../assets/HistoricCarPhotos/UT10/2010-Shootout-2.jpg'
import CarouselImg7 from '../../assets/HistoricCarPhotos/UT10/2010-Shootout-3.jpg'
import CarouselImg8 from '../../assets/HistoricCarPhotos/UT10/2010-Team-1.jpg'

const UT10 = () => {
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
    ];

  return (
    <div>
        {/* Header */}
        <div className="h-screen bg-[#B6C1D0]">
            <Fade cascade damping={0.2} triggerOnce>
            <h1 className="carTitle text-center text-[130px] md:text-[280px] font-bold text-white pt-[250px]">UT10</h1>
            <img className="mx-auto pt-10 w-[1000px]" src={CarCutout} alt="" />
            <div className='grid space-y-8 md:space-y-0 md:grid-cols-3 pt-10 md:pt-5'>
                <div>
                    <h2 className="text-[#3A4254] text-center text-xl md:text-2xl font-bold">Power</h2>
                    <h2 className="text-center text-white text-3xl md:text-4xl font-bold">44 hp @ 8500 rpm</h2>
                </div>
                <div>
                    <h2 className="text-[#3A4254] text-center text-xl md:text-2xl font-bold">0 - 100 km/h</h2>
                    <h2 className="text-center text-white text-3xl md:text-4xl font-bold">3.5 s</h2>
                </div>
                <div>
                    <h2 className="text-[#3A4254] text-center text-xl md:text-2xl font-bold">Top Speed</h2>
                    <h2 className="text-center text-white text-3xl md:text-4xl font-bold">140 km/h</h2>
                </div>
            </div>
            </Fade>
        </div>

        {/* Overview Section */}
        <div className='bg-[#303949] grid lg:grid-cols-2 text-white'>
            <div className='px-10 py-10 lg:px-24 lg:py-32'>
                <Fade cascade damping={0.2} triggerOnce>
                <h1 className='text-4xl md:text-6xl font-bold pb-10'>OVERVIEW</h1>
                <p>In 2010, UT10 bid farewell to the Monocoque era. Though the team withdrew from Formula SAE Michigan, UT10 displayed resilience and determination going on to compete at Formula Student Germany. The pushrod suspension contributed to a lightweight and efficient design weighing at 375 lbs. Led by a dedicated team, UT10 implemented adjustable anti-roll bars in the front and rear, enhancing stability and performance on the track. The team was also able to achieve low fuel consumption, aligning with sustainable engineering practices.</p>
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
                    <h3 className='text-center text-2xl pt-5'>Formula Student Germany</h3>
                    <h3 className='text-center lg:pb-0 text-2xl font-bold'>33rd Place Overall</h3>
                    <h3 className='hidden text-center text-2xl font-bold pb-10 lg:pb-0'>RESULT</h3>
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
                        <p className='md:text-2xl py-5 ml-auto'>Honda TRX450</p>
                    </div>
                    <div className='flex border-b-2'>
                        <span className='hidden md:inline md:text-2xl py-5'>Redline</span>
                        <p className='md:text-2xl py-5 ml-auto'>10,000 rpm</p>
                    </div>
                    <div className='flex border-b-2'>
                        <p className='md:text-2xl py-5'>Power</p>
                        <p className='md:text-2xl py-5 ml-auto'>44 hp @ 8500 rpm</p>
                    </div>
                    <div className='flex border-b-2'>
                        <p className='md:text-2xl py-5'>Torque</p>
                        <p className='md:text-2xl py-5 ml-auto'>28 ft/lb @ 6800 rpm</p>
                    </div>
                    <div className='flex border-b-2'>
                        <p className='md:text-2xl py-5'>0 - 100 km/h</p>
                        <p className='md:text-2xl py-5 ml-auto'>3.5 s</p>
                    </div>
                    <div className='flex border-b-2'>
                        <p className='md:text-2xl py-5'>Top Speed</p>
                        <p className='md:text-2xl py-5 ml-auto'>140 km/h</p>
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
export default UT10
