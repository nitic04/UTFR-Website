import { FaLinkedin } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

const TeamMemberCard = ({ imageUrl, linkedinUrl, name, title, program }) => {
  return (
    <div>
      <div className="flip-card relative mx-auto">
        <div className="flip-card-inner relative w-full h-full text-center transition-transform duration-500 transform-style-3d group-hover:rotate-y-180">
          <div className="flip-card-front absolute w-full h-full backface-hidden bg-gray-200">
            <img
              src={imageUrl}
              alt={name}
              className="w-full h-full object-cover object-top rounded-md"
            />
          </div>

          <div className="flip-card-back absolute w-full h-full bg-blue-600 text-white flex flex-col items-center justify-center transform rotate-y-180 backface-hidden">
            {linkedinUrl ? (
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4"
            >
              <FaLinkedin className="w-16 h-16" />
            </a>
            ) : (
              <p></p>
            )}
            </div>
        </div>
      </div>
        <div className="w-[100%] my-auto">
          <Fade cascade delay={0.2} triggerOnce>
            <p className='personName text-lg font-bold'>{name}</p>
            <p className='personTitle text-sm'>{title}</p>
            <p className='personProgram text-sm pb-5'>{program}</p>
          </Fade>
        </div>
    </div>
  );
};

export default TeamMemberCard;
