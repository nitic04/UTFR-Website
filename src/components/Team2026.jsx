import React from "react";
import { Fade } from "react-awesome-reveal";
import GoToTop from "./GoToTop";
import Czech_2 from "../assets/HistoricCarPhotos/UT23/2023-Czech-2.jpeg";
import TeamMemberCard from "./TeamMemberCard";

const prefix = "https://ik.imagekit.io/utfr/2025_2026/Headshots/"

const teamLeadership = [
  {
    name: "Eric Emmenegger",
    imageUrl: prefix + "Eric_Emmenegger.jpg",
    linkedinUrl: "https://www.linkedin.com/in/eric-emmenegger",
    title: "Team Captain",
    program: "Mech Eng 2T5 + PEY"
  },
  {
    name: "Mauro De Liberato",
    imageUrl: prefix + "Mauro_DeLiberato.jpg",
    linkedinUrl: "",
    title: "Mechanical Technical Director",
    program: "Mech Eng 2T5 + PEY"
  },
  {
    name: "Caley McNeill",
    imageUrl: prefix + "Caley_McNeill.jpg",
    linkedinUrl: "",
    title: "Business Director",
    program: "Mech Eng 2T5 + PEY"
  },
  {
    name: "Mehar Singh",
    imageUrl: prefix + "Mehar_Singh.jpg",
    linkedinUrl: "https://www.linkedin.com/in/meharsingh1 ",
    title: "Electrical Technical Director",
    program: "ECE 2T7 + PEY"
  },
  {
    name: "Justin Lim",
    imageUrl: prefix + "Justin_Lim.jpg",
    linkedinUrl: "",
    title: "Driverless Technical Director",
    program: "Eng Sci 2T6 + PEY"
  },
  {
    name: "Nam Nguyen",
    imageUrl: prefix + "Nam_Nguyen.jpg",
    linkedinUrl: "https://www.linkedin.com/in/nam-nguyen-b366731b0/",
    title: "Chief Race Engineer",
    program: "Mech Eng 2T6"
  },
  {
    name: "Veronica Abdel Malak",
    imageUrl: prefix + "UTFR_Placeholder.png",
    linkedinUrl: "",
    title: "Shop Manager",
    program: "Mech Eng 2T7 + PEY"
  },
]

const mechLeads = [
  {
    name: "Robert Hou",
    imageUrl: prefix + "UTFR_Placeholder.png",
    linkedinUrl: "",
    title: "Vehicle Dynamics Lead",
    program: "Mech 2T5 + PEY"
  },
  {
    name: "Eman Daudpota",
    imageUrl: prefix + "Eman_Daudpota.jpg",
    linkedinUrl: "https://www.linkedin.com/in/eman-daudpota/",
    title: "Aerodynamics Lead",
    program: "Mech 2T7 + PEY"
  },
  {
    name: "Sam Bahrami",
    imageUrl: prefix + "Sam_Bahrami.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/sam-bahrami/",
    title: "Chassis Lead",
    program: "Mech 2T5 + PEY"
  },
  {
    name: "Kelvin Cao",
    imageUrl: prefix + "Kelvin_Cao.jpg",
    linkedinUrl: "https://www.linkedin.com/in/kelvincaoyx/",
    title: "Drivetrain Lead",
    program: "Mech 2T5 + PEY"
  },
  {
    name: "Amalia Orsmond",
    imageUrl: prefix + "UTFR_Placeholder.png",
    linkedinUrl: "https://www.linkedin.com/in/aors",
    title: "Suspension Lead",
    program: "Mech 2T8 + PEY"
  },
  {
    name: "Clara Coukell",
    imageUrl: prefix + "Clara_Coukell.jpg",
    linkedinUrl: "https://www.linkedin.com/in/clara-coukell/",
    title: "Accumulator Lead",
    program: "Mech 2T7 + PEY"
  },
  {
    name: "Kody Cao",
    imageUrl: prefix + "UTFR_Placeholder.png",
    linkedinUrl: "",
    title: "Driver Interface Lead",
    program: "Masters of Applied Science 2T6"
  },
  {
    name: "Mo Taban",
    imageUrl: prefix + "Mo_Taban.jpg",
    linkedinUrl: "https://www.linkedin.com/in/motaban",
    title: "Vehicle Controls Lead",
    program: "Mech 2T5 + PEY"
  },
]

