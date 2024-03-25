import React from 'react';
import { Fade } from "react-awesome-reveal";

const TeamMembersSimpleComponents = ({ teamMembers, year }) => {

  return (
    <div>
        <div className='bg-[#303949] pb-10 px-10 text-[#222220]'>
            <Fade cascade damping={0.2} triggerOnce>
            <h1 className='text-5xl md:text-6xl font-bold pt-7 pb-10 text-center text-white'>{year} TEAM MEMBERS</h1>
            <div className="bg-gray-100 py-10 w-[30vw] rounded-lg mx-auto">
                <Fade cascade damping={0.2} triggerOnce>
                <ul className='text-center text-lg md:text-xl'>
                {teamMembers.map((member, index) => (
                    <li key={index}>{member.name} {member.specialization}</li>
                ))}
                </ul>
                </Fade>
            </div>
            </Fade>
        </div>
    </div>
  );
};

export default TeamMembersSimpleComponents;
