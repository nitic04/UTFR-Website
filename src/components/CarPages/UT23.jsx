import { Fade } from "react-awesome-reveal";
import GoToTop from '../GoToTop'
import HistoryCarousel from '../HistoryCarousel'

import CarCutout from '../../assets/HistoricCarPhotos/UT23/2023-Cutout-2.png'
import OverviewImg from '../../assets/HistoricCarPhotos/UT23/2023-Michigan-2.jpg'
import CompImg1 from '../../assets/HistoricCarPhotos/UT23/2023-Czech-1.jpeg'
import CompImg2 from '../../assets/HistoricCarPhotos/UT23/2023-Michigan-1.jpg'
import CompImg3 from '../../assets/HistoricCarPhotos/UT23/2023-Czech-2.jpeg'
import CarouselImg1 from '../../assets/HistoricCarPhotos/UT23/2023-Czech-3.jpeg'
import CarouselImg2 from '../../assets/HistoricCarPhotos/UT23/2023-Michigan-3.jpg'
import CarouselImg3 from '../../assets/HistoricCarPhotos/UT23/2023-WIM.jpg'

const UT23 = () => {
    const slides = [
        {
          image: CarouselImg1,
          description: 'The team secured 1st place in efficiency at the 2023 Formula Student Czech Republic competition in Most!'
        },
        {
          image: CarouselImg2,
          description: 'UTFR received 5th place overall in the 2023 Formula SAE Electric competition in Michigan!'
        },
        {
            image: CarouselImg3,
            description: 'The team hosted their annual Women in Motorsport event featuring trailblazing women in the industry!'
          },
      ];

  return (
    <div>
        {/* Header */}
        <div className="h-screen bg-[#B6C1D0]">
            <Fade cascade damping={0.2} triggerOnce>
            <h1 className="carTitle text-center text-[130px] md:text-[280px] font-bold text-white pt-[250px]">UT23</h1>
            <img className="mx-auto pt-10 w-[1000px]" src={CarCutout} alt="" />
            <div className='grid space-y-8 md:space-y-0 md:grid-cols-3 pt-10 md:pt-5'>
                <div>
                    <h2 className="text-[#3A4254] text-center text-xl md:text-2xl font-bold">Top Speed</h2>
                    <h2 className="text-center text-white text-3xl md:text-4xl font-bold">116 km/h</h2>
                </div>
                <div>
                    <h2 className="text-[#3A4254] text-center text-xl md:text-2xl font-bold">75m Acceleration</h2>
                    <h2 className="text-center text-white text-3xl md:text-4xl font-bold">4.26 s</h2>
                </div>
                <div>
                    <h2 className="text-[#3A4254] text-center text-xl md:text-2xl font-bold">Peak Power</h2>
                    <h2 className="text-center text-white text-3xl md:text-4xl font-bold">109 kW at 5500 RPM</h2>
                </div>
            </div>
            </Fade>
        </div>

        {/* Overview Section */}
        <div className='bg-[#303949] grid lg:grid-cols-2 text-white'>
            <div className='px-10 py-10 lg:px-24 lg:py-32'>
                <Fade cascade damping={0.2} triggerOnce>
                <h1 className='text-4xl md:text-6xl font-bold pb-10'>OVERVIEW</h1>
                <p>2023 marked a triumphant return to the winners' circle with the team securing notable victories in competitions such as the New Hampshire Formula Hybrid and Electric competition where they clinched 1st place overall. Additionally, the team had commendable performances at Formula SAE Electric Michigan and Formula Student Czech Republic where they achieved 5th and 6th place overall respectively. Technical prowess defined their performance, boasting impressive specifications such as the EMRAX 228 motor, generating 110 hp and 148 ft-lbs of torque. With a meticulously engineered chassis, suspension, and drivetrain, the team achieved remarkable acceleration, top speed, and lateral acceleration figures. UT23 showcased resilience and innovation, earning the moniker "Phoenix." Amidst challenges such as tire issues and logistical hurdles, the team persevered, epitomizing their spirit of determination. Additionally, the year saw the establishment of new departments, including driverless and business, signaling growth and adaptation within the team. Notable milestones included hosting a women in motorsport panel, inviting industry leading women in the industry to speak with students. The team also overcame numerous logistical setbacks involving crate delays and rain test failures. UT23's journey underscored not only their engineering excellence but also their ability to overcome adversity, setting a high standard for future endeavors.</p>
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
                        backgroundPositionY: "80%"
                        }}>
                    </div>
                    <Fade cascade damping={0.2} triggerOnce>
                    <h3 className='text-center text-2xl pt-5'>New Hampshire Formula</h3>
                    <h3 className='text-center text-2xl'>Hybrid + Electric</h3>
                    <h3 className='text-center text-2xl font-bold pb-10 lg:pb-0'>1st Place Overall</h3>
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
                    <h3 className='text-center text-2xl pt-5'>Formula SAE Electric Michigan</h3>
                    <h3 className='text-center pb-10 md:pb-0 text-2xl font-bold'>5th Place Overall</h3>
                    <h3 className='hidden md:block text-center text-2xl text-[#062644] lg:pb-0'>Formula SAE Electric Michigan</h3>
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
                    <h3 className='text-center text-2xl pt-5'>Formula Student Czech Republic</h3>
                    <h3 className='text-center text-2xl font-bold'>6th Place Overall</h3>
                    <h3 className='text-center text-2xl font-bold lg:pb-0'>1st Place in EV Efficiency</h3>
                    </Fade>
                </div>
            </div>
            </Fade>
        </div>

        {/* Team Members Section */}
        <div className='bg-[#303949] pb-10 px-10 text-[#222220]'>
            <Fade cascade damping={0.2} triggerOnce>
            <h1 className='text-5xl md:text-6xl font-bold pt-7 pb-10 text-center text-white'>UT23 TEAM MEMBERS</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            
            {/* Directors */}
            <div className="teamCard bg-gray-100 p-4 rounded-lg py-7">
                <Fade cascade damping={0.1} triggerOnce>
                <h2 className="text-2xl font-semibold mb-2 pl-4">DIRECTORS</h2>
                <ul className=''>
                    <li>Daniel Wing - Team Principal</li>
                    <li>Saiyam Patel - Electrical Director</li>
                    <li>Damian Sisera - Mechanical Director</li>
                    <li>Kelvin Cui - Driverless Director</li>
                    <li>Emily Wright - Business Director</li>
                </ul>
                </Fade>
            </div>

            {/* Mechanical */}
            <div className="teamCard bg-gray-100 p-4 rounded-lg py-7">
                <Fade cascade damping={0.1} triggerOnce>
                <h2 className="text-2xl font-semibold mb-2 pl-4">MECHANICAL</h2>
                <ul className=''>
                    <li>Batu Tibet - Aerodynamics Lead</li>
                    <li>Asal Ghorbani - Brakes Lead</li>
                    <li>Yixin Zhang - Chassis Lead</li>
                    <li>Kelvin Cao - Drivetrain Lead</li>
                    <li>Crystal Jin - Ergonomics Lead</li>
                    <li>Ajay Anand - Steering Lead</li>
                    <li>Christian Stalteri - Suspension Lead</li>
                    <li>Eric Emmenegger - Accumulator Mech Lead</li>
                </ul>
                </Fade>
            </div>

            {/* Electrical */}
            <div className="teamCard bg-gray-100 p-4 rounded-lg py-7">
                <Fade cascade damping={0.1} triggerOnce>
                <h2 className="text-2xl font-semibold mb-2 pl-4">ELECTRICAL</h2>
                <ul>
                    <li>Ayrton Atenucci - Electric Powertrain Lead</li>
                    <li>Benjamin Liang - Controllers Lead</li>
                    <li>Andrew Chen - LV Architecture Lead</li>
                    <li>Spencer Ball - Firmware Lead</li>
                </ul>
                </Fade>
            </div>

            {/* Driverless */}
            <div className="teamCard bg-gray-100 p-4 rounded-lg py-7">
                <Fade cascade damping={0.1} triggerOnce>
                <h2 className="text-2xl font-semibold mb-2 pl-4">DRIVERLESS</h2>
                <ul>        
                    <li>Alfred Xue - Perception Lead</li>
                    <li>Mustafa Khan - Machine Lead</li>
                    <li>Daniel Asadi - Navigation Lead</li>
                    <li>Alyssa Wing - State Estimation Lead</li>
                    <li>Youssef Elhadad - Controls Lead</li>
                    <li>Mauro De Liberato - Mechatronics Lead</li>
                </ul>
                </Fade>
            </div>

            {/* Business */}
            <div className="teamCard bg-gray-100 p-4 rounded-lg py-7">
                <Fade cascade damping={0.1} triggerOnce>
                <h2 className="text-2xl font-semibold mb-2 pl-4">BUSINESS</h2>
                <ul>
                    <li>Mohamad Taban - Recruitment Lead</li>
                    <li>Mauro De Liberato - Recruitment Lead</li>
                    <li>Olivia Tworzyanski - Marketing Lead</li>
                    <li>Amelia Dease - Marketing Lead</li>
                    <li>Sam Bahrami - Shop Manager</li>
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
                        <span className='hidden md:inline md:text-2xl py-5'>Overall Weight</span>
                        <p className='md:text-2xl py-5 ml-auto'>573 lbs</p>
                    </div>
                    <div className='flex border-b-2'>
                        <p className='md:text-2xl py-5'>Peak Voltage</p>
                        <p className='md:text-2xl py-5 ml-auto'>546 V</p>
                    </div>
                    <div className='flex border-b-2'>
                        <p className='md:text-2xl py-5'>Power</p>
                        <p className='md:text-2xl py-5 ml-auto'>110 hp (80 kW)</p>
                    </div>
                    <div className='flex border-b-2'>
                        <p className='md:text-2xl py-5'>Torque</p>
                        <p className='md:text-2xl py-5 ml-auto'>148 ft-lbs</p>
                    </div>
                    <div className='flex border-b-2'>
                        <p className='md:text-2xl py-5'>0 - 100 km/h</p>
                        <p className='md:text-2xl py-5 ml-auto'>3.9 s</p>
                    </div>
                    <div className='flex border-b-2'>
                        <p className='md:text-2xl py-5'>Downforce</p>
                        <p className='md:text-2xl py-5 ml-auto'>45kg @ 60 km/h</p>
                    </div>
                    <div className='flex border-b-2'>
                        <p className='md:text-2xl py-5'>Length</p>
                        <p className='md:text-2xl py-5 ml-auto'>2971 mm</p>
                    </div>
                    <div className='flex border-b-2'>
                        <p className='md:text-2xl py-5'>Chassis</p>
                        <p className='md:text-2xl py-5 ml-auto'>Full steel tube space frame</p>
                    </div>
                    <div className='flex border-b-2'>
                        <p className='md:text-2xl py-5'>Suspension</p>
                        <p className='md:text-2xl py-5 ml-auto'>Double unequal wishbone</p>
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
export default UT23
