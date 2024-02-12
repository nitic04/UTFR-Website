import React from 'react'
// TEAM DIRECTORS
import DanielWing from '../assets/TeamMembers/2023/DanielWing.jpeg'
import EmilyWright from '../assets/TeamMembers/EmilyWright.jpg'
import SaiyamPatel from '../assets/TeamMembers/2023/SaiyamPatel.jpeg'
import KelvinCui from '../assets/TeamMembers/2023/KelvinCui.jpeg'
import DamianSisera from '../assets/TeamMembers/2023/DamianSisera.jpeg'

// DRIVERS
import DamianSiseraDriver from '../assets/TeamMembers/Drivers/DamianSiseraDriver.jpeg'
import AyrtonAntenucciDriver from '../assets/TeamMembers/Drivers/AyrtonAntenucciDriver.jpeg'
import SpencerBallDriver from '../assets/TeamMembers/Drivers/SpencerBallDriver.jpeg'
import KelvinCuiDriver from '../assets/TeamMembers/Drivers/KelvinCuiDriver.jpeg'

// MECHANICAL
import AjayAnand from '../assets/TeamMembers/2023/AjayAnand.jpeg'
import KelvinCao from '../assets/TeamMembers/Mech/KelvinCao.jpg'
// import AsalGhorbani from '../assets/TeamMembers/2023/AsalGhorbani.jpeg'
// import CrystalJin from '../assets/TeamMembers/2023/CrystalJin.jpeg'
// import ChristianStalteri from '../assets/TeamMembers/2023/ChristianStalteri.jpeg'
// import YixinZhang from '../assets/TeamMembers/2023/YixinZhang.jpeg'
import MoTaban from '../assets/TeamMembers/Mech/MoTaban.jpg'
import BatuTibet from '../assets/TeamMembers/Mech/BatuTibet.jpg'
// import BaqirHussain from '../assets/TeamMembers/2023/BaqirHussain.jpeg'
import HunzalaRajput from '../assets/TeamMembers/Mech/HunzalaRajput.jpg'
// import CliveFellows from '../assets/TeamMembers/2023/CliveFellows.jpeg'
// import MackenziePowell from '../assets/TeamMembers/Mech/MackenziePowell.jpeg'
// import WinstonYoung from '../assets/TeamMembers/Mech/WinstonYoung.jpeg'
// import NasoeTalash from '../assets/TeamMembers/Mech/NasoeTalash.jpeg'
// import ZeinaShaltout from '../assets/TeamMembers/Mech/ZeinaShaltout.jpeg'
import PatrykAniolowski from '../assets/TeamMembers/Mech/PatrykAniolowski.jpg'
// import JasmineWu from '../assets/TeamMembers/Mech/JasmineWu.jpeg'
// import SamBahrami from '../assets/TeamMembers/2023/SamBahrami.jpeg'

// ELECTRICAL
// import AyrtonAntennuci from '../assets/TeamMembers/2023/AyrtonAntennuci.jpeg'
// import SpencerBall from '../assets/TeamMembers/2023/SpencerBall.jpeg'
// import AndrewChen from '../assets/TeamMembers/2023/AndrewChen.jpeg'
import EricEmmenegger from '../assets/TeamMembers/Mech/EricEmmenegger.jpg'
// import BenjaminLiang from '../assets/TeamMembers/2023/BenjaminLiang.jpeg'
import AsserAbdelgawad from '../assets/TeamMembers/Electrical/AsserAbdelgawad.jpeg'
// import AdamMcDonald from '../assets/TeamMembers/2023/AdamMcDonald.jpeg'
// import RobertPicaru from '../assets/TeamMembers/2023/RobertPicaru.jpeg'
// import NivethaSathish from '../assets/TeamMembers/2023/NivethaSathish.jpeg'
import KateKer from '../assets/TeamMembers/Electrical/KateKer.jpg'
import NadiaZhou from '../assets/TeamMembers/Electrical/NadiaZhou.jpg'

