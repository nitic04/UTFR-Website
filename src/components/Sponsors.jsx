import GoToTop from "./GoToTop"
import { Fade } from "react-awesome-reveal";
import DiamondSponsorCard from "./DiamondSponsorCard";
import SponsorLogos from "./SponsorLogos";

const urlEndpoint = 'https://ik.imagekit.io/utfroutreach/'

const diamondSponsors = [
    {
        name: "Aston Dynamics",
        imageUrl: urlEndpoint + "Diamond/AstonDynamics.png",
        desc: "Aston Dynamics has been an essential partner in enabling UTFR’s transition to a 4WD powertrain. Their generous support helped us purchase inverters and motors that form the core of our new powertrain system. With these components, our team is unlocking new levels of torque vectoring, acceleration, and overall vehicle performance — capabilities that directly advance our electric and driverless development goals. Aston Dynamics’ continued support empowers our members to push the boundaries of what a student-built race car can achieve, and has a meaningful impact on our competitiveness around the world.",
        url: "https://aston-dynamics.com/",
        
    },
    {
        name: "RLXSolutions",
        imageUrl: urlEndpoint + "Gold/RLX_Logo.png?updatedAt=1734039962970",
        desc: "RLX Solutions has generously supported UTFR through the manufacturing of the many custom Printed Circuit Boards (PCBs) that go on the car. The resulting high quality PCBs can surmount the rigorous racing conditions when delivering power, reading sensor data, managing our high voltage battery pack, and ensuring the car operates safely. Their generous support keeps the electrical systems on the car running year after year, and has resulted in top finishes at all competitions we've competed at.",
        url: "https://rlxsolutions.com/",
        
    },
    {
        name: "Skule",
        imageUrl: urlEndpoint + "Diamond/SKULE.png",
        desc: "The University of Toronto Engineering Society (SKULE) has graciously funded UTFR since our inception in 1997. Skule is a powerful student body of the University of Toronto's Faculty of Applied Science and Engineering who are committed to supporting current students with services, funding, and extracurricular opportunities.",
        url: "https://skule.ca/",
    },
]

const platinumSponsors = [
    {
        imageUrl: urlEndpoint + "Platinum/CPSIF.png",
        url: "https://www.engineering.utoronto.ca/current-students/centralized-process-for-student-initiative-funding-cpsif/"
    },
    {
        imageUrl: urlEndpoint + "Platinum/PetroColour.png?updatedAt=1737254718780",
        url: "https://lubricants.petro-canada.com/"
    }
]

const goldSponsors = [
    {
        imageUrl: urlEndpoint + "Bronze/AtomsLab.png?updatedAt=1758336553051",
        url: "https://atoms.mie.utoronto.ca/"
    },
    {
        imageUrl: urlEndpoint + "Gold/CenteringTech.png",
        url: " "
    },
    {
        imageUrl: urlEndpoint + "Gold/Hydrapro.png",
        url: "http://www.hydrapro.com.au/"
    },
    {
        imageUrl: urlEndpoint + "Gold/MC-78.png",
        url: "https://www.mie.utoronto.ca/student-life-services/machine-shop/"
    },
    {
        imageUrl: urlEndpoint + "Gold/UofTMIE.png",
        url: "https://www.mie.utoronto.ca/"
    },
    {
        imageUrl: urlEndpoint + "Gold/Multimatic.png",
        url: "https://www.multimatic.com/"
    },
    {
        imageUrl: urlEndpoint + "Gold/OptimumArc.png",
        url: "http://www.optimumarc.com/"
    },
    {
        imageUrl: urlEndpoint + "Gold/Siemens.png",
        url: "https://www.siemens.com/ca/en.html"
    },
    {
        imageUrl: urlEndpoint + "Gold/Sobek.png",
        url: "http://www.sobek-motorsporttechnik.de/"
    },
    {
        imageUrl: urlEndpoint + "Gold/Topdon.png",
        url: "https://m.topdon.com/"
    },
    {
        imageUrl: urlEndpoint + "Gold/Vesevo.png?updatedAt=1734039429796",
        url: "https://www.vesevo.eu/"
    },
    {
        imageUrl: urlEndpoint + "Gold/6SIGMA.png",
        url: "https://6sigmasimracing.ca/"
    },
]

