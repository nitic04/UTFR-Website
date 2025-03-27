import React from "react";
import { Fade } from "react-awesome-reveal";
import GoToTop from "./GoToTop";
import Czech_2 from "../assets/HistoricCarPhotos/UT23/2023-Czech-2.jpeg";
import TeamImage from "../assets/2024/UnveilingTeamPhoto.jpg";
import TeamMemberCard from "./TeamMemberCard";

const prefix = "https://ik.imagekit.io/18gwys9x0/TeamMembers/UTFR_2025_Team_Headshots/"
const teamLeadership = [
  {
    name: "Ayrton Antenucci",
    imageUrl: prefix + "Ayrton_Antenucci.JPG",
    linkedinUrl: "https://www.linkedin.com/in/ayrton-antenucci",
    title: "Team Principal",
    program: "EE 2T4 + PEY"
  },
  {
    name: "Winston Young",
    imageUrl: prefix + "Winston_Young.JPG",
    linkedinUrl: "https://www.linkedin.com/in/winston-young",
    title: "Mechanical Technical Director",
    program: "Eng Sci Aero 2T6 + PEY"
  },
  {
    name: "Nicholas Burley",
    imageUrl: prefix + "Nicholas_Burley.jpg",
    linkedinUrl: "",
    title: "Electrical Technical Director",
    program: "ECE 2T6 + PEY"
  },
  {
    name: "Youssef Elhadad",
    imageUrl: prefix + "Youssef_Elhadad.jpg",
    linkedinUrl: "",
    title: "Driverless Technical Director",
    program: "CE 2T5 + PEY"
  },
  {
    name: "Evan Tal",
    imageUrl: prefix + "Evan_Tal.jpg",
    linkedinUrl: "https://www.linkedin.com/in/evan-tal/",
    title: "Business Director",
    program: "Rotman 2T5"
  },
  {
    name: "Nam Nguyen",
    imageUrl: prefix + "Nam_Nguyen.jpg",
    linkedinUrl: "www.linkedin.com/in/nam-nguyen-b366731b0",
    title: "Chief Race Engineer",
    program: "Mech 2T6 + PEY"
  },
  {
    name: "Victoria Moore",
    imageUrl: prefix + "Victoria_Moore.JPG",
    linkedinUrl: "https://www.linkedin.com/in/victoria-moore-6008a1293/",
    title: "Shop Manager",
    program: "Physics & Math 2T6"
  },
]

const mechLeads = [
  {
    name: "Eman Daudpota",
    imageUrl: prefix + "UTFR_Placeholder.png",
    linkedinUrl: "https://www.linkedin.com/in/eman-daudpota/",
    title: "Aerodynamics Lead",
    program: "Mech 2T7 + PEY"
  },
  {
    name: "Juan Moon",
    imageUrl: prefix + "Juan_Moon.jpg",
    linkedinUrl: "https://www.linkedin.com/in/juan-moon",
    title: "Chassis Lead",
    program: "Mech 2T6 + PEY"
  },
  {
    name: "Victoria Moore",
    imageUrl: prefix + "Victoria_Moore.JPG",
    linkedinUrl: "https://www.linkedin.com/in/victoria-moore-6008a1293/",
    title: "Ergonomics Lead",
    program: "Physics & Math 2T6"
  },
  {
    name: "Bryan Vu",
    imageUrl: prefix + "Bryan_Vu.JPG",
    linkedinUrl: "https://www.linkedin.com/in/bryan-vu/",
    title: "Brakes Lead",
    program: "Mech 2T6 + PEY"
  },
  {
    name: "Niemo Fang",
    imageUrl: prefix + "Niemo_Fang.jpg",
    linkedinUrl: "https://www.linkedin.com/in/niemo-fang",
    title: "Composites Lead",
    program: "Mech 2T6 + PEY"
  },
  {
    name: "Mackenzie Powell",
    imageUrl: prefix + "Mackenzie_Powell.jpg",
    linkedinUrl: "https://www.linkedin.com/in/mackenzie-powell04/",
    title: "Suspension Lead",
    program: "Mech 2T6 + PEY"
  },
  {
    name: "Adam Abdulahad",
    imageUrl: prefix + "Adam_Abdulahad.JPG",
    linkedinUrl: "",
    title: "Drivetrain Lead",
    program: "Eng Sci Robo 2T6 + PEY"
  },
  {
    name: "Francesca Fortino",
    imageUrl: prefix + "Francesca_Fortino.JPG",
    linkedinUrl: "https://www.linkedin.com/in/francesca-fortino-867511202/",
    title: "Steering Lead",
    program: "Mech 2T6 + PEY"
  },
  {
    name: "Naomi Johnson",
    imageUrl: prefix + "Naomi_Johnson.jpg",
    linkedinUrl: "https://ca.linkedin.com/in/naomi-johnson-547254206",
    title: "Powertrain Mechanical Lead",
    program: "Mech 2T4 + PEY"
  },
  {
    name: "Ajay Anand",
    imageUrl: prefix + "Ajay_Anand.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/ajay-b-anand",
    title: "Vehicle Dynamics Lead",
    program: "Mech 2T4 + PEY"
  },
]

