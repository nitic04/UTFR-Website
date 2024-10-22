import React from "react";
import { Fade } from "react-awesome-reveal";
import GoToTop from "./GoToTop";
import Czech_2 from "../assets/HistoricCarPhotos/UT23/2023-Czech-2.jpeg";
import TeamImage from "../assets/2024/UnveilingTeamPhoto.jpg";
import TeamMemberCard from "./TeamMemberCard";
const teamLeadership = [
  {
    name: "Ayrton Antenucci",
    imageUrl: "https://i.postimg.cc/XYhY51XT/Ayrton-Antenucci.jpg",
    linkedinUrl: "https://www.linkedin.com/in/ayrton-antenucci",
    title: "Team Principal",
    program: "EE 2T4 + PEY"
  },
  {
    name: "Christian Stalteri",
    imageUrl: "https://i.postimg.cc/xTWgzPGc/Christian-Stalteri.jpg",
    linkedinUrl: "https://www.linkedin.com/in/christian-stalteri/",
    title: "Mechanical Technical Director",
    program: "Mech 2T4 + PEY"
  },
  {
    name: "Nicholas Burley",
    imageUrl: "https://i.postimg.cc/PJN71yCR/Nicholas-Burley.jpg",
    linkedinUrl: "",
    title: "Electrical Technical Director",
    program: "ECE 2T6 + PEY"
  },
  {
    name: "Youssef Elhadad",
    imageUrl: "https://i.postimg.cc/02T4JpPV/Youssef-Elhadad.jpg",
    linkedinUrl: "",
    title: "Driverless Technical Director",
    program: "CE 2T5 + PEY"
  },
  {
    name: "Evan Tal",
    imageUrl: "https://i.postimg.cc/tCvq0vdY/Evan-Tal.jpg",
    linkedinUrl: "https://www.linkedin.com/in/evan-tal/",
    title: "Business Director",
    program: "Rotman 2T5"
  },
  {
    name: "Nam Nguyen",
    imageUrl: "https://i.postimg.cc/4yjCYd3F/Nam-Nguyen.jpg",
    linkedinUrl: "www.linkedin.com/in/nam-nguyen-b366731b0",
    title: "Chief Race Engineer",
    program: "Mech 2T6 + PEY"
  },
  {
    name: "Victoria Moore",
    imageUrl: "https://i.postimg.cc/KzbF76bs/Victoria-Moore.jpg",
    linkedinUrl: "https://www.linkedin.com/in/victoria-moore-6008a1293/",
    title: "Shop Manager",
    program: "Physics & Math 2T6"
  },
]

const mechLeads = [
  {
    name: "Winston Young",
    imageUrl: "https://i.postimg.cc/QtqDffxN/Winston-Young.jpg",
    linkedinUrl: "https://www.linkedin.com/in/winston-young",
    title: "Aerodynamics Lead",
    program: "Eng Sci Aero 2T6 + PEY"
  },
  {
    name: "Juan Moon",
    imageUrl: "https://i.postimg.cc/nhm6d338/Juan-Moon.jpg",
    linkedinUrl: "https://www.linkedin.com/in/juan-moon",
    title: "Chassis Lead",
    program: "Mech 2T6 + PEY"
  },
  {
    name: "Nicole Scala",
    imageUrl: "https://i.postimg.cc/Xvd4CVRC/Nicole-Scala.jpg",
    linkedinUrl: "",
    title: "Ergonomics Lead",
    program: "Indy 2T6 + PEY"
  },
  {
    name: "Bryan Vu",
    imageUrl: "https://i.postimg.cc/KzhcqKPf/Bryan-Vu.jpg",
    linkedinUrl: "https://www.linkedin.com/in/bryan-vu/",
    title: "Brakes Lead",
    program: "Mech 2T6 + PEY"
  },
  {
    name: "Niemo Fang",
    imageUrl: "https://i.postimg.cc/c1520pjy/Niemo-Fang.jpg",
    linkedinUrl: "https://www.linkedin.com/in/niemo-fang",
    title: "Composites Lead",
    program: "Mech 2T6 + PEY"
  },
  {
    name: "Mackenzie Powell",
    imageUrl: "https://i.postimg.cc/vBYkZbbM/Mackenzie-Powell.jpg",
    linkedinUrl: "https://www.linkedin.com/in/mackenzie-powell04/",
    title: "Suspension Lead",
    program: "Mech 2T6 + PEY"
  },
  {
    name: "Adam Abdulahad",
    imageUrl: "https://i.postimg.cc/rFVs2tvY/Adam-Abdulahad.jpg",
    linkedinUrl: "",
    title: "Drivetrain Lead",
    program: "Eng Sci Robo 2T6 + PEY"
  },
  {
    name: "Francesca Fortino",
    imageUrl: "https://i.postimg.cc/HskYh1yq/Francesca-Fortino.jpg",
    linkedinUrl: "https://www.linkedin.com/in/francesca-fortino-867511202/",
    title: "Steering Lead",
    program: "Mech 2T6 + PEY"
  },
  {
    name: "Naomi Johnson",
    imageUrl: "https://i.postimg.cc/260JqMSW/Naomi-Johnson.jpg",
    linkedinUrl: "https://ca.linkedin.com/in/naomi-johnson-547254206",
    title: "Powertrain Mechanical Lead",
    program: "Mech 2T4 + PEY"
  },
  {
    name: "Ajay Anand",
    imageUrl: "https://i.postimg.cc/J4yP0Fkf/Ajay-Anand.jpg",
    linkedinUrl: "https://www.linkedin.com/in/ajay-b-anand",
    title: "Vehicle Dynamics Lead",
    program: "Mech 2T4 + PEY"
  },
]

