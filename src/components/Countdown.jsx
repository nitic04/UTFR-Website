import React, {useState, useEffect} from 'react'
import {getRemainingTimeUntilMStimestamp} from './CountdownLogic/CountdownTimerUtils'
import { Fade } from "react-awesome-reveal";

const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00'
}

const Countdown = ({countdownTimestampMS}) => {
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

    useEffect(() => {
        const intervalId = setInterval(() => {
            updateRemainingTime(countdownTimestampMS);
        }, 1000);
        return () => clearInterval(intervalId)
    }, [countdownTimestampMS]);

    function updateRemainingTime(countdown) {
        setRemainingTime(getRemainingTimeUntilMStimestamp(countdown));
    }

  return (
    <div className='w-full bg-[#131212] text-white'>
        <div className='p-8'>
            <Fade delay={500} cascade damping={0.1} triggerOnce>
                <h1 className='countdownDay text-xl pl-2'>UT26 Unveiling</h1>
                <div className='md:w-full countdownTimer py-12 text-[1.33rem] lg:text-[2.75rem] flex'>
                    {/* <span className='loading'>Coming Soon</span>
                    <div className='dot-flashing ml-5 mt-3 lg:mt-5'></div>
                    <span className='hidden'>{remainingTime.days}</span> */}
                    <span className='font-semibold text-[#ED3833]'>{remainingTime.days}</span>
                    <span className='font-light'>{window.innerWidth <= 768 ? 'days' : 'days'}</span>
                    <span className='font-semibold two-numbers text-[#ED3833]'>{remainingTime.hours}</span>
                    <span className='font-light'>{window.innerWidth <= 768 ? 'hrs' : 'hours'}</span>
                    <span className='font-semibold two-numbers text-[#ED3833]'>{remainingTime.minutes}</span>
                    <span className='font-light'>{window.innerWidth <= 768 ? 'mins' : 'minutes'}</span>
                    <span className='font-semibold two-numbers text-[#ED3833]'>{remainingTime.seconds}</span>
                    <span className='font-light'>{window.innerWidth <= 768 ? 'secs' : 'seconds'}</span>
                </div>
            </Fade>
        </div>
    </div>
  )
}

export default Countdown


