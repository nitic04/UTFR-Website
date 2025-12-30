import React from "react";
import { FaRegArrowAltCircleRight, FaChevronDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, Keyboard } from "swiper/modules";

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
    <div className="flex flex-col justify-center">
      <div className="w-full h-[100dvh] bg-[#1A1B1C] overflow-hidden relative">
        <Swiper
          direction="vertical"
          keyboard={{ enabled: true, onlyInViewport: true }}
          mousewheel={{
            sensitivity: 0.1,
            thresholdTime: 1000,
            forceToAxis: true,
            thresholdDelta: 50,
          }}
          speed={600}
          pagination={{ clickable: true }}
          modules={[Pagination, Mousewheel, Keyboard]}
          className="h-full w-full"
        >
          <SwiperSlide className="flex items-center justify-center">
            <div className="bg-[#fcfcfc] w-full h-full flex flex-col items-center justify-center pr-14 pl-4 md:pr-20 relative md:pb-32">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6">
                Team History
              </h2>
              <div className="max-w-4xl">
                <p className="px-4 md:px-8 py-5 text-center text-sm md:text-lg lg:text-xl leading-relaxed">
                  The University of Toronto Formula SAE Racing Team was founded
                  during the 1996-97 academic year.
                </p>
                <p className="px-4 md:px-8 pb-10 text-center text-sm md:text-lg lg:text-xl leading-relaxed">
                  Over the course of the 2000s, several different chassis
                  concepts were explored.
                </p>
              </div>
              <div className="absolute bottom-28 md:bottom-64 flex flex-col items-center">
                <span className="text-gray-500 text-xs md:text-sm font-semibold mb-2 uppercase tracking-widest">
                  Scroll Down to See Our History
                </span>
                <FaChevronDown className="text-gray-500 text-xl animate-bounce" />
              </div>
            </div>
          </SwiperSlide>

          {historyData.map((item, index) => (
            <SwiperSlide
              key={index + 1}
              className="flex items-center justify-center h-full"
            >
              <div className="w-full h-full flex items-center justify-center pl-4 pr-12 py-4 sm:p-8 sm:pr-8 md:p-8 md:pr-20 md:pb-36 lg:p-12 lg:pr-24">
                <div
                  className={`
                        relative w-full bg-[#2C2D2E] rounded-2xl md:rounded-[3rem]
                        p-4 md:p-8 lg:p-12 shadow-2xl border border-[#424242]
                        flex flex-col items-center justify-center
                        ${
                          item.image
                            ? "max-w-sm landscape:max-w-7xl landscape:flex-row landscape:gap-16"
                            : "max-w-sm landscape:max-w-7xl"
                        }
                      `}
                >
                  <h2
                    className={`text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 tracking-tighter ${
                      item.image ? "landscape:hidden" : ""
                    }`}
                  >
                    {item.year}
                  </h2>

                  {item.image && (
                    <div
                      className="w-full h-[200px] md:h-[250px] lg:h-[350px] landscape:h-[400px] landscape:w-1/2 bg-contain bg-center bg-no-repeat"
                      style={{ backgroundImage: `url(${item.image})` }}
                    />
                  )}

                  <div
                    className={`w-full flex flex-col justify-center ${
                      item.image ? "landscape:w-1/2" : ""
                    }`}
                  >
                    <h2 className="hidden landscape:block text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                      {item.year}
                    </h2>
                    <NavLink to={item.link} className="w-full">
                      <div className="group flex items-center justify-between border-t border-gray-600 pt-6 hover:text-[#d3d3d3] transition-colors">
                        <h3 className="text-xl md:text-3xl lg:text-4xl font-semibold text-white">
                          {item.title}
                        </h3>
                        <FaRegArrowAltCircleRight className="text-xl md:text-3xl lg:text-4xl text-white" />
                      </div>
                    </NavLink>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default History;
