import React from 'react';

import GoToTop from './GoToTop'
import { Fade } from "react-awesome-reveal";

// Shootout 2023
import Shootout2023_1 from '../assets/ShootoutPhotos/Shootout2023/Shootout2023_1.JPG'
import Shootout2023_2 from '../assets/ShootoutPhotos/Shootout2023/Shootout2023_2.JPG'
import Shootout2023_3 from '../assets/ShootoutPhotos/Shootout2023/Shootout2023_3.jpg'
import Shootout2023_4 from '../assets/ShootoutPhotos/Shootout2023/Shootout2023_4.jpg'

// Shootout 2022
import Shootout2022_1 from '../assets/ShootoutPhotos/Shootout2022/Shootout2022.jpg'
import Shootout2022_2 from '../assets/ShootoutPhotos/Shootout2022/Shootout2022_2.JPG'
import Shootout2022_3 from '../assets/ShootoutPhotos/Shootout2022/Shootout2022_3.JPG'
import Shootout2022_5 from '../assets/ShootoutPhotos/Shootout2022/Shootout2022_5.jpg'
import Shootout2022_6 from '../assets/ShootoutPhotos/Shootout2022/Shootout2022_6.jpg'
import Shootout2022_8 from '../assets/ShootoutPhotos/Shootout2022/Shootout2022_8.JPG'
import Shootout2022_9 from '../assets/ShootoutPhotos/Shootout2022/Shootout2022_9.JPG'
import Shootout2022_12 from '../assets/ShootoutPhotos/Shootout2022/Shootout2022_12.JPG'
import Shootout2022_13 from '../assets/ShootoutPhotos/Shootout2022/Shootout2022_13.JPG'
import Shootout2022_14 from '../assets/ShootoutPhotos/Shootout2022/Shootout2022_14.JPG'

// Header images
import ShootoutCard2019Image from '../assets/ShootoutPhotos/UTFRShootout2019GroupPhoto.jpeg'
import ShootoutCard2021Image from '../assets/ShootoutPhotos/UTFRShootout2021Photo.jpeg'
// import ShootoutCard2018Image from '../assets/ShootoutPhotos/UTFRShootout2018Photo.webp'
import ShootoutCard2018Image_2 from '../assets/ShootoutPhotos/UTFRShootout2018Photo_2.jpeg'

import HoosierLogo from '../assets/ShootoutPhotos/Shootout2022/HoosierLogo.png'
import Mobil1Logo from '../assets/ShootoutPhotos/Shootout2022/Mobil1Logo.png'
// import ShiftedLogo from '../assets/ShootoutPhotos/Shootout2022/ShiftedLogo.png'
import BrechinLogo from '../assets/ShootoutPhotos/Shootout2022/BrechinLogo.png'
import SAEOntarioLogo from '../assets/ShootoutPhotos/Shootout2022/SAEOntarioLogo.png'
import SponsorshipPackage from '../assets/ShootoutPhotos/Shootout2024/Shootout_Sponsorship_Package_2024.pdf'

import Slider from "react-slick"

import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="carouselArrow nextArrow">
      <FaChevronRight className={className}
      style={{ ...style, fill: 'white'}}
      onClick={onClick}/>
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="carouselArrow nextArrow">
      <FaChevronLeft className={className}
      style={{ ...style, fill: 'white'}}
      onClick={onClick}/>
    </div>
  );
}

