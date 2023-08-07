import React, { useRef } from 'react'
import HeaderImage from '../assets/TeamMembers/ActionPhotos/chassis_pic.jpeg'
// import DVPic from '../assets/TeamMembers/ActionPhotos/dv_pic.jpeg'
import ErgoPic from '../assets/TeamMembers/ActionPhotos/ergo_pic.jpeg'
import SuspensionPic from '../assets/TeamMembers/ActionPhotos/suspension_pic.jpeg'
import GoToTop from './GoToTop'
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

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
      <h1 className='text-8xl text-white pt-[650px] px-12 font-bold'>Join Us</h1>
      </div>
      <div>
        <div className='text-white flex flex-col justify-center items-center w-full h-full'>
          <div className='h-full w-full about grid lg:grid-cols-2'>
            <div className='my-auto p-10'>
              <h1 className='text-3xl py-2'>Our History</h1>
              <p className='text-lg pt-5'>The University of Toronto began its involvement in FSAE in 1997, and completed a prototype vehicle in 1998. Through testing and research on the vehicle, a second, lighter frame was constructed in 1999. In 2003, 2005, and 2006, the team took three overall championships at Formula Student UK - a record that would stand until 2016.</p>
              <p className='text-lg pt-5 text-white'>Over the course of the early 2000s, several different chassis concepts were explored, eventually moving from steel spaceframes, to hybrid concepts, to a full monocoque. In 2010, the team switched to the light single cylinder engines that still power our cars today. In 2016, our first aerodynamics package was created to improve high speed cornering capability. In 2019, the team continued to develop the hybrid chassis concept, and introduced prototypes for a drag reduction system and electric shifter. The team continues to place respectably in rankings in both static and dynamic competitions.</p>
            </div>
            <div className='w-full h-20vh' style={{
              backgroundImage: `url(${ErgoPic})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
              }}>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='text-white flex flex-col justify-center items-center w-full h-full'>
          <div className='h-full w-full about grid lg:grid-cols-2'>
            <div className='w-full h-20vh' style={{
                backgroundImage: `url(${SuspensionPic})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
                }}>
            </div>
            <div className='my-auto p-10'>
              <p className='text-lg pt-5'>The University of Toronto began its involvement in FSAE in 1997, and completed a prototype vehicle in 1998. Through testing and research on the vehicle, a second, lighter frame was constructed in 1999. In 2003, 2005, and 2006, the team took three overall championships at Formula Student UK - a record that would stand until 2016.</p>
              <p className='text-lg pt-5 text-white'>Over the course of the early 2000s, several different chassis concepts were explored, eventually moving from steel spaceframes, to hybrid concepts, to a full monocoque. In 2010, the team switched to the light single cylinder engines that still power our cars today. In 2016, our first aerodynamics package was created to improve high speed cornering capability. In 2019, the team continued to develop the hybrid chassis concept, and introduced prototypes for a drag reduction system and electric shifter. The team continues to place respectably in rankings in both static and dynamic competitions.</p>
            </div>
          </div>
        </div>
      </div>
      <div name='contact' className='w-full h-screen bg-[#131212] flex justify-center items-center px-10 p-4'>
        <form className='flex flex-col max-w-[1000px] w-full' ref={form} onSubmit={handleOnSubmit}>
          <div className='pb-8'>
              <p className='text-4xl font-bold text-white'>Contact Us</p>
          </div>
          <div className='flex space-x-3'>
            <input className='bg-gray-300 p-2 w-full' type="text" placeholder='First Name (Required)' name='firstName' required/>
            <input className='bg-gray-300 p-2 w-full' type="text" placeholder='Last Name (Required)' name='lastName' required/>
          </div>
          <div className='flex space-x-3'>
            <input className='mt-4 p-2 bg-gray-300 w-full' type="email" placeholder='Email (Required)' name='email' required/>
            <input className='mt-4 p-2 bg-gray-300 w-full' type="tel" placeholder='Phone Number' name='phone'/>
          </div>
          <input className='mt-4 p-2 bg-gray-300' type="text" placeholder='Subject (Required)' name='subject' required/>
          <textarea className='mt-4 p-2 bg-gray-300' name="message" rows="10" placeholder='Message (Required)' required></textarea>
          <button type="submit" className='text-white border-2 transition duration-500 hover:bg-[#ffffff58]
          px-10 py-3 my-8 mx-auto flex items-center'>Submit</button>
        </form>
      </div>
      <GoToTop />
    </div>
  )
}

export default History
