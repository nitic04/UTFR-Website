import React, { useEffect, useRef } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import car from '../assets/HistoricCarPhotos/UT01/UT01.jpeg';
// import CzechBackground from '../assets/CzechRepublic2023/CzechCircuit.png'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

import UT99Cutout from '../assets/HistoricCarPhotos/UT99/UT99-Cutout.png'

import UT00Cutout from '../assets/HistoricCarPhotos/UT00/UT00-Cutout.png'
import UT01Cutout from '../assets/HistoricCarPhotos/UT01/UT01-Cutout.png'
import UT02Cutout from '../assets/HistoricCarPhotos/UT02/UT02-Cutout.png'
import UT03Cutout from '../assets/HistoricCarPhotos/UT03/UT03-Cutout.png'
import UT04Cutout from '../assets/HistoricCarPhotos/UT04/UT04-Cutout.png'
import UT05Cutout from '../assets/HistoricCarPhotos/UT05/UT05-Cutout.png'

import UT06Cutout from '../assets/HistoricCarPhotos/UT06/UT06-Cutout.png'
import UT07Cutout from '../assets/HistoricCarPhotos/UT07/UT07-Cutout.png'
import UT08Cutout from '../assets/HistoricCarPhotos/UT08/UT08-Cutout.png'
import UT09Cutout from '../assets/HistoricCarPhotos/UT09/UT09-Cutout.png'
import UT10Cutout from '../assets/HistoricCarPhotos/UT10/UT10-Cutout.png'

import UT11Cutout from '../assets/HistoricCarPhotos/UT11/UT11-Cutout.png'
import UT12Cutout from '../assets/HistoricCarPhotos/UT12/UT12-Cutout.png'
// import UT13Cutout from '../assets/HistoricCarPhotos/UT13/UT13-Cutout.png'
import UT14Cutout from '../assets/HistoricCarPhotos/UT14/UT14-Cutout.png'
import UT15Cutout from '../assets/HistoricCarPhotos/UT15/UT15-Cutout.png'

import UT16Cutout from '../assets/HistoricCarPhotos/UT16/UT16-Cutout.png'
import UT17Cutout from '../assets/HistoricCarPhotos/UT17/UT17-Cutout.png'
import UT18Cutout from '../assets/HistoricCarPhotos/UT18/UT18-Cutout.png'
import UT19Cutout from '../assets/HistoricCarPhotos/UT19/UT19-Cutout.png'
// import UT20Cutout from '../assets/HistoricCarPhotos/UT20/UT20-Cutout.png'

import UT21Cutout from '../assets/HistoricCarPhotos/UT21/UT21-Cutout.png'
import UT22Cutout from '../assets/HistoricCarPhotos/UT22/UT22-Cutout.png'
import UT23Cutout from '../assets/HistoricCarPhotos/UT23/UT23-Cutout.png'
import UT24Cutout from '../assets/HistoricCarPhotos/UT24/UT24-Cutout.png'

gsap.registerPlugin(ScrollTrigger);

const ScrollSection = ({ navlink, year, title, image }) => {
  return (
    <div className={`scroll-section px-[200px] md:px-10`} style={{ paddingTop: "250px" }}>
      <h2 className='CarYear text-8xl text-center pb-3'>{year}</h2>
      <div className='w-[300px] h-[200px] md:w-[550px] md:h-[310px] carImage' style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat'
      }}>
      </div>
      <NavLink to={navlink}>
        <div className=' cursor-pointer transition duration-200 hover:text-[#d3d3d3] flex items-center'>
          <h2 className="text-2xl pt-2 flex-grow">{title}</h2>
          <FaRegArrowAltCircleRight className="text-2xl"/>
        </div>
      </NavLink>
    </div>
  );
};

const ScrollSectionNoImg = ({ navlink, year, title}) => {
  return (
    <div className={`scroll-section px-[200px] md:px-10`} style={{ paddingTop: "400px" }}>
      <h2 className='md:w-[400px] CarYear text-8xl text-center pb-3'>{year}</h2>
      <NavLink to={navlink}>
        <div className='CarTitle cursor-pointer transition duration-200 hover:text-[#d3d3d3] flex items-center'>
          <h2 className="text-2xl pt-2 flex-grow">{title}</h2>
          <FaRegArrowAltCircleRight className="text-2xl"/>
        </div>
      </NavLink>
    </div>
  );
};

const ScrollSectionUT24 = ({ year, title, image }) => {
  return (
    <div className={`scroll-section ml-24 px-16`} style={{ paddingTop: "250px" }}>
      <h2 className='CarYear text-8xl text-center pb-3'>{year}</h2>
      <div className='w-[300px] h-[200px] md:w-[550px] md:h-[310px] carImage' style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat'
      }}>
      </div>
        <div className='transition duration-200 hover:text-[#d3d3d3] flex items-center'>
          <h2 className="text-2xl pt-2 flex-grow">{title}</h2>
          <FaRegArrowAltCircleRight className="text-2xl"/>
        </div>
    </div>
  );
};

