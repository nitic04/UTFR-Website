import React from 'react'
import { IKImage } from 'imagekitio-react'
import SponsorHeader from '../assets/Sponsors_Wing.jpg'
import SponsorshipPackage from '../assets/UT24SponsorshipPackage.pdf'

// Gold Sponsors
import RLX from '../assets/Sponsors/SponsorLogosColoured/RLX.png'
import Jule from '../assets/Sponsors/SponsorLogosColoured/Jule.png'

// Bronze Sponsors
import ABCO from '../assets/Sponsors/SponsorLogosColoured/Abco.png'
import Bender from '../assets/Sponsors/SponsorLogosColoured/Bender.png'
import Brafasco from '../assets/Sponsors/SponsorLogosColoured/Brafasco.png'
import Brechin from '../assets/Sponsors/SponsorLogosColoured/Brechin.png'
import Crosslink from '../assets/Sponsors/SponsorLogosColoured/Crosslink.png'

import CubeMars from '../assets/Sponsors/SponsorLogosColoured/CubeMars.png'
import Durham from '../assets/Sponsors/SponsorLogosColoured/Durham.png'
import EM from '../assets/Sponsors/SponsorLogosColoured/EM.png'
import Festo from '../assets/Sponsors/SponsorLogosColoured/Festo.png'
import Foxglove from '../assets/Sponsors/SponsorLogosColoured/Foxglove.png'

import Gardel from '../assets/Sponsors/SponsorLogosColoured/Gardel.png'
import Haas from '../assets/Sponsors/SponsorLogosColoured/Haas.png'
import Harwin from '../assets/Sponsors/SponsorLogosColoured/Harwin.png'
import Holley from '../assets/Sponsors/SponsorLogosColoured/Holley.png'
import Kenesto from '../assets/Sponsors/SponsorLogosColoured/Kenesto.png'

import KISSsoft from '../assets/Sponsors/SponsorLogosColoured/KissSoft.png'
import Kunsemi from '../assets/Sponsors/SponsorLogosColoured/Kunsemi.png'
import LRA3d from '../assets/Sponsors/SponsorLogosColoured/LRA.png'
import LucidVision from '../assets/Sponsors/SponsorLogosColoured/Lucid.png'
import Multimatic from '../assets/Sponsors/SponsorLogosColoured/Multimatic.png'
import RapidHarness from '../assets/Sponsors/SponsorLogosColoured/RapidHarness.png'

import Rivian from '../assets/Sponsors/SponsorLogosColoured/Rivian.png' 
import Sensata from '../assets/Sponsors/SponsorLogosColoured/Sensata.webp'
import SherwinWilliams from '../assets/Sponsors/SponsorLogosColoured/SherwinWilliams.png'
import Siemens from '../assets/Sponsors/SponsorLogosColoured/Siemens.png'
import Texonic from '../assets/Sponsors/SponsorLogosColoured/Texonic.png'

import Textreme from '../assets/Sponsors/SponsorLogosColoured/Textreme.png'
import TibetTechSols from '../assets/Sponsors/SponsorLogosColoured/TibetTechSols.jpg'
import ERP from '../assets/Sponsors/SponsorLogosColoured/3ERP.png'

// Afilliates
import SevenPCB from '../assets/Sponsors/SponsorLogosColoured/Bittle.png' 
import Altair from '../assets/Sponsors/SponsorLogosColoured/Altair.png'
import Digikey from '../assets/Sponsors/SponsorLogosColoured/DigiKey.png'
import DiSoric from '../assets/Sponsors/SponsorLogosColoured/DiSoric.png'
import Edmund from '../assets/Sponsors/SponsorLogosColoured/EdmundOptics.png'

import Enepaq from '../assets/Sponsors/SponsorLogosColoured/Enepaq.png'
import FactoryTire from '../assets/Sponsors/SponsorLogosColoured/FactoryTire.png'
import Hakko from '../assets/Sponsors/SponsorLogosColoured/Hakko.png'
import Hawkeye from '../assets/Sponsors/SponsorLogosColoured/HawkeyeIndustries.png'
import ISL from '../assets/Sponsors/SponsorLogosColoured/TISL.png'

