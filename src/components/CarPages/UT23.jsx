import UT23Cutout from '../../assets/HistoricCarPhotos/UT23/2023-Cutout-2.png'
import UT23_1 from '../../assets/CzechRepublic2023/Czech3.webp'
import HistoryCarousel from '../HistoryCarousel'
import { Fade } from "react-awesome-reveal";
import GoToTop from '../GoToTop'
import TeamMembersComponentSectioned from './TeamMembersComponent';

const UT23 = () => {
    const slides = [
        {
          image: UT23_1,
          description: 'The team secured 1st place overall in the 2023 Formula SAE competition in New Hampshire'
        },
        {
          image: UT23_1,
          description: 'UTFR\'s first electric and driverless capable car was unveiled!'
        },
        {
            image: UT23_1,
            description: 'The team secured 1st place overall in the 2023 Formula SAE competition in New Hampshire'
          },
          {
            image: UT23_1,
            description: 'UTFR\'s first electric and driverless capable car was unveiled!'
          },
        // Add more slides here
      ];

  return (
    <div>
        <div className="h-screen bg-[#B6C1D0]">
            <Fade cascade damping={0.2} triggerOnce>
            <h1 className="carTitle text-center text-[130px] md:text-[280px] font-bold text-white pt-[250px]">UT23</h1>
            <img className="mx-auto pt-10 w-[1000px]" src={UT23Cutout} alt="" />
            <div className='grid space-y-8 md:space-y-0 md:grid-cols-3 pt-10 md:pt-5'>
                <div>
                    <h2 className="text-[#3A4254] text-center text-xl md:text-2xl font-bold">Top Speed</h2>
                    <h2 className="text-center text-white text-3xl md:text-4xl font-bold">116 km/h</h2>
                </div>
                <div>
                    <h2 className="text-[#3A4254] text-center text-xl md:text-2xl font-bold">75m Acceleration</h2>
                    <h2 className="text-center text-white text-3xl md:text-4xl font-bold">4.26 s</h2>
                </div>
                <div>
                    <h2 className="text-[#3A4254] text-center text-xl md:text-2xl font-bold">Peak Power</h2>
                    <h2 className="text-center text-white text-3xl md:text-4xl font-bold">109 kW at 5500 RPM</h2>
                </div>
            </div>
            </Fade>
        </div>
        <div className='bg-[#303949] grid lg:grid-cols-2 text-white'>
            <div className='px-10 py-10 lg:px-24 lg:py-32'>
                <Fade cascade damping={0.2} triggerOnce>
                <h1 className='text-5xl md:text-6xl font-bold pb-10'>OVERVIEW</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime laboriosam ex corporis pariatur aperiam, natus, quidem, eaque nemo adipisci dolorem blanditiis optio. Adipisci fuga perferendis earum non delectus accusamus a! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime laboriosam ex corporis pariatur aperiam, natus, quidem, eaque nemo adipisci dolorem blanditiis optio. Adipisci fuga perferendis earum non delectus accusamus a! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime laboriosam ex corporis pariatur aperiam, natus, quidem, eaque nemo adipisci dolorem blanditiis optio. Adipisci fuga perferendis earum non delectus accusamus a! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime laboriosam ex corporis pariatur aperiam, natus, quidem, eaque nemo adipisci dolorem blanditiis optio. Adipisci fuga perferendis earum non delectus accusamus a! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime laboriosam ex corporis pariatur aperiam, natus, quidem, eaque nemo adipisci dolorem blanditiis optio. Adipisci fuga perferendis earum non delectus accusamus a! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime laboriosam ex corporis pariatur aperiam, natus, quidem, eaque nemo adipisci dolorem blanditiis optio. Adipisci fuga perferendis earum non delectus accusamus a! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime laboriosam ex corporis pariatur aperiam, natus, quidem, eaque nemo adipisci dolorem blanditiis optio. Adipisci fuga perferendis earum non delectus accusamus a!</p>
                </Fade>
            </div>
            <div className='mx-auto my-auto px-10 pb-10 lg:pt-24 lg:pr-24'>
                <Fade cascade damping={0.2} triggerOnce>
                <img src={UT23_1} alt="" />
                </Fade>
            </div>
        </div>
        <div className='bg-[#062644] text-white'>
            <Fade cascade damping={0.2} triggerOnce>
            <h1 className='text-5xl md:text-6xl font-bold py-10 text-center'>COMPETITIONS</h1>
            <div className='grid lg:grid-cols-3 items-center pb-10'>
                <div className='px-10'>
                    <div className='competitionCard h-[400px]' style={{
                        backgroundImage: `url(${UT23_1})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPositionY: "80%"
                        }}>
                    </div>
                    <Fade cascade damping={0.2} triggerOnce>
                    <h3 className='text-center text-2xl pt-5'>New Hampshire Formula</h3>
                    <h3 className='text-center text-2xl'>Hybrid + Electric</h3>
                    <h3 className='text-center text-2xl font-bold pb-10 lg:pb-0'>1st Place Overall</h3>
                    </Fade>
                </div>
                <div className='px-10'>
                    <div className='competitionCard h-[400px]' style={{
                        backgroundImage: `url(${UT23_1})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPositionY: "80%"
                        }}>
                    </div>
                    <Fade cascade damping={0.2} triggerOnce>
                    <h3 className='text-center text-2xl pt-5'>Formula SAE Electric Michigan</h3>
                    <h3 className='text-center text-2xl font-bold'>5th Place Overall</h3>
                    <h3 className='text-center text-2xl text-[#062644] lg:pb-0'>Formula SAE Electric Michigan</h3>
                    </Fade>
                </div>
                <div className='px-10'>
                    <div className='competitionCard h-[400px]' style={{
                        backgroundImage: `url(${UT23_1})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPositionY: "80%"
                        }}>
                    </div>
                    <Fade cascade damping={0.2} triggerOnce>
                    <h3 className='text-center text-2xl pt-5'>Formula Student Czech Republic</h3>
                    <h3 className='text-center text-2xl font-bold'>6th Place Overall</h3>
                    <h3 className='text-center text-2xl font-bold lg:pb-0'>1st Place in EV Efficiency</h3>
                    </Fade>
                </div>
            </div>
            </Fade>
        </div>
        <div className='bg-[#13191F]'>
            <Fade cascade damping={0.2} triggerOnce>
            <h1 className='text-5xl md:text-6xl font-bold pt-10 pb-10 text-center text-white'>SEE THE UT23 IN ACTION</h1>
            <iframe className="w-[70vw] h-[80vh] mx-auto pb-10" src="https://www.youtube.com/embed/ilPiE-aTMGQ?si=iaf0mMtAU3mIGKkK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </Fade>
        </div>

        <TeamMembersComponentSectioned />
        
        <div className='bg-[#13191F]'>
            <div className=''>
            <Fade cascade damping={0.2} triggerOnce>
                <h1 className='text-5xl text-white pt-10 text-center lg:text-6xl pb-5 flex justify-center font-bold'>PHOTO GALLERY</h1>
                <div className='lg:px-52'>
                    <HistoryCarousel slides={slides}/>
                </div>
            </Fade>
            </div>
        </div>
        <div className='h-screen bg-[#062644]'>
            <Fade cascade damping={0.2} triggerOnce>
            <h1 className='text-5xl text-white pt-10 text-center lg:text-6xl pb-5 flex justify-center font-bold'>TECHNICAL SPECIFICATIONS</h1>
            <div className='flex text-white justify-center pb-10'>
                <div className='w-[850px] pb-3 px-5'>
                    <Fade cascade damping={0.1} triggerOnce>
                    <div className='flex border-b-2'>
                        <span className='hidden md:inline md:text-2xl py-5'>Overall Weight (Without Driver)</span>
                        <span className='inline md:hidden md:text-2xl py-5'>Overall Weight (w/o Driver)</span>
                        <p className='md:text-2xl py-5 ml-auto'>260 kg</p>
                    </div>
                    <div className='flex border-b-2'>
                        <p className='md:text-2xl py-5'>Length</p>
                        <p className='md:text-2xl py-5 ml-auto'>2971 mm</p>
                    </div>
                    <div className='flex border-b-2'>
                        <p className='md:text-2xl py-5'>Width</p>
                        <p className='md:text-2xl py-5 ml-auto'>1497 mm</p>
                    </div>
                    <div className='flex border-b-2'>
                        <p className='md:text-2xl py-5'>Height</p>
                        <p className='md:text-2xl py-5 ml-auto'>1191 mm</p>
                    </div>
                    <div className='flex border-b-2'>
                        <p className='md:text-2xl py-5'>Motor</p>
                        <p className='md:text-2xl py-5 ml-auto'>EMRAX 228 High Voltage</p>
                    </div>
                    <div className='flex border-b-2'>
                        <p className='md:text-2xl py-5'>Length</p>
                        <p className='md:text-2xl py-5 ml-auto'>2971 mm</p>
                    </div>
                    <div className='flex border-b-2'>
                        <p className='md:text-2xl py-5'>Width</p>
                        <p className='md:text-2xl py-5 ml-auto'>1497 mm</p>
                    </div>
                    <div className='flex border-b-2'>
                        <p className='md:text-2xl py-5'>Height</p>
                        <p className='md:text-2xl py-5 ml-auto'>1191 mm</p>
                    </div>
                    <div className='flex border-b-2'>
                        <p className='md:text-2xl py-5'>Motor</p>
                        <p className='md:text-2xl py-5 ml-auto'>EMRAX 228 High Voltage</p>
                    </div>
                    <div className='flex border-b-2'>
                        <p className='md:text-2xl py-5'>Motor</p>
                        <p className='md:text-2xl py-5 ml-auto'>EMRAX 228 High Voltage</p>
                    </div>
                    </Fade>
                </div>
            </div>
            </Fade>
        </div>
        <GoToTop />
    </div>
  )
}
export default UT23
