import React from "react";
import GoToTop from "../GoToTop";
import { IoCalendar } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import { FaClock } from "react-icons/fa";

const DecemberIssue2024 = () => {
  return (
    <div className="text-white w-full h-[100%] bg-[#181818] px-5 lg:px-80 md:px-10">
      <div className="">
        <div className="pt-28 font-sans">
          <h1 className="text-3xl md:text-4xl font-bold">
            Winter Warmup: UTFR's Holiday Edition
          </h1>
          <div className="pt-5 flex">
            <div className="flex items-center">
              <IoCalendar />
              <p className="px-2 font-extralight">December 19, 2024</p>
            </div>
            <div className="pl-10 flex items-center">
              <FaUser />
              <p className="px-2 font-extralight">Aaranyah</p>
            </div>
            <div className="pl-10 flex items-center">
              <FaClock />
              <p className="px-2 font-extralight">
                Estimated Reading Time: 10 minutes
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-lg">
        <p className="text-base pt-5">Welcome back to the UTFR Monthly!</p>
        <p className="text-base pt-3">
          As deadlines fade and vacation beckons, we've got one last gift to
          unwrap: your year-end dose of UTFR updates.
        </p>
        <p className="text-base pt-5 font-bold">In this edition:</p>
        <div>
          <li className="text-base pt-3">
            Feature Story: UTFR’s Autonomous Milestone
          </li>
          <li className="text-base pt-3">Team Principal speaks at TEDxUTS</li>
          <li className="text-base pt-3">
            Deep Dives #4: Mechanical Technical Director Christain Stalteri
          </li>
          <li className="text-base pt-3">
            Section Updates and a beloved event returns…
          </li>
        </div>
        <p className="text-base py-5">Let’s dive in.</p>
      </div>
      <hr className="mx-48 pt-5" />

      <div className="text-white text-lg">
        <h1 className="text-2xl font-semibold pt-5">
          UTFR's Autonomous Milestone
        </h1>
        <p className="text-base pt-3">
          Our Driverless team has achieved a remarkable breakthrough: the first
          fully autonomous vehicle successfully completing an autocross track.
          This achievement marks a defining moment in the team's journey from
          theoretical design to high-performance reality for our nascent
          Driverless section.
        </p>
        <p className="text-base pt-3">
          The project's evolution spans eighteen months of intensive
          development. Starting with a robust software foundation, the team
          tackled challenges across multiple engineering domains. They
          implemented sophisticated sensor fusion systems, developed precise
          control algorithms, and created reliable emergency protocols. Each
          milestone—from the first Emergency Braking System test in November
          2023 to the final autonomous run—represented a crucial step in system
          integration.
        </p>
        <div class="video-container mt-3 mb-5">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/mw4uf2zvROY?si=XTNr_oNhHTBDZoJb"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <p className="text-base pt-3">
          The success stems from seamless coordination between electrical
          systems, mechanical components, firmware development, and autonomous
          software architecture. This integration creates a unified platform
          capable of split-second decision-making, demonstrating the team's
          technical expertise and innovative approach to autonomous vehicle
          development. This journey was not without setbacks, and the success
          was evidence of the resilience of our team.
        </p>
        <p className="text-base pt-3">
          With this breakthrough achieved, UTFR sets their sights on new
          horizons: implementing advanced SLAM capabilities, enhancing system
          reliability, and preparing for competitions in Michigan and Europe.
          Their success showcases how dedication and systematic engineering can
          transform ambitious goals into reality, setting new standards for
          student racing innovation.
        </p>
      </div>

      <hr className="mx-48 pt-5 mt-10" />

      <div className="text-white text-lg">
        <h1 className="text-2xl font-semibold pt-5">
          TEDxUTS: How Do You Build a Race Car?
        </h1>
        <p className="text-base pt-3 italic">
          When Team Principal Ayrton Antenucci was invited to speak at the
          TEDxUTS Youth event, he faced an interesting challenge: how do we
          explain the process of building a Formula race car to an audience of
          high school students? Rather than diving into technical
          specifications, we chose to focus on the fundamental principles that
          enable our team to tackle this complex engineering challenge year
          after year.
        </p>
        <p className="text-base pt-3">
          Highlights from his{" "}
          <a
            className="text-[#4493E9]"
            href="https://fsaeutoronto.ca/sponsors"
            target="_blank"
            rel="noreferrer"
          >
            talk:
          </a>
        </p>
        <p className="text-base pt-3">
          Our approach breaks down into five stages that form the backbone of
          our development process. We start with humility – acknowledging that
          building a competitive race car requires recognising where we need to
          improve. Each year begins with a critical review of our previous car,
          identifying weaknesses and setting new targets. This creates our
          platform for growth.
        </p>
        <p className="text-base pt-3">
          Patience comes next, particularly crucial given our position as
          students. The design and construction phase brings constant small
          failures that need working through. We've learned that breakthroughs
          rarely come quickly, and giving ourselves time to work through
          problems is essential.
        </p>
        <p className="text-base pt-3">
          Resilience becomes critical when failures start to accumulate. Pouring
          thousands of collective hours into a project only to face setbacks
          takes a toll. We've found that pushing through these moments – whether
          it's a collapsed suspension or a failed test run – defines our ability
          to improve.
        </p>
        <div>
          <img
            src="https://ik.imagekit.io/18gwys9x0/Newsletters/DecemberIssueImages2024/December_Issue_1.jpg"
            alt=""
            className="headerImage w-full pt-5"
          />
          <p className="text-base text-center italic py-3">
            Ayrton Antenucci Speaks at the TEDxUTS Youth event
          </p>
        </div>
        <p className="text-base pt-3">
          Our take on confidence is specific: it's not about knowing everything
          but about trusting our ability to figure things out. This outlook
          keeps us motivated during long development cycles and complex
          technical challenges. It's the light at the end of the tunnel that
          keeps us moving forward.
        </p>
        <p className="text-base pt-3">
          Finally, responsibility ties everything together. When one component
          fails, the whole car fails. If we're not moving because of a
          suspension issue, our optimised aerodynamics and powertrain become
          irrelevant. This reality shapes our approach: we succeed or fail as a
          team, focusing our energy on solutions rather than blame.
        </p>
        <p className="text-base pt-3">
          These principles guide our work as we continue pushing boundaries in
          racing innovation. Our recent progress in autonomous systems
          demonstrates how this framework enables us to tackle increasingly
          complex challenges. As we prepare for competitions in Michigan and
          Europe, these fundamentals remain our foundation for tackling whatever
          technical challenges lie ahead.
        </p>
        <p className="text-base pt-3 pb-5">
          Thank you to the TEDx team for the invitation.
        </p>
      </div>

      <hr className="mx-48 pt-5 mt-5" />

      <div className="text-white text-lg">
        <h1 className="text-2xl font-semibold pt-5">Section Updates:</h1>
        <p className="text-base pt-3">
          <p className="font-bold">Mechanical:</p> After countless hours in
          front of CAD files, we are pleased to have completed our design
          timelines. We are shifting our focus to manufacturing, which includes
          beginning the chassis welding, accumulator segment builds, numerous
          layups for our aero elements, and everyone getting their hands dirty
          machining their parts.
        </p>
        <p className="text-base pt-3 pb-10">
          <p className="font-bold">Electric:</p>One of our consequential changes
          has been our pack design, given our switch to pouch cells. This change
          unlocks greater potential in efficiency and size. Our focus is
          currently on realising this potential – we’re soldering the new
          vehicle control units for the car, including its battery management
          system, alongside building our accumulator segment cases and wire
          harnesses.
        </p>
      </div>

      <hr className="mx-48 pt-5" />

      <div className="text-white text-lg">
        <h1 className="text-2xl font-semibold pt-5">
          Deep Dives #4 – The Perfectionist’s Path: Christian Stalteri on UTFR’s
          Technical Evolution
        </h1>
        <p className="text-base pt-3 italic">
          Behind countless hours poured into our car are the dedicated
          individuals of UTFR. In our 'Deep Dives' series, we spotlight team
          members monthly, exploring their UTFR journey and giving you insight
          into our winning culture.
        </p>
        <p className="text-base pt-3 italic">
          This month, I sat down with our new Mechanical Technical Director,
          Christian Stalteri. For him, it started with the 2018 Belgian Grand
          Prix. What began as casual F1 viewing evolved into a pivotal moment
          that shifted his academic trajectory from aspiring writer to
          mechanical engineer. Now, as UTFR's Mechanical Technical Director, he
          reflects on how that initial spark led to five years of hands-on
          engineering experience.
        </p>
        <div className="md:grid md:grid-cols-3">
          <img
            src="https://ik.imagekit.io/18gwys9x0/Newsletters/DecemberIssueImages2024/December_Issue_2.jpg"
            alt=""
            className="headerImage w-full pt-5 px-24 md:px-0"
          />
          <div className="col-span-2 md:pl-10">
          <h1 className="text-xl font-semibold pt-5">Finding Formula SAE</h1>
            <p className="text-base pt-3">
              "I knew I was joining the team," Stalteri recalls of his
              pre-university planning, having made Formula SAE capability a key
              factor in his university selection. Despite initial hesitation about U
              of T's intense academic reputation, the opportunity to work on race
              cars proved too compelling to resist.
            </p>
            <p className="text-base pt-3">
              His UTFR journey began during the pandemic when the team operated
              virtually and built cars in makeshift workshops. Living in Aurora
              meant long commutes just to see the car, but these early challenges
              only reinforced his commitment. From those first testing days,
              Stalteri progressed through various roles - working in suspension,
              aero, and drivetrain before becoming suspension lead in his third
              year.
            </p>
            <div className="py-5">
          <div className="flex justify-center pt-5">
            <FaQuoteLeft className="text-2xl" />
          </div>
          <p className="text-xl text-center px-24 pt-3">
            In class, there's one answer. Here, we have to collectively form a
            concept, design something that adheres to that concept, and that
            concept has to be driven by goals.
          </p>
          </div>
          </div>
        </div>
      </div>

      <div className="text-white text-lg">
      <h1 className="text-xl font-semibold pt-5">Learning to Lead</h1>
          <p className="text-base pt-3">
            The transition to section lead brought new perspectives on engineering
            education. "I was teaching them as much as I was teaching myself," he
            explains about implementing regular technical lectures for new
            members. This approach to knowledge sharing has already shown results
            in the team's technical capabilities.
          </p>
          <p className="text-base pt-3">
            This focus on building foundational knowledge comes from understanding
            a key difference between classroom and practical engineering: "In
            class, there's one answer. Here, we have to collectively form a
            concept, design something that adheres to that concept, and that
            concept has to be driven by goals."
          </p>
        <h1 className="text-xl font-semibold pt-5">Racing Forward</h1>
        <p className="text-base pt-3">
          As Mechanical Technical Director, Stalteri now oversees UTFR's
          evolution from design team to racing operation. "We're not just
          building cars anymore," he emphasises. "We're a racing team." This
          means:
        </p>
        <div>
          <li className="text-base pt-3">
            Dedicated vehicle dynamics crews analyse every turn
          </li>
          <li className="text-base pt-3">
            Data-driven design decisions (because engineers love numbers)
          </li>
          <li className="text-base pt-3">
            Systematic testing that would make F1 teams proud
          </li>
          <li className="text-base pt-3">
            Integration of driver feedback into design cycles
          </li>
        </div>
        <p className="text-base pt-3">
          "There's a huge step between building a car that works and building a
          car that you understand," he notes, explaining the team's current
          focus. This philosophy has driven improvements across all mechanical
          systems, from more efficient packaging to better performance
          optimisation.
        </p>

        <h1 className="text-xl font-semibold pt-5">Wisdom for Recruits</h1>
        <p className="text-base pt-3">
          Want to join the racing revolution? Stalteri's advice is refreshingly
          straightforward:
        </p>
        <div>
          <ol>
            <li className="text-base pt-3">
              1. Show up: "Get your hands dirty and get your face recognised"
            </li>
            <li className="text-base pt-3">
              2. Embrace failure: "You have to try and fail. That's how we all
              started"
            </li>
            <li className="text-base pt-3">
              3. Think team-first: "If the chassis doesn't get built, your
              powertrain doesn't get driven either"
            </li>
            <li className="text-base pt-3">
              4. Stay hungry: "Don't expect everything to be handed to you on a
              silver platter"
            </li>
          </ol>
        </div>
        <p className="text-base pt-3">
          This practical experience proves valuable beyond competition. "No
          engineer is sitting in a room alone building something this complex,"
          Stalteri explains, highlighting how UTFR's collaborative environment
          mirrors industry practice.
        </p>

        <h1 className="text-xl font-semibold pt-5">Looking Ahead</h1>
        <p className="text-base pt-3">
          As UTFR continues building on recent successes, Stalteri's focus on
          systematic development and knowledge transfer provides a foundation
          for future growth. The team's approach to technical challenges
          demonstrates how student racing programs can effectively balance
          competitive performance with engineering education.
        </p>
      </div>

      <div className="py-5">
        <div className="flex justify-center pt-5">
          <FaQuoteLeft className="text-2xl" />
        </div>
        <p className="text-xl text-center px-24 pt-3">
          No engineer is sitting in a room alone building something this complex
        </p>
      </div>
      <p className="text-base pt-3">
        "The more you know, the more you realise you don't know. You open one
        door, you find five more," he reflects, capturing both the challenge and
        excitement of engineering development. It's this combination of
        technical rigour and continuous learning that defines UTFR's approach to
        building both cars and engineers.
      </p>
      <p className="text-base pt-3 pb-5">
        Through structured knowledge sharing and systematic development,
        Stalteri's leadership helps position UTFR members for success both on
        the track and in their engineering careers. For students, sponsors, and
        alumni alike, it's a reminder of how Formula SAE transforms technical
        education into practical engineering capability."In 2023, we leaned
        heavily on each lead’s specialised knowledge. By 2024, we had a broader
        base of technical knowledge across the team. It was remarkable to see."
      </p>

      <hr className="mx-48 pt-5 mt-5" />

      <h1 className="text-2xl font-semibold pt-5">Get Involved</h1>
      <div>
        <img
          src="https://ik.imagekit.io/18gwys9x0/Newsletters/OctoberIssueImages2024/October_Issue_5.avif"
          alt=""
          className="headerImage w-full pt-3"
        />
      </div>
      <h1 className="text-xl font-semibold pt-5">
        Women in Motorsports Panel Returns!
      </h1>
      <p className="text-base pt-3">
        The Women in Motorsports (WIMS) Panel is set to return on January 28,
        2025, at the Innis Town Hall.
      </p>
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
          className="text-[#4493E9]"
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
        The Engineering Society’s Winter Clubs Fair is right around the corner.
        Catch us at our booth on January 10 and 11. Who knows? You might just
        see some parts of UT25.
      </p>

      <h1 className="text-xl font-semibold pt-5">Alumni</h1>
      <p className="text-base pt-3 pb-5">
        Know any UTFR Alumni who would like to keep in touch with our team’s
        journey? Fill out this{" "}
        <a
          className="text-[#4493E9]"
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
          className="text-[#4493E9]"
          href="https://www.linkedin.com/company/utfr/?viewAsMember=true&utm_source=utfr.beehiiv.com&utm_medium=referral&utm_campaign=utfr-returns-gearing-up-for-a-new-season"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>{" "}
        or{" "}
        <a
          className="text-[#4493E9]"
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
        That’s all for this edition of the UTFR Monthly. We wish you a Merry
        Christmas and a happy holiday. I will be back next semester for more
        excitement as we race towards competition season.
      </p>

      <GoToTop />
    </div>
  );
};

export default DecemberIssue2024;
