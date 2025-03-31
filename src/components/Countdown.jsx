import React, { useState, useEffect } from 'react';
import { getRemainingTimeUntilMStimestamp } from './CountdownLogic/CountdownTimerUtils';
import { Fade } from "react-awesome-reveal";

const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00',
};

const Countdown = ({ countdownTimestampMS }) => {
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);
    const [isFinished, setIsFinished] = useState(false);
    const [videoUrl, setVideoUrl] = useState("https://www.youtube.com/embed/m4IdGANWDLA?si=bClcyoABJk78ubIO");

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (isFinished) {
                clearInterval(intervalId);
                return;
            }
            updateRemainingTime(countdownTimestampMS);
        }, 1000);

        return () => clearInterval(intervalId);
    }, [countdownTimestampMS, isFinished]);

    function updateRemainingTime(countdown) {
        const time = getRemainingTimeUntilMStimestamp(countdown);
        
        if (time.days === '00' && time.hours === '00' && time.minutes === '00' && time.seconds === '00' && !isFinished) {
            setIsFinished(true);
            setRemainingTime({ days: '00', hours: '00', minutes: '00', seconds: '00' });
            setVideoUrl("https://www.youtube.com/embed/m4IdGANWDLA?autoplay=1&si=bClcyoABJk78ubIO");
        } else {
            setRemainingTime(time);
        }
    }

    return (
        <div className='w-full bg-[#131212] text-white'>
            <div className='p-8'>
                <Fade delay={500} cascade damping={0.1} triggerOnce>
                    <h1 className='countdownDay text-2xl pl-2'>UT25 Unveiling</h1>
                    <div className='md:w-full countdownTimer py-12 text-[1.33rem] lg:text-[2.75rem] flex'>
                        <span className='font-semibold text-[#ED3833]'>{remainingTime.days}</span>
                        <span className='font-light'>{window.innerWidth <= 768 ? 'days' : 'days'}</span>
                        <span className='font-semibold two-numbers text-[#ED3833]'>{remainingTime.hours}</span>
                        <span className='font-light'>{window.innerWidth <= 768 ? 'hrs' : 'hours'}</span>
                        <span className='font-semibold two-numbers text-[#ED3833]'>{remainingTime.minutes}</span>
                        <span className='font-light'>{window.innerWidth <= 768 ? 'mins' : 'minutes'}</span>
                        <span className='font-semibold two-numbers text-[#ED3833]'>{remainingTime.seconds}</span>
                        <span className='font-light'>{window.innerWidth <= 768 ? 'secs' : 'seconds'}</span>
                    </div>


                    <div className="mt-3 mb-5 flex justify-center w-full">
                        <div className="w-[90%] aspect-video mx-auto">
                            <iframe
                                className="w-full h-full"
                                src={videoUrl}
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin"
                                allowfullscreen
                            ></iframe>
                        </div>
                    </div>

                </Fade>
            </div>
        </div>
    );
}

export default Countdown;
