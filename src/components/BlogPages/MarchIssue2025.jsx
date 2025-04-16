import React from "react";
import GoToTop from "../GoToTop";
import { IoCalendar } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import { FaClock } from "react-icons/fa";

const MarchIssue2025 = () => {
  return (
    <div className="text-white w-full h-[100%] bg-[#181818] px-5 lg:px-80 md:px-10">
      <div className="">
        <div className="pt-28 font-sans">
          <h1 className="text-3xl md:text-4xl font-bold">
            UT25 is here! Unveiling Announced
          </h1>
          <div className="pt-5 flex">
            <div className="flex items-center">
              <IoCalendar />
              <p className="px-2 font-extralight">March 07, 2025</p>
            </div>
            <div className="pl-10 flex items-center">
              <FaUser />
              <p className="px-2 font-extralight">Aaranyah</p>
            </div>
            <div className="pl-10 flex items-center">
              <FaClock />
              <p className="px-2 font-extralight">
                Estimated Reading Time: 12 minutes
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-lg">
        <p className="text-base py-5">
          UTFR Monthly is the University of Toronto Formula Racing team's
          newsletter, giving you insight into our latest developments,
          achievements, and behind-the-scenes action.
        </p>
        <hr className="mx-48 pt-5" />
        <p className="text-base pt-3">Welcome back to the UTFR Monthly!</p>
        <p className="text-base pt-3 flex">
          <p className="font-bold pr-1">Just 24 days</p> – that’s how far away
          we are from unveiling UTFR’s newest competitor.
        </p>
        <p className="text-base pt-3">
          February is a crucial time of year for UTFR. The pieces of the car
          begin to come together as we aim to hit the track as soon as possible.
          This month, we hit key milestones across our sections.
        </p>
        <p className="text-base pt-3 font-bold">In this edition:</p>
        <div>
          <li className="text-base pt-3">
            Feature Story: UTFR’s Women in Motorsports Panel
          </li>
          <li className="text-base pt-3">
            UTFR’s newest challenger is set to be unveiled
          </li>
          <li className="text-base pt-3">
            Deep Dives #5: Driverless Technical Director Youssef Elhaded
          </li>
          <li className="text-base pt-3">
            Section updates and meeting with the Dean of Engineering
          </li>
        </div>
        <p className="text-base py-5">
          Lastly, Formula Student Electric world rankings have dropped! UT24
          finished the season strong, climbing 5 spots to 23rd place! We’re also
          incredibly proud to announce that we ranked #1 in Canada
        </p>
        <img
          src="https://ik.imagekit.io/18gwys9x0/Newsletters/MarchIssueImages2025/March_Issue_1.png"
          alt=""
          className="headerImage w-full px-32"
        />
        <p className="text-base py-5">Let’s dive into the past month.</p>
      </div>
      <hr className="mx-48 pt-5" />

      <div className="text-white text-lg">
        <h1 className="text-2xl font-semibold pt-5">
          UTFR’s Women in Motorsports Panel
        </h1>
        <p className="text-base pt-3">
          When the University of Toronto Formula Racing team hosted the second
          Women in Motorsport Panel, we embraced a powerful opportunity: how do
          we showcase the diverse perspectives that drive innovation in our
          industry? Rather than focusing solely on technical achievements, we
          created a platform for authentic voices that illuminate the human
          elements behind motorsport excellence.
        </p>
        <p className="text-base pt-3">
          Our panel brought together remarkable individuals who exemplify the
          spirit of the motorsport racing community. We started with
          authenticity – acknowledging that meaningful discussion requires
          honest sharing of both challenges and triumphs. Each speaker
          contributed unique insights that identified pathways and set new
          possibilities for attendees. This created our foundation for
          inspiration.
        </p>
        <img
          src="https://ik.imagekit.io/18gwys9x0/Newsletters/MarchIssueImages2025/March_Issue_2.jpg"
          alt=""
          className="headerImage w-full px-24 pt-8"
        />
        <a
          href="https://www.instagram.com/reel/DFdKevCxxus/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D&_bhlid=63d35a494248ca93d4d69081004420e6501e3293"
          target="_blank"
          rel="noreferrer"
        >
          <p className="text-base pt-3 pb-5 text-center text-[#4493E9] text-decoration-line: underline">
            Erika Hoffman, Alana Carter, Elise Racette, and Tamara Maracle
            alongside attendees.
          </p>
        </a>
        <p className="text-base pt-3">
          Connection flourished next, particularly valuable given our position
          at the intersection of academia and industry. The dialogue revealed
          persistent barriers alongside promising developments. We've learned
          that progress comes through collective effort, and creating space for
          these conversations is essential.
        </p>
        <p className="text-base pt-3">
          Impact emerged clearly as stories resonated with audience members.
          Bringing together Erika Hoffman, Alana Carter, Elise Racette, and
          Tamara Maracle alongside passionate attendees creates momentum. We've
          found that advancing diversity in motorsport – whether through
          organized events or daily actions – defines our ability to evolve as
          an industry.
        </p>
      </div>

      <hr className="mx-48 pt-5 mt-10" />

      <div className="text-white text-lg">
        <h1 className="text-2xl font-semibold pt-5">
          UTFR’s Newest Challenger – UT25 is set to be unveiled on March 31,
          2025
        </h1>
        <p className="text-base pt-3">
          Join us for the University of Toronto Formula Racing UT25 Unveiling! A
          year of innovation and teamwork has culminated in our latest
          Formula-style race car, now with autonomous capabilities.
        </p>
        <p className="text-base pt-3">
          ​Get an inside look at the cutting-edge engineering behind UT25 as our
          team showcases the breakthrough features that make this vehicle
          race-ready.
        </p>
        <p className="text-base pt-3">
          ​Whether you’re a motorsport enthusiast or curious about automotive
          innovation, come celebrate this milestone with UTFR!
        </p>
        <p className="text-base pt-3">
          Register{" "}
          <a
            className="text-[#4493E9] italic text-decoration-line: underline"
            href="https://lu.ma/mz9g36kj?_bhlid=2080ac494f697e914bfd7a1bcfc401dfe8939059&utm_campaign=ut25-is-here-unveiling-announced&utm_medium=newsletter&utm_source=utfr.beehiiv.com"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
        </p>
      </div>

      <hr className="mx-48 pt-5 mt-5" />

      <div className="text-white text-lg">
        <h1 className="text-2xl font-semibold pt-5">Section Updates:</h1>
        <p className="text-base pt-3">
          <p className="font-bold">Mechanical:</p> Our team took a significant
          step forward with custom dampers built at Multimatic. This significant
          upgrade promises to transform our vehicle's handling dynamics
          considerably. Meanwhile, chassis welding continues steadily as we race
          against time. Across the workshop, manufacturing hums with activity -
          particularly in composites, where our revolutionary new bodywork takes
          shape. Perhaps most exciting is our variable cross-section airfoil, a
          first in our team's history and a testament to our growing aerodynamic
          ambitions.
        </p>
        <p className="text-base pt-3">
          <p className="font-bold">Electric:</p>The electrical team has begun
          the meticulous process of high-voltage battery assembly. It's a
          careful dance of components and connections. Simultaneously, our
          low-voltage systems spring to life as sensors and driver interfaces
          undergo integration and testing. In the background, firmware
          development continues unabated. Our wireless data acquisition system
          will soon deliver real-time performance metrics - a crucial tool for
          race day diagnostics and ongoing vehicle optimization.
        </p>
        <p className="text-base pt-3 pb-10">
          <p className="font-bold">Driverless:</p>Recent weeks have seen our
          autonomous systems team deeply immersed in mapping challenges. How
          accurate can we make our position estimates? To answer this, we've
          explored diverse approaches - FastSLAM algorithms running alongside
          LiDAR odometry, all feeding into our graph SLAM architecture. New
          camera hardware has arrived too, promising sharper perception
          capabilities. These visual improvements should dramatically enhance
          cone detection accuracy. With competition looming on the horizon,
          excitement builds. What might we achieve on track this year? The team
          works with renewed purpose to find out.
        </p>
      </div>

      <hr className="mx-48 pt-5" />

      <div className="text-white text-lg">
        <h1 className="text-2xl font-semibold pt-5">
          Deep Dives #4 – From Vision to Reality: Youssef Elhadad's Journey with
          UTFR's Driverless Revolution
        </h1>
        <p className="text-base pt-3 italic">
          This month, I sat down with UTFR's Driverless Technical Director,
          Youssef Elhadad, to explore the remarkable journey of bringing
          autonomous capabilities to the team's electric race car. From its
          controversial inception to becoming a competitive edge, the DV team's
          story is one of perseverance, innovation, and pushing boundaries.
        </p>
        <div className="md:grid md:grid-cols-3">
          <div>
            <img
              src="https://ik.imagekit.io/18gwys9x0/TeamMembers/UTFR_2025_Team_Headshots/Youssef_Elhadad.jpg"
              alt=""
              className="headerImage w-full pt-5 px-24 md:px-0"
            />
            <p className="text-base text-center pt-3">Youssef Elhadad</p>
          </div>
          <div className="col-span-2 md:pl-10 my-auto">
            <div className="py-5">
              <div className="flex justify-center pt-5">
                <FaQuoteLeft className="text-2xl" />
              </div>
              <p className="text-lg text-center px-5 py-3">
                This is something that doing it now, what we have done, will put
                us so far ahead of other teams who are just now figuring out
                that DV is going to be a part of these competitions."
              </p>
              <p className="text-sm italics text-center">
                On why UTFR chose to pursue driverless
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-white text-lg">
        <h1 className="text-xl font-semibold pt-8">The Unlikely Beginning</h1>
        <p className="text-base pt-3">
        Yousef’s journey with UTFR began in his second year, after a fully online first year kept him disconnected from extracurricular activities. "A friend was telling me, 'There's this team UTFR, and they design race cars, and they race EVs.' I was like, 'Oh my God, this is so dope!'" he recalls with enthusiasm.
        </p>
        <p className="text-base pt-3">
        Initially overwhelmed by the complexity of the electric vehicle project, Youssef found his footing in the electrical team, working on vehicle harnesses. "On the harness team, I was able to learn a lot about the general functionality of the car because you learn about all these different interfacing parts."
        </p>
        <p className="text-base pt-3">
        But the true turning point came in the summer of 2022, when then-firmware lead Kelvin approached him with an audacious idea. "Kelvin was in the shop and said, 'Hey, I'm starting this thing called DV. I want to make this car driverless.'" At a time when the team was still struggling to perfect their first electric vehicle, the idea of adding autonomous systems seemed almost absurd.
        </p>
        <h1 className="text-xl font-semibold pt-8">Building from Nothing</h1>
        <p className="text-base pt-3">
        The newly formed DV section started with just five or six passionate students—a stark contrast to the mechanical section's 40-plus members. "In the beginning, it was very, very small. Just Kelvin, me, Asadi, Alyssa, and a couple others," Youssef explains.
        </p>
        <p className="text-base pt-3">
        With no hardware, no software, and not even a running car, the initial plan was modest: create a proof of concept through simulation for the 2023 season. "We were looking at different European teams, different research papers... the whole first year of DV was getting it to work in simulation."
        </p>
        <p className="text-base pt-3">
        But the stakes suddenly rose when team leadership set their sights on European competition. "There was this huge pressure where it was like, we're going to Europe and we've never tested this on a physical car," Elhadad recounts. What began as a research project was now expected to become a functional system.
        </p>
        <div className="py-5">
          <div className="flex justify-center pt-5">
            <FaQuoteLeft className="text-2xl" />
          </div>
          <p className="text-lg text-center px-5 py-3">
          It's not about getting it to work anymore. It's about getting it to be as good as we can possibly get. Make it seamless, make it perfect."
          </p>
          <p className="text-sm italics text-center">
          UTFR’s next targets
          </p>
        </div>
        <h1 className="text-xl font-semibold pt-8">The Art of Positive Failure and Persistence</h1>
        <p className="text-base pt-3">
        What kept the DV team going through these setbacks? Youssef credits the unique culture at UTFR. "There's this culture in the team where you try your best, things don't work out, and then you fail really hard. But everybody wants to see this work. That motivation pushes everybody to just get back and try again until you figure out something that works."
        </p>
        <p className="text-base pt-3">
        This resilience proved crucial during the development of UT24. The team methodically built bench tests for every component before attempting integration on the vehicle. "Every little thing you see that was on the car this year was validated on that bench test," Elhadad points out with pride.
        </p>
        <p className="text-base pt-3">
        Even with careful preparation, the testing phase revealed unexpected challenges. "We realized we had huge issues with integrating the software on the car that we didn't know about before. The car would not run or just run for like two inches." The team spent the entire fall troubleshooting and iterating until a breakthrough came in November 2024—the first successful end-to-end autonomous run.
        </p>
        <h1 className="text-xl font-semibold pt-8">From Working to Winning</h1>
        <p className="text-base pt-3">
        With a functioning system now proven, the DV team's focus has shifted dramatically. "It's not about getting it to work anymore. It's about getting it to be as good as we can possibly get. Make it seamless, make it perfect," he emphasizes.
        </p>
        <div className="py-5">
          <div className="flex justify-center pt-5">
            <FaQuoteLeft className="text-2xl" />
          </div>
          <p className="text-lg text-center px-5 py-3">
          The first meeting was just like a roast session. People were saying 'This is stupid.'"
          </p>
          <p className="text-sm italics text-center">
          Initially pitching driverless
          </p>
        </div>
        <p className="text-base pt-3">
        This evolution mirrors the wider team's transition from simply building a working electric vehicle to optimizing for performance. For DV, this means exploring more sophisticated approaches—improving position tracking accuracy, enhancing cone detection, reducing latency, and increasing processing frequency.
        </p>
        <p className="text-base pt-3">
        Perhaps most significantly, the team is bringing more development in-house. "Before, we imported simulation systems from different teams. Now we're making our own simulation software with full 3D integration and a dynamic model of the car." This customization allows them to solve specifically for UTFR's unique needs rather than adapting standardized solutions.
        </p>
        <h1 className="text-xl font-semibold pt-8">Breaking Through Barriers</h1>
        <p className="text-base pt-3">
        This journey hasn't been without friction. Youssef recalls an early meeting where the DV concept faced significant pushback: "The first meeting was just like a roast session. People were saying 'This is stupid.'"
        </p>
        <p className="text-base pt-3">
        But with Michigan now adding driverless events as a permanent competition feature, the team's foresight is paying dividends. "This is something that doing it now, what we have done, will put us so far ahead of other teams who are just now figuring out that DV is going to be a part of these competitions."
        </p>
        <p className="text-base pt-3">
        The key to integration, according to Elhadad, has been establishing shared priorities. "At the end of the day, it's not us versus them or DV versus them. It's one team. Everybody wants this car to do really well in competitions."
        </p>
        <h1 className="text-xl font-semibold pt-8">A Different Development Paradigm</h1>
        <p className="text-base pt-3">
        The DV section operates differently from its mechanical and electrical counterparts. While those disciplines follow well-established timelines and manufacturing processes, software development follows a more iterative approach.
        </p>
        <p className="text-base pt-3">
        "With DV, it's very much try this, didn't work, try again... It's constant iteration. Software is so easy to redesign, re-evaluate, change requirements," Elhadad explains. This flexibility allows bolder experimentation but requires different project management approaches and expectations.
        </p>
        <h1 className="text-xl font-semibold pt-8">Shaping Future Engineers</h1>
        <div className="py-5">
          <div className="flex justify-center pt-5">
            <FaQuoteLeft className="text-2xl" />
          </div>
          <p className="text-lg text-center px-5 py-3">
          Recruits are afraid to sound dumb or afraid to go out of their way and sign up to a project. But you just have to stick to it and push yourself
          </p>
          <p className="text-sm italics text-center">
          Youssef on getting started
          </p>
        </div>
        <p className="text-base pt-3">
        For Youssef personally, the experience has transformed his career path. "When I first started engineering, I wanted to be in mech and do mechanical. But being on this team completely changed everything." Now firmly directed toward software engineering, he credits the countless problems solved and hours invested in the shop for shaping his professional ambitions.
        </p>
        <p className="text-base pt-3">
        His advice to newcomers? "Seeing something not work teaches you so much more than seeing everything working perfectly. You learn a lot more by failing." He emphasizes the importance of vigilance, attention to detail, and proactive communication—especially across interdisciplinary boundaries.
        </p>
        <p className="text-base pt-3">
        For those intimidated by the technical complexity, Elhadad offers encouragement: "Recruits are afraid to sound dumb or afraid to go out of their way and sign up to a project. But you just have to stick to it and push yourself."
        </p>
      </div>
      

      <hr className="mx-48 pt-5 mt-5" />

      <h1 className="text-2xl font-semibold pt-5">Get Involved</h1>
      <div>
        <img
          src="https://ik.imagekit.io/18gwys9x0/Newsletters/OctoberIssueImages2024/October_Issue_5.avif"
          alt=""
          className="headerImage w-full pt-3 px-10"
        />
      </div>
      <p className="text-base pt-3">
        Follow our Instagram for news of our acclaimed panellists and more
        updates!
      </p>
      <h1 className="text-xl font-semibold pt-5">Sponsors</h1>
      <p className="text-base pt-3">
        UTFR’s success is made possible by our sponsors – they help us with
        parts, manufacturing support, design advice, and so much more.
      </p>
      <p className="text-base pt-3">
        Our 2024/25{" "}
        <a
          className="text-[#4493E9] text-decoration-line: underline"
          href="https://fsaeutoronto.ca/sponsors"
          target="_blank"
          rel="noreferrer"
        >
          sponsorship package
        </a>{" "}
        is now live. To know more about our offerings and upcoming season
        events, please reply to this email and we will get back to you.
      </p>

      <h1 className="text-xl font-semibold pt-5">Students</h1>
      <p className="text-base pt-3">
      Attend our unveiling event on March 31 at Hart House’s Great Hall to meet our team and see our car firsthand.
      </p>

      <h1 className="text-xl font-semibold pt-5">Alumni</h1>
      <p className="text-base pt-3 pb-5">
        Know any UTFR Alumni who would like to keep in touch with our team’s
        journey? Fill out this{" "}
        <a
          className="text-[#4493E9] text-decoration-line: underline"
          href="https://docs.google.com/forms/d/e/1FAIpQLSceoEBbvCMTgocnkM0k98gJYoMKy4Slyt4C3HZUuNhDzc1IYQ/viewform"
          target="_blank"
          rel="noreferrer"
        >
          form
        </a>{" "}
        and learn more about our alumni offerings in the next edition.
      </p>

      <hr className="mx-48 pt-5 my-5" />

      <p className="text-base">
        We're always looking to improve and innovate, both on and off the track.
        Have any thoughts on this newsletter? Ideas for future content? We want
        to hear from you!
      </p>

      <p className="text-base pt-3">
        Reply to this email or connect with us on{" "}
        <a
          className="text-[#4493E9] text-decoration-line: underline"
          href="https://www.linkedin.com/company/utfr/?viewAsMember=true&utm_source=utfr.beehiiv.com&utm_medium=referral&utm_campaign=utfr-returns-gearing-up-for-a-new-season"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>{" "}
        or{" "}
        <a
          className="text-[#4493E9] text-decoration-line: underline"
          href="https://www.instagram.com/uoftfsae/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D#"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
        . Your feedback could spark our next big idea or feature in an upcoming
        issue.
      </p>

      <p className="text-base pt-3 pb-10">
      That’s all for this edition of the UTFR Monthly. See you at Unveiling!
      </p>

      <GoToTop />
    </div>
  );
};

export default MarchIssue2025;