const Shootout = () => {
  var settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: '40px',
          slidesToShow: 1,
          arrows: false,
        }
      }
    ]
  };

  // const videoRef = useRef(null);

  // useEffect(() => {
  //   // Play the video when component mounts
  //   if (videoRef.current) {
  //     videoRef.current.play();
  //   }
  // }, []);
  
  return (
    <div>
      <div className='w-full h-screen relative' style={{
        backgroundImage: `url(https://ik.imagekit.io/18gwys9x0/Shootout2023.png)`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPositionY: "80%"
        }}>
          <div className='headerOverlay'>
            <div className='h-full flex flex-col justify-end'>
              <Fade triggerOnce>
                <h1 className='font-bold text-[4.75rem] md:text-9xl text-white text-center md:text-left md:pl-10 mb-48 md:mb-24'>Shootout</h1>
              </Fade>
            </div>
          </div>
          {/* <div className='flex justify-center'>
              <div className=''>
                  <video preload="auto" ref={videoRef} loop autoPlay playsInline muted className='bg-video'>
                      <source src={ShootoutVideo} type="video/mp4"/>
                  </video>
              </div>
          </div> */}
      </div>
        <div className='text-white bg-[#181818] pb-5'>
          <Fade cascade delay={300} damping={0.2} triggerOnce>
            <h1 className='flex px-5 justify-center text-5xl font-bold pt-12 text-center'>Toronto Shootout</h1>
            <h1 className='flex px-5 justify-center text-4xl font-bold pt-3 text-center'>September 28th, 2024 - Brechin Motorsports Park</h1>
            <p className='flex justify-center text-lg text-center px-10 py-5'>The annual Toronto shootout is an event which hosts university level formula racing teams from across North America to compete against each other and showcase the hard work they have put in throughout the year. All the teams participate in a design competition series called FSAE and compete in multiple competitions during the year.</p>
            <div className='text-white pb-10 flex justify-center'>
              <button className='text-white border-2 px-5 md:px-24 py-3 mt-2 flex items-center bg-[#ffffff37] transition duration-200 hover:bg-[#0190cd] hover:border-[#0190cd] text-xl mx-5'><a href="https://docs.google.com/forms/d/e/1FAIpQLSf55OA_mx0awvEtdQoJtJ3FP6DJ4NWpl9hZlufOdCShoVWU1w/viewform?usp=sf_link" target="_blank" rel="noreferrer">Sign Up Form</a></button>
              <button className='text-white border-2 px-5 md:px-24 py-3 mt-2 flex items-center bg-[#ffffff37] transition duration-200 hover:bg-[#0190cd] hover:border-[#0190cd] text-xl mx-5'><a href="https://docs.google.com/document/d/1zXJPxuGC-46imlmR5Cu4m3mY8R3YkeXHQ_v_0CeNHZM/edit?usp=sharing" target="_blank" rel="noreferrer">Handbook</a></button>
            </div>
          </Fade>
        </div>
        <div className='text-white bg-[#242424] pb-10'>
          <Fade cascade delay={300} damping={0.2} triggerOnce>
            <h1 className='flex px-5 justify-center text-3xl font-bold pt-10 md:pb-10 pb-5 text-center'>2024 Participating Teams</h1>
            <div className='flex justify-center gap-y-2 md:gap-y-0 gap-x-10 text-2xl md:pb-5 flex-col md:flex-row text-center'>
              <a href="https://www.bearcatmotorsports.com/" target="_blank" rel="noreferrer">
                <p className='hover:text-gray-300 transition duration-300'>Bearcat Motorsports</p>
              </a>
              <a href="https://binghamtonmotorsports.com/" target="_blank" rel="noreferrer">
                <p className='hover:text-gray-300 transition duration-300'>Binghamton Motorsports
                </p>
              </a>
              <a href="https://sites.google.com/brown.edu/fsae/home" target="_blank" rel="noreferrer">
                <p className='hover:text-gray-300 transition duration-300'>Brown Formula Racing</p>
              </a>
              <a href="https://sites.clarkson.edu/cfek/" target="_blank" rel="noreferrer">
                <p className='hover:text-gray-300 transition duration-300'>Clarkson University Electric Knights</p>
              </a>
              <a href="https://concordiaformularacing.ca/" target="_blank" rel="noreferrer">
                <p className='hover:text-gray-300 transition duration-300'>Concordia Formula Racing EV</p>
              </a>
              <a href="https://www.formulauottawa.ca/" target="_blank" rel="noreferrer">
                <p className='hover:text-gray-300 transition duration-300 pb-3 md:pb-0'>Formula uOttawa</p>
              </a>
            </div>
            <div className='flex justify-center gap-y-2 md:gap-y-0 gap-x-10 text-2xl md:py-5 flex-col md:flex-row text-center'>
              <a href="https://formule-ets.ca/" target="_blank" rel="noreferrer">
                <p className='hover:text-gray-300 transition duration-300'>Formule ETS</p>
              </a>
              <a href="https://www.grizzlies-racing.org/" target="_blank" rel="noreferrer">
                <p className='hover:text-gray-300 transition duration-300'>Grizzlies Racing</p>
              </a>
              <a href="https://gryphonracing.org/" target="_blank" rel="noreferrer">
                <p className='hover:text-gray-300 transition duration-300'>Gryphon Racing</p>
              </a>
              <a href="https://macformularacing.com/" target="_blank" rel="noreferrer">
                <p className='hover:text-gray-300 transition duration-300'>MAC Formula Electric</p>
              </a>
              <a href="https://www.mcgillformulaelectric.com/" target="_blank" rel="noreferrer">
                <p className='hover:text-gray-300 transition duration-300 pb-3 md:pb-0'>McGill Formula Electric</p>
              </a>
            </div>
            <div className='flex justify-center gap-y-2 md:gap-y-0 gap-x-10 text-2xl md:py-5 flex-col md:flex-row text-center'>
              <a href="https://formulasae.mtu.edu/" target="_blank" rel="noreferrer">
                <p className='hover:text-gray-300 transition duration-300'>Michigan Tech Racing</p>
              </a>
              <a href="https://villanovafsae.com/" target="_blank" rel="noreferrer">
                <p className='hover:text-gray-300 transition duration-300'>NovaRacing</p>
              </a>
              <a href="https://engineering.ontariotechu.ca/current-students/current-undergraduate/clubs_and_societies/ontario-tech-racing.php" target="_blank" rel="noreferrer">
                <p className='hover:text-gray-300 transition duration-300'>Ontario Tech Racing</p>
              </a>
              <a href="https://www.engineering.pitt.edu/subsites/student-orgs/fsae/fsae/" target="_blank" rel="noreferrer">
                <p className='hover:text-gray-300 transition duration-300 pb-3 md:pb-0'>Panther Racing</p>
              </a>
            </div>
            <div className='flex justify-center gap-y-2 md:gap-y-0 gap-x-10 text-2xl md:py-5 flex-col md:flex-row text-center'>
              <a href="https://ravensracing.com/" target="_blank" rel="noreferrer">
                <p className='hover:text-gray-300 transition duration-300'>Ravens Racing</p>
              </a>
              <a href="https://www.ritformula.com/electric" target="_blank" rel="noreferrer">
                <p className='hover:text-gray-300 transition duration-300'>RIT Racing</p>
              </a>
              <a href="https://www.facebook.com/SherbyRacing/" target="_blank" rel="noreferrer">
                <p className='hover:text-gray-300 transition duration-300'>Sherby Racing</p>
              </a>
              <a href="https://racing.umd.edu/" target="_blank" rel="noreferrer">
                <p className='hover:text-gray-300 transition duration-300'>Terps Racing EV</p>
              </a>
            </div>
            <div className='flex justify-center gap-y-2 md:gap-y-0 gap-x-10 text-2xl md:py-5 flex-col md:flex-row text-center'>
              <a href="https://torontometformularacing.com/" target="_blank" rel="noreferrer">
                <p className='hover:text-gray-300 transition duration-300'>Toronto Metropolitan Formula Racing</p>
              </a>
              <a href="https://fsaeutoronto.ca/" target="_blank" rel="noreferrer">
                <p className='hover:text-gray-300 transition duration-300'>University of Toronto</p>
              </a>
              <a href="https://www.uwfsae.ca/" target="_blank" rel="noreferrer">
                <p className='hover:text-gray-300 transition duration-300'>University of Waterloo Formula Electric</p>
              </a>
            </div>
            <div className='flex justify-center gap-y-2 md:gap-y-0 gap-x-10 text-2xl md:py-5 flex-col md:flex-row text-center'>
              <a href="https://fsae.eng.wayne.edu/" target="_blank" rel="noreferrer">
                <p className='hover:text-gray-300 transition duration-300'>Warrior Racing | Wayne State Univ</p>
              </a>
              <a href="https://westernformularacing.org/" target="_blank" rel="noreferrer">
                <p className='hover:text-gray-300 transition duration-300'>Western Formula Racing</p>
              </a>
              <a href="https://zipsracing.org/" target="_blank" rel="noreferrer">
                <p className='hover:text-gray-300 transition duration-300'>Zips Racing
                </p>
              </a>
            </div>
          </Fade>
        </div>

        <div className='w-full bg-[#131212]'>
        <Fade cascade damping={0.2} triggerOnce>
        <h1 className='flex justify-center text-4xl font-bold pt-10 text-white'>Event Sponsors</h1>
        <p className='flex text-white justify-center text-lg text-center px-10 py-5'>Interested in sponsoring Toronto Shootout? Visit the link below to view our sponsorship package!</p>
        <div className='text-white flex justify-center'>
          <button className='text-white border-2 px-5 md:px-24 py-3 mt-2 flex items-center bg-[#ffffff37] transition duration-200 hover:bg-[#0190cd] hover:border-[#0190cd] text-xl mx-5'><a href={SponsorshipPackage} target="_blank" rel="noreferrer">Sponsorship Package</a></button>
        </div>
        <div className='flex justify-center'>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 py-10 gap-x-8 gap-y-10'>
            <a href="https://www.hoosiertire.com/" target="_blank" rel="noreferrer">
              <div className='w-[320px] h-[450px] bg-[#1E1E1E] hover:bg-[#303030] transition duration-200 rounded-md'>
                <div className='h-[200px]' style={{
                backgroundImage: `url(${HoosierLogo})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
                }}>
                </div>
                <div className='p-5'>
                  <h1 className='text-white text-2xl'>Hoosier Racing Tire</h1>
                  <p className='text-[#C1C1C1] text-base pt-3'>Hoosier generously provides valuable discount certificates to the top two teams at Toronto Shootout annually.</p>
                </div>
              </div>
            </a>
            <a href="https://www.mobil.com/en/lubricants/for-personal-vehicles/our-products/motor-oils/mobil-1-motor-oil-products" target="_blank" rel="noreferrer">
              <div className='w-[320px] h-[450px] bg-[#1E1E1E] hover:bg-[#303030] transition duration-200 rounded-md'>
                <div className='h-[200px] py-[58px] px-[15px]'>
                  <img src={Mobil1Logo} alt="" />
                </div>
                <div className='p-5'>
                  <h1 className='text-white text-2xl'>Mobil 1</h1>
                  <p className='text-[#C1C1C1] pt-3'>Mobil 1 (via David Swain Racing Products) proudly supports Toronto Shootout by supplying cases of engine oil for podium finishers.</p>
                </div>
              </div>
            </a>
            <a href="https://gamebridgegokarts.com/" target="_blank" rel="noreferrer">
              <div className='w-[320px] h-[450px] bg-[#1E1E1E] hover:bg-[#303030] transition duration-200 rounded-md'>
                <div className='h-[200px] py-[58px] px-[10px]'>
                  <img src={BrechinLogo} alt="" />
                </div>
                <div className='p-5'>
                  <h1 className='text-white text-2xl'>Brechin Motorsport Park</h1>
                  <p className='text-[#C1C1C1] pt-3'>Brechin Motorsport Park / Gamebridge Go-Karts has provided an excellent venue for Shootout since 2018.</p>
                </div>
              </div>
            </a>
            <a href="https://www.sae.org" target="_blank" rel="noreferrer">
              <div className='w-[320px] h-[450px] bg-[#1E1E1E] hover:bg-[#303030] transition duration-200 rounded-md'>
                <div className='h-[200px] py-[58px] px-[10px]'>
                  <img src={SAEOntarioLogo} alt="" />
                </div>
                <div className='p-5'>
                  <h1 className='text-white text-2xl'>SAE Central Ontario</h1>
                  <p className='text-[#C1C1C1] pt-3'>SAE Central Ontario is the local section of the International Society of Automotive Engineers. SAE Central Ontario proudly provides financial support to help make Toronto shootout a reality each year.</p>
                </div>
              </div>
            </a>
        </div>
        </div>
        </Fade>
        </div>

        <div className='text-[#F3F3F3] bg-[#181818] pb-10'>
          <Fade cascade damping={0.2} triggerOnce>
          <h1 className='flex justify-center text-4xl font-bold pt-10'>Previous Years</h1>
          <div className='justify-center pt-10'>
            <div className='grid grid-cols-1 lg:grid-cols-2 px-auto'>
              <div className='pl-0 mx-auto lg:pl-20'>
                <div className='shootoutCard w-[350px] h-[200px] md:w-[700px] md:h-[300px] mx-5 mb-16' style={{
                    backgroundImage: `url(https://ik.imagekit.io/18gwys9x0/Shootout2023.png)`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPositionY: "80%"
                    }}>
                    <h1 className='flex justify-center text-5xl font-bold pt-16 md:pt-32'>Shootout 2023</h1>
                    <div className='flex pt-3 justify-center gap-x-5'>
                      <a href="https://drive.google.com/drive/folders/1-0KWrDWQlu8jaCu4Bat6KrAITDT5xIvo?usp=sharing" target="_blank" rel="noreferrer"><p className='text-lg hover:text-gray-300 transition duration-200'>Official Results</p></a>
                      <a href="https://drive.google.com/drive/folders/1--OE2K79EN1onx6phieEd4jFBua8pgRU?usp=sharing" target="_blank" rel="noreferrer"><p className='text-lg hover:text-gray-300 transition duration-200'>Official Photography</p></a>
                    </div>
                  </div>

                  <div className='shootoutCard w-[350px] h-[200px] md:w-[700px] md:h-[300px] mx-5 mb-5' style={{
                        backgroundImage: `url(${ShootoutCard2021Image})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                        }}>
                      <h1 className='flex justify-center text-5xl font-bold pt-16 md:pt-32'>Shootout 2021</h1>
                      <div className='flex pt-3 justify-center gap-x-5'>
                        <a href="https://docs.google.com/spreadsheets/u/4/d/149xlNqXhhEaQdj7Bto80WQzUqyR0rrDdc8-bdC4OVwU/edit?usp=sharing" target="_blank" rel="noreferrer"><p className='text-lg hover:text-gray-300 transition duration-200'>Official Results</p></a>
                        <a href="https://drive.google.com/drive/u/3/folders/1w77s7Mhibkfyakz1BfZ6w1TiKGmTew2A" target="_blank" rel="noreferrer"><p className='text-lg hover:text-gray-300 transition duration-200'>Official Photography</p></a>
                      </div>
                  </div>
                </div>
              <div className='mx-auto'>
              <div className='shootoutCard w-[350px] h-[200px] md:w-[700px] md:h-[300px] mx-5 mb-16' style={{
                  backgroundImage: `url(${ShootoutCard2019Image})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat'
                  }}>
                  <h1 className='flex justify-center text-5xl font-bold pt-16 md:pt-32'>Shootout 2019</h1>
                  <div className='flex pt-3 justify-center gap-x-5'>
                    <a href="https://docs.google.com/spreadsheets/d/1YENFcnf0Cyh2U3froM9PQei7RHiANrUHWjx8A5oifwg/edit#gid=224179064" target="_blank" rel="noreferrer"><p className='text-lg hover:text-gray-300 transition duration-200'>Official Results</p></a>
                    <a href="https://drive.google.com/drive/u/3/folders/14EwBEUBqF-8kOvZG1zvI1CQpSOmkyS5j" target="_blank" rel="noreferrer"><p className='text-lg hover:text-gray-300 transition duration-200' >Official Photography</p></a>
                  </div>
                </div>
                
                <div className='shootoutCard w-[350px] h-[200px] md:w-[700px] md:h-[300px] mx-5 mb-5' style={{
                  backgroundImage: `url(${ShootoutCard2018Image_2})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat'
                  }}>
                  <h1 className='flex justify-center text-5xl font-bold pt-16 md:pt-32'>Shootout 2018</h1>
                  <div className='flex pt-3 justify-center gap-x-5'>
                    <a href="https://docs.google.com/spreadsheets/u/1/d/1DG3YR5VZxDNAfsyb20JhmGvHxYcLyYVY28OfpoZLQi0/edit?usp=drive_web&ouid=105352858794991473194" target="_blank" rel="noreferrer"><p className='text-lg hover:text-gray-300 transition duration-200'>Official Results</p></a>
                    <a href="https://drive.google.com/drive/u/1/folders/1yqlPyXtykjWb5A9PesBc4De_VZ7fqV9l" target="_blank" rel="noreferrer"><p className='text-lg hover:text-gray-300 transition duration-200'>Official Photography</p></a>
                  </div>
                </div>

              </div>
            </div>
          </div>
          </Fade>
        </div>
        
        <div className='py-10 grid place-items-center bg-[#1D1D1D]'>
          <Slider {...settings} className='lg:w-[1200px] md:w-[800px] w-[400px]'>
              <div className="carouselCard">
                <img alt="" src={Shootout2023_1}/>
              </div>
              <div className="carouselCard">
                <img alt="" src={Shootout2023_2}/>
              </div>
              <div className="carouselCard">
                <img alt="" src={Shootout2023_3}/>
              </div>
              <div className="carouselCard">
                <img alt="" src={Shootout2023_4}/>
              </div>
              <div className="carouselCard">
                <img alt="" src={Shootout2022_1}/>
              </div>
              <div className="carouselCard">
                <img alt="" src={Shootout2022_2}/>
              </div>
              <div className="carouselCard">
                <img alt="" src={Shootout2022_3}/>
              </div>
              <div className="carouselCard">
                <img alt="" src={Shootout2022_5}/>
              </div>
              <div className="carouselCard">
                <img alt="" src={Shootout2022_6}/>
              </div>
              <div className="carouselCard">
                <img alt="" src={Shootout2022_8}/>
              </div>
              <div className="carouselCard">
                <img alt="" src={Shootout2022_9}/>
              </div>
              <div className="carouselCard">
                <img alt="" src={Shootout2022_12}/>
              </div>
              <div className="carouselCard">
                <img alt="" src={Shootout2022_13}/>
              </div>
              <div className="carouselCard">
                <img alt="" src={Shootout2022_14}/>
              </div>
          </Slider>
        </div>

        <GoToTop />
    </div>
  )
}

export default Shootout
