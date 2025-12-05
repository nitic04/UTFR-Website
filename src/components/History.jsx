import React, { useEffect, useRef, useState } from "react";
import { Fade } from "react-awesome-reveal";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, EffectCards } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";

import UT99Cutout from "../assets/HistoricCarPhotos/UT99/UT99-Cutout.png";

import UT00Cutout from "../assets/HistoricCarPhotos/UT00/UT00-Cutout.png";
import UT01Cutout from "../assets/HistoricCarPhotos/UT01/UT01-Cutout.png";
import UT02Cutout from "../assets/HistoricCarPhotos/UT02/UT02-Cutout.png";
import UT03Cutout from "../assets/HistoricCarPhotos/UT03/UT03-Cutout.png";
import UT04Cutout from "../assets/HistoricCarPhotos/UT04/UT04-Cutout.png";
import UT05Cutout from "../assets/HistoricCarPhotos/UT05/UT05-Cutout.png";

import UT06Cutout from "../assets/HistoricCarPhotos/UT06/UT06-Cutout.png";
import UT07Cutout from "../assets/HistoricCarPhotos/UT07/UT07-Cutout.png";
import UT08Cutout from "../assets/HistoricCarPhotos/UT08/UT08-Cutout.png";
import UT09Cutout from "../assets/HistoricCarPhotos/UT09/UT09-Cutout.png";
import UT10Cutout from "../assets/HistoricCarPhotos/UT10/UT10-Cutout.png";

import UT11Cutout from "../assets/HistoricCarPhotos/UT11/UT11-Cutout.png";
import UT12Cutout from "../assets/HistoricCarPhotos/UT12/UT12-Cutout.png";
import UT14Cutout from "../assets/HistoricCarPhotos/UT14/UT14-Cutout.png";
import UT15Cutout from "../assets/HistoricCarPhotos/UT15/UT15-Cutout.png";

import UT16Cutout from "../assets/HistoricCarPhotos/UT16/UT16-Cutout.png";
import UT17Cutout from "../assets/HistoricCarPhotos/UT17/UT17-Cutout.png";
import UT18Cutout from "../assets/HistoricCarPhotos/UT18/UT18-Cutout.png";
import UT19Cutout from "../assets/HistoricCarPhotos/UT19/UT19-Cutout.png";

import UT21Cutout from "../assets/HistoricCarPhotos/UT21/UT21-Cutout.png";
import UT22Cutout from "../assets/HistoricCarPhotos/UT22/UT22-Cutout.png";
import UT23Cutout from "../assets/HistoricCarPhotos/UT23/UT23-Cutout.png";
import UT24Cutout from "../assets/HistoricCarPhotos/UT24/UT24-Cutout.png";

gsap.registerPlugin(ScrollTrigger);

// data for history
// format: { year: "1997", title: "Team was founded", link: "/1997", image: null }
// follow the format to add new years
const historyData = [
  { year: "1997", title: "Team was founded", link: "/1997", image: null },
  {
    year: "1998",
    title: "First prototype completed",
    link: "/1998",
    image: null,
  },
  {
    year: "UT99",
    title: "First competition",
    link: "/UT99",
    image: UT99Cutout,
  },
  { year: "UT00", title: "So Close", link: "/UT00", image: UT00Cutout },
  { year: "UT01", title: "Shootout starts", link: "/UT01", image: UT01Cutout },
  {
    year: "UT02",
    title: "First European Competition",
    link: "/UT02",
    image: UT02Cutout,
  },
  { year: "UT03", title: "World champions!", link: "/UT03", image: UT03Cutout },
  { year: "UT04", title: "A small dip", link: "/UT04", image: UT04Cutout },
  {
    year: "UT05",
    title: "World champions pt.2!",
    link: "/UT05",
    image: UT05Cutout,
  },
  {
    year: "UT06",
    title: "World champions pt.3!",
    link: "/UT06",
    image: UT06Cutout,
  },
  { year: "UT07", title: "Peak ICE power", link: "/UT07", image: UT07Cutout },
  { year: "UT08", title: "Monocoque", link: "/UT08", image: UT08Cutout },
  {
    year: "UT09",
    title: "Single cylinder era",
    link: "/UT09",
    image: UT09Cutout,
  },
  {
    year: "UT10",
    title: "Goodbye monocoque",
    link: "/UT10",
    image: UT10Cutout,
  },
  {
    year: "UT11",
    title: "Best FSG result for a while",
    link: "/UT11",
    image: UT11Cutout,
  },
  {
    year: "UT12",
    title: "Composite nose cone",
    link: "/UT12",
    image: UT12Cutout,
  },
  { year: "UT13", title: "Development year", link: "/UT13", image: null },
  {
    year: "UT14",
    title: "Return to competition",
    link: "/UT14",
    image: UT14Cutout,
  },
  { year: "UT15", title: "Expanding team", link: "/UT15", image: UT15Cutout },
  { year: "UT16", title: "We got our wings", link: "/UT16", image: UT16Cutout },
  { year: "UT17", title: "Logo refresh", link: "/UT17", image: UT17Cutout },
  {
    year: "UT18",
    title: "Shootout moves to Gamebridge",
    link: "/UT18",
    image: UT18Cutout,
  },
  {
    year: "UT19",
    title: "20th year of competitions",
    link: "/UT19",
    image: UT19Cutout,
  },
  { year: "UT20", title: "Covid-19", link: "/UT20", image: null },
  {
    year: "UT21",
    title: "Last dance for ICE",
    link: "/UT21",
    image: UT21Cutout,
  },
  {
    year: "UT22",
    title: "Switch to electric",
    link: "/UT22",
    image: UT22Cutout,
  },
  {
    year: "UT23",
    title: "Return to winning",
    link: "/UT23",
    image: UT23Cutout,
  },
  { year: "UT24", title: "Driverless debut", link: "/UT24", image: UT24Cutout },
];

const History = () => {
  return (
    <div className="w-full h-screen bg-[#1A1B1C] overflow-hidden relative">
      <Swiper
        direction={"vertical"}
        // Mouse sensitivity settings
        mousewheel={{
          sensitivity: 0.4,
          thresholdTime: 600,
        }}
        threshold={20}
        // The scrolling speed
        speed={600}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Mousewheel]}
        className="mySwiper h-full w-full"
      >
        {/*Map over all the data and create a swiper slide */}
        {historyData.map((item, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center">
            <div className="w-full h-full flex items-center justify-center p-4">
              <div className="relative w-full max-w-sm bg-[#2C2D2E] rounded-3xl p-6 shadow-2xl border border-[#424242] flex flex-col items-center">
                <h2 className="text-6xl font-bold text-white mb-6 tracking-tighter">
                  {item.year}
                </h2>

                {item.image ? (
                  <div
                    className="w-full h-[250px] mb-8 bg-contain bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                ) : (
                  <div className="w-full h-[250px] mb-8 flex items-center justify-center">
                    <span className="text-gray-500 italic">
                      No Vehicle Image
                    </span>
                  </div>
                )}

                <NavLink to={item.link} className="w-full">
                  <div className="group cursor-pointer flex items-center justify-between border-t border-gray-600 pt-6 mt-2 hover:text-[#d3d3d3] transition-colors">
                    <h3 className="text-2xl font-semibold text-white group-hover:text-[#d3d3d3]">
                      {item.title}
                    </h3>
                    <FaRegArrowAltCircleRight className="text-2xl text-white group-hover:text-[#d3d3d3]" />
                  </div>
                </NavLink>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default History;
