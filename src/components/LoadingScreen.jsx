import React from 'react'
import Logo from '../assets/UTFRLogoRed.png'


const LoadingScreen = () => {
  return (
    <div className='loadingScreen'>
        <img className='loadingLogo' src={Logo} alt="" />
    </div>
  )
}

export default LoadingScreen
