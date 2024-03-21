import { Fade } from "react-awesome-reveal";
import GoToTop from '../GoToTop'
import HistoryCarousel from '../HistoryCarousel'

import OverviewImg from '../../assets/HistoricCarPhotos/1997/1997-Autoshow-4.jpg'
import CarouselImg1 from '../../assets/HistoricCarPhotos/1997/1997-Autoshow-1.jpg'
import CarouselImg2 from '../../assets/HistoricCarPhotos/1997/1997-Autoshow-3.jpg'

import TeamMembersSimpleComponents from "./TeamMembersSimpleComponent";

const TeamPage1997 = () => {
    const slides = [
            {
                image: CarouselImg1,
                description: 'A photo from an autoshow where the team\'s work is displayed'
            },
            {
                image: CarouselImg2,
                description: 'A photo from an autoshow where the team\'s work is displayed'
            },
        ];
    
    const teamMembers = [
        { name: 'Aaron Tsang', specialization: '- Founder' },
        { name: 'Kyle D. Jackson', specialization: '- Technical Director' },
        { name: 'Maurizio Darini', specialization: '' },
        { name: 'Sandro Vono', specialization: '' },
        { name: 'Akos Toth', specialization: '' },
        { name: 'Yan Weizblit', specialization: '' },
        { name: 'Manzar Akber', specialization: '' },
        { name: 'Paul Marttila', specialization: '' },
        { name: 'Jason Maristanez', specialization: '' },
        { name: 'Liung Liao', specialization: '' }
    ];
        

  return (
    <div>
        {/* Header */}
        <div className="h-screen bg-[#B6C1D0]">
            <Fade cascade damping={0.2} triggerOnce>
            <h1 className="carTitle text-center text-[130px] md:text-[280px] font-bold text-white pt-[450px]">1997</h1>
            </Fade>
        </div>

        {/* Overview Section */}
        <div className='bg-[#062644] grid lg:grid-cols-2 text-white'>
            <div className='px-10 py-10 lg:px-24 lg:py-32'>
                <Fade cascade damping={0.2} triggerOnce>
                <h1 className='text-4xl md:text-6xl font-bold pb-10'>OVERVIEW</h1>
                <p>The University of Toronto Formula Racing Team was founded during the 1996 - 1997 school year by Aaron Tsang while he was on his PEY at Bombardier. The team officially began January 1997 and was created by a group of 50 engineering students with the intent to enter Formula SAE Michigan in May 1999, which would be the team's first ever competition. The team went to the autoshow with just a foam model of their racecar in 1998 to try and get sponsors. A small group of people attended the 1997 FSAE Michigan competition to observer and learn about the competition. The team's goal was to be the best rookie team in FSAE Michigan 1999.</p>
                <p className="pt-5">From January 1997 to June 1997, the team focused on developing a conceptual design for the car, which from July 1997 to October 1997, they used to create a preliminary design. From November 1997 to January 1998, the team members worked on making the design more detailed and began acquiring sponsors from November 1997 to March 1998.</p>
                </Fade>
            </div>
            <div className='mx-auto my-auto px-10 pb-10 lg:py-10 lg:pr-24'>
                <Fade cascade damping={0.2} triggerOnce>
                <img src={OverviewImg} alt="" />
                </Fade>
            </div>
        </div>

        {/* Team Members Section */}
        <TeamMembersSimpleComponents teamMembers={teamMembers} year={"1997"}/>
        
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
export default TeamPage1997