// DRIVERLESS
// import AlyssaWing from '../assets/TeamMembers/2023/AlyssaWing.jpeg'
// import DanielAsadi from '../assets/TeamMembers/DanielAsadi.jpeg'
import YoussefElhadad from '../assets/TeamMembers/DV/YoussefElhadad.jpeg'
import MauroDeLiberato from '../assets/TeamMembers/Mech/MauroDeLiberato.jpg'
import AlfredXue from '../assets/TeamMembers/DV/AlfredXue.jpg'
// import MustafaKhan from '../assets/TeamMembers/2023/MustafaKhan.jpeg'
// import JackKaunismaa from '../assets/TeamMembers/2023/JackKaunismaa.jpeg'
import ThomasZeger from '../assets/TeamMembers/2023/ThomasZeger.jpeg'
// import DylanOToole from '../assets/TeamMembers/2023/DylanOToole.jpeg'
import ToluIkubaje from '../assets/TeamMembers/Mech/ToluIkubaje.jpg'
import HalleTeh from '../assets/TeamMembers/Business/HalleTeh.jpg'
// import RowanHoneywell from '../assets/TeamMembers/2023/RowanHoneywell.jpeg'
import JustinLim from '../assets/TeamMembers/DV/AlfredXue.jpg'

// BUSINESS
import CaleyMcNeill from '../assets/TeamMembers/Business/CaleyMcNeill.jpg'
import OliviaTworzyanski from '../assets/TeamMembers/Business/OliviaTworzyanski.jpg'
import AmeliaDease from '../assets/TeamMembers/Business/AmeliaDease.jpg'
// import RebeccaSchultz from '../assets/TeamMembers/Business/RebeccaSchultz.jpeg'
// import EvanTal from '../assets/TeamMembers/Business/EvanTal.jpeg'

// PEY
// import TrevorFoote from '../assets/TeamMembers/2023/TrevorFoote.jpeg'
import DanielLaRosa from '../assets/TeamMembers/DanielLaRosa.jpg'
// import JakeSprenger from '../assets/TeamMembers/2023/JakeSprenger.jpeg'
// import KevinZhang from '../assets/TeamMembers/2023/KevinZhang.jpeg'

