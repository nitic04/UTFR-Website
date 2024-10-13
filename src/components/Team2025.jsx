import React from "react";
import { Fade } from "react-awesome-reveal";
import GoToTop from "./GoToTop";
import BothCars from "../assets/TeamCarPhotos/Car.jpeg";
import TeamImage from "../assets/2024/UnveilingTeamPhoto.jpg";
import Card from './TeamMemberCard'
import TeamMemberCard from "./TeamMemberCard";

const urlEndpoint = 'https://ik.imagekit.io/18gwys9x0/UTFR/TeamMembers/'
 
const teamLeadership = [
  {
    name: "Ayrton Antenucci",
    imageUrl: urlEndpoint + "JakeSprenger" + ".jpg",
    linkedinUrl: "https://www.linkedin.com",
    title: "Team Principal",
    program: "Mech 2T3 + PEY"
  },
  {
    name: "Christian Stalteri",
    imageUrl: urlEndpoint + "DanielLaRosa" + ".jpg",
    linkedinUrl: "https://www.linkedin.com",
    title: "Mechanical Technical Director",
    program: "Mech 2T3 + PEY"
  },
  {
    name: "Nicholas Burley",
    imageUrl: urlEndpoint + "DanielLaRosa" + ".jpg",
    linkedinUrl: "https://www.linkedin.com",
    title: "Electrical Technical Director",
    program: "Mech 2T3 + PEY"
  },
  {
    name: "Youssef Elhadad",
    imageUrl: urlEndpoint + "DanielLaRosa" + ".jpg",
    linkedinUrl: "https://www.linkedin.com",
    title: "Driverless Technical Director",
    program: "Mech 2T3 + PEY"
  },
  {
    name: "Evan Tal",
    imageUrl: urlEndpoint + "DanielLaRosa" + ".jpg",
    linkedinUrl: "https://www.linkedin.com",
    title: "Business Director",
    program: "Mech 2T3 + PEY"
  },
  {
    name: "Nam Nguyen",
    imageUrl: urlEndpoint + "DanielLaRosa" + ".jpg",
    linkedinUrl: "https://www.linkedin.com",
    title: "Chief Race Engineer",
    program: "Mech 2T3 + PEY"
  },
  {
    name: "Victoria Moore",
    imageUrl: urlEndpoint + "DanielLaRosa" + ".jpg",
    linkedinUrl: "https://www.linkedin.com",
    title: "Shop Manager",
    program: "Mech 2T3 + PEY"
  },
]

const Team2025 = () => {
  return (
    <div className="w-full h-[100%] text-white bg-[#181818]">
      <div
        className="w-full h-screen relative"
        loading="style"
        style={{
          backgroundImage: `url(${TeamImage})`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="h-full flex flex-col justify-end">
          <Fade delay={0.2} triggerOnce>
            <h1 className="font-bold text-8xl md:text-9xl text-white text-center md:text-left md:pl-10 md:mb-16 mb-40">
              2025 Team
            </h1>
          </Fade>
        </div>
      </div>
      <div>
        <div className="text-white flex flex-col justify-center items-center w-full">
          <div className="w-full about grid md:grid-cols-2">
            <div className="my-auto px-10 py-14">
              <Fade cascade delay={0.3} damping={0.3} triggerOnce>
                <p className="text-4xl font-bold inline border-b-4 border-[#ED3833] pr-1">
                  Our Team
                </p>
                <p className="pt-5">
                  The University of Toronto Formula Racing team is structured
                  into 4 operating departments: Electrical, Mechanical,
                  Driverless (DV) development, and Business. Within each of
                  these departments, there are several Section Leads, each in
                  charge of leading a team of Junior & Senior members focused on
                  a specific aspect of the car / team. Our 4 racing drivers also
                  all take active roles in the team’s operation. There are over
                  70 members actively involved with the team, working hard to
                  deliver a faster and more reliable car for the season ahead!
                </p>
              </Fade>
            </div>
            <div
              className=""
              style={{
                backgroundImage: `url(${BothCars})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </div>
        </div>
      </div>  


      {/* DIRECTORS */}
      <div>
        <p className='text-4xl font-bold flex justify-center py-8'>Team Leadership</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 pb-10">
          {teamLeadership.map((member, index) => (
            <TeamMemberCard
              key={index}
              imageUrl={member.imageUrl}
              linkedinUrl={member.linkedinUrl}
              name={member.name}
              title={member.title}
              program={member.program}
            />
          ))}
        </div>
      </div>
      <GoToTop />
    </div>
  );
};

export default Team2025;
