import { Fade } from "react-awesome-reveal";
import GoToTop from '../GoToTop'
import HistoryCarousel from '../HistoryCarousel'

import OverviewImg from '../../assets/HistoricCarPhotos/1998/1998-1.jpg'

import TeamMembersSimpleComponents from "./TeamMembersSimpleComponent";

const TeamPage1998 = () => {
    
    const teamMembers = [
        { name: 'Team Principal: ', specialization: 'Tyler Turnbull' },
        { name: 'Chassis: ', specialization: 'Jonathan Lee' },
        { name: 'Suspension: ', specialization: 'Tyler Turnbull' },
        { name: 'Electrical: ', specialization: 'Daniel Wing' },
        { name: 'Aerodynamics: ', specialization: 'Camilo Escobar' },
        { name: 'Drivetrain: ', specialization: 'Tejvir Binepal' },
        { name: 'Engine: ', specialization: 'Areg Nazarins-Armavil' },
        { name: 'Ergonomics: ', specialization: 'Megan Lee' },
        { name: 'Brakes: ', specialization: 'Damian Sisera' },
        { name: 'Business Lead: ', specialization: 'Jonathan Libby' },
        { name: 'Recruitment Co-Lead: ', specialization: 'Ally Fraser' },
        { name: 'Recruitment Co-Lead:', specialization: 'Alex Angelou' },
        { name: 'Outreach & Sponsorships: ', specialization: 'Juliano Sisera' },
    ];
        

  return (
    <div>
        {/* Header */}
        <div className="h-screen bg-[#B6C1D0]">
            <Fade cascade damping={0.2} triggerOnce>
            <h1 className="carTitle text-center text-[130px] md:text-[280px] font-bold text-white pt-[450px]">2020</h1>
            </Fade>
        </div>

        {/* Overview Section */}
        <div className='bg-[#062644] text-white'>
            <div className='px-10 py-10 lg:px-24 lg:py-32'>
                <Fade cascade damping={0.2} triggerOnce>
                <h1 className='text-4xl md:text-6xl font-bold pb-10'>OVERVIEW</h1>
                <p>2020 marked the start of the COVID-19 pandemic which put a halt to all activities, academically, and for the team. This meant the team was unable to compete or build their car in the shop this year. As such, no official UT20 car exists, the chassis was partially assembled by March 2020 and was eventually completed the following year as UT21.</p>
                </Fade>
            </div>
        </div>

        {/* Team Members Section */}
        <TeamMembersSimpleComponents teamMembers={teamMembers} year={"UT2020"}/>
                
        <GoToTop />
    </div>
  )
}
export default TeamPage1998
