import { Fade } from "react-awesome-reveal";
import GoToTop from '../GoToTop'
import HistoryCarousel from '../HistoryCarousel'
import { IKImage } from "imagekitio-react";

const UT25 = () => {
    const urlEndpoint = 'https://ik.imagekit.io/utfroutreach/UT25/'
    

    const slides = [
        {
            image: 'https://ik.imagekit.io/utfroutreach/UT25/UT25_6.png',
            description: ''
        },
        {
            image: 'https://ik.imagekit.io/utfroutreach/UT25/UT25_3.jpeg',
            description: ''
        },

        {
            image: 'https://ik.imagekit.io/utfroutreach/UT25/UT25_4.jpeg',
            description: ''
        },
        {
          image: 'https://ik.imagekit.io/utfroutreach/UT25/UT25_5.jpeg',
          description: ''
        },
      ];

  return (
    <div>
        {/* Header */}
        <div className="h-screen bg-[#B6C1D0]">
            <Fade cascade damping={0.2} triggerOnce>
            <h1 className="carTitle text-center text-[130px] md:text-[280px] font-bold text-white pt-[250px]">UT25</h1>
            <img className="mx-auto pt-10 w-[1000px]" src='https://ik.imagekit.io/utfroutreach/UT25/UT25_Cutout.png' alt="" />
            <div className='grid space-y-8 md:space-y-0 md:grid-cols-3 pt-10 md:pt-5'>
                <div>
                    <h2 className="text-[#3A4254] text-center text-xl md:text-2xl font-bold">Motor</h2>
                    <h2 className="text-center text-white text-3xl md:text-4xl font-bold">EMRAX 228</h2> 
                </div>
                <div>
                    <h2 className="text-[#3A4254] text-center text-xl md:text-2xl font-bold">0 - 100 km/h</h2>
                    <h2 className="text-center text-white text-3xl md:text-4xl font-bold">3.1 s</h2>
                </div>
                <div>
                    <h2 className="text-[#3A4254] text-center text-xl md:text-2xl font-bold">Downforce</h2>
                    <h2 className="text-center text-white text-3xl md:text-4xl font-bold">110 kg @ 80 km/h</h2>
                </div>
            </div>
            </Fade>
        </div>

        {/* Overview Section */}
        <div className='bg-[#303949] grid lg:grid-cols-2 text-white'>
            <div className='px-10 py-10 lg:px-24 lg:py-32'>
                <Fade cascade damping={0.2} triggerOnce>
                <h1 className='text-4xl md:text-6xl font-bold pb-10'>OVERVIEW</h1>
                <p className="pb-5">2025 is a year of grit, speed, and technical breakthroughs for UTFR. Thanks to our vehicle dynamics team’s analysis of testing data in 2024, we secured sponsored Multimatic DSSV roll-heave decoupled dampers which dramatically improved the car’s tunability and mechanical grip. We also built our most energy dense pack yet, enabled by our switch to pouch cells, which will allow us to push at maximum pace in the endurance event for the first time in the team’s EV history. UT25 was built in record time, coming together for a March 31st unveiling at Hart House and hitting the track just 5 days later, completing over 20km of running on its first test day. We went on to log over 200km of testing in just 19 days before our first competition, largely thanks to our newly implemented Race Engineering section; part of a team-wide restructure to improve operational execution both on and off track.</p>
                </Fade>
            </div>
            <div className='mx-auto my-auto px-10 pb-10 lg:pt-10 lg:pr-24'>
                <Fade cascade damping={0.2} triggerOnce>
                <IKImage urlEndpoint={urlEndpoint} path="UT25_OnTrack.jpg?updatedAt=1750035991937"/>
                </Fade>
            </div>
        </div>

        {/* Competitions Section */}
        <div className='bg-[#062644] text-white'>
            <Fade cascade damping={0.2} triggerOnce>
            <h1 className='text-4xl md:text-6xl font-bold py-10 text-center'>COMPETITIONS</h1>
            <div className='grid lg:grid-cols-1 items-center pb-10'>
                <div className='px-10'>
                    <div className='competitionCard h-[600px]' style={{
                        backgroundImage: `url(https://ik.imagekit.io/utfroutreach/UT25/UT25_NH.jpg?updatedAt=1748204881576)`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPositionY: "50%"
                        }}>
                    </div>
                    <Fade cascade damping={0.2} triggerOnce>
                    <h3 className='text-center text-2xl pt-5'>New Hampshire Formula Hybrid + Electric</h3>
                    {/* <h3 className='text-center text-2xl font-bold pb-10 lg:pb-0'>1st Place Overall</h3> */}
                    </Fade>
                </div>
                {/* <div className='px-10'>
                    <div className='competitionCard h-[400px]' style={{
                        backgroundImage: `url(https://ik.imagekit.io/18gwys9x0/UTFR/UT24/UT24_NH1.jpg)`,
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
                </div> */}
            </div>
            </Fade>
        </div>

        {/* Team Members Section */}
        <div className='bg-[#303949] pb-10 px-10 text-[#222220]'>
            <Fade cascade damping={0.2} triggerOnce>
            <h1 className='text-5xl md:text-6xl font-bold pt-7 pb-10 text-center text-white'>UT25 TEAM MEMBERS</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            
            {/* Directors */}
            <div className="teamCard bg-gray-100 p-4 rounded-lg py-7">
                <Fade cascade damping={0.1} triggerOnce>
                <h2 className="text-2xl font-semibold mb-2 pl-4">DIRECTORS</h2>
                <ul className=''>
                    <li>Ayrton Antenucci - Team Principal</li>
                    <li>Winston Young - Mechanical Technical Director</li>
                    <li>Nicholas Burley - Electrical Technical Director</li>
                    <li>Youssef Elhadad - Driverless Technical Director</li>
                    <li>Evan Tal - Business Director</li>
                    <li>Nam Nguyen - Chief Race Engineer</li>
                    <li>Victoria Moore - Shop Manager</li>
                </ul>
                </Fade>
            </div>

            {/* Mechanical */}
            <div className="teamCard bg-gray-100 p-4 rounded-lg py-7">
                <Fade cascade damping={0.1} triggerOnce>
                <h2 className="text-2xl font-semibold mb-2 pl-4">MECHANICAL</h2>
                <ul className=''>
                    <li>Eman Daudpota - Aerodynamics Lead</li>
                    <li>Juan Moon - Chassis Lead</li>
                    <li>Victoria Moore - Ergonomics Lead</li>
                    <li>Bryan Vu - Brakes Lead</li>
                    <li>Niemo Fang - Composites Lead</li>
                    <li>Mackenzie Powell - Suspension Lead</li>
                    <li>Nam Nguyen - Drivetrain Lead</li>
                    <li>Francesca Fortino - Steering Lead</li>
                    <li>Naomi Johnson - Powertrain Mechanical Lead</li>
                    <li>Ajay Anand - Vehicle Dynamics Lead</li>
                </ul>
                </Fade>
            </div>

            {/* Electrical */}
            <div className="teamCard bg-gray-100 p-4 rounded-lg py-7">
                <Fade cascade damping={0.1} triggerOnce>
                <h2 className="text-2xl font-semibold mb-2 pl-4">ELECTRICAL</h2>
                <ul>
                    <li>Matthew Lee - Powertrain Lead</li>
                    <li>Chen Zhang - LV Architecture Lead</li>
                    <li>Robert Firsov - Electronics Lead</li>
                    <li>Nadia Zhou - Firmware Lead</li>
                </ul>
                </Fade>
            </div>

            {/* Driverless */}
            <div className="teamCard bg-gray-100 p-4 rounded-lg py-7">
                <Fade cascade damping={0.1} triggerOnce>
                <h2 className="text-2xl font-semibold mb-2 pl-4">DRIVERLESS</h2>
                <ul>        
                    <li>Alex Cho - Perception Lead</li>
                    <li>Halle Teh - Deep Learning Lead</li>
                    <li>Yulu Jiang - Mapping Lead</li>
                    <li>Richard Li - Navigation Lead</li>
                    <li>Ayaan Pathan - Controls Lead</li>
                    <li>Allan Zhou - DV Integration Co-Lead</li>
                    <li>Ayaan Pathan - DV Integration Co-Lead</li>
                </ul>
                </Fade>
            </div>

            {/* Business */}
            <div className="teamCard bg-gray-100 p-4 rounded-lg py-7">
                <Fade cascade damping={0.1} triggerOnce>
                <h2 className="text-2xl font-semibold mb-2 pl-4">BUSINESS</h2>
                <ul>
                    <li>Alicia Kho - Events Lead</li>
                    <li>Cammyn Lim - Marketing Lead</li>
                    <li>Amelia Dease - Graphic Design Lead</li>
                    <li>Aleksander Kiudorf - External Relations Lead</li>
                    <li>Krisha Kalsi - Recruitment Co-Lead</li>
                    <li>Clara Coukell - Recruitment Co-Lead</li>
                    <li>Zoe Jenkin - Recruitment Co-Lead</li>
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
                        <p className='md:text-2xl py-5'>Motor</p>
                        <p className='md:text-2xl py-5 ml-auto'>EMRAX 228</p>
                    </div>
                    <div className='flex border-b-2'>
                        <span className='hidden md:inline md:text-2xl py-5'>Vehicle Weight</span>
                        <p className='md:text-2xl py-5 ml-auto'>239 kg</p>
                    </div>
                    <div className='flex border-b-2'>
                        <p className='md:text-2xl py-5'>Power</p>
                        <p className='md:text-2xl py-5 ml-auto'>80 kW</p>
                    </div>
                    <div className='flex border-b-2'>
                        <p className='md:text-2xl py-5'>Torque</p>
                        <p className='md:text-2xl py-5 ml-auto'>230 Nm</p>
                    </div>
                    <div className='flex border-b-2'>
                        <p className='md:text-2xl py-5'>0 - 100 km/h</p>
                        <p className='md:text-2xl py-5 ml-auto'>3.1 s</p>
                    </div>
                    <div className='flex border-b-2'>
                        <p className='md:text-2xl py-5'>Downforce</p>
                        <p className='md:text-2xl py-5 ml-auto'>110 kg @ 80 km/h</p>
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
export default UT25
