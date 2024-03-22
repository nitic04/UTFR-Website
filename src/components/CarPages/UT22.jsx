import { Fade } from "react-awesome-reveal";
import GoToTop from '../GoToTop'
import HistoryCarousel from '../HistoryCarousel'

import CarCutout from '../../assets/HistoricCarPhotos/UT22/UT22_Cutout.png'
import OverviewImg from '../../assets/HistoricCarPhotos/UT22/UT22.jpeg'
import CompImg1 from '../../assets/HistoricCarPhotos/UT22/UT22_Michigan-1.jpg'
import CarouselImg1 from '../../assets/HistoricCarPhotos/UT22/UT22-Michigan-2.jpg'
import CarouselImg2 from '../../assets/HistoricCarPhotos/UT22/UT22_4.png'
import CarouselImg3 from '../../assets/HistoricCarPhotos/UT22/UT22_5.png'
import CarouselImg4 from '../../assets/HistoricCarPhotos/UT22/UT22_6.png'
import CarouselImg5 from '../../assets/HistoricCarPhotos/UT22/UT22_7.png'

const UT22 = () => {
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
    ];

  return (
    <div>
        {/* Header */}
        <div className="h-screen bg-[#B6C1D0]">
            <Fade cascade damping={0.2} triggerOnce>
            <h1 className="carTitle text-center text-[130px] md:text-[280px] font-bold text-white pt-[250px]">UT22</h1>
            <img className="mx-auto w-[1000px]" src={CarCutout} alt="" />
            <div className='grid space-y-8 md:space-y-0 md:grid-cols-3 pt-10 md:pt-5'>
                <div>
                    <h2 className="text-[#3A4254] text-center text-xl md:text-2xl font-bold">Motor</h2>
                    <h2 className="text-center text-white text-3xl md:text-4xl font-bold">EMRAX 228</h2>
                </div>
                <div>
                    <h2 className="text-[#3A4254] text-center text-xl md:text-2xl font-bold">Power</h2>
                    <h2 className="text-center text-white text-3xl md:text-4xl font-bold">110 hp (80 kW)</h2>
                </div>
                <div>
                    <h2 className="text-[#3A4254] text-center text-xl md:text-2xl font-bold">Top Speed</h2>
                    <h2 className="text-center text-white text-3xl md:text-4xl font-bold">116 km/h</h2>
                </div>
            </div>
            </Fade>
        </div>

        {/* Overview Section */}
        <div className='bg-[#303949] grid lg:grid-cols-2 text-white'>
            <div className='px-10 py-10 lg:px-24 lg:py-32'>
                <Fade cascade damping={0.2} triggerOnce>
                <h1 className='text-4xl md:text-6xl font-bold pb-10'>OVERVIEW</h1>
                <p>In 2022, UTFR embarked on a significant transition as they shifted their focus to electric vehicles. The steel tube frame chassis, complemented by double unequal wishbone suspension, demonstrates the team's commitment to structural integrity and handling performance. However, the transition to electric power proved to be a formidable undertaking, with the team encountering technical hurdles that prevented the car from running at all during the competition year. However utilizing simulation software, the team was able to assess the performance of the car. Despite these setbacks, the team showcased remarkable resilience and adaptability in the face of adversity. The team's extensive roster of members, consisting of a diverse array of talents and expertise, underscored their commitment to collaboration and teamwork. Notably, the year was marked by significant disruptions due to the COVID-19 pandemic, with two shutdowns and strict safety measures impacting team operations and sponsorships. Nevertheless, the team persevered, laying the groundwork for future success and establishing crucial partnerships, including the beginning of a sponsorship with Tesla. Despite the challenges faced, UTFR's journey in 2022 serves as a testament to their unwavering dedication to pushing the boundaries of electric vehicle technology in the realm of Formula SAE competitions.</p>
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
            <div className='grid items-center pb-10'>
                <div className='px-10'>
                    <div className='competitionCard h-[600px]' style={{
                        backgroundImage: `url(${CompImg1})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPositionY: "80%"
                        }}>
                    </div>
                    <Fade cascade damping={0.2} triggerOnce>
                    <h3 className='text-center text-2xl pt-5'>Formula SAE Michigan</h3>
                    <h3 className='text-center pb-10 lg:pb-0 text-2xl font-bold'>21st Place Overall</h3>
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
                        <p className='md:text-2xl py-5'>Motor</p>
                        <p className='md:text-2xl py-5 ml-auto'>EMRAX 228</p>
                    </div>
                    <div className='flex border-b-2'>
                        <span className='hidden md:inline md:text-2xl py-5'>Peak Voltage</span>
                        <p className='md:text-2xl py-5 ml-auto'>546 V</p>
                    </div>
                    <div className='flex border-b-2'>
                        <p className='md:text-2xl py-5'>Power</p>
                        <p className='md:text-2xl py-5 ml-auto'>110 hp (80 kW)</p>
                    </div>
                    <div className='flex border-b-2'>
                        <p className='md:text-2xl py-5'>Top Speed</p>
                        <p className='md:text-2xl py-5 ml-auto'>116 km/h</p>
                    </div>
                    <div className='flex border-b-2'>
                        <p className='md:text-2xl py-5'>Weight</p>
                        <p className='md:text-2xl py-5 ml-auto'>536 lbs</p>
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
export default UT22
