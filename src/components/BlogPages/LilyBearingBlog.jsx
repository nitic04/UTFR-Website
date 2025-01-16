import React from 'react'
import GoToTop from '../GoToTop'
import { IoCalendar } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

// Lily Bearing specifically asked for the noreferrer attributes to be removed... hence all the warnings.

const LilyBearingBlog = () => {
  return (
    <div className='text-white w-full h-[100%] bg-[#181818] lg:px-80 md:px-10'>
      <div className=''>
        <div className='pt-28 font-sans'>
          <h1 className='text-4xl font-bold'>The Use of Lily Bearings in Our Transition to Four-Wheel Drive</h1>
          <div className='pt-5 flex'>
            <div className='flex items-center'>
              <IoCalendar />
              <p className='px-2 font-extralight'>January 13, 2025</p>
            </div>
            <div className='pl-10 flex items-center'>
              <FaUser />
              <p className='px-2 font-extralight'>Kelvin Cao, Drivetrain Lead 2023-2024</p>
            </div>
          </div>
          <p className='text-base pt-5'>This article highlights how Lily Bearing played a pivotal role in our transition to a four-wheel drive system for our Formula Student racing car.</p>
        </div>
      </div>
      <div className='text-lg'>
        <h1 className='text-2xl pb-5 font-semibold pt-5'>Background:</h1>
        <p className='text-base'>
        The University of Toronto Formula Racing (UTFR) team designs and builds a new formula-style racing car every year. As a leading Formula Student Racing team, UTFR has a legacy spanning over 20 years in Formula SAE/Student competitions. Our accolades include multiple international victories, such as three overall championships at Formula Student UK. In 2024, our team excelled in the Electric Class, securing 1st place overall at Formula Hybrid+Electric New Hampshire for the second consecutive year and achieving 10th place overall at Formula SAE Electric Michigan.
        </p>
      </div>
      <div>
          <img src="https://ik.imagekit.io/18gwys9x0/Newsletters/CoverImages/Lily_Bearing_Cover.jpg" alt="" className='headerImage w-full py-5'/>
          <p className='text-base'>
            Image: Our UT24 car.
          </p>
      </div>
      <div className='text-white text-lg'>
        <h1 className='text-2xl pb-5 font-semibold pt-5'>Problem:</h1>
        <p className='text-base'>
        Our current architecture utilizes a single motor driving the rear wheels through a chain, differential, and driveshafts. To enhance on-track performance, we aimed to transition to a four-wheel drive (4WD) system. While 4WD systems significantly improve traction, they introduce substantial packaging and design complexities, especially when incorporating motors with planetary gearboxes directly into the wheel hubs. We require a very compact assembly in order to fit everything into the wheels, which brings us to Lily Bearing
        </p>
      </div>
      <div className='text-white text-lg'>
        <h1 className='text-2xl pb-5 font-semibold pt-5'>Solution:</h1>
        <p className='text-base'>
        Lily Bearing’s extensive catalog of thin-section bearings offered a unique solution to our design challenges. Few manufacturers globally produce thin-section bearings, which are critical for compact and efficient hub assemblies. By partnering with Lily Bearing, we acquired specialized thin-section bearings that integrate seamlessly into our hubs, enabling a competitive powertrain architecture for the upcoming season.
        </p>
      </div>
      <div>
          <img src="https://ik.imagekit.io/18gwys9x0/Newsletters/CoverImages/Lily_Bearing_Img.png" alt="" className='headerImage w-full py-5'/>
          <p className='text-base'>
          Image: Our Newly Developed In-Hub Assembly with Thin Section Bearings from Lily Bearing
          </p>
      </div>
      <div>
          <img src="https://ik.imagekit.io/18gwys9x0/Newsletters/CoverImages/Lily_Bearing_Img2.jpg" alt="" className='headerImage w-full py-5'/>
          <p className='text-base'>
          Image: The thin section bearings we received from Lily Bearing
          </p>
      </div>
      <div className='text-white text-lg'>
        <h1 className='text-2xl pb-5 font-semibold pt-5'>Lily Bearing:</h1>
        <p className='text-base'>
        Lily Bearing has been an invaluable partner in our transition to a 4WD system. Their thin-section bearings are the cornerstone of our newly designed upright and hub assembly, making this technical development possible. For more information on Lily Bearing’s extensive product range, visit their website: <a className="text-[#4493E9]" href="https://www.lily-bearing.com/" target="_blank">https://www.lily-bearing.com/</a>
        </p>
      </div>
      <div className='text-white text-lg'>
        <h1 className='text-2xl pb-5 font-semibold pt-5'>Key Products Used:</h1>
        <p className='text-base pb-2'>
        We selected the following bearings for our design:
        </p>
        <p className='text-base pb-2'><a className="text-[#4493E9]" href="https://www.lily-bearing.com/product/ball-bearing/thin-section-bearings/" target="_blank">https://www.lily-bearing.com/product/ball-bearing/thin-section-bearings/</a>
        </p>
        <p className='text-base pb-2'>
        <a className="text-[#4493E9]" href="https://www.lily-bearing.com/product/ball-bearing/thin-section-bearings/" target="_blank">https://www.lily-bearing.com/product/ball-bearing/thin-section-bearings/constant-section-cs-bearings/</a>
        </p>
        <p className='text-base pb-2'>
        The specific bearings that we selected were:
        </p>
        <p className='text-base pb-2'>
        <a className="text-[#4493E9]" href="https://www.lily-bearing.com/product/ball-bearing/thin-section-bearings/" target="_blank">https://www.lily-bearing.com/products/j08008xp0/</a>
        </p>
        <p className='text-base pb-2'>
        <a className="text-[#4493E9]" href="https://www.lily-bearing.com/product/ball-bearing/thin-section-bearings/" target="_blank">https://www.lily-bearing.com/products/ja040xp0/</a>
        </p>
        <p className='text-base pb-2'>
        Lily Bearing’s search tool was instrumental in identifying and specifying the bearings for our application:
        </p>
        <p className='text-base'>
        <a className="text-[#4493E9]" href="https://www.lily-bearing.com/product/ball-bearing/thin-section-bearings/" target="_blank">https://www.lily-bearing.com/product/ball-bearing/</a>
        </p>
      </div>
      <div className='text-white text-lg pt-5 pb-10'>
        <p className='text-base'>
        By leveraging Lily Bearing’s expertise and high-quality products, we successfully overcame the challenges of transitioning to a four-wheel drive system, positioning our team for continued success in the upcoming racing season. It has been wonderful working with Lily Bearing and we hope to continue this beneficial partnership.
        </p>
      </div>
      <GoToTop />
    </div>
  )
}

export default LilyBearingBlog