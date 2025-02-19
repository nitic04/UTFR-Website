import React from 'react'
import GoToTop from '../GoToTop'
import { IoCalendar } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import { FaClock } from "react-icons/fa";

const OctoberIssue2024 = () => {
  return (
    <div className='text-white w-full h-[100%] bg-[#181818] px-5 lg:px-80 md:px-10'>
      <div className=''>
        <div className='pt-28 font-sans'>
          <h1 className='text-3xl md:text-4xl font-bold'>UTFR Returns: Gearing Up for a New Season</h1>
          <div className='pt-5 flex'>
            <div className='flex items-center'>
              <IoCalendar />
              <p className='px-2 font-extralight'>October 14, 2024</p>
            </div>
            <div className='pl-10 flex items-center'>
              <FaUser />
              <p className='px-2 font-extralight'>Aaranyah</p>
            </div>
            <div className='pl-10 flex items-center'>
              <FaClock />
              <p className='px-2 font-extralight'>Estimated Reading Time: 8 minutes</p>
            </div>
          </div>
        </div>
      </div>
      <div className='text-lg'>
        <p className='text-base pt-5'>
        Welcome back!
        </p>
        <p className='text-base pt-3'>
        After some well-deserved rest, the University of Toronto Formula Racing team has returned to the workshop with renewed focus and ambitious goals for the upcoming season.
        </p>
        <p className='text-base pt-3'>
        Excitement is high with fresh faces getting their first taste of the team alongside some veterans returning from a year of work in the automotive and racing industry. 
        </p>
        <p className='text-base pt-3'>
        There’s a lot to catch up on, and a lot to look forward to. The UTFR Team is ready for the new year, are you? 
        </p>
        <p className='text-base pt-5 font-bold'>
        In this edition:
        </p>
        <div>
            <li className='text-base pt-3'>Toronto Shootout – UT24’s final outing</li>
            <li className='text-base pt-3'>Our team was featured in a documentary made by our sponsor, NTN</li>
            <li className='text-base pt-3'>Deep Dives #3 with our new Team Principal, Ayrton Antenucci</li>
        </div>
        <p className='text-base py-5'>
        Let’s get started.
        </p>
      </div>
      <hr className='mx-48 pt-5'/>

      <div className='text-white text-lg'>
        <h1 className='text-2xl font-semibold pt-5'>UT25 Kickoff</h1>
        <p className='text-base pt-3'>
        Recruits are the backbone of our team. They all start as engineering freshmen interested in motorsport and grow into skilled, passionate team members. As they learn and develop, they become the future leaders who will shape UTFR's success in the years to come, driving our team forward.
        </p>
        <p className='text-base pt-3'>
        As part of our recruitment process, we held Kickoff: an event designed to introduce our team, our structure, and how to get involved alongside answering any questions. With our largest recruitment class to date, the team is excited to have extra hands to help build UT25.
        </p>
        <div>
            <img src="https://ik.imagekit.io/18gwys9x0/Newsletters/OctoberIssueImages2024/October_Issue_1.avif" alt="" className='headerImage w-full pt-5'/>
            <p className='text-base text-center italic py-3'>
            Chief Race Engineer, Nam Nguyen
            </p>
        </div>
      </div>

      <div className='text-white text-lg'>
        <h1 className='text-2xl font-semibold pt-5'>The Toronto Shootout Returns</h1>
        <p className='text-base pt-3'>
        In its second year, the Toronto Shootout has become a way to celebrate the work of numerous FSAE teams at the end of a long season. Alongside 26 other teams from across North America, UTFR took to Brechin Motorsports Park to join the action.
        </p>
        <p className='text-base pt-3'>
        The event featured a mix of EV and ICE cars timing laps across the track. Our Canadian peers at ETS came out on top, followed by RIT and Zips Racing. Check out our <a className="text-[#4493E9]" href="https://www.instagram.com/uoftfsae" target="_blank" rel="noreferrer">Instagram</a> for our favourite photos from the event.
        </p>
        <div>
            <img src="https://ik.imagekit.io/18gwys9x0/Newsletters/OctoberIssueImages2024/October_Issue_2.avif" alt="" className='headerImage w-full pt-5'/>
            <p className='text-base text-center italic py-3'>
            Maria on track for the last time
            </p>
        </div>
      </div>

      <hr className='mx-48 pt-5'/>

      <div className='text-white text-lg'>
        <h1 className='text-2xl font-semibold pt-5'>UT24: Beyond the Bearing</h1>
        <p className='text-base pt-3'>
        The team featured in taking a look at the behind-the-scenes at The University of Toronto Formula SAE Racing team as they work towards the 2024 Formula SAE Electric Michigan competition.
        </p>
        <p className='text-base pt-3'>
        Made in collaboration with our Silver Tier sponsor NTN Bearing Corporation of Canada. 
        </p>
        <a className="text-[#4493E9] text-base" href="https://www.youtube.com/watch?v=LCHXeCwkyl4" target="_blank" rel="noreferrer">Watch on YouTube</a>
        <div class="video-container mt-3 mb-5">
            <iframe 
                src="https://www.youtube.com/embed/LCHXeCwkyl4?si=xLmj1I4GXBJDBbyQ" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen>
            </iframe>
        </div>

      </div>

      <hr className='mx-48 pt-5'/>

      <div className='text-white text-lg'>
        <h1 className='text-2xl font-semibold pt-5'>Deep Dives #3 – From Recruit to Leader: Ayrton Antenucci’s Journey at UTFR</h1>
        <div>
            <img src="https://ik.imagekit.io/18gwys9x0/Newsletters/OctoberIssueImages2024/October_Issue_3.avif" alt="" className='headerImage w-full pt-3'/>
        </div>
        <p className='text-base italic pt-3'>
        Behind countless hours poured into our car are the dedicated individuals of UTFR. In our 'Deep Dives' series, we spotlight team members monthly, exploring their UTFR journey, and giving you insight into our winning culture.
        </p>
        <p className='text-base pt-3 italic'>
        This month, I sat down with our new Team Principal, Ayrton Antenucci, as he prepares to lead UTFR into its next chapter. Fresh from his professional stint with Jaguar Formula E, Antenucci is set to infuse UTFR with fresh energy and innovative strategies.
        </p>
        <h1 className='text-xl font-semibold pt-5'>The Accidental Path</h1>
        <p className='text-base pt-3'>
        Ayrton Antenucci’s story with UTFR began during the turbulent times of 2020, amidst the COVID-19 pandemic. What started as a casual membership soon evolved into a whirlwind of roles and responsibilities. "I have the timestamp of the day my life was ruined," Ayrton jokes, recalling how he was drawn into the complex world of electric powertrains.
        </p>
        <p className='text-base pt-3'>
        Starting out as a general member, he climbed the ranks from recruitment lead to powertrain specialist, and eventually, to the head of electric powertrains. His journey is in tandem UTFR’s own transition from traditional combustion engines to cutting-edge electric vehicles.
        </p>
        <h1 className='text-xl font-semibold pt-5'>The Electric Revolution
        </h1>
        <p className='text-base pt-3'>
        The shift to electric vehicles marked a pivotal moment for UTFR. "Our first electric car was a bit of a behemoth," Antenucci admits, reflecting on the challenges faced with their initial model. Despite the hurdles, the conservative approach to design and development paid off, yielding impressive results. "We had a great season—winning in New Hampshire, finishing fifth at Michigan, and sixth at Czech. It was a solid year for us."
        </p>
        <div className='pt-10 pb-5'>
            <div className="flex justify-center">
                <FaQuoteLeft className='text-2xl'/>
            </div>
            <p className='text-xl text-center px-24 pt-3'>
            In 2023, we leaned heavily on each lead’s specialized knowledge. By 2024, we had a broader base of technical knowledge across the team. It was remarkable to see.
            </p>
            <p className='text-sm text-center italic pt-3'>
            On the team's trajectory
            </p>
        </div>
        <h1 className='text-xl font-semibold pt-5'>Diffusion of Competence
        </h1>
        <p className='text-base pt-3'>
        One of the most significant changes Antenucci observed was the rapid expansion of the team's collective expertise. "In 2023, we leaned heavily on each lead’s specialized knowledge," he explains. "By 2024, we had a broader base of technical knowledge across the team. It was remarkable to see."
        </p>
        <p className='text-base pt-3'>
        This surge in knowledge has elevated UTFR from merely building cars to creating engineering marvels. The team’s enhanced capabilities have become a cornerstone of their competitive edge.
        </p>
        <div>
            <img src="https://ik.imagekit.io/18gwys9x0/Newsletters/OctoberIssueImages2024/October_Issue_4.avif" alt="" className='headerImage w-full pt-5'/>
            <p className='text-base text-center italic py-3'>
            Ayrton holding the championship trophy for Season 10 of Formula E
            </p>
        </div>
        <h1 className='text-xl font-semibold pt-5'>The Formula for Success: SLRP
        </h1>
        <p className='text-base pt-3'>
        Drawing on his experience with Jaguar Formula E, Antenucci is introducing a new framework to UTFR: SLRP—Safety, Legality, Reliability, Performance. "We’re shifting from being a design team to operating as a full-fledged racing team," he says. This transition involves embracing advanced practices like vehicle dynamics, data analysis, and race engineering.
        </p>
        <div className='py-5'>
            <div className="flex justify-center pt-5">
                <FaQuoteLeft className='text-2xl'/>
            </div>
            <p className='text-xl text-center px-24 pt-3'>
            Get your hands dirty and don’t hesitate to ask questions. That’s how we all started.
            </p>
            <p className='text-sm text-center italic pt-3'>
            On advice for recruits
            </p>
        </div>
        <h1 className='text-xl font-semibold pt-5'>The Human Element</h1>
        <p className='text-base pt-3'>
        Despite the technical challenges and competitive pressures, Antenucci underscores the importance of the human element in the Formula SAE experience. "The real value lies in learning to work with people," he asserts. 
        </p>
        <p className='text-base pt-3'>
        His advice for new recruits? "Get your hands dirty and don’t hesitate to ask questions. That’s how we all started." 
        </p>
        <p className='text-base pt-3'>
        As Antenucci steps into his role as Team Principal, he is acutely aware of the responsibility that comes with it. "It hit me that I’m now the one others look up to," he reflects on his transition from a team member to a leader. 
        </p>
        <h1 className='text-xl font-semibold pt-5'>Looking Ahead: UT25 and Beyond</h1>
        <p className='text-base pt-3'>
        As UTFR gears up for their next car, UT25, Antenucci is brimming with optimism. "We’re poised to push for performance like never before," he enthuses. "It’s about innovative problem-solving and making incremental improvements that lead to significant gains." 
        </p>
        <p className='text-base pt-3 pb-5'>
        The team is encouraged to bring forward creative ideas and solutions. "No idea is too wild," Antenucci notes. "We’re all about fostering that inventive spirit." 
        </p>
      </div>

      <hr className='mx-48 pt-5'/>

      <div className='text-white text-lg'>
      <h1 className='text-2xl font-semibold pt-5'>Get Involved</h1>
      <div>
            <img src="https://ik.imagekit.io/18gwys9x0/Newsletters/OctoberIssueImages2024/October_Issue_5.avif" alt="" className='headerImage w-full pt-3'/>
        </div>
        <h1 className='text-xl font-semibold pt-5'>Sponsors</h1>
        <p className='text-base pt-3'>
        UTFR’s success is made possible by our sponsors – they help us with parts, manufacturing support, design advice, and so much more.
        </p>
        <p className='text-base pt-3'>
        Our 2024/25 <a className="text-[#4493E9]" href="https://fsaeutoronto.ca/sponsors" target="_blank" rel="noreferrer">sponsorship package</a> is now live. To know more about our offerings and upcoming season events, please reply to this email and we will get back to you.
        </p>

        <h1 className='text-xl font-semibold pt-5'>Recruits</h1>
        <p className='text-base pt-3'>
        With our new leadership in place, learn more about our directors in the next edition as well as where have UTFR members worked.
        </p>
        <p className='text-base pt-3'>
        Check the team’s Slack for updates on our ongoing October lecture series.
        </p>

        <h1 className='text-xl font-semibold pt-5'>Alumni</h1>
        <p className='text-base pt-3 pb-5'>
        Know any UTFR Alumni who would like to keep in touch with our team’s journey? Fill out this <a className="text-[#4493E9]" href="https://docs.google.com/forms/d/e/1FAIpQLSceoEBbvCMTgocnkM0k98gJYoMKy4Slyt4C3HZUuNhDzc1IYQ/viewform" target="_blank" rel="noreferrer">form</a> and learn more about our alumni offerings in the next edition.
        </p>

        <hr className='mx-48 pt-5'/>

        <p className='text-base pt-3'>
        We're always looking to improve and innovate, both on and off the track. Have any thoughts on this newsletter? Ideas for future content? We want to hear from you!
        </p>

        <p className='text-base pt-3'>
        Reply to this email or connect with us on <a className="text-[#4493E9]" href="https://www.linkedin.com/company/utfr/?viewAsMember=true&utm_source=utfr.beehiiv.com&utm_medium=referral&utm_campaign=utfr-returns-gearing-up-for-a-new-season" target="_blank" rel="noreferrer">LinkedIn</a> or <a className="text-[#4493E9]" href="https://www.instagram.com/uoftfsae/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D#" target="_blank" rel="noreferrer">Instagram</a>. Your feedback could spark our next big idea or feature in an upcoming issue.
        </p>

        <p className='text-base pt-3 pb-10'>
        Happy Thanksgiving.
        </p>

      </div>
      
      
      <GoToTop />
    </div>
  )
}

export default OctoberIssue2024