const silverSponsors = [
    {
        imageUrl: urlEndpoint + "Silver/Aerovac.png",
        url: "https://www.aerovac.com/"
    },
    {
        imageUrl: urlEndpoint + "Silver/Altium.png",
        url: "https://www.altium.com/"
    },
    {
        imageUrl: urlEndpoint + "Silver/Ansys.png",
        url: "https://www.ansys.com/academic/students/student-teams"
    },
    {
        imageUrl: urlEndpoint + "Silver/Bcamera.png",
        url: "https://bcamera.ca/"
    },
    {
        imageUrl: urlEndpoint + "Silver/Becker.png",
        url: "https://beckerpumps.com/"
    },
    {
        imageUrl: urlEndpoint + "Silver/Bosch.png",
        url: "http://www.bosch-motorsport.com/"
    },
    {
        imageUrl: urlEndpoint + "Silver/Embotech.png",
        url: "http://www.embotech.com/"
    },
    {
        imageUrl: urlEndpoint + "Silver/Ensoft.png",
        url: "https://www.ensoftcorp.com"
    },
    {
        imageUrl: urlEndpoint + "Silver/ESAB.png",
        url: "https://esab.com/ca/nam_en/"
    },
    {
        imageUrl: urlEndpoint + "Silver/FacFox.png",
        url: "https://facfox.com/"
    },
    {
        imageUrl: urlEndpoint + "Silver/Ford.png",
        url: "https://www.ford.ca/"
    },
    {
        imageUrl: urlEndpoint + "Silver/Jule.png",
        url: "http://www.julepower.com/"
    },
    {
        imageUrl: urlEndpoint + "Silver/Lululemon.png",
        url: "https://shop.lululemon.com/en-ca/"
    },
    {
        imageUrl: urlEndpoint + "Silver/MG.png",
        url: "https://mgchemicals.com/"
    },
    {
        imageUrl: urlEndpoint + "Silver/Magna.png",
        url: "https://www.magna.com/"
    },
    {
        imageUrl: urlEndpoint + "Silver/Martinrea.png",
        url: "https://www.martinrea.com/"
    },
    {
        imageUrl: urlEndpoint + "Silver/Melasta.png",
        url: "https://www.melasta.com/"
    },
    {
        imageUrl: urlEndpoint + "Silver/Molex.png",
        url: "https://www.molex.com/en-us/home"
    },
    {
        imageUrl: urlEndpoint + "Silver/Molson.png",
        url: "https://www.molson.ca/en-CA/av?url=https://www.molson.ca/en-CA"
    },
    {
        imageUrl: urlEndpoint + "Silver/Movella.png",
        url: "https://www.movella.com/"
    },
    {
        imageUrl: urlEndpoint + "Silver/NACI.png",
        url: "https://www.nacicanada.com/"
    },
    {
        imageUrl: urlEndpoint + "Silver/NTN.png",
        url: "https://ntn.ca/"
    },
    {
        imageUrl: urlEndpoint + "Silver/Percepio.png?updatedAt=1737603693212",
        url: "https://percepio.com/"
    },
    {
        imageUrl: urlEndpoint + "Silver/Pompous_Fox_Wood_Company.png",
        url: "https://pompousfoxwoodco.com/"
    },
    {
        imageUrl: urlEndpoint + "Silver/Rudolphs.png",
        url: "https://www.rudolphsbakeries.com/"
    },
    {
        imageUrl: urlEndpoint + "Silver/Simerics.png",
        url: "https://www.simerics.com/"
    },
    {
        imageUrl: urlEndpoint + "Silver/SolidworksLogo.png",
        url: "http://www.solidworks.com/students"
    },
    {
        imageUrl: urlEndpoint + "Silver/Tektronix.png",
        url: "http://tek.com/en"
    },
    {
        imageUrl: urlEndpoint + "Silver/Texonic.png",
        url: "http://texonic.net/en"
    },
]

