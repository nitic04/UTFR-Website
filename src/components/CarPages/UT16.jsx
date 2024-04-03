import { Fade } from "react-awesome-reveal";
import GoToTop from '../GoToTop'
import HistoryCarousel from '../HistoryCarousel'

import CarCutout from '../../assets/HistoricCarPhotos/UT16/UT16-Cutout.png'
import OverviewImg from '../../assets/HistoricCarPhotos/UT16/2016-FSG-1.jpg'
import CompImg1 from '../../assets/HistoricCarPhotos/UT16/2016-Michigan-1.jpg'
import CompImg2 from '../../assets/HistoricCarPhotos/UT16/2016-FSG-3.jpg'
import CompImg3 from '../../assets/HistoricCarPhotos/UT16/2016-FormulaNorth-1.jpg'
import CarouselImg1 from '../../assets/HistoricCarPhotos/UT16/2016-Car-1.jpg'
import CarouselImg2 from '../../assets/HistoricCarPhotos/UT16/2016-FSG-2.jpg'
import CarouselImg3 from '../../assets/HistoricCarPhotos/UT16/2016-FSG-4.jpg'
import CarouselImg4 from '../../assets/HistoricCarPhotos/UT16/2016-Shop-1.jpg'
import CarouselImg5 from '../../assets/HistoricCarPhotos/UT16/2016-Team-1.jpg'
import CarouselImg6 from '../../assets/HistoricCarPhotos/UT16/2016-FormulaNorth-2.JPG'
import TeamMembersSimpleComponents from "./TeamMembersSimpleComponent";

