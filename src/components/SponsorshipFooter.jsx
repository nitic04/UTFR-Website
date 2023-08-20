import React from 'react'
import MIE from '../assets/Sponsors/SponsorLogosWhite/UofTMIE.png'
import Tesla from '../assets/Sponsors/SponsorLogosWhite/Tesla.png'
import Skule from '../assets/Sponsors/SponsorLogosWhite/SkuleWhite.png'
import NewEra from '../assets/Sponsors/SponsorLogosWhite/NewEraWhite.png'

import Monday from '../assets/Sponsors/SponsorLogosWhite/mondaycomWhite.png'
import MC78 from '../assets/Sponsors/SponsorLogosWhite/MC78FilledWhite.png'
import EngAlumni from '../assets/Sponsors/SponsorLogosWhite/EngAlumniNetwork.png'
import Airtech from '../assets/Sponsors/SponsorLogosWhite/AirtechWhite.png'
import ActNow from '../assets/Sponsors/SponsorLogosWhite/ActNowWhite.png'

const SponsorshipFooter = () => {
  return (
    <div className='w-full bg-[#131212] pb-5'>
        <div className='flex justify-center pt-5 h-[100px]'>
            <img alt="" src={Skule} className='p-5'/>
            <img alt="" src={MIE} className='p-5'/>
            <img alt="" src={Monday} className='p-5'/>
        </div>
        <div className='flex justify-center h-[75px]'>
            <img alt="" src={MC78} className='p-5'/>
            <img alt="" src={EngAlumni} className='p-5'/>
            <img alt="" src={ActNow} className='p-5'/>
            <img alt="" src={Airtech} className='p-5'/>
            <img alt="" src={NewEra} className='p-5'/>
            <img alt="" src={Tesla} style={{width: '275px'}} className='p-5'/>
        </div>
        {/* <div className='flex justify-center h-[75px]'>
            <img alt="" src={Airtech} className='p-5'/>
            <img alt="" src={PetroCanada} className='p-5'/>
            <img alt="" src={NewEra} className='p-5'/>
        </div> */}
    </div>
  )
}

export default SponsorshipFooter
