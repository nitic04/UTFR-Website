import { FaLinkedinIn } from 'react-icons/fa';
import { Fade } from "react-awesome-reveal";

const TeamMemberCard = ({ imageUrl, linkedinUrl, name, title, program }) => {
  return (
    <div className="group relative">
      {/* Image and overlay */}
      <div
        className="relative w-[90%] md:h-[500px] mx-auto rounded-md"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPositionY: "80%",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-opacity duration-600 flex items-center justify-center rounded-md hover:cursor-pointer">
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-600 text-white"
          >
            <FaLinkedinIn className="w-12 h-12" />
          </a>
        </div>
      </div>

      {/* Text Information */}
      <div className="w-[100%] my-auto">
        <Fade cascade delay={0.3} triggerOnce>
          <p className='personName text-lg font-bold'>{name}</p>
          <p className='personTitle text-sm'>{title}</p>
          <p className='personProgram text-sm'>{program}</p>
        </Fade>
      </div>
    </div>
  );
};

export default TeamMemberCard;
