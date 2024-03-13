import React, { useEffect, useRef } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import car from '../assets/HistoricCarPhotos/UT01/UT01.jpeg';
import CzechBackground from '../assets/CzechRepublic2023/CzechCircuit.png'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

import UT99 from '../assets/HistoricCarPhotos/UT99/UT99.jpeg'
import UT00 from '../assets/HistoricCarPhotos/UT00/UT00.jpeg'
import UT01 from '../assets/HistoricCarPhotos/UT01/UT01.jpeg'
import UT03 from '../assets/HistoricCarPhotos/UT03/UT03.jpeg'
import UT04 from '../assets/HistoricCarPhotos/UT04/UT04.png'
import UT05 from '../assets/HistoricCarPhotos/UT05/UT05.jpeg'
import UT07 from '../assets/HistoricCarPhotos/UT07/UT07.jpeg'
import UT08 from '../assets/HistoricCarPhotos/UT08/UT08_4.jpeg'
import UT09 from '../assets/HistoricCarPhotos/UT09/UT09.jpeg'
import UT10 from '../assets/HistoricCarPhotos/UT10/UT10.jpeg'
import UT11 from '../assets/HistoricCarPhotos/UT11/UT11.jpeg'
import UT15 from '../assets/HistoricCarPhotos/UT15/UT15.jpeg'
import UT16 from '../assets/HistoricCarPhotos/UT16/UT16.jpeg'
import UT17 from '../assets/HistoricCarPhotos/UT17/UT17.jpeg'
import UT18 from '../assets/HistoricCarPhotos/UT18/UT18.jpeg'
import UT19 from '../assets/HistoricCarPhotos/UT19/UT19.jpeg'
import UT21 from '../assets/HistoricCarPhotos/UT21/UT21.jpeg'
import UT22 from '../assets/HistoricCarPhotos/UT22/UT22.jpeg'
import UT23 from '../assets/HistoricCarPhotos/UT23/UT23_Molson.jpeg'

// import UT99Cutout from '../assets/HistoricCarPhotos/UT99/UT99_Cutout.png'

// import UT00Cutout from '../assets/HistoricCarPhotos/UT00/UT00_Cutout.png'
// import UT01Cutout from '../assets/HistoricCarPhotos/UT01/UT01_Cutout.png'
// import UT02Cutout from '../assets/HistoricCarPhotos/UT02/UT02_Cutout.png'
import UT03Cutout from '../assets/HistoricCarPhotos/UT03/UT03_Cutout.png'
import UT04Cutout from '../assets/HistoricCarPhotos/UT04/UT04_Cutout.png'
// import UT05Cutout from '../assets/HistoricCarPhotos/UT05/UT05_Cutout.png'
// import UT06Cutout from '../assets/HistoricCarPhotos/UT06/UT06_Cutout.png'
import UT07Cutout from '../assets/HistoricCarPhotos/UT07/UT07_Cutout.png'
// import UT08Cutout from '../assets/HistoricCarPhotos/UT08/UT08_Cutout.png'
import UT09Cutout from '../assets/HistoricCarPhotos/UT09/UT09_Cutout.png'
import UT10Cutout from '../assets/HistoricCarPhotos/UT10/UT10_Cutout.png'

import UT11Cutout from '../assets/HistoricCarPhotos/UT11/UT11_Cutout.png'
import UT12Cutout from '../assets/HistoricCarPhotos/UT12/UT12_Cutout.png'
// import UT13Cutout from '../assets/HistoricCarPhotos/UT13/UT13_Cutout.png'
// import UT14Cutout from '../assets/HistoricCarPhotos/UT14/UT14_Cutout.png'
import UT15Cutout from '../assets/HistoricCarPhotos/UT15/UT15_Cutout.png'
import UT16Cutout from '../assets/HistoricCarPhotos/UT16/UT16_Cutout.png'
import UT17Cutout from '../assets/HistoricCarPhotos/UT17/UT17_Cutout.png'
import UT18Cutout from '../assets/HistoricCarPhotos/UT18/UT18_Cutout.png'
import UT19Cutout from '../assets/HistoricCarPhotos/UT19/UT19_Cutout.png'
// import UT20Cutout from '../assets/HistoricCarPhotos/UT20/UT20_Cutout.png'

import UT21Cutout from '../assets/HistoricCarPhotos/UT21/UT21_Cutout.png'
import UT22Cutout from '../assets/HistoricCarPhotos/UT22/UT22_Cutout.png'
import UT23Cutout from '../assets/HistoricCarPhotos/UT23/UT23_Cutout.png'
// import UT24Cutout from '../assets/HistoricCarPhotos/UT24/UT24_Cutout.png'

gsap.registerPlugin(ScrollTrigger);

