import React, { useRef } from 'react'
import HeaderImage from '../assets/TeamMembers/ActionPhotos/chassis_pic.jpeg'
// import DVPic from '../assets/TeamMembers/ActionPhotos/dv_pic.jpeg'
import ErgoPic from '../assets/TeamMembers/ActionPhotos/ergo_pic.jpeg'
import SuspensionPic from '../assets/TeamMembers/ActionPhotos/suspension_pic.jpeg'
import GoToTop from './GoToTop'
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { Fade } from "react-awesome-reveal";

const History = () => {
  const form = useRef();
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_e2337wc", "template_ubh8yv3", form.current, "qTIbrqC-6NrnqvIk0")
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
       Swal.fire({
        icon: "success",
        title: "Message Sent Successfully"
      })
    }, function(error) {
       console.log('FAILED...', error);
       Swal.fire({
        icon: "error",
        title: "Ooops, something went wrong",
        text: error.text,
      })
    });
  };

  return (
    <div className='bg-[#181818]'>
      <div className='w-full h-screen' style={{
        backgroundImage: `url(${HeaderImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}>
      <Fade triggerOnce>
      <h1 className='text-8xl text-white pt-[600px] px-12 font-bold'>Join Us</h1>
      </Fade>
      </div>
      <div>
        <div className='text-white flex flex-col justify-center items-center w-full h-full'>
          <div className='h-full w-full about grid lg:grid-cols-2'>
            <div className='my-auto p-10'>
              <Fade cascade damping={0.2} triggerOnce>
              <p className='text-4xl font-bold inline border-b-4 border-[#ED3833]'>Our History</p>
              <p className='pt-5'>The University of Toronto began its involvement in FSAE in 1997, and completed a prototype vehicle in 1998. Through testing and research on the vehicle, a second, lighter frame was constructed in 1999. In 2003, 2005, and 2006, the team took three overall championships at Formula Student UK - a record that would stand until 2016.</p>
              <p className='pt-5 text-white'>Over the course of the early 2000s, several different chassis concepts were explored, eventually moving from steel spaceframes, to hybrid concepts, to a full monocoque. In 2010, the team switched to the light single cylinder engines that still power our cars today. In 2016, our first aerodynamics package was created to improve high speed cornering capability. In 2019, the team continued to develop the hybrid chassis concept, and introduced prototypes for a drag reduction system and electric shifter. The team continues to place respectably in rankings in both static and dynamic competitions.</p>
              </Fade>
            </div>
            <div>
              <Fade>
              <img src={ErgoPic} className="py-10 px-10" alt="" />
              </Fade>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='text-white flex flex-col justify-center items-center w-full h-full'>
          <div className='h-full w-full about grid lg:grid-cols-2'>
            <div className='my-auto p-10'>
              <Fade cascade damping={0.2} triggerOnce>
              <p className='text-4xl font-bold inline border-b-4 border-[#ED3833]'>What's in it for me?</p>
              <p className='pt-5'>Formula Student allows students to apply the theory that they have learned in the classroom within a real and exciting engineering environment. This type of integrated learning experience provides students with a competitive advantage as potential employers, later on, often look to hire graduates who have had strong practical, as well as academic experience. In fact, most team members completing their fourth year of study choose to focus their thesis research on an aspect of the car. In the past, thesis projects have contained research on the car suspension, chassis, air intake, fuel injection, and manufacturing.</p>
              <p className='pt-5 text-white'>In addition to gaining valuable engineering experience, students also acquire the chance to develop managerial, leadership as well as important team communication skills. However, aside from the educational benefits that this project brings, it also allows University of Toronto students to gain recognition at public events. Events such as Formula SAE/Formula Student all provide students with the chance to exhibit their hard work to the public and to recognize the sponsors that make this project possible.</p>
              </Fade>
            </div>
            <div>
              <img src={SuspensionPic} className="pt-10 px-10" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className='text-white items-center pb-10 px-10'>
        <Fade cascade damping={0.2} triggerOnce>
        <div className='flex pt-10 justify-center'>
          <p className='text-4xl font-bold inline border-b-4 border-[#ED3833]'>How do I get involved?</p>
        </div>
        <p className='pt-5 text-white text-center'>UTFR welcomes all students at the University of Toronto! New members are not required to have any previous design experience or knowledge of racing, engineering, or anything else – all we ask is that you come eager to learn and ready to work! Recruitment events begin in the first week of the Fall Semester. Detailed information sessions will be delivered by the senior team to all those interested in starting in September. After the orientations in September, a culture of project based learning will continue the student’s development. Recruitment happens all year round, there is no better time to join than now! If you missed us during frosh week, feel free to contact us below!</p>
        </Fade>
      </div>
      <Fade delay={300} triggerOnce>
      <div name='contact' className='w-full bg-[#131212] flex justify-center items-center px-10 p-4'>
        <form className='flex flex-col max-w-[1000px] w-full' ref={form} onSubmit={handleOnSubmit}>
          <div className='pb-8'>
              <p className='text-4xl font-bold text-white pt-5'>Contact Us</p>
          </div>
          <div className='flex space-x-3'>
            <input className='bg-gray-300 p-2 w-full' type="text" placeholder='First Name (Required)' name='firstName' required/>
            <input className='bg-gray-300 p-2 w-full' type="text" placeholder='Last Name (Required)' name='lastName' required/>
          </div>
          <div className='flex space-x-3'>
            <input className='mt-4 p-2 bg-gray-300 w-full' type="email" placeholder='Email (Required)' name='email' required/>
            <input className='mt-4 p-2 bg-gray-300 w-full' type="tel" placeholder='Phone Number (Optional)' name='phone'/>
          </div>
          <input className='mt-4 p-2 bg-gray-300' type="text" placeholder='Subject (Required)' name='subject' required/>
          <textarea className='mt-4 p-2 bg-gray-300' name="message" rows="10" placeholder='Message (Required)' required></textarea>
          <button type="submit" className='text-white border-2 transition duration-200 hover:bg-[#0190cd] hover:border-[#0190cd] px-10 py-3 my-8 mx-auto flex items-center'>Submit</button>
        </form>
      </div>
      </Fade>
      <GoToTop />
    </div>
  )
}

export default History
