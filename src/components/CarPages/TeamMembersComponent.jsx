import React from 'react';
import { Fade } from "react-awesome-reveal";

const TeamMembersComponentSectioned = () => {

  return (
    <div>
        <div className='bg-[#303949] pb-10 px-10 text-[#222220]'>
            <Fade cascade damping={0.2} triggerOnce>
            <h1 className='text-5xl md:text-6xl font-bold pt-7 pb-10 text-center text-white'>UT23 TEAM MEMBERS</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Mechanical */}
            <div className="teamCard bg-gray-100 p-4 rounded-lg py-7">
                <Fade cascade damping={0.1} triggerOnce>
                <h2 className="text-2xl font-semibold mb-2 pl-4">MECHANICAL</h2>
                <ul className=''>
                <li>Jasmine Wu - Aerodynamics</li>
                <li>Mauro De Liberato - Chassis</li>
                <li>Vanshika Bhatia - Ergonomics</li>
                <li>Mo Taban - Brakes</li>
                <li>Batu Tibet - Composites</li>
                <li>Patryk Aniolowski - Suspension</li>
                <li>Kelvin Cao - Drivetrain</li>
                <li>Hunzala Rajput - Steering</li>
                <li>Eric Emmenegger - Powertrain Mechanical</li>
                <li>Tolu Ikubaje - Mechatronics</li>
                </ul>
                </Fade>
            </div>

            {/* Business */}
            <div className="teamCard bg-gray-100 p-4 rounded-lg py-7">
                <Fade cascade damping={0.1} triggerOnce>
                <h2 className="text-2xl font-semibold mb-2 pl-4">BUSINESS</h2>
                <ul>
                <li>Caley McNeill - Events</li>
                <li>Rebecca Schultz - Events</li>
                <li>Olivia Tworzyanski - Marketing</li>
                <li>Amelia Dease - Marketing</li>
                <li>Evan Tal - External Relations</li>
                <li>Halle Teh - Recruitment</li>
                <li>Nicholas Burley - Recruitment</li>
                <li>Robert Firsov - Recruitment</li>
                <li>Sam Bharami - Shop Manager</li>
                </ul>
                </Fade>
            </div>

            {/* Electrical */}
            <div className="teamCard bg-gray-100 p-4 rounded-lg py-7">
                <Fade cascade damping={0.1} triggerOnce>
                <h2 className="text-2xl font-semibold mb-2 pl-4">ELECTRICAL</h2>
                <ul>
                <li>Angus Zhang - Powertrain</li>
                <li>Kate Ker - Harness</li>
                <li>Nicholas Burley - Controllers</li>
                <li>Nadia Zhou - Firmware</li>
                </ul>
                </Fade>
            </div>

            {/* Driverless */}
            <div className="teamCard bg-gray-100 p-4 rounded-lg py-7">
                <Fade cascade damping={0.1} triggerOnce>
                <h2 className="text-2xl font-semibold mb-2 pl-4">DRIVERLESS</h2>
                <ul>        
                <li>Alfred Xue - Perception</li>
                <li>Thomas Zeger - Perception</li>
                <li>Arthur Xu - Mapping</li>
                <li>Justin Lim - Planning</li>
                <li>Youssef Elhadad - Controls</li>
                </ul>
                </Fade>
            </div>
            </div>
            </Fade>
        </div>

    </div>
  );
};

export default TeamMembersComponentSectioned;
