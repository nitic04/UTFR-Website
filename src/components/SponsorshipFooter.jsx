import React from 'react'
import MIE from '../assets/Sponsors/SponsorLogosWhite/UofTMIE.png'
import Tesla from '../assets/Sponsors/SponsorLogosWhite/Tesla.png'
import Skule from '../assets/Sponsors/SponsorLogosWhite/SkuleWhite.png'
import NewEra from '../assets/Sponsors/SponsorLogosWhite/NewEraWhite.png'

import MC78 from '../assets/Sponsors/SponsorLogosWhite/MC78FilledWhite.png'
import EngAlumni from '../assets/Sponsors/SponsorLogosWhite/EngAlumniNetwork.png'
import Airtech from '../assets/Sponsors/SponsorLogosWhite/AirtechWhite.png'
import ActNow from '../assets/Sponsors/SponsorLogosWhite/ActNowWhite.png'

const SponsorshipFooter = () => {
  return (
    <div className='w-full bg-[#131212] pb-5'>
        <div className='flex justify-center pt-5 items-center'>
          <a href="https://skule.ca/" target="_blank" rel="noreferrer">
            <img alt="" src={Skule} style={{height: "60px"}} className='sponsorImg2'/>
          </a>
          <a href="https://www.mie.utoronto.ca/" target="_blank" rel="noreferrer">
            <img alt="" src={MIE} style={{width: "250px"}} className='sponsorImg2'/>
          </a>
          <a href="https://www.actnowhpc.com/" target="_blank" rel="noreferrer">
            <img alt="" src={ActNow} className='sponsorImg2'/>
          </a>
        </div>
        <div className='flex justify-center items-center'>
          <a href="https://www.mie.utoronto.ca/student-life-services/machine-shop/" target="_blank" rel="noreferrer">
            <img alt="" src={MC78} style={{height: "60px"}} className='sponsorImg2'/>
          </a>
          <a href="https://alumni.engineering.utoronto.ca/engineering-alumni-network/" target="_blank" rel="noreferrer">
            <img alt="" src={EngAlumni} className='sponsorImg2'/>
          </a>
          <a href="https://airtech.com/" target="_blank" rel="noreferrer">
            <img alt="" src={Airtech} className='sponsorImg2'/>
          </a>
          <a href="https://neweragroup.co/" target="_blank" rel="noreferrer">
            <img alt="" src={NewEra} className='sponsorImg2'/>
          </a>
          <a href="https://www.tesla.com/" target="_blank" rel="noreferrer">
            <img alt="" src={Tesla} className='sponsorImg2'/>
          </a>
        </div>
    </div>
  )
}

export default SponsorshipFooter