const elecLeads = [
  {
    name: "Ibrahim Fadel",
    imageUrl: prefix + "Ibrahim_Fadel.jpg",
    linkedinUrl: "https://www.linkedin.com/in/ibrahim-fadel/",
    title: "Firmware Lead",
    program: "ECE 2T7 + PEY"
  },
  {
    name: "Allan Zhou",
    imageUrl: prefix + "Allan_Zhou.jpg",
    linkedinUrl: "https://www.linkedin.com/in/allanlzee/",
    title: "LV Architecture Lead",
    program: "Eng Sci 2T7 + PEY"
  },
  {
    name: "Jeyan Mehta",
    imageUrl: prefix + "UTFR_Placeholder.png",
    linkedinUrl: "https://www.linkedin.com/in/jeyan-mahir-mehta-57a500246",
    title: "Electronics Lead",
    program: "ECE 2T7 + PEY"
  },
  {
    name: "Alex Wang",
    imageUrl: prefix + "UTFR_Placeholder.png",
    linkedinUrl: "",
    title: "Powertrain Lead",
    program: "Eng Sci 2T7"
  },
]

const dvLeads = [
  {
    name: "James Sheng",
    imageUrl: prefix + "UTFR_Placeholder.png",
    linkedinUrl: "",
    title: "Classical Perception Lead",
    program: "ECE 2T8 + PEY"
  },
  {
    name: "Oscar Sun",
    imageUrl: prefix + "UTFR_Placeholder.png",
    linkedinUrl: "https://www.linkedin.com/in/oscar-sun-a1960b287/",
    title: "Deep Learning Perception Lead",
    program: "ECE 2T7 + PEY"
  },
  {
    name: "Arwin Sondhi",
    imageUrl: prefix + "Arwin_Sondhi.jpg?updatedAt=1756313457244",
    linkedinUrl: "https://www.linkedin.com/in/arwinsondhi/",
    title: "Mapping Lead",
    program: "ECE 2T5 + PEY"
  },
  {
    name: "Mark Pirner",
    imageUrl: prefix + "Mark_Pirner.jpg",
    linkedinUrl: "",
    title: "Planning Lead",
    program: "CE 2T7"
  },
  {
    name: "Jackson Cai",
    imageUrl: prefix + "UTFR_Placeholder.png",
    linkedinUrl: "https://www.linkedin.com/in/jackson-cai",
    title: "Controls Lead",
    program: "CE 2T8 + PEY"
  },
]

const businessLeads = [
  {
    name: "Vedant Gupta",
    imageUrl: prefix + "UTFR_Placeholder.png",
    linkedinUrl: "https://www.linkedin.com/in/vedantgupta2003/",
    title: "Events Lead",
    program: "EngSci Aero 2T5 + PEY"
  },
  {
    name: "Angela Cheng",
    imageUrl: prefix + "UTFR_Placeholder.png",
    linkedinUrl: "",
    title: "Marketing Lead",
    program: "Chem Eng 2T8 + PEY"
  },
  {
    name: "Rohan Sadekar",
    imageUrl: prefix + "UTFR_Placeholder.png",
    linkedinUrl: "https://www.linkedin.com/in/rohan-sadekar-692a12260/",
    title: "External Relations Lead",
    program: "Economics 2T8"
  },
  {
    name: "David Bi",
    imageUrl: prefix + "UTFR_Placeholder.png",
    linkedinUrl: "https://www.linkedin.com/in/david-c-bi/",
    title: "Graphic Design Lead",
    program: "Architectural Studies 2T7"
  },
]

const recruitmentLeads = [
  {
    name: "Rohan Sadekar",
    imageUrl: prefix + "UTFR_Placeholder.png",
    linkedinUrl: "https://www.linkedin.com/in/rohan-sadekar-692a12260/",
    title: "Recruitment Lead",
    program: "Economics 2T8"
  },
  {
    name: "Janie Ma",
    imageUrl: prefix + "UTFR_Placeholder.png",
    linkedinUrl: "",
    title: "Recruitment Lead",
    program: "Mech 2T8 + PEY"
  },
  {
    name: "Arthur Xu",
    imageUrl: prefix + "Arthur_Xu.jpg",
    linkedinUrl: "",
    title: "Recruitment Lead",
    program: "CE 2T5 + PEY"
  },
]

