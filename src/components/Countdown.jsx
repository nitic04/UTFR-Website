import React, {useState, useEffect} from 'react'
import {getRemainingTimeUntilMStimestamp} from './CountdownLogic/CountdownTimerUtils'

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
    <div className='w-full h-[250px] bg-[#131212] text-white'>
        <div className='p-8'>
            <h1 className='countdownDay text-lg'>2023 TORONTO SHOOTOUT</h1>
            <div className='countdownTimer py-14 text-3xl md:text-5xl'>
                <span className='font-semibold text-[#ED3833]'>{remainingTime.days}</span>
                <span className='font-light'>days</span>
                <span className='font-semibold two-numbers text-[#ED3833]'>{remainingTime.hours}</span>
                <span className='font-light'>hours</span>
                <span className='font-semibold two-numbers text-[#ED3833]'>{remainingTime.minutes}</span>
                <span className='font-light'>minutes</span>
                <span className='font-semibold two-numbers text-[#ED3833]'>{remainingTime.seconds}</span>
                <span className='font-light'>seconds</span>
            </div>
        </div>
    </div>
  )
}

export default Countdown