const History = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  
  useEffect(() => {
    let pin;

    if (window.innerWidth <= 768) { // Adjust 768 according to your mobile breakpoint
      pin = gsap.fromTo(sectionRef.current, {
        translateX: 0
      }, {
        translateX: "-2700vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.7,
          pin: true
        }
      });
    } else {
      pin = gsap.fromTo(sectionRef.current, {
        translateX: 0
      }, {
        translateX: "-950vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.7,
          pin: true
        }
      });

    }

      return () => {
        pin.kill();
      };
    }, []);  

    
  

  return (
    <section className='scroll-section-outer bg-[#1A1B1C] text-white'>
      <div ref={triggerRef}>
        <div ref={sectionRef} className='scroll-section-inner'>
          <div className='scroll-section pt-[105px] px-5'>
            <div className='my-auto bg-[#424242] w-[400px] h-[750px]'>
              <h2 className="text-5xl pl-8 pt-10 font-bold">Team History</h2>
              <p className="px-8 py-5">The University of Toronto Formula SAE Racing Team was founded during the 1996-97 academic year. Leading up to our first competition season in 1999 the team was busy finding sponsors, conducting R&D and developing a prototype vehicle. In 2003, 2005, and 2006, the team took three overall championships at Formula Student UK - a record that would stand until 2016! We also placed in the top 5 in 2002, 2004 and 2007.</p>
              <p className="px-8 pb-10">Over the course of the 2000s, several different chassis concepts were explored, moving from steel space frames to hybrid concepts, and finally to a full carbon fibre monocoque by the end of the decade. Now our team has transitioned from combustion vehicles to fully electric marking yet another era in UTFR's legacy.</p>
            </div>
          </div>

          <ScrollSectionNoImg navlink="/1997" year="1997" title="Team was founded"/>
          <ScrollSectionNoImg navlink="/1998" year="1998" title="First prototype completed"/>
          <ScrollSection navlink="/UT99" year="UT99" title="First competition" paddingFromTop="400px" image={UT99Cutout}/>

          <ScrollSection navlink="/UT00" year="UT00" title="So Close" paddingFromTop="250px" image={UT00Cutout}/>
          <ScrollSection navlink="/UT01" year="UT01" title="Shootout starts" paddingFromTop="400px" image={UT01Cutout}/>
          <ScrollSection navlink="/UT02" year="UT02" title="First European Competition" paddingFromTop="150px" image={UT02Cutout}/>
          <ScrollSection navlink="/UT03" year="UT03" title="World champions!" paddingFromTop="250px" image={UT03Cutout}/>
          <ScrollSection navlink="/UT04" year="UT04" title="A small dip" paddingFromTop="400px" image={UT04Cutout}/>

          <ScrollSection navlink="/UT05" year="UT05" title="World champions pt.2!" paddingFromTop="200px" image={UT05Cutout}/>
          <ScrollSection navlink="/UT06" year="UT06" title="World champions pt.3!" paddingFromTop="300px" image={UT06Cutout}/>
          <ScrollSection navlink="/UT07" year="UT07" title="Peak ICE power" paddingFromTop="400px" image={UT07Cutout}/>
          <ScrollSection navlink="/UT08" year="UT08" title="Monocoque" paddingFromTop="250px" image={UT08Cutout}/>
          <ScrollSection navlink="/UT09" year="UT09" title="Single cylinder era" paddingFromTop="400px" image={UT09Cutout}/>

          <ScrollSection navlink="/UT10" year="UT10" title="Goodbye monocoque" paddingFromTop="150px" image={UT10Cutout}/>
          <ScrollSection navlink="/UT11" year="UT11" title="Best FSG result for a while" paddingFromTop="250px" image={UT11Cutout}/>
          <ScrollSection navlink="/UT12" year="UT12" title="Composite nose cone" paddingFromTop="400px" image={UT12Cutout}/>
          <ScrollSectionNoImg navlink="/UT13" year="UT13" title="Development year"/>
          <ScrollSection navlink="/UT14" year="UT14" title="Return to competition" paddingFromTop="300px" image={UT14Cutout}/>

          <ScrollSection navlink="/UT15" year="UT15" title="Expanding team" paddingFromTop="400px" image={UT15Cutout}/>
          <ScrollSection navlink="/UT16" year="UT16" title="We got our wings" paddingFromTop="250px" image={UT16Cutout}/>
          <ScrollSection navlink="/UT17" year="UT17" title="Logo refresh" paddingFromTop="150px" image={UT17Cutout}/>
          <ScrollSection navlink="/UT18" year="UT18" title="Shootout moves to Gamebridge" paddingFromTop="250px" image={UT18Cutout}/>
          <ScrollSection navlink="/UT19" year="UT19" title="20th year of competitions" paddingFromTop="400px" image={UT19Cutout}/>

          <ScrollSectionNoImg navlink="/UT20" year="UT20" title="Covid-19"/>
          <ScrollSection navlink="/UT21" year="UT21" title="Last dance for ICE" paddingFromTop="300px" image={UT21Cutout}/>
          <ScrollSection navlink="/UT22" year="UT22" title="Switch to electric" paddingFromTop="400px" image={UT22Cutout}/>
          <ScrollSection navlink="/UT23" year="UT23" title="Return to winning" paddingFromTop="150px" image={UT23Cutout}/>
          <ScrollSectionUT24 year="UT24" title="Driverless debut" paddingFromTop="250px" image={UT24Cutout}/>

        </div>
      </div>
    </section>
  );
};

export default History
