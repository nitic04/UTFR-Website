import React from 'react';
import HeaderImage from '../../assets/TeamMembers/ActionPhotos/chassis_pic.webp'
import Team1997_1 from '../../assets/HistoricCarPhotos/UT00/2000-Competition-9.jpg'
import Team1997_2 from '../../assets/HistoricCarPhotos/UT00/2000-Competition-8.jpg'

import { Fade } from "react-awesome-reveal";

const Team1997 = () => {
    return (
        <div className='text-white'>
            <div className='w-full h-screen' style={{
                backgroundImage: `url(${HeaderImage})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
                <div className='headerOverlay'>
                    <div className=' h-full flex flex-col justify-end'>
                    <Fade triggerOnce>
                        <h1 className='font-bold text-8xl md:text-9xl text-white text-center md:text-left md:pl-10 mb-40 md:mb-16'>1997</h1>
                    </Fade>
                    </div>  
                </div>
            </div>
            <div className='h-[500px] grid grid-cols-2'>
                <div className='bg-[#295FAC]'>
                    <h1 className='text-5xl font-bold pt-24 pl-5 lg:pl-10'>The Team Was Founded</h1>

                </div>
                <div className='w-full' style={{
                backgroundImage: `url(${Team1997_1})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
                }}></div>

            </div>
            <div className='bg-[#3A4254] h-[550px]'>
                <h1 className='text-5xl font-bold text-center pt-10'>Competitions</h1>
                <div className='grid grid-cols-3 text-center space-x-10'>
                    <div className='w-[25vw] h-[25vh] pt-24 pl-10'>
                        <div className='w-[25vw] h-[25vh]' style={{
                            backgroundImage: `url(${HeaderImage})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'
                        }}></div>
                        <div className='text-xl'>
                            <h1 className=''>New Hampshire Formula Hybrid + Electric</h1> 
                            <h1 className='font-bold'>1st Place Overall</h1>
                        </div>
                    </div>
                    <div className='w-[25vw] h-[25vh] pt-12'>
                        <div className='w-[25vw] h-[25vh]' style={{
                            backgroundImage: `url(${HeaderImage})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'
                        }}></div>
                        <div className='text-xl'>
                            <h1 className=''>Formula SAE Electric Michigan</h1> 
                            <h1 className='font-bold'>5th Place Overall</h1>
                        </div>
                    </div>
                    <div className='w-[25vw] h-[25vh] pt-24'>
                        <div className='w-[25vw] h-[25vh]' style={{
                            backgroundImage: `url(${HeaderImage})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'
                        }}></div>
                        <div className='text-xl'>
                            <h1 className=''>Formula Student Czechia</h1> 
                            <h1 className='font-bold'>6th Place Overall</h1>
                            <h1 className='font-bold'>1st Place in EV Efficiency</h1>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Team1997;