const Team2023 = () => {
  return (
<div className='w-full h-[100%] text-white bg-[#181818]'> 
        {/* DIRECTORS */}
        <p className='text-4xl font-bold flex justify-center pt-8'>Team Leadership</p>
        <div className='h-[full] w-full about grid md:grid-cols-2 lg:grid-cols-5 px-3'>
          <div className='w-[100%] my-auto py-10'>
            <img src={DanielWing} alt="team" className='my-auto mx-auto w-[90%]'/>
            <p className='personName'>Daniel Wing</p>
            <p className='personTitle'>Team Captain</p>
          </div>
          <div className='w-[100%] my-auto py-10'>
            <img src={SaiyamPatel} alt="team" className='my-auto mx-auto w-[90%]'/>
            <p className='personName'>Saiyam Patel</p>
            <p className='personTitle'>Electrical Technical Director</p>
          </div>
          <div className='w-[100%] my-auto py-10'>
            <img src={DamianSisera} alt="team" className='my-auto mx-auto w-[90%]'/>
            <p className='personName'>Damian Sisera</p>
            <p className='personTitle'>Mechanical Technical Director</p>
          </div>
          <div className='w-[100%] my-auto py-10'>
            <img src={KelvinCui} alt="team" className='my-auto mx-auto w-[90%]'/>
            <p className='personName'>Kelvin Cui</p>
            <p className='personTitle'>Driverless Technical Director</p>
          </div>
          <div className='w-[100%] my-auto py-10'>
            <img src={EmilyWright} alt="team" className='my-auto mx-auto w-[90%]'/>
            <p className='personName'>Emily Wright</p>
            <p className='personTitle'>Business Director</p>
          </div>
        </div>

        {/* DRIVERS */}
        <p className='text-4xl font-bold flex justify-center pt-5'>Drivers</p>
        <div className='h-full w-full about grid md:grid-cols-2 lg:grid-cols-4 px-3'>
          <div className='w-[100%] my-auto py-10'>
            <img src={DamianSiseraDriver} alt="team" className='my-auto mx-auto w-[90%]'/>
            <p className='personName'>Damian Sisera</p>
          </div>
          <div className='w-[100%] my-auto py-10'>
            <img src={AyrtonAntenucciDriver} alt="team" className='my-auto mx-auto w-[90%]'/>
            <p className='personName'>Ayrton Antenucci</p>
          </div>
          <div className='w-[100%] my-auto py-10'>
            <img src={SpencerBallDriver} alt="team" className='my-auto mx-auto w-[90%]'/>
            <p className='personName'>Spencer Ball</p>
          </div>
          <div className='w-[100%] my-auto py-10'>
            <img src={KelvinCuiDriver} alt="team" className='my-auto mx-auto w-[90%]'/>
            <p className='personName'>Kelvin Cui</p>
          </div>
        </div>

        {/* MECHANICAL LEADS */}
        <p className='text-4xl font-bold flex justify-center pt-5'>Mechanical Leads & Senior Members</p>
        <div className='h-full w-full about grid md:grid-cols-2 lg:grid-cols-5 px-3'>
          <div className='w-[100%] my-auto py-10'>
            <img src={AjayAnand} alt="team" className='my-auto mx-auto w-[90%]'/>
            <p className='personName'>Ajay Anand</p>
            <p className='personTitle'>Steering Systems Lead</p>
          </div>
          <div className='w-[100%] my-auto py-10'>
            <img src={MauroDeLiberato} alt="team" className='my-auto mx-auto w-[90%]'/>
            <p className='personName'>Mauro De Liberato</p>
            <p className='personTitle'>Chassis Lead</p>
          </div>
          <div className='w-[100%] my-auto py-10'>
            <img src={DanielLaRosa} alt="team" className='my-auto mx-auto w-[90%]'/>
            <p className='personName'>Zeina Shaltout</p>
            <p className='personTitle'>Ergonomics Lead</p>
          </div>
          <div className='w-[100%] my-auto py-10'>
            <img src={MoTaban} alt="team" className='my-auto mx-auto w-[90%]'/>
            <p className='personName'>Mo Taban</p>
            <p className='personTitle'>Brakes Lead</p>
          </div>
          <div className='w-[100%] my-auto py-10'>
            <img src={BatuTibet} alt="team" className='my-auto mx-auto w-[90%]'/>
            <p className='personName'>Batu Tibet</p>
            <p className='personTitle'>Composites Lead</p>
          </div>
          <div className='w-[100%] my-auto py-10'>
            <img src={PatrykAniolowski} alt="team" className='my-auto mx-auto w-[90%]'/>
            <p className='personName'>Patryk Aniolowski</p>
            <p className='personTitle'>Suspension Lead</p>
          </div>
          <div className='w-[100%] my-auto py-10'>
            <img src={KelvinCao} alt="team" className='my-auto mx-auto w-[90%]'/>
            <p className='personName'>Kelvin Cao</p>
            <p className='personTitle'>Drivetrain Lead</p>
          </div>
          <div className='w-[100%] my-auto py-10'>
            <img src={HunzalaRajput} alt="team" className='my-auto mx-auto w-[90%]'/>
            <p className='personName'>Hunzala Rajput</p>
            <p className='personTitle'>Steering Lead</p>
          </div>
          <div className='w-[100%] my-auto py-10'>
            <img src={EricEmmenegger} alt="team" className='my-auto mx-auto w-[90%]'/>
            <p className='personName'>Eric Emmenegger</p>
            <p className='personTitle'>Powertrain Mech Lead</p>
          </div>
          <div className='w-[100%] pt-12.5 my-auto py-10'>
            <img src={ToluIkubaje} alt="team" className='my-auto mx-auto w-[90%]'/>
            <p className='personName'>Tolu Ikubaje</p>
            <p className='personTitle'>DV Mechatronics Lead</p>
          </div>
        </div>

        {/* ELECTRICAL LEADS */}
        <p className='text-4xl font-bold flex justify-center pt-5'>Electrical Leads</p>
        <div className='h-full w-full about grid md:grid-cols-2 lg:grid-cols-4 px-3'>
          <div className='w-[100%] my-auto py-10'>
            <img src={DanielLaRosa} alt="team" className='my-auto mx-auto w-[90%]'/>
            <p className='personName'>Angus Zhang</p>
            <p className='personTitle'>Powertrain Lead</p>
          </div>
          <div className='w-[100%] my-auto py-10'>
            <img src={KateKer} alt="team" className='my-auto mx-auto w-[90%]'/>
            <p className='personName'>Kate Ker</p>
            <p className='personTitle'>Harness Lead</p>
          </div>
          <div className='w-[100%] my-auto py-10'>
            <img src={AsserAbdelgawad} alt="team" className='my-auto mx-auto w-[90%]'/>
            <p className='personName'>Asser Abdelgawad</p>
            <p className='personTitle'>Controller Lead</p>
          </div>
          <div className='w-[100%] my-auto py-10'>
            <img src={NadiaZhou} alt="team" className='my-auto mx-auto w-[90%]'/>
            <p className='personName'>Nadia Zhou</p>
            <p className='personTitle'>Firmware Lead</p>
          </div>
        </div>

        {/* DRIVERLESS LEADS */}
        <p className='text-4xl font-bold flex justify-center pt-5'>Driverless Leads</p>
        <div className='h-full w-full about grid md:grid-cols-2 lg:grid-cols-5 px-3'>
          <div className='w-[100%] my-auto py-10'>
            <img src={AlfredXue} alt="team" className='my-auto mx-auto w-[90%]'/>
            <p className='personName'>Alfred Xue</p>
            <p className='personTitle'>Perception Co-Lead</p>
          </div>
          <div className='w-[100%] my-auto py-10'>
            <img src={ThomasZeger} alt="team" className='my-auto mx-auto w-[90%]'/>
            <p className='personName'>Thomas Zeger</p>
            <p className='personTitle'>Perception Co-Lead</p>
          </div>
          <div className='w-[100%] my-auto py-10'>
            <img src={JustinLim} alt="team" className='my-auto mx-auto w-[90%]'/>
            <p className='personName'>Justin Lim</p>
            <p className='personTitle'>Navigation Lead</p>
          </div>
          <div className='w-[100%] my-auto py-10'>
            <img src={YoussefElhadad} alt="team" className='my-auto mx-auto w-[90%]'/>
            <p className='personName'>Youssef Elhadad</p>
            <p className='personTitle'>Controls Lead</p>
          </div>
        </div>

        {/* BUSINESS LEADS */}
        <p className='text-4xl font-bold flex justify-center pt-5'>Business Leads</p>
        <div className='h-full w-full about grid md:grid-cols-3 lg:grid-cols-4 px-3'>
          <div className='w-[100%] my-auto py-10'>
            <img src={CaleyMcNeill} alt="team" className='my-auto mx-auto w-[90%]'/>
            <p className='personName'>Caley McNeill</p>
            <p className='personTitle'>Events Co-Lead</p>
          </div>
          <div className='w-[100%] my-auto py-10'>
            <img src={DanielLaRosa} alt="team" className='my-auto mx-auto w-[90%]'/>
            <p className='personName'>Rebecca Schultz</p>
            <p className='personTitle'>Events Co-Lead</p>
          </div>
          <div className='w-[100%] my-auto py-10'>
            <img src={OliviaTworzyanski} alt="team" className='my-auto mx-auto w-[90%]'/>
            <p className='personName'>Olivia Tworzyanski</p>
            <p className='personTitle'>Marketing Co-Lead</p>
          </div>
          <div className='w-[100%] my-auto py-10'>
            <img src={AmeliaDease} alt="team" className='my-auto mx-auto w-[90%]'/>
            <p className='personName'>Amelia Dease</p>
            <p className='personTitle'>Marketing Co-Lead</p>
          </div>
          <div className='w-[100%] my-auto py-10'>
            <img src={DanielLaRosa} alt="team" className='my-auto mx-auto w-[90%]'/>
            <p className='personName'>Evan Tal</p>
            <p className='personTitle'>Outreach Lead</p>
          </div>
          <div className='w-[100%] my-auto py-10'>
            <img src={HalleTeh} alt="team" className='my-auto mx-auto w-[90%]'/>
            <p className='personName'>Halle Teh</p>
            <p className='personTitle'>Recruitment Co-Lead</p>
          </div>
          <div className='w-[100%] my-auto py-10'>
            <img src={DanielLaRosa} alt="team" className='my-auto mx-auto w-[90%]'/>
            <p className='personName'>Nicholas Burley</p>
            <p className='personTitle'>Recruitment Co-Lead</p>
          </div>
        </div>
    </div>
  )
}

export default Team2023
