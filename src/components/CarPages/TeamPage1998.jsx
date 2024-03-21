import { Fade } from "react-awesome-reveal";
import GoToTop from '../GoToTop'
import HistoryCarousel from '../HistoryCarousel'

import OverviewImg from '../../assets/HistoricCarPhotos/1998/1998-1.jpg'
import CarouselImg1 from '../../assets/HistoricCarPhotos/1998/1998-2.jpg'
import CarouselImg2 from '../../assets/HistoricCarPhotos/1998/1998-3.jpg'

import TeamMembersSimpleComponents from "./TeamMembersSimpleComponent";

const TeamPage1998 = () => {
    const slides = [
            {
                image: CarouselImg2,
                description: 'A picture of the prototype developed by the team.'
            },
            {
                image: CarouselImg1,
                description: 'October 1998: The Formula SAE Racing Team brought their student race car for display outside the Mechanical Building. To the left is Yan Weizblit, then Scott Mitchell, and Sandro Vono.'
            },
        ];
    
    const teamMembers = [
        { name: 'Aaron Tsang', specialization: '- Team Principal' },
        { name: 'Michael Bayley', specialization: '- Technical Director' },
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
        <div className="h-screen bg-[#B6C1D0]">
            <Fade cascade damping={0.2} triggerOnce>
            <h1 className="carTitle text-center text-[130px] md:text-[280px] font-bold text-white pt-[450px]">1998</h1>
            </Fade>
        </div>
        <div className='bg-[#062644] grid lg:grid-cols-2 text-white'>
            <div className='px-10 py-10 lg:px-24 lg:py-32'>
                <Fade cascade damping={0.2} triggerOnce>
                <h1 className='text-4xl md:text-6xl font-bold pb-10'>OVERVIEW</h1>
                <p>1998 was a year focused on conducting research and development for the UT99. From February 1998 to June 1998, the team worked on fabricating and ordering parts to develop a full-size prototype of the car. July 1998 to August 1998, the final assembly of the vehicle was complete and was officially unveilled in September 1998. Then the team tested the car and conducted driver training from September 1998 to December 1998. In February 1999, the Formula SAE members attended the Metro Toronto Convention Centre displaying the first signature yellow chassis of the UT99 prototype as pictured. The UTFR Car was displayed along with Mini Baja and Fuel Vehicle cars from the school at the Toronto International Auto Show.</p>
                <p className="pt-5">This year, the team secured HA103 in the Haultain Building from the faculty which is what we now know as the "shop", where the team works on the car. Team members worked very hard securing sponsors and getting funding, sending out hundreds of sponsorship packagers with letters and phone calls. To raise initial seed money, we even attended Varsity hockey games and sold chocolate covered almonds. Every night brought in between $150-$200. Same as last year, a few members of the team attended the 1998 FSAE Michigan competition to observe and speak to teams.</p>
                </Fade>
            </div>
            <div className='mx-auto my-auto px-10 pb-10 lg:pt-24 lg:pr-24'>
                <Fade cascade damping={0.2} triggerOnce>
                <img src={OverviewImg} alt="" />
                </Fade>
            </div>
        </div>

        <TeamMembersSimpleComponents teamMembers={teamMembers} />
        
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
export default TeamPage1998