const UT16 = () => {
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
    ];

    const teamMembers = [
        { name: 'Vivek Subbayya', specialization: '- Team Principal, Technical Director, Engine' },
        { name: 'Luke Fregonese', specialization: '- Drivetrain & Electrical' },
        { name: 'Peter Dhingsa', specialization: '- Chassis' },
        { name: 'Nathan Goodfellow', specialization: '- Brakes' },
        { name: 'Vivek Chugh', specialization: '- Suspension' },
        { name: 'Dave Perez', specialization: '- Fuel System' },
        { name: 'James Wang', specialization: '- Cooling System' },
        { name: 'Roberts Strenga', specialization: '- Driver' },
        { name: 'Tyler Turnbull', specialization: '- Driver' },
        { name: 'Mariusz Kucharek', specialization: '- Aero Lead' },
        { name: 'Amanda Persaud', specialization: '- Business Director' },
        { name: 'Sayandip Roy', specialization: '' },
        { name: 'Adrian Muntean', specialization: '' },
        { name: 'Nadia Khan', specialization: '' },
        { name: 'Sepehr Samsar', specialization: '' },
        { name: 'Ken Qian', specialization: '' },
        { name: 'Ajani Vijay', specialization: '' },
        { name: 'Matt Aspro', specialization: '' }
    ];
    

  return (
    <div>
        {/* Header */}
        <div className="h-screen bg-[#B6C1D0]">
            <Fade cascade damping={0.2} triggerOnce>
            <h1 className="carTitle text-center text-[130px] md:text-[280px] font-bold text-white pt-[250px]">UT16</h1>
            <img className="mx-auto pt-10 w-[1000px]" src={CarCutout} alt="" />
            <div className='grid space-y-8 md:space-y-0 md:grid-cols-3 pt-10 md:pt-5'>
                <div>
                    <h2 className="text-[#3A4254] text-center text-xl md:text-2xl font-bold">Torque</h2>
                    <h2 className="text-center text-white text-3xl md:text-4xl font-bold">29 lbs-ft</h2>
                </div>
                <div>
                    <h2 className="text-[#3A4254] text-center text-xl md:text-2xl font-bold">0 - 100 km/h</h2>
                    <h2 className="text-center text-white text-3xl md:text-4xl font-bold">3.5 s</h2>
                </div>
                <div>
                    <h2 className="text-[#3A4254] text-center text-xl md:text-2xl font-bold">Top Speed</h2>
                    <h2 className="text-center text-white text-3xl md:text-4xl font-bold">120 km/h</h2>
                </div>
            </div>
            </Fade>
        </div>

        {/* Overview Section */}
        <div className='bg-[#303949] grid lg:grid-cols-2 text-white'>
            <div className='px-10 py-10 lg:px-24 lg:py-32'>
                <Fade cascade damping={0.2} triggerOnce>
                <h1 className='text-4xl md:text-6xl font-bold pb-10'>OVERVIEW</h1>
                <p>UT16 soared to new heights, demonstrating remarkable progress. This car was the first car built by UTFR that had an aero package allowing for 35 Kg of downforce at 55 km/hr. The wings for were designed by an exchange student from Scotland by the name of Mariusz Kucharek. The team experienced delays to working on the car because the shop was under renovation! The newly renovated shop allowed the team to work harder than ever on a great looking and performing racecar. This car suffered very bad understeer, however this was fixed by Roberts Strenga who drifted the entire FSG endurance track which was famously mentioned by the commentator in the video you can see below at 1:36:17.</p>
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
                    <h3 className='text-center pb-10 lg:pb-0 text-2xl font-bold'>70th Place Overall</h3>
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
                    <h3 className='text-center text-2xl pt-5'>Formula Student Germany</h3>
                    <h3 className='text-center pb-10 lg:pb-0 text-2xl font-bold'>30th Place Overall</h3>
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
                    <h3 className='text-center text-2xl pt-5'>Formula North</h3>
                    <h3 className='hidden text-center lg:pb-0 text-2xl font-bold'>Cost - 1st Place</h3>
                    <h3 className='hidden text-center lg:pb-0 text-2xl font-bold'>Marketing Event - 1st Place</h3>
                    </Fade>
                </div>
            </div>
            </Fade>
        </div>

        {/* Car Video Section */}
        <div className='bg-[#13191F]'>
            <Fade cascade damping={0.2} triggerOnce>
            <h1 className='text-4xl md:text-6xl font-bold pt-10 pb-10 text-center text-white'>WATCH THE UT16 DRIFT THROUGH FORMULA STUDENT GERMANY</h1>
            <iframe className="w-[100vw] h-[30vh] md:w-[80vw] md:h-[50vh] lg:w-[70vw] lg:h-[80vh] mx-auto pb-5" src="https://www.youtube.com/embed/aeMyHlZpaTQ?si=wN01BnCfjN1couNU&amp;start=5777" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <p className="text-white text-center pb-5">Note: UTFR's run starts at 1:36:19</p>
            </Fade>
        </div>

        {/* Team Members Section */}
        <TeamMembersSimpleComponents teamMembers={teamMembers} year={"UT16"}/>
  
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
                        <p className='md:text-2xl py-5 ml-auto'>9,000 rpm</p>
                    </div>
                    <div className='flex border-b-2'>
                        <p className='md:text-2xl py-5'>Power</p>
                        <p className='md:text-2xl py-5 ml-auto'>45 hp</p>
                    </div>
                    <div className='flex border-b-2'>
                        <p className='md:text-2xl py-5'>0 - 100 km/h</p>
                        <p className='md:text-2xl py-5 ml-auto'>3.5 s</p>
                    </div>
                    <div className='flex border-b-2'>
                        <p className='md:text-2xl py-5'>Top Speed</p>
                        <p className='md:text-2xl py-5 ml-auto'>120 km/h</p>
                    </div>
                    <div className='flex border-b-2'>
                        <p className='md:text-2xl py-5'>Lateral Acceleration</p>
                        <p className='md:text-2xl py-5 ml-auto'>1.8 g (50-ft skidpad)</p>
                    </div>
                    <div className='flex border-b-2'>
                        <p className='md:text-2xl py-5'>Weight</p>
                        <p className='md:text-2xl py-5 ml-auto'>390 lbs</p>
                    </div>
                    <div className='flex border-b-2'>
                        <p className='md:text-2xl py-5'>Torque</p>
                        <p className='md:text-2xl py-5 ml-auto'>29 lbs-ft</p>
                    </div>
                    <div className='flex border-b-2'>
                        <p className='md:text-2xl py-5'>Downforce</p>
                        <p className='md:text-2xl py-5 ml-auto'>658N @ 22.5m/s</p>
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
export default UT16