const elecLeads = [
  {
    name: "Matthew Lee",
    imageUrl: prefix + "Matthew_Lee.jpg",
    linkedinUrl: "http://www.linkedin.com/in/mathlee",
    title: "Powertrain Lead",
    program: "ECE 2T6 + PEY"
  },
  {
    name: "Chen Zhang",
    imageUrl: prefix + "Chen_Zhang.JPG",
    linkedinUrl: "",
    title: "LV Architecture Lead",
    program: "Eng Sci 2T6 + PEY"
  },
  {
    name: "Robert Firsov",
    imageUrl: prefix + "Robert_Firsov.jpg",
    linkedinUrl: "https://www.linkedin.com/in/robert-firsov/",
    title: "Electronics Lead",
    program: "ECE 2T6 + PEY"
  },
  {
    name: "Nadia Zhou",
    imageUrl: prefix + "Nadia_Zhou.jpg",
    linkedinUrl: "https://www.linkedin.com/in/nadia-zhou/",
    title: "Firmware Lead",
    program: "ECE 2T6 + PEY"
  },
]

const dvLeads = [
  {
    name: "Alex Cho",
    imageUrl: prefix + "Alex_Cho.jpg",
    linkedinUrl: "https://www.linkedin.com/in/alex-cho-738056154/",
    title: "Perception Lead",
    program: "Eng Sci Robotics 2T6 + PEY"
  },
  {
    name: "Halle Teh",
    imageUrl: prefix + "Halle_Teh.jpg?updatedAt=1732892071755",
    linkedinUrl: "https://www.linkedin.com/in/halle-teh",
    title: "Deep Learning Lead",
    program: "Indy 2T6 + PEY"
  },
  {
    name: "Yulu Jiang",
    imageUrl: prefix + "Yulu_Jiang.JPG",
    linkedinUrl: "https://www.linkedin.com/in/yul-jiang/",
    title: "Mapping Lead",
    program: "ECE 2T6 + PEY"
  },
  {
    name: "Richard Li",
    imageUrl: prefix + "UTFR_Placeholder.png",
    linkedinUrl: "",
    title: "Navigation Lead",
    program: "ECE 2T6 + PEY"
  },
  {
    name: "Ayaan Pathan",
    imageUrl: prefix + "Ayaan_Pathan.jpg",
    linkedinUrl: "",
    title: "Controls Lead",
    program: "ECE 2T6 + PEY"
  },
  {
    name: "Allan Zhou",
    imageUrl: prefix + "Allan_Zhou.JPG",
    linkedinUrl: "https://www.linkedin.com/in/allanlzee/",
    title: "DV Integration Co-Lead",
    program: "Eng Sci 2T7 + PEY"
  },
  {
    name: "Justin Lim",
    imageUrl: prefix + "Justin_Lim.jpg",
    linkedinUrl: "",
    title: "DV Integration Co-Lead",
    program: "Eng Sci 2T6 + PEY"
  },
]

const businessLeads = [
  {
    name: "Alicia Kho",
    imageUrl: prefix + "Alicia_Kho.JPG",
    linkedinUrl: "www.linkedin.com/in/alicia-kho-3a9b48261",
    title: "Events Lead",
    program: "Indy 2T6 + PEY"
  },
  {
    name: "Cammyn Lim",
    imageUrl: prefix + "Cammyn_Lim.JPG",
    linkedinUrl: "https://www.linkedin.com/in/cammyn-lim/",
    title: "Marketing Lead",
    program: "Rotman Commerce 2T6"
  },
  {
    name: "Amelia Dease",
    imageUrl: prefix + "Amelia_Dease.jpg",
    linkedinUrl: "",
    title: "Graphic Design Lead",
    program: "Political Science 2T6"
  },
  {
    name: "Aleksander Kiudorf",
    imageUrl: prefix + "Aleks_Kiudorf.JPG",
    linkedinUrl: "",
    title: "External Relations Lead",
    program: "Rotman Management 2T6"
  },
  {
    name: "Krisha Kalsi",
    imageUrl: prefix + "Krisha_Kalsi.JPG",
    linkedinUrl: "https://www.linkedin.com/in/krisha-kalsi/",
    title: "Recruitment Co-Lead",
    program: "Comp Sci 2T6 + PEY"
  },
  {
    name: "Clara Coukell",
    imageUrl: prefix + "Clara_Coukell.JPG",
    linkedinUrl: "https://www.linkedin.com/in/clara-coukell/",
    title: "Recruitment Co-Lead",
    program: "Mech 2T7 + PEY"
  },
  {
    name: "Zoe Jenkin",
    imageUrl: prefix + "Zoe_Jenkin.JPG",
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
