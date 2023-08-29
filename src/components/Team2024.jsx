import React from 'react'
import { Fade } from "react-awesome-reveal";
import TeamPhotoPlaceholder from '../assets/TeamMembers/TeamPhotoPlaceholder.png'

// TEAM DIRECTORS
import DanielLaRosa from '../assets/TeamMembers/DanielLaRosa.jpeg'
import EmilyWright from '../assets/TeamMembers/EmilyWright.jpeg'
import DanielAsadi from '../assets/TeamMembers/DanielAsadi.jpeg'
import JakeSprenger from '../assets/TeamMembers/JakeSprenger.jpeg'
// DRIVERS
// import DamianSiseraDriver from '../assets/TeamMembers/Drivers/DamianSiseraDriver.jpeg'
// import AyrtonAntenucciDriver from '../assets/TeamMembers/Drivers/AyrtonAntenucciDriver.jpeg'
// import SpencerBallDriver from '../assets/TeamMembers/Drivers/SpencerBallDriver.jpeg'
// import KelvinCuiDriver from '../assets/TeamMembers/Drivers/KelvinCuiDriver.jpeg'
// MECHANICAL
import MauroDeLiberato from '../assets/TeamMembers/Mech/MauroDeLiberato.jpeg'
import MoTaban from '../assets/TeamMembers/Mech/MoTaban.jpeg'
import BatuTibet from '../assets/TeamMembers/Mech/BatuTibet.jpeg'
import PatrykAniolowski from '../assets/TeamMembers/Mech/PatrykAniolowski.jpeg'
import KelvinCao from '../assets/TeamMembers/Mech/KelvinCao.jpeg'
import HunzalaRajput from '../assets/TeamMembers/Mech/HunzalaRajput.jpeg'
import EricEmmenegger from '../assets/TeamMembers/Mech/EricEmmenegger.jpeg'
import ToluIkubaje from '../assets/TeamMembers/Mech/ToluIkubaje.jpeg'
import ZeinaShaltout from '../assets/TeamMembers/Mech/ZeinaShaltout.jpeg'
// ELECTRICAL
import KateKer from '../assets/TeamMembers/Electrical/KateKer.jpeg'
// import AsserAbdelgawad from '../assets/TeamMembers/Electrical/AsserAbdelgawad.jpeg'
import NadiaZhou from '../assets/TeamMembers/Electrical/NadiaZhou.jpeg'
// DRIVERLESS
import AlfredXue from '../assets/TeamMembers/DV/AlfredXue.jpeg'
import ThomasZeger from '../assets/TeamMembers/DV/ThomasZeger.jpeg'
import ArthurXu from '../assets/TeamMembers/DV/ArthurXu.jpeg'
import JustinLim from '../assets/TeamMembers/DV/JustinLim.jpeg'
import YoussefElhadad from '../assets/TeamMembers/DV/YoussefElhadad.jpeg'
// BUSINESS
import CaleyMcNeill from '../assets/TeamMembers/Business/CaleyMcNeill.jpeg'
import OliviaTworzyanski from '../assets/TeamMembers/Business/OliviaTworzyanski.jpeg'
import AmeliaDease from '../assets/TeamMembers/Business/AmeliaDease.jpeg'
import HalleTeh from '../assets/TeamMembers/Business/HalleTeh.jpeg'
import RobertFirsov from '../assets/TeamMembers/Business/RobertFirsov.jpeg'
import EvanTal from '../assets/TeamMembers/Business/EvanTal.jpeg'