const ScrollSection = ({ year, title, paddingTop, image }) => {
  return (
    <div className={`scroll-section px-10 pt-[250px]`}>
      <h2 className='text-6xl text-center pb-3'>{year}</h2>
      <div className='w-[500px] h-[280px]' style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat'
      }}>
      </div>
      <NavLink to="/UT23">
        <div className='cursor-pointer transition duration-200 hover:text-[#d3d3d3] flex items-center'>
          <h2 className="text-2xl pt-2 flex-grow">{title}</h2>
          <FaRegArrowAltCircleRight className="text-2xl"/>
        </div>
      </NavLink>
    </div>
  );
};

const History = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  
  useEffect(() => {
    const pin = gsap.fromTo(sectionRef.current, {
      translateX: 0
    }, {
      translateX: "-900vw",
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
  
    return () => {
      pin.kill();
    };
  }, []);
  

  return (
    <section className='scroll-section-outer bg-[#1A1B1C] text-white' >
      <div ref={triggerRef}>
        <div ref={sectionRef} className='scroll-section-inner'>
          <div className='scroll-section pt-[115px] px-5'>
            <div className='bg-[#424242] w-[380px] h-[700px]'>
              <h2 className="text-5xl pl-10 pt-10 font-bold">Team History</h2>
              <p className="px-10 py-5">The University of Toronto Formula SAE Racing Team was founded during the 1996-97 academic year. Leading up to our first competition season in 1999 the team was busy finding sponsors, conducting R&D and developing a prototype vehicle In 2003, 2005, and 2006, the team took three overall championships at Formula Student UK - a record that would stand until 2016! We also placed in the top 5 in 2002, 2004 and 2007.</p>
              <p className="px-10 pb-10">Over the course of the 2000s, several different chassis concepts were explored, moving from steel space frames to hybrid concepts, and finally to a full carbon fibre monocoque by the end of the decade. Continuing our technical developments in 2016 we manufactured our first aerodynamics package, which included multi-element front and rear wings.</p>
            </div>
          </div>

          <ScrollSection year="1997" title="Team was founded" paddingTop="72" image={UT99}/>
          <ScrollSection year="1998" title="First prototype completed" paddingTop="32" image={UT99}/>
          <ScrollSection year="UT99" title="First competition" paddingTop="72" image={UT03Cutout}/>

          <ScrollSection year="UT00" title="First European competition" paddingTop="72" image={UT00}/>
          <ScrollSection year="UT01" title="Shootout starts" paddingTop="32" image={UT01}/>
          <ScrollSection year="UT02" title="So close" paddingTop="72" image={UT01}/>
          <ScrollSection year="UT03" title="World champions" paddingTop="72" image={UT03}/>
          <ScrollSection year="UT04" title="A small dip" paddingTop="32" image={UT04Cutout}/>

          <ScrollSection year="UT05" title="World champions!" paddingTop="72" image={UT05}/>
          <ScrollSection year="UT06" title="World champions!" paddingTop="72" image={UT01}/>
          <ScrollSection year="UT07" title="Peak ICE power" paddingTop="32" image={UT07Cutout}/>
          <ScrollSection year="UT08" title="Monocoque" paddingTop="72" image={UT08}/>
          <ScrollSection year="UT09" title="Single cylinder era" paddingTop="72" image={UT09Cutout}/>

          <ScrollSection year="UT10" title="Goodbye monocoque" paddingTop="32" image={UT10Cutout}/>
          <ScrollSection year="UT11" title="Best FSG result for a while" paddingTop="72" image={UT11Cutout}/>
          <ScrollSection year="UT12" title="Composite nose cone" paddingTop="72" image={UT12Cutout}/>
          <ScrollSection year="UT13" title="Development year" paddingTop="32" image={UT01}/>
          <ScrollSection year="UT14" title="Return to competition" paddingTop="72" image={UT01}/>

          <ScrollSection year="UT15" title="Expanding team" paddingTop="72" image={UT15Cutout}/>
          <ScrollSection year="UT16" title="We got our wings" paddingTop="32" image={UT16Cutout}/>
          <ScrollSection year="UT17" title="Logo refresh" paddingTop="72" image={UT17Cutout}/>
          <ScrollSection year="UT18" title="Shootout moves to Gamebridge" paddingTop="72" image={UT18Cutout}/>
          <ScrollSection year="UT19" title="20th year of competitions" paddingTop="32" image={UT19Cutout}/>

          <ScrollSection year="UT20" title="Covid-19" paddingTop="72" image={UT01}/>
          <ScrollSection year="UT21" title="Last dance for ICE" paddingTop="72" image={UT21Cutout}/>
          <ScrollSection year="UT22" title="Switch to electric" paddingTop="32" image={UT22Cutout}/>
          <ScrollSection year="UT23" title="Return to winning" paddingTop="72" image={UT23Cutout}/>
          <ScrollSection year="UT24" title="Driverless debut" paddingTop="72" image={UT23}/>

        </div>
      </div>
    </section>
  );
};

export default History;
