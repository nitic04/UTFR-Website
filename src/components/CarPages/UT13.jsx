import { Fade } from "react-awesome-reveal";
import GoToTop from '../GoToTop'
import HistoryCarousel from '../HistoryCarousel'

import OverviewImg from '../../assets/HistoricCarPhotos/UT13/2013-Testing-1.jpg'
import CarouselImg1 from '../../assets/HistoricCarPhotos/UT13/2013-Car-1.JPG'
import CarouselImg2 from '../../assets/HistoricCarPhotos/UT13/2013-Competition-1.jpg'
import CarouselImg3 from '../../assets/HistoricCarPhotos/UT13/2013-Shop-1.jpg'
import CarouselImg4 from '../../assets/HistoricCarPhotos/UT13/2013-Shop-2.jpg'
import CarouselImg5 from '../../assets/HistoricCarPhotos/UT13/2013-Shop-3.jpg'
import CarouselImg6 from '../../assets/HistoricCarPhotos/UT13/2013-Shop-4.jpg'
import CarouselImg7 from '../../assets/HistoricCarPhotos/UT13/2013-Testing-1.jpg'
import CarouselImg8 from '../../assets/HistoricCarPhotos/UT13/2013-Testing-2.JPG'

import TeamMembersSimpleComponents from "./TeamMembersSimpleComponent";

const UT13 = () => {
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
    
    const teamMembers = [
        { name: 'Kevin Ramsaran', specialization: '- Team Principal, Technical Director, Electrical Director, Chassis Lead' },
        { name: 'Amanda Persaud', specialization: '- Business Manager' },
        { name: 'Luke Fregonese', specialization: '- Brakes and Drivetrain Lead' },
        { name: 'Vivek Subbayya', specialization: '- Engine Lead' },
        { name: 'Vivek Chugh', specialization: '- Suspension Lead' },
        { name: 'Sayandip Roy', specialization: '- Junior Member' },
    ];
        

  return (
    <div>
        {/* Header */}
        <div className="h-screen bg-[#B6C1D0]">
            <Fade cascade damping={0.2} triggerOnce>
            <h1 className="carTitle text-center text-[130px] md:text-[280px] font-bold text-white pt-[450px]">2013</h1>
            </Fade>
        </div>

        {/* Overview Section */}
        <div className='bg-[#062644] grid lg:grid-cols-2 text-white'>
            <div className='px-10 py-10 lg:px-24 lg:py-32'>
                <Fade cascade damping={0.2} triggerOnce>
                <h1 className='text-4xl md:text-6xl font-bold pb-10'>OVERVIEW</h1>
                <p>This year was used as a developmental year, the chassis from UT13 was turned into the UT14 for the next season.</p>
                </Fade>
            </div>
            <div className='mx-auto my-auto px-10 pb-10 lg:py-10 lg:pr-24'>
                <Fade cascade damping={0.2} triggerOnce>
                <img src={OverviewImg} alt="" />
                </Fade>
            </div>
        </div>

        {/* Team Members Section */}
        <TeamMembersSimpleComponents teamMembers={teamMembers} year={"UT13"}/>
        
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
        <GoToTop />
    </div>
  )
}
export default UT13