const bronzeSponsors = [
    {
        imageUrl: urlEndpoint + "Bronze/3ERP.png",
        url: "http://www.3erp.com/"
    },
    {
        imageUrl: urlEndpoint + "Bronze/AST.png",
        url: "https://astg.ca/"
    },
    {
        imageUrl: urlEndpoint + "Bronze/Abco.png",
        url: "https://www.abcofreight.com/"
    },
    {
        imageUrl: urlEndpoint + "Bronze/Bender.png",
        url: "https://www.benderinc.com/"
    },
    {
        imageUrl: urlEndpoint + "Bronze/Brafasco.png",
        url: "https://brafasco.com/"
    },
    {
        imageUrl: urlEndpoint + "Bronze/Brechin.png",
        url: "https://gamebridgegokarts.com/"
    },
    {
        imageUrl: urlEndpoint + "Bronze/Cloudzy.png",
        url: "https://cloudzy.com/"
    },
    {
        imageUrl: urlEndpoint + "Bronze/Crosslink.png",
        url: "https://crosslinktech.com/"
    },
    {
        imageUrl: urlEndpoint + "Bronze/CubeMars.png",
        url: "https://www.cubemars.com/"
    },
    {
        imageUrl: urlEndpoint + "Bronze/DiSoric.png",
        url: "https://www.di-soric.com/int-en"
    },
    {
        imageUrl: urlEndpoint + "Bronze/DMC.png",
        url: "https://dmctools.com/?srsltid=AfmBOopvRGYNhqMzK8yG_lL7bgfWRDnIAjMHJ-pLmch_FmfZ5V0M7-C0"
    },
    {
        imageUrl: urlEndpoint + "Bronze/Durham.png",
        url: "https://disensors.com/"
    },
    {
        imageUrl: urlEndpoint + "Bronze/EM.png",
        url: "https://www.electro-meters.com/"
    },
    {
        imageUrl: urlEndpoint + "Bronze/Evonik.png",
        url: "https://www.evonik.com/en.html"
    },
    {
        imageUrl: urlEndpoint + "Bronze/Festo.png",
        url: "https://www.festo.com/ca/en/"
    },
    {
        imageUrl: urlEndpoint + "Bronze/Foxglove.png",
        url: "https://foxglove.dev/"
    },
    {
        imageUrl: urlEndpoint + "Bronze/Gardel.png",
        url: "http://gardel.on.ca/"
    },
    {
        imageUrl: urlEndpoint + "Bronze/Haas.png",
        url: "https://ghaasfoundation.org/content/ghf/en/home.html"
    },
    {
        imageUrl: urlEndpoint + "Bronze/Hakko.png",
        url: "http://hakkousa.com/"
    },
    {
        imageUrl: urlEndpoint + "Bronze/Harwin.png",
        url: "https://www.harwin.com/"
    },
    {
        imageUrl: urlEndpoint + "Bronze/Hexagon.png",
        url: "https://hxgnsmartnet.com/"
    },
    {
        imageUrl: urlEndpoint + "Bronze/Holley.png",
        url: "https://www.holley.com/"
    },
    {
        imageUrl: urlEndpoint + "Bronze/Kenesto.png",
        url: "https://www.kenesto.com/"
    },
    {
        imageUrl: urlEndpoint + "Bronze/KissSoft.png",
        url: "https://www.kisssoft.com/de"
    },
    {
        imageUrl: urlEndpoint + "Bronze/Kunsemi.png",
        url: "https://www.kunsemi.com/"
    },
    {
        imageUrl: urlEndpoint + "Bronze/Lily.png?updatedAt=1734473423504",
        url: "https://www.lily-bearing.com/"
    },
    {
        imageUrl: urlEndpoint + "Bronze/LRA.png",
        url: "https://lra3d.com/"
    },
    {
        imageUrl: urlEndpoint + "Bronze/Lucid.png",
        url: "https://thinklucid.com/"
    },
    {
        imageUrl: urlEndpoint + "Bronze/MechanicalAdvertising.png",
        url: "http://mechanicaladvertising.com/"
    },
    {
        imageUrl: urlEndpoint + "Bronze/Peripheral.png",
        url: "https://www.peripheral.so/"
    },
    {
        imageUrl: urlEndpoint + "Bronze/RapidHarness.png",
        url: "https://rapidharness.com/"
    },
    {
        imageUrl: urlEndpoint + "Bronze/Rivian.png",
        url: "https://rivian.com/"
    },
    {
        imageUrl: urlEndpoint + "Bronze/Roboflow.png",
        url: "https://roboflow.com/"
    },
    {
        imageUrl: urlEndpoint + "Bronze/Sensata.webp",
        url: "http://www.sensata.com/"
    },
    {
        imageUrl: urlEndpoint + "Bronze/SherwinWilliams.png",
        url: "https://industrial.sherwin-williams.com/na/us/en/automotive.html"
    },
    {
        imageUrl: urlEndpoint + "Bronze/Simdiff.png",
        url: "https://www.ensoftcorp.com/simdiff/"
    },
    {
        imageUrl: urlEndpoint + "Bronze/Textreme.png",
        url: "https://www.textreme.com/"
    },
    {
        imageUrl: urlEndpoint + "Bronze/TibetTechSolutions.jpg",
        url: "https://www.muratkanitibet.com/"
    },
    {
        imageUrl: urlEndpoint + "Bronze/Wiha.png",
        url: "http://wihatools.ca/"
    },
    {
        imageUrl: urlEndpoint + "Bronze/3DX.png",
        url: "https://3dconnexion.com/us/"
    },
]

