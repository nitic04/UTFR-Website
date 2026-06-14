import { Fade } from "react-awesome-reveal";
import GoToTop from '../GoToTop'
import HistoryCarousel from '../HistoryCarousel'
import { IKImage } from "imagekitio-react";

const UT26 = () => {
    const urlEndpoint = 'https://ik.imagekit.io/utfroutreach/UT25/'
    

    const slides = [
        {
            image: 'https://ik.imagekit.io/utfr/2025_2026/UT26_2.jpg',
            description: ''
        },
        {
            image: 'https://ik.imagekit.io/utfr/2025_2026/UT26_1.jpg',
            description: ''
        },
        {
            image: 'https://ik.imagekit.io/utfr/2025_2026/UT26_3.jpg',
            description: ''
        },
      ];

  return (
    <div>
        {/* Header */}
        <div
        className="h-screen bg-cover bg-center bg-no-repeat relative"
        style={{
            backgroundImage:
            "url('https://ik.imagekit.io/utfr/2025_2026/UT26_4.jpg')",
        }}
        >
        <div className="absolute inset-0 bg-black/40" />

        <Fade cascade damping={0.2} triggerOnce>
            <div className="relative z-10 h-full flex flex-col">

            <div className="pt-28 md:pt-32">
                <h1 className="carTitle text-center text-[130px] md:text-[280px] font-bold text-white leading-none">
                UT26
                </h1>
            </div>

            <div className="flex-1" />
            <div className="grid md:grid-cols-3 text-center px-6 pt-48 md:pt-80 pb-0 md:pb-0">

                <div>
                <h2 className="text-[#B6C1D0] text-xl md:text-3xl font-bold">
                    Motor
                </h2>
                <h2 className="text-white text-2xl md:text-4xl font-bold">
                    Fischer Elektromotoren TI085
                </h2>
                </div>

                <div>
                <h2 className="text-[#B6C1D0] text-xl md:text-3xl font-bold">
                    0 - 100 km/h
                </h2>
                <h2 className="text-white text-2xl md:text-4xl font-bold">
                    3.1 s
                </h2>
                </div>

                <div>
                <h2 className="text-[#B6C1D0] text-xl md:text-3xl font-bold">
                    Downforce
                </h2>
                <h2 className="text-white text-2xl md:text-4xl font-bold">
                    116 kg @ 80 km/h
                </h2>
                </div>

            </div>

            </div>
        </Fade>
        </div>

        {/* Overview Section */}
        <div className='bg-[#303949] grid lg:grid-cols-2 text-white'>
            <div className='px-10 py-10 lg:px-24 lg:py-32'>
                <Fade cascade damping={0.2} triggerOnce>
                <h1 className='text-4xl md:text-6xl font-bold pb-10'>OVERVIEW</h1>
                <p className="pb-5">2026 marks the most monumental evolution in UTFR history as we unveil UT26, representing our biggest architectural shift to date. We are leaving our single-motor roots behind and transitioning to a highly advanced four-wheel drive powertrain, paired with a brand-new composite case for our accumulator to optimize weight and packaging. Making this ambitious transition a reality is our expanded partnership with Aston Dynamics, whose invaluable support enabled the procurement of the four Fisher Elektromotoren TI085 motors and Bucher inverters required for this massive leap. To harness the full potential of this new 4WD system, we are pushing the boundaries of Vehicle Dynamics and our Driverless architecture. Thanks to Sensoric Solutions, their cutting-edge Ground Speed Sensors are now integral to our custom torque vectoring controls, contributing to unprecedented improvements in handling and acceleration. Our growth off the track is equally aggressive; we are thrilled to onboard Litens as a new Diamond sponsor, providing crucial financial backing, technical feedback, and dedicated testing space to validate UT26. Finally, as we set our sights on the international stage, our newly onboarded logistics partner, Nippon Express, will seamlessly transport the car across the Atlantic to compete against the world's best at Formula Student Germany and Formula Student Spain.</p>
                </Fade>
            </div>
            <div className='mx-auto my-auto px-10 pb-10 lg:pt-10 lg:pr-24'>
                <Fade cascade damping={0.2} triggerOnce>
                <IKImage urlEndpoint="https://ik.imagekit.io/utfr/2025_2026" path="UT26_3.jpg"/>
                </Fade>
            </div>
        </div>

        {/* Competitions Section */}
        <div className='bg-[#062644] text-white'>
        <Fade cascade damping={0.2} triggerOnce>
            <h1 className='text-4xl md:text-6xl font-bold py-10 text-center'>
            COMPETITIONS
            </h1>

            <div className='grid md:grid-cols-3 items-center pb-10 gap-8 px-5'>
            <div className='flex flex-col items-center'>
                <Fade cascade damping={0.2} triggerOnce>
                <h3 className='text-center text-2xl pt-5'>
                    Formula SAE Electric Michigan
                </h3>
                </Fade>

                <span
                className="fi fi-us competition-flag mt-6"
                aria-label="United States flag"
                />
            </div>

            <div className='flex flex-col items-center'>
                <Fade cascade damping={0.2} triggerOnce>
                <h3 className='text-center text-2xl pt-5'>
                    Formula Student Spain
                </h3>
                </Fade>

                <span
                className="fi fi-es competition-flag mt-6"
                aria-label="Spain flag"
                />
            </div>

            <div className='flex flex-col items-center'>
                <Fade cascade damping={0.2} triggerOnce>
                <h3 className='text-center text-2xl pt-5'>
                    Formula Student Germany
                </h3>
                </Fade>

                <span
                className="fi fi-de competition-flag mt-6"
                aria-label="Germany flag"
                />
            </div>
            </div>
        </Fade>
        </div>

        {/* Team Members Section */}
        <div className='bg-[#303949] pb-10 px-10 text-[#222220]'>
            <Fade cascade damping={0.2} triggerOnce>
            <h1 className='text-5xl md:text-6xl font-bold pt-7 pb-10 text-center text-white'>UT26 TEAM MEMBERS</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            
            {/* Directors */}
            <div className="teamCard bg-gray-100 p-4 rounded-lg py-7">
                <Fade cascade damping={0.1} triggerOnce>
                <h2 className="text-2xl font-semibold mb-2 pl-4">DIRECTORS</h2>
                <ul className=''>
                    <li>Eric Emmenegger - Team Principal</li>
                    <li>Mauro De Liberato - Mechanical Technical Director</li>
                    <li>Mehar Singh - Electrical Technical Director</li>
                    <li>Justin Lim - Driverless Technical Director</li>
                    <li>Caley McNeill - Business Director</li>
                    <li>Nam Nguyen - Chief Race Engineer</li>
                    <li>Veronica Abdel Malak - Shop Manager</li>
                </ul>
                </Fade>
            </div>

            {/* Mechanical */}
            <div className="teamCard bg-gray-100 p-4 rounded-lg py-7">
                <Fade cascade damping={0.1} triggerOnce>
                <h2 className="text-2xl font-semibold mb-2 pl-4">MECHANICAL</h2>
                <ul className=''>
                    <li>Clara Coukell - Accumulator Lead</li>
                    <li>Eman Daudpota - Aerodynamics Lead</li>
                    <li>Andrew Lee - Chassis Lead</li>
                    <li>Ruodi Yuan - Drivetrain Co-Lead</li>
                    <li>Ruolan Yuan - Drivetrain Co-Lead</li>
                    <li>Kody Cao - Driver Interface Lead</li>
                    <li>Janie Ma - Recruitment Lead</li>
                    <li>Amalia Orsmond - Suspension Lead</li>
                    <li>Robert Hou - Vehicle Dynamics Lead</li>
                    <li>Mo Taban - Vehicle Controls Lead</li>
                </ul>
                </Fade>
            </div>

            {/* Electrical */}
            <div className="teamCard bg-gray-100 p-4 rounded-lg py-7">
                <Fade cascade damping={0.1} triggerOnce>
                <h2 className="text-2xl font-semibold mb-2 pl-4">ELECTRICAL</h2>
                <ul>
                    <li>Jeyan Mehta - Electronics Lead</li>
                    <li>Ibrahim Fadel - Firmware Lead</li>
                    <li>Allan Zhou - LV Architecture Lead</li>
                    <li>Alex Wang - Powertrain Lead</li>
                    <li>Julien Gaius - Recruitment Lead</li>
                </ul>
                </Fade>
            </div>

            {/* Driverless */}
            <div className="teamCard bg-gray-100 p-4 rounded-lg py-7">
                <Fade cascade damping={0.1} triggerOnce>
                <h2 className="text-2xl font-semibold mb-2 pl-4">DRIVERLESS</h2>
                <ul>        
                    <li>James Sheng - Classical Perception Lead</li>
                    <li>Jackson Cai - Controls Lead</li>
                    <li>Oscar Sun - Deep Learning Lead</li>
                    <li>Arwin Sondhi - Mapping Lead</li>
                    <li>Mark Pirner - Planning Lead</li>
                    <li>Arthur Xu - Recruitment Lead</li>
                </ul>
                </Fade>
            </div>

            {/* Business */}
            <div className="teamCard bg-gray-100 p-4 rounded-lg py-7">
                <Fade cascade damping={0.1} triggerOnce>
                <h2 className="text-2xl font-semibold mb-2 pl-4">BUSINESS</h2>
                <ul>
                    <li>Jimmy Ji - Events Co-Lead</li>
                    <li>Haylie Nguyen - Events Co-Lead</li>
                    <li>Rohan Sadekar - External Relations Lead & Recruitment Lead</li>
                    <li>Claire Harvey - Marketing Lead</li>
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
                        <p className='md:text-2xl py-5 ml-auto'>Fischer Elektromotoren Formula Student Motor</p>
                    </div>
                    <div className='flex border-b-2'>
                        <span className='hidden md:inline md:text-2xl py-5'>Vehicle Weight</span>
                        <p className='md:text-2xl py-5 ml-auto'>270 kg</p>
                    </div>
                    <div className='flex border-b-2'>
                        <p className='md:text-2xl py-5'>Power</p>
                        <p className='md:text-2xl py-5 ml-auto'>126 kW</p>
                    </div>
                    <div className='flex border-b-2'>
                        <p className='md:text-2xl py-5'>Torque</p>
                        <p className='md:text-2xl py-5 ml-auto'>126 Nm</p>
                    </div>
                    <div className='flex border-b-2'>
                        <p className='md:text-2xl py-5'>0 - 100 km/h</p>
                        <p className='md:text-2xl py-5 ml-auto'>3.1 s</p>
                    </div>
                    <div className='flex border-b-2'>
                        <p className='md:text-2xl py-5'>Downforce</p>
                        <p className='md:text-2xl py-5 ml-auto'>116 kg @ 80 km/h</p>
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
export default UT26
