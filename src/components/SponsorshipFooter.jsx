import React from 'react'
import Villa from '../assets/Sponsors/SponsorLogosWhite/VillaWhite.png'
import MIE from '../assets/Sponsors/SponsorLogosWhite/UofTMIE.png'
import Tesla from '../assets/Sponsors/SponsorLogosWhite/Tesla.png'
import Skule from '../assets/Sponsors/SponsorLogosWhite/SkuleWhite.png'
import NewEra from '../assets/Sponsors/SponsorLogosWhite/NewEraWhite.png'

import Monday from '../assets/Sponsors/SponsorLogosWhite/mondaycomWhite.png'
import MC78 from '../assets/Sponsors/SponsorLogosWhite/MC78FilledWhite.png'
import EngAlumni from '../assets/Sponsors/SponsorLogosWhite/EngAlumniNetwork.png'
import Altium from '../assets/Sponsors/SponsorLogosWhite/AltiumWhite.png'
import Airtech from '../assets/Sponsors/SponsorLogosWhite/AirtechWhite.png'
import ActNow from '../assets/Sponsors/SponsorLogosWhite/ActNowWhite.png'

import Ansys from '../assets/Sponsors/SponsorLogosWhite/AnsysWhite.png'
import AST from '../assets/Sponsors/SponsorLogosWhite/ASTWhite.png'
import AtomsLab from '../assets/Sponsors/SponsorLogosWhite/AtomsLabWhite.png'
import Bosch from '../assets/Sponsors/SponsorLogosWhite/BoschWhite.png'
import Emrax from '../assets/Sponsors/SponsorLogosWhite/EmraxWhite.png'
import Haas from '../assets/Sponsors/SponsorLogosWhite/GeneHaasWhite.png'
import Honda from '../assets/Sponsors/SponsorLogosWhite/HondaWhite.png'
import Molson from '../assets/Sponsors/SponsorLogosWhite/MolsonWhite.png'

const SponsorshipFooter = () => {
  return (
    <div className='w-full h-[300px] bg-[#131212]'>
        <div className='flex justify-center pt-5'>
            <img src={Villa} style={{width: '180px'}} className='p-5'/>
            <img src={Skule} style={{width: '180px'}} className='p-5'/>
        </div>
        <div className='flex justify-center h-[75px]'>
            <img src={Ansys} className='p-5'/>
            <img src={AST} className='p-5'/>
            <img src={AtomsLab} className='p-5'/>
            <img src={Bosch} className='p-5'/>
            <img src={Emrax} className='p-5'/>
            <img src={Haas} className='p-5 scale-150'/>
            <img src={Molson} className='p-5 scale-150'/>
        </div>
        <div className='flex justify-center h-[75px]'>
            <img src={MIE} className='p-5'/>
            <img src={Monday} className='p-5'/>
            <img src={MC78} className='p-5'/>
            <img src={EngAlumni} className='p-5'/>
            <img src={Altium} className='p-5'/>
            <img src={Airtech} className='p-5'/>
        </div>
    </div>
  )
}

export default SponsorshipFooter