const affiliateSponsors = [
    {
        imageUrl: urlEndpoint + "Affiliates/Altair.png",
        url: "https://altair.com/"
    },
    {
        imageUrl: urlEndpoint + "Affiliates/Bittle.png",
        url: "https://www.7pcb.com/"
    },
    {
        imageUrl: urlEndpoint + "Affiliates/DigiKey.png",
        url: "https://www.digikey.ca/"
    },
    {
        imageUrl: urlEndpoint + "Affiliates/EDL.png",
        url: "https://www.engdesignlab.com/"
    },
    {
        imageUrl: urlEndpoint + "Affiliates/FactoryTire.png",
        url: "https://www.factorytire.ca/"
    },
    {
        imageUrl: urlEndpoint + "Affiliates/HBF.png",
        url: "https://www.hbfuller.com/en"
    },
    {
        imageUrl: urlEndpoint + "Affiliates/HMS.png",
        url: "http://www.hms-networks.com/"
    },
    {
        imageUrl: urlEndpoint + "Affiliates/HawkeyeIndustries.png",
        url: "https://hawk-eye.com/"
    },
    {
        imageUrl: urlEndpoint + "Affiliates/Metex.png",
        url: "http://www.metexht.com/"
    },
    {
        imageUrl: urlEndpoint + "Affiliates/OakvilleBlueprint.png",
        url: "http://www.oakvilleblueprinting.ca/"
    },
    {
        imageUrl: urlEndpoint + "Affiliates/Permabond.png",
        url: "https://www.permabond.com/"
    },
    {
        imageUrl: urlEndpoint + "Affiliates/Phytools.png",
        url: "https://phytools.com"
    },
    {
        imageUrl: urlEndpoint + "Affiliates/Rexco.png",
        url: "https://rexco-usa.com/"
    },
    {
        imageUrl: urlEndpoint + "Affiliates/Stars.png",
        url: "https://starslab.ca/"
    },
    {
        imageUrl: urlEndpoint + "Affiliates/TISL.png",
        url: "https://tisl.cs.toronto.edu/"
    },
    {
        imageUrl: urlEndpoint + "Affiliates/TrailLabs.webp",
        url: "https://www.trailab.utias.utoronto.ca/"
    },
    {
        imageUrl: urlEndpoint + "Affiliates/VI.png",
        url: "https://www.vi-grade.com/"
    },
    {
        imageUrl: urlEndpoint + "Affiliates/VR3.png",
        url: "http://vr3.ca/"
    },
    {
        imageUrl: urlEndpoint + "Affiliates/Winsource.png",
        url: "https://www.win-source.net/"
    },
]

const Sponsors = () => {
    return (
    <div>
        <div className='w-full h-screen relative' style={{
        backgroundImage: `url(https://ik.imagekit.io/utfroutreach/Sponsors_Wing.jpg?updatedAt=1737930374496)`,
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
                <a href="https://ik.imagekit.io/utfroutreach/UT26/Sponsorship_Package_2026.pdf" target="_blank" rel="noreferrer"><button className='r4 text-black group border-2 px-6 py-3 my-2 transition duration-200 hover:bg-[#0190cd] hover:text-white hover:border-[#0190cd]'>View Our Sponsorship Package</button></a>
                <a href="https://www.gofundme.com/f/support-utfrs-road-to-michigan-germany" target="_blank" rel="noreferrer"><button className='r4 text-black group border-2 px-6 py-3 my-2 transition duration-200 hover:bg-[#0190cd] hover:text-white hover:border-[#0190cd]'>Donate</button></a>
            </div>
            </Fade>
        </div>

        {/* Diamond Sponsors */}
        <h1 className='flex justify-center bg-[#e3e3e3] pt-10 text-5xl font-bold text-center'>Diamond Sponsors</h1>
        <div className='flex justify-center bg-[#e3e3e3]'>
            <div className="grid lg:grid-cols-3 md:grid-cols-1 py-10 gap-x-8 gap-y-10">
                {diamondSponsors.map((sponsor, index) => (
                    <Fade delay={0.2} triggerOnce>
                        <DiamondSponsorCard
                            key={index}
                            imageUrl={sponsor.imageUrl}
                            url={sponsor.url}
                            name={sponsor.name}
                            description={sponsor.desc}
                        />
                    </Fade> 
                ))}
            </div>
        </div>

        {/* Platinum Sponsors */}
        <SponsorLogos title="Platinum Sponsors" sponsors={platinumSponsors}/>

        {/* Gold Sponsors */}
        <SponsorLogos title="Gold Sponsors" sponsors={goldSponsors}/>

        {/* Silver Sponsors */}
        <SponsorLogos title="Silver Sponsors" sponsors={silverSponsors}/>

        {/* Bronze Sponsors */}
        <SponsorLogos title="Bronze Sponsors" sponsors={bronzeSponsors}/>

        {/* Afilliate Sponsors */}
        <SponsorLogos title="Affiliate Sponsors" sponsors={affiliateSponsors}/>

    <GoToTop  />
    </div>
    )
}

export default Sponsors