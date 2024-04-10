import { Fade } from "react-awesome-reveal";
import GoToTop from '../GoToTop'
import HistoryCarousel from '../HistoryCarousel'

import CarCutout from '../../assets/HistoricCarPhotos/UT03/UT03-Cutout.png'
import OverviewImg from '../../assets/HistoricCarPhotos/UT03/2003-Car-3.jpg'
import CompImg1 from '../../assets/HistoricCarPhotos/UT03/2003-Competition-1.jpg'
import CompImg2 from '../../assets/HistoricCarPhotos/UT03/2003-Team-1.jpg'
import CarouselImg1 from '../../assets/HistoricCarPhotos/UT03/2003-Car-1.jpg'
import CarouselImg2 from '../../assets/HistoricCarPhotos/UT03/2003-Car-2.jpg'
import CarouselImg3 from '../../assets/HistoricCarPhotos/UT03/2003-Car-4.jpg'
import CarouselImg4 from '../../assets/HistoricCarPhotos/UT03/2003-Car-5.jpg'
import CarouselImg5 from '../../assets/HistoricCarPhotos/UT03/2003-Car-6.jpg'
import CarouselImg6 from '../../assets/HistoricCarPhotos/UT03/2003-Team-2.jpg'
import CarouselImg7 from '../../assets/HistoricCarPhotos/UT03/2003-Team-3.jpg'

import TeamMembersSimpleComponents from "./TeamMembersSimpleComponent";

const UT03 = () => {
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

    const teamMembers = [
        { name: "Vinh Pham", specialization: "Team Principal" },
        { name: "Gabor Legeny", specialization: "- Lead Manufacturing" },
        { name: "Matthew Ferraro", specialization: "- Technical Director" },
        { name: "Jeremy Koudelka", specialization: "- Chief Designer" },
        { name: "Jerry Zielinski", specialization: "- Engine Lead, Driver" },
        { name: "Taras Juzkiw", specialization: "- Electronics Team Leader" },
        { name: "Anthony Wei", specialization: "" },
        { name: "Ruth Tan", specialization: "" },
        { name: "Jennifer Aiello", specialization: "" },
        { name: "Nadia Boin", specialization: "" },
        { name: "David Johnson", specialization: "" },
        { name: "Prof. Sullivan", specialization: "" },
        { name: "Prof. Cleghorn", specialization: "" },
        { name: "Maureen Kwok", specialization: "" },
        { name: "Daxin Zhao", specialization: "" },
        { name: "Taras Juzkiw", specialization: "" },
        { name: "Neal Persaud", specialization: "" },
        { name: "T. Eminowicz", specialization: "" },
    ];
    
  return (
    <div>
        {/* Header */}
        <div className="h-screen bg-[#B6C1D0]">
            <Fade cascade damping={0.2} triggerOnce>
            <h1 className="carTitle text-center text-[130px] md:text-[280px] font-bold text-white pt-[250px]">UT03</h1>
            <img className="mx-auto pt-10 w-[1000px]" src={CarCutout} alt="" />
            <div className='grid space-y-8 md:space-y-0 md:grid-cols-3 pt-10 md:pt-5'>
                <div>
                    <h2 className="text-[#3A4254] text-center text-xl md:text-2xl font-bold">Power</h2>
                    <h2 className="text-center text-white text-3xl md:text-4xl font-bold">~ 78 bhp</h2>
                </div>
                <div>
                    <h2 className="text-[#3A4254] text-center text-xl md:text-2xl font-bold">Redline</h2>
                    <h2 className="text-center text-white text-3xl md:text-4xl font-bold">11,800 rpm</h2>
                </div>
                <div>
                    <h2 className="text-[#3A4254] text-center text-xl md:text-2xl font-bold">Engine</h2>
                    <h2 className="text-center text-white text-3xl md:text-4xl font-bold">Honda CBR600</h2>
                </div>
            </div>
            </Fade>
        </div>

        {/* Overview Section */}
        <div className='bg-[#303949] grid lg:grid-cols-2 text-white'>
            <div className='px-10 py-10 lg:px-24 lg:py-32'>
                <Fade cascade damping={0.2} triggerOnce>
                <h1 className='text-4xl md:text-6xl font-bold pb-10'>OVERVIEW</h1>
                <p className="pb-5">UTFR became world champions for the first time this year. The team placed 1st overall in Formula Student UK also taking awards for 1st place in acceleration, endurance, and efficiency. The car's has a spaceframe chassis made out of a composite carbon fibre honeycomb.</p>
                <a href="https://thevarsity.ca/2003/09/08/u-of-t-automotive-engineers-win-international-competition/" target="_blank" rel="noreferrer"><button className='text-white rounded-sm border-2 px-6 py-3 mt-2 flex items-center transition duration-200 hover:bg-[#0190cd] hover:border-[#0190cd]'>Here is an article written about the team by The Varsity</button></a>
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
                    <h3 className='text-center text-2xl font-bold pb-10 lg:pb-0'>43rd Place Overall</h3>
                    <h3 className='hidden text-center text-2xl font-bold pb-10 lg:pb-0'>1st Place Overall</h3>
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
                    <h3 className='text-center pb-10 md:pb-0 text-2xl font-bold'>1st Place Overall</h3>
                    <h3 className='text-center pb-10 md:pb-0 text-2xl font-bold'>Acceleration - 1st Place</h3>
                    <h3 className='text-center pb-10 md:pb-0 text-2xl font-bold'>Endurance - 1st Place</h3>
                    <h3 className='text-center pb-10 md:pb-0 text-2xl font-bold'>Efficiency - 1st Place</h3>
                    </Fade>
                </div>
            </div>
            </Fade>
        </div>

        {/* Car Video Section */}
        {/* <div className='bg-[#13191F]'>
            <Fade cascade damping={0.2} triggerOnce>
            <h1 className='text-4xl md:text-6xl font-bold pt-10 pb-10 text-center text-white'>SEE THE UT03 IN ACTION</h1>
            <iframe className="w-[100vw] h-[30vh] md:w-[80vw] md:h-[50vh] lg:w-[70vw] lg:h-[80vh] mx-auto pb-10" src="https://www.youtube.com/embed/ilPiE-aTMGQ?si=iaf0mMtAU3mIGKkK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </Fade>
        </div> */}

        {/* Team Members Section */}
        <TeamMembersSimpleComponents teamMembers={teamMembers} year={"UT03"} />
        
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
                        <p className='md:text-2xl py-5 ml-auto'>CBR600</p>
                    </div>
                    <div className='flex border-b-2'>
                        <span className='hidden md:inline md:text-2xl py-5'>Power</span>
                        <p className='md:text-2xl py-5 ml-auto'>5~ 78 bhp</p>
                    </div>
                    <div className='flex border-b-2'>
                        <p className='md:text-2xl py-5'>Redline</p>
                        <p className='md:text-2xl py-5 ml-auto'>11,800 rpm</p>
                    </div>
                    <div className='flex border-b-2'>
                        <p className='md:text-2xl py-5'>Weight</p>
                        <p className='md:text-2xl py-5 ml-auto'>450 lbs</p>
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
export default UT03