const Team2024 = () => {
  return (
    <div className='w-full h-[100%] text-white bg-[#181818]'> 
        {/* DIRECTORS */}
        <Fade triggerOnce delay={300}>
        <p className='text-4xl font-bold flex justify-center pt-8'>Team Leadership</p>
        </Fade>
        <div className='h-full w-full about grid md:grid-cols-2 lg:grid-cols-4 px-3'>
          <div className='w-[100%] my-auto py-10'>
            <Fade cascade delay={300} damping={0.1} triggerOnce>
              <img src={DanielLaRosa} alt="team" className='teamImg my-auto mx-auto w-[90%]'/>
              <p className='personName'>Daniel LaRosa</p>
              <p className='personTitle'>Team Principal & Mechanical TD</p>
              <p className='personProgram'>Mech 2T3 + PEY</p>
            </Fade>
          </div>
          <div className='w-[100%] my-auto py-10'>
            <Fade cascade delay={300} damping={0.1} triggerOnce>
              <img src={JakeSprenger} alt="team" className='teamImg my-auto mx-auto w-[90%]'/>
              <p className='personName'>Jake Sprenger</p>
              <p className='personTitle'>Electrical Technical Director</p>
              <p className='personProgram'>ECE 2T3 + PEY</p>
            </Fade>
          </div>
          <div className='w-[100%] my-auto py-10'>
            <Fade cascade delay={300} damping={0.1} triggerOnce>
              <img src={DanielAsadi} alt="team" className='teamImg my-auto mx-auto w-[90%]'/>
              <p className='personName'>Daniel Asadi</p>
              <p className='personTitle'>Driverless Technical Director</p>
              <p className='personProgram'>Eng Sci 2T4 + PEY</p>
            </Fade>
          </div>
          <div className='w-[100%] my-auto py-10'>
            <Fade cascade delay={300} damping={0.1} triggerOnce>
              <img src={EmilyWright} alt="team" className='teamImg my-auto mx-auto w-[90%]'/>
              <p className='personName'>Emily Wright</p>
              <p className='personTitle'>Business Director</p>
              <p className='personProgram'>Management 2T5 + Co-op</p>
            </Fade>
          </div>
        </div>

        {/* DRIVERS */}
        {/* <p className='text-4xl font-bold flex justify-center pt-5'>Drivers</p>
        <div className='h-full w-full about grid md:grid-cols-2 lg:grid-cols-4 px-3'>
          <div className='w-[100%] my-auto py-10'>
            <img src={DamianSiseraDriver} alt="team" className='my-auto mx-auto w-[90%]'/>
            <p className='personName'>Damian Sisera</p>
            <p className='personProgram'>Mech 2T2 + PEY</p>
          </div>
          <div className='w-[100%] my-auto py-10'>
            <img src={AyrtonAntenucciDriver} alt="team" className='my-auto mx-auto w-[90%]'/>
            <p className='personName'>Ayrton Antenucci</p>
            <p className='personProgram'>ECE 2T4 + PEY</p>
          </div>
          <div className='w-[100%] my-auto py-10'>
            <img src={SpencerBallDriver} alt="team" className='my-auto mx-auto w-[90%]'/>
            <p className='personName'>Spencer Ball</p>
            <p className='personProgram'>ECE 2T3 + PEY</p>
          </div>
          <div className='w-[100%] my-auto py-10'>
            <img src={KelvinCuiDriver} alt="team" className='my-auto mx-auto w-[90%]'/>
            <p className='personName'>Kelvin Cui</p>
            <p className='personProgram'>ECE 2T3 + PEY</p>
          </div>
        </div> */}

        {/* MECHANICAL LEADS */}
        <Fade triggerOnce delay={300}>
        <p className='text-4xl font-bold flex justify-center pt-5'>Mechanical Leads</p>
        </Fade>
        <div className='h-full w-full about grid md:grid-cols-2 lg:grid-cols-5 px-3'>
          <div className='w-[100%] my-auto py-10'>
            <Fade cascade delay={300} damping={0.1} triggerOnce>
              <img src={TeamPhotoPlaceholder} alt="team" className='my-auto mx-auto w-[90%]'/>
              <p className='personName'>Jasmine Wu</p>
              <p className='personTitle'>Aerodynamics Lead</p>
              <p className='personProgram'>Eng Sci 2T5 + PEY</p>
            </Fade>
          </div>
          <div className='w-[100%] my-auto py-10'>
            <Fade cascade delay={300} damping={0.1} triggerOnce>
              <img src={MauroDeLiberato} alt="team" className='my-auto mx-auto w-[90%]'/>
              <p className='personName'>Mauro De Liberato</p>
              <p className='personTitle'>Chassis Lead</p>
              <p className='personProgram'>Mech 2T5 + PEY</p>
            </Fade>
          </div>
          <div className='w-[100%] my-auto py-10'>
            <Fade cascade delay={300} damping={0.1} triggerOnce>
              <img src={ZeinaShaltout} alt="team" className='my-auto mx-auto w-[90%]'/>
              <p className='personName'>Zeina Shaltout</p>
              <p className='personTitle'>Ergonomics Lead</p>
              <p className='personProgram'>Indy 2T5 + PEY</p>
            </Fade>
          </div>
          <div className='w-[100%] my-auto py-10'>
            <Fade cascade delay={300} damping={0.1} triggerOnce>
              <img src={MoTaban} alt="team" className='my-auto mx-auto w-[90%]'/>
              <p className='personName'>Mo Taban</p>
              <p className='personTitle'>Brakes Lead</p>
              <p className='personProgram'>Mech 2T5 + PEY</p>
            </Fade>
          </div>
          <div className='w-[100%] my-auto py-10'>
            <Fade cascade delay={300} damping={0.1} triggerOnce>
              <img src={BatuTibet} alt="team" className='my-auto mx-auto w-[90%]'/>
              <p className='personName'>Batu Tibet</p>
              <p className='personTitle'>Composites Lead</p>
              <p className='personProgram'>Mech 2T5 + PEY</p>
            </Fade>
          </div>
          <div className='w-[100%] my-auto py-10'>
            <Fade cascade delay={300} damping={0.1} triggerOnce>
              <img src={PatrykAniolowski} alt="team" className='my-auto mx-auto w-[90%]'/>
              <p className='personName'>Patryk Aniolowski</p>
              <p className='personTitle'>Suspension Lead</p>
              <p className='personProgram'>Mech 2T5 + PEY</p>
            </Fade>
          </div>
          <div className='w-[100%] my-auto py-10'>
            <Fade cascade delay={300} damping={0.1} triggerOnce>
              <img src={KelvinCao} alt="team" className='my-auto mx-auto w-[90%]'/>
              <p className='personName'>Kelvin Cao</p>
              <p className='personTitle'>Drivetrain Lead</p>
              <p className='personProgram'>Mech 2T5 + PEY</p>
            </Fade>
          </div>
          <div className='w-[100%] my-auto py-10'>
            <Fade cascade delay={300} damping={0.1} triggerOnce>
              <img src={HunzalaRajput} alt="team" className='my-auto mx-auto w-[90%]'/>
              <p className='personName'>Hunzala Rajput</p>
              <p className='personTitle'>Steering Lead</p>
              <p className='personProgram'>Mech 2T4 + PEY</p>
            </Fade>
          </div>
          <div className='w-[100%] my-auto py-10'>
            <Fade cascade delay={300} damping={0.1} triggerOnce>
              <img src={EricEmmenegger} alt="team" className='my-auto mx-auto w-[90%]'/>
              <p className='personName'>Eric Emmenegger</p>
              <p className='personTitle'>Powertrain Mech Lead</p>
              <p className='personProgram'>Mech 2T5 + PEY</p>
            </Fade>
          </div>
          <div className='w-[100%] pt-12.5 my-auto py-10'>
            <Fade cascade delay={300} damping={0.1} triggerOnce>
              <img src={ToluIkubaje} alt="team" className='my-auto mx-auto w-[90%]'/>
              <p className='personName'>Tolu Ikubaje</p>
              <p className='personTitle'>DV Mechatronics Lead</p>
              <p className='personProgram'>Mech 2T5 + PEY</p>
            </Fade>
          </div>
        </div>

        {/* ELECTRICAL LEADS */}
        <Fade triggerOnce delay={300}>
          <p className='text-4xl font-bold flex justify-center pt-5'>Electrical Leads</p>
        </Fade>
        <div className='h-full w-full about grid md:grid-cols-2 lg:grid-cols-4 px-3'>
          <div className='w-[100%] my-auto py-10'>
            <Fade cascade delay={300} damping={0.1} triggerOnce>
              <img src={TeamPhotoPlaceholder} alt="team" className='my-auto mx-auto w-[90%]'/>
              <p className='personName'>Angus Zhang</p>
              <p className='personTitle'>Powertrain Lead</p>
              <p className='personProgram'>ECE 2T6 + PEY</p>
            </Fade>
          </div>
          <div className='w-[100%] my-auto py-10'>
            <Fade cascade delay={300} damping={0.1} triggerOnce>
              <img src={KateKer} alt="team" className='my-auto mx-auto w-[90%]'/>
              <p className='personName'>Kate Ker</p>
              <p className='personTitle'>Harness Lead</p>
              <p className='personProgram'>ECE 2T6 + PEY</p>
            </Fade>
          </div>
          <div className='w-[100%] my-auto py-10'>
            <Fade cascade delay={300} damping={0.1} triggerOnce>
              <img src={TeamPhotoPlaceholder} alt="team" className='my-auto mx-auto w-[90%]'/>
              <p className='personName'>Nicholas Burley</p>
              <p className='personTitle'>Controllers Lead</p>
              <p className='personProgram'>ECE 2T6 + PEY</p>
            </Fade>
          </div>
          <div className='w-[100%] my-auto py-10'>
            <Fade cascade delay={300} damping={0.1} triggerOnce>
              <img src={NadiaZhou} alt="team" className='my-auto mx-auto w-[90%]'/>
              <p className='personName'>Nadia Zhou</p>
              <p className='personTitle'>Firmware Lead</p>
              <p className='personProgram'>ECE 2T6 + PEY</p>
            </Fade>
          </div>
        </div>

        {/* DRIVERLESS LEADS */}
        <Fade triggerOnce delay={300}>
          <p className='text-4xl font-bold flex justify-center pt-5'>Driverless Leads</p>
        </Fade>
        <div className='h-full w-full about grid md:grid-cols-2 lg:grid-cols-5 px-3'>
          <div className='w-[100%] my-auto py-10'>
            <Fade cascade delay={300} damping={0.1} triggerOnce>
              <img src={AlfredXue} alt="team" className='my-auto mx-auto w-[90%]'/>
              <p className='personName'>Alfred Xue</p>
              <p className='personTitle'>Perception Co-Lead</p>
              <p className='personProgram'>Eng Sci 2T5 + PEY</p>
            </Fade>
          </div>
          <div className='w-[100%] my-auto py-10'>
            <Fade cascade delay={300} damping={0.1} triggerOnce>
              <img src={ThomasZeger} alt="team" className='my-auto mx-auto w-[90%]'/>
              <p className='personName'>Thomas Zeger</p>
              <p className='personTitle'>Perception Co-Lead</p>
              <p className='personProgram'>CE 2T4 + PEY</p>
            </Fade>
          </div>
          <div className='w-[100%] my-auto py-10'>
            <Fade cascade delay={300} damping={0.1} triggerOnce>
              <img src={ArthurXu} alt="team" className='my-auto mx-auto w-[90%]'/>
              <p className='personName'>Arthur Xu</p>
              <p className='personTitle'>Estimation Lead</p>
              <p className='personProgram'>ECE 2T3 + PEY</p>
            </Fade>
          </div>
          <div className='w-[100%] my-auto py-10'>
            <Fade cascade delay={300} damping={0.1} triggerOnce>
              <img src={JustinLim} alt="team" className='my-auto mx-auto w-[90%]'/>
              <p className='personName'>Justin Lim</p>
              <p className='personTitle'>Navigation Lead</p>
              <p className='personProgram'>Eng Sci 2T6 + PEY</p>
            </Fade>
          </div>
          <div className='w-[100%] my-auto py-10'>
            <Fade cascade delay={300} damping={0.1} triggerOnce>
              <img src={YoussefElhadad} alt="team" className='my-auto mx-auto w-[90%]'/>
              <p className='personName'>Youssef Elhadad</p>
              <p className='personTitle'>Controls Lead</p>
              <p className='personProgram'>CE 2T5 + PEY</p>
            </Fade>
          </div>
        </div>

        {/* BUSINESS LEADS */}
        <Fade triggerOnce delay={300}>
          <p className='text-4xl font-bold flex justify-center pt-5'>Business Leads</p>
        </Fade>
        <div className='h-full w-full about grid md:grid-cols-3 lg:grid-cols-4 px-3'>
          <div className='w-[100%] my-auto py-10'>
            <Fade cascade delay={300} damping={0.1} triggerOnce>
              <img src={CaleyMcNeill} alt="team" className='my-auto mx-auto w-[90%]'/>
              <p className='personName'>Caley McNeill</p>
              <p className='personTitle'>Events Co-Lead</p>
              <p className='personProgram'>Indy 2T5 + PEY</p>
            </Fade>
          </div>
          <div className='w-[100%] my-auto py-10'>
            <Fade cascade delay={300} damping={0.1} triggerOnce>
              <img src={TeamPhotoPlaceholder} alt="team" className='my-auto mx-auto w-[90%]'/>
              <p className='personName'>Rebecca Schultz</p>
              <p className='personTitle'>Events Co-Lead</p>
              <p className='personProgram'>Rotman 2T4</p>
            </Fade>
          </div>
          <div className='w-[100%] my-auto py-10'>
            <Fade cascade delay={300} damping={0.1} triggerOnce>
              <img src={OliviaTworzyanski} alt="team" className='my-auto mx-auto w-[90%]'/>
              <p className='personName'>Olivia Tworzyanski</p>
              <p className='personTitle'>Marketing Co-Lead</p>
              <p className='personProgram'>Kinesiology 2T3</p>
            </Fade>
          </div>
          <div className='w-[100%] my-auto py-10'>
            <Fade cascade delay={300} damping={0.1} triggerOnce>
              <img src={AmeliaDease} alt="team" className='my-auto mx-auto w-[90%]'/>
              <p className='personName'>Amelia Dease</p>
              <p className='personTitle'>Marketing Co-Lead</p>
              <p className='personProgram'>Political Science 2T6</p>
            </Fade>
          </div>
          <div className='w-[100%] my-auto py-10'>
            <Fade cascade delay={300} damping={0.1} triggerOnce>
              <img src={EvanTal} alt="team" className='my-auto mx-auto w-[90%]'/>
              <p className='personName'>Evan Tal</p>
              <p className='personTitle'>External Relations Lead</p>
              <p className='personProgram'>Rotman 2T5</p>
            </Fade>
          </div>
          <div className='w-[100%] my-auto py-10'>
            <Fade cascade delay={300} damping={0.1} triggerOnce>
              <img src={HalleTeh} alt="team" className='my-auto mx-auto w-[90%]'/>
              <p className='personName'>Halle Teh</p>
              <p className='personTitle'>Recruitment Co-Lead</p>
              <p className='personProgram'>ECE 2T6 + PEY</p>
            </Fade>
          </div>
          <div className='w-[100%] my-auto py-10'>
            <Fade cascade delay={300} damping={0.1} triggerOnce>
              <img src={TeamPhotoPlaceholder} alt="team" className='my-auto mx-auto w-[90%]'/>
              <p className='personName'>Nicholas Burley</p>
              <p className='personTitle'>Recruitment Co-Lead</p>
              <p className='personProgram'>ECE 2T6 + PEY</p>
            </Fade>
          </div>
          <div className='w-[100%] my-auto py-10'>
            <Fade cascade delay={300} damping={0.1} triggerOnce>
              <img src={RobertFirsov} alt="team" className='my-auto mx-auto w-[90%]'/>
              <p className='personName'>Robert Firsov</p>
              <p className='personTitle'>Recruitment Co-Lead</p>
              <p className='personProgram'>ECE 2T6 + PEY</p>
            </Fade>
          </div>
        </div>
    </div>
  )
}

export default Team2024