const elecLeads = [
  {
    name: "Matthew Lee",
    imageUrl: "https://i.postimg.cc/SR4gBCqN/Matthew-Lee.jpg",
    linkedinUrl: "http://www.linkedin.com/in/mathlee",
    title: "Powertrain Lead",
    program: "ECE 2T6 + PEY"
  },
  {
    name: "Chen Zhang",
    imageUrl: "https://i.postimg.cc/5054ZxpV/Chen-Zhang.jpg",
    linkedinUrl: "",
    title: "Low Voltage Architecture Lead",
    program: "Eng Sci 2T6 + PEY"
  },
  {
    name: "Robert Firsov",
    imageUrl: "https://i.postimg.cc/pXh7T0b9/Robert-Firsov.jpg",
    linkedinUrl: "https://www.linkedin.com/in/robert-firsov/",
    title: "Electronics Lead",
    program: "ECE 2T6 + PEY"
  },
  {
    name: "Nadia Zhou",
    imageUrl: "https://i.postimg.cc/ZngMHN3K/Nadia-Zhou.jpg",
    linkedinUrl: "https://www.linkedin.com/in/nadia-zhou/",
    title: "Firmware Lead",
    program: "ECE 2T6 + PEY"
  },
]

const dvLeads = [
  {
    name: "Alex Cho",
    imageUrl: "https://i.postimg.cc/wTZCcCcc/Alex-Cho.jpg",
    linkedinUrl: "https://www.linkedin.com/in/alex-cho-738056154/",
    title: "Perception Lead",
    program: "Eng Sci Robotics 2T6 + PEY"
  },
  {
    name: "Halle Teh",
    imageUrl: "https://i.postimg.cc/x1k09Ggg/Halle-Teh.jpg",
    linkedinUrl: "https://www.linkedin.com/in/halle-teh",
    title: "Deep Learning Perception Lead",
    program: "Indy 2T6 + PEY"
  },
  {
    name: "Yulu Jiang",
    imageUrl: "https://i.postimg.cc/GthCVvHF/Yulu-Jiang.jpg",
    linkedinUrl: "https://www.linkedin.com/in/yul-jiang/",
    title: "Mapping Lead",
    program: "ECE 2T6 + PEY"
  },
  {
    name: "Richard Li",
    imageUrl: "https://i.postimg.cc/SQnvYj01/UTFR-Placeholder.png",
    linkedinUrl: "",
    title: "Navigation Lead",
    program: "ECE 2T6 + PEY"
  },
  {
    name: "Ayaan Pathan",
    imageUrl: "https://i.postimg.cc/HLCFFbNr/Ayaan-Pathan.jpg",
    linkedinUrl: "",
    title: "Controls Lead",
    program: "ECE 2T6 + PEY"
  },
  {
    name: "Allan Zhou",
    imageUrl: "https://i.postimg.cc/YCjShB26/Allan-Zhou.jpg",
    linkedinUrl: "https://www.linkedin.com/in/allanlzee/",
    title: "DV Integration Co-Lead",
    program: "Eng Sci 2T7 + PEY"
  },
  {
    name: "Justin Lim",
    imageUrl: "https://i.postimg.cc/DzdRh8VB/Justin-Lim.jpg",
    linkedinUrl: "",
    title: "DV Integration Co-Lead",
    program: "Eng Sci 2T6 + PEY"
  },
]

const businessLeads = [
  {
    name: "Alicia Kho",
    imageUrl: "https://i.postimg.cc/kMFGHyhb/Alicia-Kho.jpg",
    linkedinUrl: "www.linkedin.com/in/alicia-kho-3a9b48261",
    title: "Events Lead",
    program: "Indy 2T6 + PEY"
  },
  {
    name: "Cammyn Lim",
    imageUrl: "https://i.postimg.cc/zvJzN9PR/Cammyn-Lim.jpg",
    linkedinUrl: "https://www.linkedin.com/in/cammyn-lim/",
    title: "Marketing Lead",
    program: "Rotman Commerce 2T6"
  },
  {
    name: "Amelia Dease",
    imageUrl: "https://i.postimg.cc/8C6Pmd6s/Amelia-Dease.jpg",
    linkedinUrl: "",
    title: "Graphic Design Lead",
    program: "Political Science 2T6"
  },
  {
    name: "Aleksander Kiudorf",
    imageUrl: "https://i.postimg.cc/5y3tFxF3/Aleks-Kiudorf.jpg",
    linkedinUrl: "",
    title: "External Relations Lead",
    program: "Rotman Management 2T6"
  },
  {
    name: "Krisha Kalsi",
    imageUrl: "https://i.postimg.cc/6pDBq7mK/Krisha-Kalsi.jpg",
    linkedinUrl: "https://www.linkedin.com/in/krisha-kalsi/",
    title: "Recruitment Co-Lead",
    program: "Comp Sci 2T6 + PEY"
  },
  {
    name: "Clara Coukell",
    imageUrl: "https://i.postimg.cc/ZYcYH5CP/Clara-Coukell.jpg",
    linkedinUrl: "https://www.linkedin.com/in/clara-coukell/",
    title: "Recruitment Co-Lead",
    program: "Mech 2T7 + PEY"
  },
  {
    name: "Zoe Jenkin",
    imageUrl: "https://i.postimg.cc/sx6rr1ht/Zoe-Jenkin.jpg",
    linkedinUrl: "https://www.linkedin.com/in/zoe-jenkin-a53247268/",
    title: "Recruitment Co-Lead",
    program: "Eng Sci 2T7 + PEY"
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
      <GoToTop />
    </div>
  );
};

export default Team2025;
