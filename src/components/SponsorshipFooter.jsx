import React from "react";
import MIE from "../assets/Sponsors/SponsorLogosWhite/UofTMIE.png";
import Skule from "../assets/Sponsors/SponsorLogosWhite/SkuleWhite.png";

import MC78 from "../assets/Sponsors/SponsorLogosWhite/MC78FilledWhite.png";
import EngAlumni from "../assets/Sponsors/SponsorLogosWhite/EngAlumniNetwork.png";
import ActNow from "../assets/Sponsors/SponsorLogosWhite/ActNowWhite.png";

const SponsorshipFooter = () => {
  return (
    <div className="w-full bg-[#131212]">
      <div className="px-16">
        <div className="flex justify-center items-center md:pt-5">
          <div className="grid grid-cols-3 gap-x-5">
            <a
              href="https://www.mie.utoronto.ca/student-life-services/machine-shop/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="sponsorImg2 py-2" src={MC78} alt="" />
            </a>
            <a
              href="https://skule.ca/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="sponsorImg2" src={Skule} alt="" />
            </a>
            <a href="https://rlxsolutions.com/" target="_blank" rel="noreferrer">
              <img className="sponsorImg2" src="https://ik.imagekit.io/utfroutreach/Diamond/RLXWhite.png?updatedAt=1758336872527" alt="" />
            </a>
          </div>
        </div>

        <div className="flex justify-center items-center md:py-5">
          <div className="grid grid-cols-3 gap-x-5">
            <a href="https://alumni.engineering.utoronto.ca/engineering-alumni-network/" target="_blank" rel="noreferrer">
              <img className="sponsorImg2" src={EngAlumni} alt="" />
            </a>
            <a href="https://www.actnowhpc.com/" target="_blank" rel="noreferrer">
              <img className="sponsorImg2" src={ActNow} alt="" />
            </a>
            <a
              href="https://www.mie.utoronto.ca/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="sponsorImg2 px-5" src={MIE} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorshipFooter;