import HMS from '../assets/Sponsors/SponsorLogosColoured/HMS.png'
import Lantor from '../assets/Sponsors/SponsorLogosColoured/LantorComposites.png'
import Metex from '../assets/Sponsors/SponsorLogosColoured/Metex.png'
import Odrive from '../assets/Sponsors/SponsorLogosColoured/Odrive.png'
import Optimumarc from '../assets/Sponsors/SponsorLogosColoured/Optimumarc.png'

import Rexco from '../assets/Sponsors/SponsorLogosColoured/Rexco.png' 
import Stars from '../assets/Sponsors/SponsorLogosColoured/Stars.png'
import TRAIL from '../assets/Sponsors/SponsorLogosColoured/TrailLabs.webp'
import VIGrade from '../assets/Sponsors/SponsorLogosColoured/VI.png'
import VR3Engineering from '../assets/Sponsors/SponsorLogosColoured/VR3.png'

import Winsource from '../assets/Sponsors/SponsorLogosColoured/Winsource.png'
import Zebra from '../assets/Sponsors/SponsorLogosColoured/Zebra.png'

import GoToTop from './GoToTop'
import { Fade } from "react-awesome-reveal";

const Sponsors = () => {
  const urlEndpoint = 'https://ik.imagekit.io/utfr/SponsorLogos/ColouredLogos/'

  return (
    <div>
        <div className='w-full h-screen relative' style={{
        backgroundImage: `url(${SponsorHeader})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
        }}>
        <div className='headerOverlay2'>
        <div className=' h-full flex flex-col justify-end'>
          <Fade triggerOnce>
            <h1 className='font-bold text-7xl md:text-9xl text-white text-center md:text-left md:pl-10 mb-40 md:mb-16'>Sponsors & Partners</h1>
          </Fade>
        </div>  
        </div>
        </div>
        <div className='text-black bg-[#cecece] pb-10'>
            <Fade cascade triggerOnce>
            <h1 className='flex justify-center text-4xl font-bold pt-10 px-5 text-center'>How our team thrives on your support</h1>
            <p className='flex justify-center text-center text-lg px-10 py-5'>Our sponsors and community partners are vital to our success. The organizations listed on this page support our team with a variety of monetary, product, and service contributions to our team. 
            Since 1998, the University of Toronto Formula Racing Team has enjoyed great success in both Europe and North America, all thanks to the help of our sponsors and community partners. We depend on the products and services offered by these generous businesses and individuals in order to accomplish our goals every year. In return, we thank them with all the publicity we can offer on our car, at our public appearances, and online. We’ve worked with a variety of supporters to draw attention to our partnership, and we continue to work hard to make our partnerships mutually beneficial.</p>
            <div className='flex justify-center gap-x-5'>
                <button className='r4 text-black group border-2 px-6 py-3 my-2 transition duration-200 hover:bg-[#0190cd] hover:text-white hover:border-[#0190cd]'><a href={SponsorshipPackage} target="_blank" rel="noreferrer">View Our Sponsorship Package</a></button>
                <button className='r4 text-black group border-2 px-6 py-3 my-2 transition duration-200 hover:bg-[#0190cd] hover:text-white hover:border-[#0190cd]'><a href="https://www.gofundme.com/f/university-of-toronto-formula-racing-donations" target="_blank" rel="noreferrer">Donate</a></button>
            </div>
            </Fade>
        </div>

        {/* DIAMOND SPONSORS */}
        <h1 className='flex justify-center bg-[#e3e3e3] pt-10 text-5xl font-bold text-center'>Diamond Sponsors</h1>
        <div className='flex justify-center bg-[#e3e3e3]'>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 py-10 gap-x-8 gap-y-10'>
                {/* SKULE */}
                <a href="https://skule.ca/" target="_blank" rel="noreferrer">
                <div className='w-[350px] h-[500px] bg-[#dddddd] transition duration-200 rounded-md'>
                    <div className='h-[200px] bg-[#f1f1f1]' style={{
                    backgroundImage: `url(https://ik.imagekit.io/utfr/SponsorLogos/ColouredLogos/SKULE.png)`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                    }}>
                    </div>
                    <div className='p-5'>
                    <h1 className='font-bold text-4xl'>Skule</h1>
                    <p className='text-base pt-3'>The University of Toronto Engineering Society (SKULE) has graciously funded UTFR since our inception in 1997. Skule is a powerful student body of the University of Toronto's Faculty of Applied Science and Engineering who are committed to supporting current students with services, funding, and extracurricular opportunities.</p>
                    </div>
                </div>
                </a>
                
                {/* TESLA */}
                <a href="https://www.tesla.com/" target="_blank" rel="noreferrer">
                <div className='w-[350px] h-[500px] bg-[#dddddd] transition duration-200 rounded-md'>
                    <div className='h-[200px] bg-[#f1f1f1]' style={{
                    backgroundImage: `url(https://ik.imagekit.io/utfr/SponsorLogos/ColouredLogos/Tesla.png)`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                    }}>
                    </div>
                    <div className='p-5'>
                    <h1 className='font-bold text-4xl'>Tesla</h1>
                    <p className='text-base pt-3'>Tesla, the leading forefront in electric vehicle production, has generously funded UTFR with the battery modules for our high voltage battery packs, allowing us to build our electric cars. For more information on how Tesla leads the way in sustainable innovation, see the Tesla website.</p>
                    </div>
                </div>
                </a>

                {/* BATEMO */}
                <a href="http://www.batemo.de/" target="_blank" rel="noreferrer">
                <div className='w-[350px] h-[500px] bg-[#dddddd] transition duration-200 rounded-md'>
                    <div className='h-[200px] bg-[#f1f1f1]' style={{
                    backgroundImage: `url(https://ik.imagekit.io/utfr/SponsorLogos/ColouredLogos/Batemo.png)`,
                    backgroundPosition: 'center',
                    backgroundSize: '90%',
                    backgroundRepeat: 'no-repeat'
                    }}>
                    </div>
                    <div className='p-5'>
                    <h1 className='font-bold text-4xl'>Batemo</h1>
                    <p className='text-base pt-3'>Batemo is the global industry leader for the creation of lithium-ion battery simulation software. They kindly provide our team with battery simulators. For more information about the incredible work they do, please see their website.</p>
                    </div>
                </div>
                </a>

                {/* PULSENICS */}
                <a href="http://pulsenics.com/" target="_blank" rel="noreferrer">
                <div className='w-[350px] h-[500px] bg-[#dddddd] transition duration-200 rounded-md'>
                    <div className='h-[200px] bg-[#f1f1f1]' style={{
                    backgroundImage: `url(https://ik.imagekit.io/utfr/SponsorLogos/ColouredLogos/Pulsenics.png)`,
                    backgroundPosition: 'center',
                    backgroundSize: '90%',
                    backgroundRepeat: 'no-repeat'
                    }}>
                    </div>
                    <div className='p-5'>
                    <h1 className='font-bold text-4xl'>Pulsenics</h1>
                    <p className='text-base pt-3'>Pulsenics is a Toronto based company which develops proprietary analytical tools for the advancement of industrial electrochemical systems. Thanks to their generous support we are working to better understand how our cells degrade over time, and other critical characteristics of our battery cells.</p>
                    </div>
                </div>
                </a>
            </div>
        </div>

        {/* REST OF THE SPONSORS */}
        <div className='text-black bg-[#e3e3e3] py-10'>
            {/* PLATINUM SPONSORS */}
            <h1 className='flex justify-center text-5xl font-bold text-center'>Platinum Sponsors</h1>
            <div className='flex justify-center pt-10 pb-16 items-center'>
                <div className='grid md:grid-cols-2 gap-x-10'>
                    <a href="https://www.actnowhpc.com/" target="_blank" rel="noreferrer">
                        <IKImage urlEndpoint={urlEndpoint} path="ACTnowHPC.png" className='sponsorImg'/>
                    </a>
                    <a href="https://lubricants.petro-canada.com/" target="_blank" rel="noreferrer">
                        <IKImage urlEndpoint={urlEndpoint} path="PetroColour.png" className='sponsorImg'/>
                    </a>
                </div>
            </div>
            
            {/* GOLD SPONSORS */}
            <h1 className='flex justify-center text-5xl font-bold text-center'>Gold Sponsors</h1>
            <div className='px-16'>
                <div className='flex justify-center pt-10 items-center'>
                    <div className='grid md:grid-cols-5 gap-x-10'>
                        <a href="http://www.hydrapro.com.au/" target="_blank" rel="noreferrer">
                            <IKImage urlEndpoint={urlEndpoint} path="HydraPro.png" className='sponsorImg'/>
                        </a>
                        <a href="https://www.mie.utoronto.ca/student-life-services/machine-shop/" target="_blank" rel="noreferrer">
                            <IKImage urlEndpoint={urlEndpoint} path="UofTMIE.png" className='sponsorImg'/>
                        </a>
                        <a href="https://neweragroup.co/" target="_blank" rel="noreferrer">
                            <IKImage urlEndpoint={urlEndpoint} path="NewEra.png" className='sponsorImg'/>
                        </a>
                        <a href="https://rlxsolutions.com/" target="_blank" rel="noreferrer">
                            <img className="sponsorImg" src={RLX} alt="" />
                        </a>
                        <a href="http://www.sobek-motorsporttechnik.de/" target="_blank" rel="noreferrer">
                            <IKImage urlEndpoint={urlEndpoint} path="Sobek.png" className='sponsorImg'/>
                        </a>
                    </div>
                </div>
                <div className='flex justify-center pt-10 pb-16 items-center'>
                    <div className='grid md:grid-cols-5 gap-x-10'>
                        <a href="https://www.topdon.com/" target="_blank" rel="noreferrer">
                            <IKImage urlEndpoint={urlEndpoint} path="ACTnowHPC.png" className='sponsorImg'/>
                        </a>
                    </div>
                </div>
            </div>

            {/* SILVER SPONSORS */}
            <h1 className='flex justify-center text-5xl font-bold text-center'>Silver Sponsors</h1>
            <div className='px-16'>
                <div className='flex justify-center pt-10 items-center'>
                    <div className='grid md:grid-cols-5 gap-x-10'>
                        <a href="https://www.altium.com/" target="_blank" rel="noreferrer">
                            <IKImage urlEndpoint={urlEndpoint} path="Altium.png" className='sponsorImg'/>
                        </a>
                        <a href="https://www.ansys.com/academic/students/student-teams" target="_blank" rel="noreferrer">
                            <IKImage urlEndpoint={urlEndpoint} path="Ansys.png" className='sponsorImg'/>
                        </a>
                        <a href="https://bcamera.ca/" target="_blank" rel="noreferrer">
                            <IKImage urlEndpoint={urlEndpoint} path="BCamera.png" className='sponsorImg'/>
                        </a>
                        <a href="https://beckerpumps.com/" target="_blank" rel="noreferrer">
                            <IKImage urlEndpoint={urlEndpoint} path="Becker.png" className='sponsorImg'/>
                        </a>
                        <a href="http://bosch.ca/" target="_blank" rel="noreferrer">
                            <IKImage urlEndpoint={urlEndpoint} path="Bosch.png" className='sponsorImg'/>
                        </a>
                    </div>
                </div>
                <div className='flex justify-center pt-10 items-center'>
                    <div className='grid md:grid-cols-5 gap-x-10'>
                        <a href="http://www.embotech.com/" target="_blank" rel="noreferrer">
                            <IKImage urlEndpoint={urlEndpoint} path="Embotech.png" className='sponsorImg'/>
                        </a>
                        <a href="https://facfox.com/" target="_blank" rel="noreferrer">
                            <IKImage urlEndpoint={urlEndpoint} path="FacFox.png" className='sponsorImg'/>
                        </a>
                        <a href="https://www.ford.ca/" target="_blank" rel="noreferrer">
                            <IKImage urlEndpoint={urlEndpoint} path="Ford.png" className='sponsorImg'/>
                        </a>
                        <a href="http://www.julepower.com/" target="_blank" rel="noreferrer">
                            <img className="sponsorImg" src={Jule} alt="" />
                        </a>
                        <a href="https://www.magna.com/" target="_blank" rel="noreferrer">
                            <IKImage urlEndpoint={urlEndpoint} path="Magna.png" className='sponsorImg'/>
                        </a>
                    </div>
                </div>
                <div className='flex justify-center pt-10 items-center'>
                    <div className='grid md:grid-cols-5 gap-x-10'>
                        <a href="https://mgchemicals.com/" target="_blank" rel="noreferrer">
                            <IKImage urlEndpoint={urlEndpoint} path="MG.png" className='sponsorImg'/>
                        </a>
                        <a href="https://www.molex.com/en-us/home" target="_blank" rel="noreferrer">
                            <IKImage urlEndpoint={urlEndpoint} path="Molex.png" className='sponsorImg'/>
                        </a>
                        <a href="http://www.movella.com/" target="_blank" rel="noreferrer">
                            <IKImage urlEndpoint={urlEndpoint} path="Movella.png" className='sponsorImg'/>
                        </a>
                        <a href="https://www.martinrea.com/" target="_blank" rel="noreferrer">
                            <IKImage urlEndpoint={urlEndpoint} path="Martinrea.png" className='sponsorImg'/>
                        </a>
                        <a href="https://www.nacicanada.com/" target="_blank" rel="noreferrer">
                            <IKImage urlEndpoint={urlEndpoint} path="NACI.png" className='sponsorImg'/>
                        </a>
                    </div>
                </div>
                <div className='flex justify-center pt-10 pb-16 items-center'>
                    <div className='grid md:grid-cols-5 gap-x-10'>
                        <a href="https://ntn.ca/" target="_blank" rel="noreferrer">
                            <IKImage urlEndpoint={urlEndpoint} path="NTN.png" className='sponsorImg'/>
                        </a>
                        <a href="https://www.rudolphsbakeries.com/" target="_blank" rel="noreferrer">
                            <IKImage urlEndpoint={urlEndpoint} path="Rudolphs.png" className='sponsorImg'/>
                        </a>
                        <a href="http://www.solidworks.com/students" target="_blank" rel="noreferrer">
                            <IKImage urlEndpoint={urlEndpoint} path="SolidworksLogo.png" className='sponsorImg'/>
                        </a>
                        <a href="https://www.tek.com/en" target="_blank" rel="noreferrer">
                            <IKImage urlEndpoint={urlEndpoint} path="Tektronix.png" className='sponsorImg'/>
                        </a>
                        <a href="http://www.villacharities.com/" target="_blank" rel="noreferrer">
                            <IKImage urlEndpoint={urlEndpoint} path="Villa.png" className='sponsorImg'/>
                        </a>
                    </div>
                </div>
            </div>

            {/* BRONZE SPONSORS */}
            <h1 className='flex justify-center text-5xl font-bold text-center'>Bronze Sponsors</h1>
            <div className='px-16'>
                <div className='flex justify-center pt-10 items-center'>
                    <div className='grid md:grid-cols-5 gap-x-10'>
                        <a href="http://www.3erp.com/" target="_blank" rel="noreferrer">
                            <img className="sponsorImg" src={ERP} alt="" />
                        </a>
                        <a href="https://www.abcofreight.com/" target="_blank" rel="noreferrer">
                            <img className="sponsorImg px-5" src={ABCO} alt="" />
                        </a>
                        <a href="https://www.benderinc.com/" target="_blank" rel="noreferrer">
                            <img className="sponsorImg" src={Bender} alt="" />
                        </a>
                        <a href="https://brafasco.com/" target="_blank" rel="noreferrer">
                            <img className="sponsorImg" src={Brafasco} alt="" />
                        </a>
                        <a href="http://bosch.ca/" target="_blank" rel="noreferrer">
                            <img className="sponsorImg" src={Brechin} alt="" />
                        </a>
                    </div>
                </div>
                <div className='flex justify-center pt-10 items-center'>
                    <div className='grid md:grid-cols-5 gap-x-10'>
                        <a href="https://crosslinktech.com/" target="_blank" rel="noreferrer">
                            <img className="sponsorImg" src={Crosslink} alt="" />
                        </a>
                        <a href="https://www.cubemars.com/" target="_blank" rel="noreferrer">
                            <img className="sponsorImg" src={CubeMars} alt="" />
                        </a>
                        <a href="https://disensors.com/" target="_blank" rel="noreferrer">
                            <img className="sponsorImg px-5" src={Durham} alt="" />
                        </a>
                        <a href="https://www.electro-meters.com/" target="_blank" rel="noreferrer">
                            <img className="sponsorImg" src={EM} alt="" />
                        </a>
                        <a href="https://www.festo.com/ca/en/" target="_blank" rel="noreferrer">
                            <img className="sponsorImg" src={Festo} alt="" />
                        </a>
                    </div>
                </div>
                <div className='flex justify-center pt-10 items-center'>
                    <div className='grid md:grid-cols-5 gap-x-10'>
                        <a href="https://foxglove.dev/" target="_blank" rel="noreferrer">
                            <img className="sponsorImg" src={Foxglove} alt="" />
                        </a>
                        <a href="http://gardel.on.ca/" target="_blank" rel="noreferrer">
                            <img className="sponsorImg" src={Gardel} alt="" />
                        </a>
                        <a href="https://ghaasfoundation.org/content/ghf/en/home.html" target="_blank" rel="noreferrer">
                            <img className="sponsorImg" src={Haas} alt="" />
                        </a>
                        <a href="https://www.harwin.com/" target="_blank" rel="noreferrer">
                            <img className="sponsorImg" src={Harwin} alt="" />
                        </a>
                        <a href="https://www.holley.com/" target="_blank" rel="noreferrer">
                            <img className="sponsorImg px-5" src={Holley} alt="" />
                        </a>
                    </div>
                </div>
                <div className='flex justify-center pt-10 items-center'>
                    <div className='grid md:grid-cols-5 gap-x-10'>
                        <a href="https://www.kenesto.com/" target="_blank" rel="noreferrer">
                            <img className="sponsorImg" src={Kenesto} alt="" />
                        </a>
                        <a href="https://www.kisssoft.com/de" target="_blank" rel="noreferrer">
                            <img className="sponsorImg" src={KISSsoft} alt="" />
                        </a>
                        <a href="https://kunsemi.com/sy" target="_blank" rel="noreferrer">
                            <img className="sponsorImg" src={Kunsemi} alt="" />
                        </a>
                        <a href="https://lra3d.com/" target="_blank" rel="noreferrer">
                            <img className="sponsorImg" src={LRA3d} alt="" />
                        </a>
                        <a href="https://thinklucid.com/" target="_blank" rel="noreferrer">
                            <img className="sponsorImg" src={LucidVision} alt="" />
                        </a>
                    </div>
                </div>
                <div className='flex justify-center pt-10 items-center'>
                    <div className='grid md:grid-cols-5 gap-x-10'>
                        <a href="https://www.multimatic.com/" target="_blank" rel="noreferrer">
                            <img className="sponsorImg" src={Multimatic} alt="" />
                        </a>
                        <a href="https://rapidharness.com/" target="_blank" rel="noreferrer">
                            <img className="sponsorImg" src={RapidHarness} alt="" />
                        </a>
                        <a href="https://rivian.com/" target="_blank" rel="noreferrer">
                            <img className="sponsorImg py-2" src={Rivian} alt="" />
                        </a>
                        <a href="http://www.sensata.com/" target="_blank" rel="noreferrer">
                            <img className="sponsorImg" src={Sensata} alt="" />
                        </a>
                        <a href="https://industrial.sherwin-williams.com/na/us/en/automotive.html" target="_blank" rel="noreferrer">
                            <img className="sponsorImg" src={SherwinWilliams} alt="" />
                        </a>
                    </div>
                </div>
                <div className='flex justify-center pt-10 items-center'>
                    <div className='grid md:grid-cols-5 gap-x-10 pb-16'>
                        <a href="https://www.siemens.com/ca/en.html" target="_blank" rel="noreferrer">
                            <img className="sponsorImg" src={Siemens} alt="" />
                        </a>
                        <a href="http://texonic.net/en" target="_blank" rel="noreferrer">
                            <img className="sponsorImg" src={Texonic} alt="" />
                        </a>
                        <a href="https://www.textreme.com/" target="_blank" rel="noreferrer">
                            <img className="sponsorImg" src={Textreme} alt="" />
                        </a>
                        <a href="https://www.muratkanitibet.com/" target="_blank" rel="noreferrer">
                            <img className="sponsorImg" src={TibetTechSols} alt="" />
                        </a>
                    </div>
                </div>
            </div>

            {/* AFFILIATES */}
            <h1 className='flex justify-center text-5xl font-bold text-center'>Affiliates</h1>
            <div className='px-16'>
                <div className='flex justify-center pt-10 items-center'>
                    <div className='grid md:grid-cols-5 gap-x-10'>
                        <a href="https://altair.com/" target="_blank" rel="noreferrer">
                            <img className="sponsorImg" src={Altair} alt="" />
                        </a>
                        <a href="https://www.7pcb.com/" target="_blank" rel="noreferrer">
                            <img className="sponsorImg" src={SevenPCB} alt="" />
                        </a>
                        <a href="https://www.digikey.ca/" target="_blank" rel="noreferrer">
                            <img className="sponsorImg" src={Digikey} alt="" />
                        </a>
                        <a href="https://www.di-soric.com/int-en" target="_blank" rel="noreferrer">
                            <img className="sponsorImg" src={DiSoric} alt="" />
                        </a>
                        <a href="https://www.edmundoptics.ca/" target="_blank" rel="noreferrer">
                            <img className="sponsorImg" src={Edmund} alt="" />
                        </a>
                    </div>
                </div>
                <div className='flex justify-center pt-10 items-center'>
                    <div className='grid md:grid-cols-5 gap-x-10'>
                        <a href="https://enepaq.com/" target="_blank" rel="noreferrer">
                            <img className="sponsorImg py-8" src={Enepaq} alt="" />
                        </a>
                        <a href="https://www.factorytire.ca/" target="_blank" rel="noreferrer">
                            <img className="sponsorImg py-8" src={FactoryTire} alt="" />
                        </a>
                        <a href="http://hakkousa.com/" target="_blank" rel="noreferrer">
                            <img className="sponsorImg" src={Hakko} alt="" />
                        </a>
                        <a href="https://hawk-eye.com/" target="_blank" rel="noreferrer">
                            <img className="sponsorImg" src={Hawkeye} alt="" />
                        </a>
                        <a href="http://www.hms-networks.com/" target="_blank" rel="noreferrer">
                            <img className="sponsorImg px-5" src={HMS} alt="" />
                        </a>
                    </div>
                </div>
                <div className='flex justify-center pt-10 items-center'>
                    <div className='grid md:grid-cols-5 gap-x-10'>
                        <a href="https://tisl.cs.toronto.edu/" target="_blank" rel="noreferrer">
                            <img className="sponsorImg py-2" src={ISL} alt="" />
                        </a>
                        <a href="https://www.lantorcomposites.com/" target="_blank" rel="noreferrer">
                            <img className="sponsorImg" src={Lantor} alt="" />
                        </a>
                        <a href="http://www.metexht.com/" target="_blank" rel="noreferrer">
                            <img className="sponsorImg" src={Metex} alt="" />
                        </a>
                        <a href="https://odriverobotics.com/" target="_blank" rel="noreferrer">
                            <img className="sponsorImg" src={Odrive} alt="" />
                        </a>
                        <a href="https://www.optimumarc.com/" target="_blank" rel="noreferrer">
                            <img className="sponsorImg" src={Optimumarc} alt="" />
                        </a>
                    </div>
                </div>
                <div className='flex justify-center pt-10 items-center'>
                    <div className='grid md:grid-cols-5 gap-x-10'>
                        <a href="https://rexco-usa.com/" target="_blank" rel="noreferrer">
                            <img className="sponsorImg px-5" src={Rexco} alt="" />
                        </a>
                        <a href="https://starslab.ca/" target="_blank" rel="noreferrer">
                            <img className="sponsorImg" src={Stars} alt="" />
                        </a>
                        <a href="https://www.trailab.utias.utoronto.ca/s" target="_blank" rel="noreferrer">
                            <img className="sponsorImg px-4" src={TRAIL} alt="" />
                        </a>
                        <a href="https://www.vi-grade.com/" target="_blank" rel="noreferrer">
                            <img className="sponsorImg" src={VIGrade} alt="" />
                        </a>
                        <a href="http://vr3.ca/" target="_blank" rel="noreferrer">
                            <img className="sponsorImg" src={VR3Engineering} alt="" />
                        </a>

                    </div>
                </div>
                <div className='flex justify-center pt-10 items-center'>
                    <div className='grid md:grid-cols-5 gap-x-10'>
                        <a href="https://www.win-source.net/" target="_blank" rel="noreferrer">
                            <img className="sponsorImg" src={Winsource} alt="" />
                        </a>
                        <a href="https://www.zebra.com/us/en.html" target="_blank" rel="noreferrer">
                            <img className="sponsorImg" src={Zebra} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <GoToTop />
    </div>
  )
}

export default Sponsors