const Team2025 = () => {
  return (
    <div className="w-full h-[100%] text-white bg-[#181818]">
      <div
        className="w-full h-screen relative"
        loading="style"
        style={{
          backgroundImage: `url(https://ik.imagekit.io/utfroutreach/UT25/UT25_NH.jpg)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="h-full flex flex-col justify-end">
          <Fade delay={0.2} triggerOnce>
            <h1 className="font-bold text-8xl md:text-9xl text-white text-center md:text-left md:pl-10 md:mb-16 mb-40">
              2026 Team
            </h1>
          </Fade>
        </div>
      </div>
      <div>
        <div className="text-white flex flex-col justify-center items-center w-full bg-[#1D1D1D]">
          <div className="w-full about grid md:grid-cols-2">
            <div className="my-auto px-10 py-14">
              <Fade cascade delay={0.3} damping={0.3} triggerOnce>
                <p className="text-4xl font-bold inline border-b-4 border-[#ED3833] pr-1">
                  Our Team
                </p>
                <p className="pt-5">
                  The University of Toronto Formula Racing team is structured
                  into 4 operating departments: Electrical, Mechanical,
                  Driverless (DV) development, and Business. Each section focuses on a specific aspect of the car/team.  
                  Within each of
                  these departments, there are several section leads, each in
                  charge of leading a team of junior & senior members. Our 4 racing drivers also
                  all take active roles in the team’s operation. There are over
                  70 members actively involved with the team, working hard to
                  deliver a faster and more reliable car for the season ahead!
                </p>
              </Fade>
            </div>
            <div
              className=""
              style={{
                backgroundImage: `url(${Czech_2})`,
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
        <Fade delay={0.2} triggerOnce>
          <p className='text-4xl font-bold flex justify-center py-8'>Team Leadership</p>
        </Fade>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-auto px-3 pb-10">
          {teamLeadership.map((member, index) => (
            <Fade delay={0.2} triggerOnce>
              <TeamMemberCard
                key={index}
                imageUrl={member.imageUrl}
                linkedinUrl={member.linkedinUrl}
                name={member.name}
                title={member.title}
                program={member.program}
              />
            </Fade>
          ))}
        </div>
      </div>

      <div>
        <Fade delay={0.2} triggerOnce>
          <p className='text-4xl font-bold flex justify-center pb-8'>Mechanical Leads</p>
        </Fade>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-auto px-3 pb-10">
          {mechLeads.map((member, index) => (
            <Fade delay={0.2} triggerOnce>
              <TeamMemberCard
                key={index}
                imageUrl={member.imageUrl}
                linkedinUrl={member.linkedinUrl}
                name={member.name}
                title={member.title}
                program={member.program}
              />
            </Fade>
          ))}
        </div>
      </div>

      <div>
        <Fade delay={0.2} triggerOnce>
          <p className='text-4xl font-bold flex justify-center pb-8'>Electrical Leads</p>
        </Fade>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-auto px-3 pb-10">
          {elecLeads.map((member, index) => (
            <Fade delay={0.2} triggerOnce>
              <TeamMemberCard
                key={index}
                imageUrl={member.imageUrl}
                linkedinUrl={member.linkedinUrl}
                name={member.name}
                title={member.title}
                program={member.program}
              />
            </Fade>
          ))}
        </div>
      </div>

      <div>
        <p className='text-4xl font-bold flex justify-center pb-8'>Driverless Leads</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-auto px-3 pb-10">
          {dvLeads.map((member, index) => (
            <Fade delay={0.2} triggerOnce>
              <TeamMemberCard
                key={index}
                imageUrl={member.imageUrl}
                linkedinUrl={member.linkedinUrl}
                name={member.name}
                title={member.title}
                program={member.program}
              />
            </Fade>
          ))}
        </div>
      </div>

      <div>
        <Fade delay={0.2} triggerOnce>
          <p className='text-4xl font-bold flex justify-center pb-8'>Business Leads</p>
        </Fade>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-auto px-3 pb-10">
          {businessLeads.map((member, index) => (
            <Fade delay={0.2} triggerOnce>
              <TeamMemberCard
                key={index}
                imageUrl={member.imageUrl}
                linkedinUrl={member.linkedinUrl}
                name={member.name}
                title={member.title}
                program={member.program}
              />
            </Fade>
          ))}
        </div>
      </div>

        <div>
        <Fade delay={0.2} triggerOnce>
          <p className='text-4xl font-bold flex justify-center pb-8'>Recruitment Leads</p>
        </Fade>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-auto px-3 pb-10">
          {recruitmentLeads.map((member, index) => (
            <Fade delay={0.2} triggerOnce>
              <TeamMemberCard
                key={index}
                imageUrl={member.imageUrl}
                linkedinUrl={member.linkedinUrl}
                name={member.name}
                title={member.title}
                program={member.program}
              />
            </Fade>
          ))}
        </div>
      </div>
      <GoToTop />
    </div>
  );
};

export default Team2025;
