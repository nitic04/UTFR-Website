import { Fade } from "react-awesome-reveal";
import GoToTop from '../GoToTop'
import HistoryCarousel from '../HistoryCarousel'
import Michigan from '../../assets/2024/Michigan_2024.JPG'
// import UT24Sections from './UT24Sections'
import { IKImage } from "imagekitio-react";

const UT24 = () => {
    const urlEndpoint = 'https://ik.imagekit.io/18gwys9x0/UTFR/UT24/'

    const slides = [
        {
          image: 'https://ik.imagekit.io/18gwys9x0/UTFR/UT24/UT24_Testing1.jpg',
          description: 'UTFR testing the UT24!'
        },
        {
            image: 'https://ik.imagekit.io/18gwys9x0/UTFR/UT24/UT24_Testing3.jpg',
            description: ''
        },

        {
            image: 'https://ik.imagekit.io/18gwys9x0/UTFR/UT24/UT24_Testing2.jpg',
            description: ''
        },
        {
          image: 'https://ik.imagekit.io/18gwys9x0/UTFR/UT24/UT24_Ford2.jpg',
          description: 'UT24 at the Ford wind tunnel testing aerodynamics!'
        },
        {
            image: 'https://ik.imagekit.io/18gwys9x0/UTFR/UT24/UT24_Ford3.jpg',
            description: ''
        },
        {
            image: 'https://ik.imagekit.io/18gwys9x0/UTFR/UT24/UT24_Ford1.JPG',
            description: ''
        },
        {
            image: 'https://ik.imagekit.io/18gwys9x0/UTFR/UT24/UT24_Unveiling.JPG',
            description: 'Unveiling of UT24'
        },
        {
            image: 'https://ik.imagekit.io/18gwys9x0/UTFR/UT24/UT24_PhotoDay1.JPG',
            description: ''
        },
      ];

  return (
    <div>
        {/* Header */}
        <div className="h-screen bg-[#B6C1D0]">
            <Fade cascade damping={0.2} triggerOnce>
            <h1 className="carTitle text-center text-[130px] md:text-[280px] font-bold text-white pt-[250px]">UT24</h1>
            <img className="mx-auto pt-10 w-[1000px]" src='https://ik.imagekit.io/18gwys9x0/UTFR/UT24/UT24_Cutout.png' alt="" />
            <div className='grid space-y-8 md:space-y-0 md:grid-cols-3 pt-10 md:pt-5'>
                <div>
                    <h2 className="text-[#3A4254] text-center text-xl md:text-2xl font-bold">Top Speed</h2>
                    <h2 className="text-center text-white text-3xl md:text-4xl font-bold">120 km/h</h2>
                </div>
                <div>
                    <h2 className="text-[#3A4254] text-center text-xl md:text-2xl font-bold">0 - 100 km/h</h2>
                    <h2 className="text-center text-white text-3xl md:text-4xl font-bold">3.76 s</h2>
                </div>
                <div>
                    <h2 className="text-[#3A4254] text-center text-xl md:text-2xl font-bold">Downforce</h2>
                    <h2 className="text-center text-white text-3xl md:text-4xl font-bold">102 kg @ 80 km/h</h2>
                </div>
            </div>
            </Fade>
        </div>

        {/* Overview Section */}
        <div className='bg-[#303949] grid lg:grid-cols-2 text-white'>
            <div className='px-10 py-10 lg:px-24 lg:py-32'>
                <Fade cascade damping={0.2} triggerOnce>
                <h1 className='text-4xl md:text-6xl font-bold pb-10'>OVERVIEW</h1>
                <p className="pb-5">2024 marks the year of UTFR's driverless debut. The team has been working tirelessly on their driverless systems to officially compete them in Europe this year! Additionally, while making huge improvements to all aspects of the car, the team had the opportuntiy to visit the Ford wind tunnel to analyze the car's aerodynamics.</p>
                <p>The team placed first overall at Formula Hybrid + Electric in New Hampshire. This year's competition had rainy and cold conditions, however despite some issues, and worries the team would not be able to fix the car in time, the team managed to get through mechanical technical inspection and back on track with only one hour left in the day! Our team principal, Daniel LaRosa hit the track completing two autocross runs and immedietely going fastest overall.</p>
                </Fade>
            </div>
            <div className='mx-auto my-auto px-10 pb-10 lg:pt-10 lg:pr-24'>
                <Fade cascade damping={0.2} triggerOnce>
                <IKImage urlEndpoint={urlEndpoint} path="UT24_PhotoDay2.jpg"/>
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
                        backgroundImage: `url(https://ik.imagekit.io/18gwys9x0/UTFR/UT24/UT24_NH1.jpg)`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPositionY: "80%"
                        }}>
                    </div>
                    <Fade cascade damping={0.2} triggerOnce>
                    <h3 className='text-center text-2xl pt-5'>New Hampshire Formula Hybrid + Electric</h3>
                    <h3 className='text-center text-2xl font-bold pb-10 lg:pb-0'>1st Place Overall</h3>
                    </Fade>
                </div>
                <div className='px-10'>
                    <div className='competitionCard h-[400px]' style={{
                        backgroundImage: `url(${Michigan})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPositionY: "100%"
                        }}>
                    </div>
                    <Fade cascade damping={0.2} triggerOnce>
                    <h3 className='text-center text-2xl pt-5'>Formula SAE Electric Michigan</h3>
                    <h3 className='text-center text-2xl font-bold'>9th Place Overall</h3>
                    </Fade>
                </div>
            </div>
            </Fade>
        </div>

        {/* Team Members Section */}
        <div className='bg-[#303949] pb-10 px-10 text-[#222220]'>
            <Fade cascade damping={0.2} triggerOnce>
            <h1 className='text-5xl md:text-6xl font-bold pt-7 pb-10 text-center text-white'>UT24 TEAM MEMBERS</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            
            {/* Directors */}
            <div className="teamCard bg-gray-100 p-4 rounded-lg py-7">
                <Fade cascade damping={0.1} triggerOnce>
                <h2 className="text-2xl font-semibold mb-2 pl-4">DIRECTORS</h2>
                <ul className=''>
                    <li>Daniel LaRosa - Team Principal</li>
                    <li>Jake Sprenger - Electrical Technical Director</li>
                    <li>Daniel Asadi - Driverless Technical Director</li>
                    <li>Evan Tal - Business Director</li>
                    <li>Sam Bahrami - Shop Manager</li>
                </ul>
                </Fade>
            </div>

            {/* Mechanical */}
            <div className="teamCard bg-gray-100 p-4 rounded-lg py-7">
                <Fade cascade damping={0.1} triggerOnce>
                <h2 className="text-2xl font-semibold mb-2 pl-4">MECHANICAL</h2>
                <ul className=''>
                    <li>Jasmine Wu - Aerodynamics Lead</li>
                    <li>Mauro De Liberato - Chassis Lead</li>
                    <li>Vanshika Bhatia - Ergonomics Lead</li>
                    <li>Mo Taban - Brakes Lead</li>
                    <li>Batu Tibet - Composites Lead</li>
                    <li>Patryk Aniolowski - Suspension Lead</li>
                    <li>Kelvin Cao - Drivetrain Lead</li>
                    <li>Hunzala Rajput - Steering Lead</li>
                    <li>Eric Emmenegger - Powertrain Mechanical Lead</li>
                    <li>Tolu Ikubaje - Driverless Mechatronics Lead</li>
                </ul>
                </Fade>
            </div>

            {/* Electrical */}
            <div className="teamCard bg-gray-100 p-4 rounded-lg py-7">
                <Fade cascade damping={0.1} triggerOnce>
                <h2 className="text-2xl font-semibold mb-2 pl-4">ELECTRICAL</h2>
                <ul>
                    <li>Angus Zhang - Powertrain Lead</li>
                    <li>Kate Ker - Harness Lead</li>
                    <li>Nicholas Burley - Controllers Lead</li>
                    <li>Nadia Zhou - Firmware Lead</li>
                </ul>
                </Fade>
            </div>

            {/* Driverless */}
            <div className="teamCard bg-gray-100 p-4 rounded-lg py-7">
                <Fade cascade damping={0.1} triggerOnce>
                <h2 className="text-2xl font-semibold mb-2 pl-4">DRIVERLESS</h2>
                <ul>        
                    <li>Alfred Xue - Perception Co-Lead</li>
                    <li>Thomas Zeger - Perception Co-Lead</li>
                    <li>Arthur Xu - Mapping Lead</li>
                    <li>Justin Lim - Navigation Lead</li>
                    <li>Youssef Elhadad - Controls Lead</li>
                </ul>
                </Fade>
            </div>

            {/* Business */}
            <div className="teamCard bg-gray-100 p-4 rounded-lg py-7">
                <Fade cascade damping={0.1} triggerOnce>
                <h2 className="text-2xl font-semibold mb-2 pl-4">BUSINESS</h2>
                <ul>
                    <li>Caley McNeill - Events Co-Lead</li>
                    <li>Rebecca Schultz - Events Co-Lead</li>
                    <li>Olivia Tworzyanski - Marketing Co-Lead</li>
                    <li>Amelia Dease - Marketing Co-Lead</li>
                    <li>Evan Tal - External Relations Lead</li>
                    <li>Halle Teh - Recruitment Co-Lead</li>
                    <li>Nicholas Burley - Recruitment Co-Lead</li>
                    <li>Robert Firsov - Recruitment Co-Lead</li>
                </ul>
                </Fade>
            </div>
            </div>
            </Fade>
        </div>

        {/* Design Sections
        <div className='bg-[#062644] pb-10 px-10 text-[#222220]'>
            <Fade cascade damping={0.2} triggerOnce>
                <h1 className='text-5xl md:text-6xl font-bold pt-7 pb-10 text-center text-white'>DESIGN SECTIONS</h1>
                <UT24Sections />
            </Fade>
        </div> */}

        
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
                        <span className='hidden md:inline md:text-2xl py-5'>Overall Weight</span>
                        <p className='md:text-2xl py-5 ml-auto'>507 lbs</p>
                    </div>
                    <div className='flex border-b-2'>
                        <p className='md:text-2xl py-5'>Power</p>
                        <p className='md:text-2xl py-5 ml-auto'>80 kW</p>
                    </div>
                    <div className='flex border-b-2'>
                        <p className='md:text-2xl py-5'>Torque</p>
                        <p className='md:text-2xl py-5 ml-auto'>169.64 ft-lbs</p>
                    </div>
                    <div className='flex border-b-2'>
                        <p className='md:text-2xl py-5'>0 - 100 km/h</p>
                        <p className='md:text-2xl py-5 ml-auto'>3.76 s</p>
                    </div>
                    <div className='flex border-b-2'>
                        <p className='md:text-2xl py-5'>Downforce</p>
                        <p className='md:text-2xl py-5 ml-auto'>102kg @ 80 km/h</p>
                    </div>
                    <div className='flex border-b-2'>
                        <p className='md:text-2xl py-5'>Lateral Acceleration</p>
                        <p className='md:text-2xl py-5 ml-auto'>1.53 g</p>
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
export default UT24
