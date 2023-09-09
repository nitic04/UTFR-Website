import Background from '../assets/CzechRepublic2023/Czech3.webp'
import { Fade } from "react-awesome-reveal";

const Home = () => {
  return (
    <div>
      <div className='w-full h-screen' style={{
        backgroundImage: `url(${Background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}>
      <div className='h-full flex flex-col justify-end'>
          <Fade cascade damping={0.2} triggerOnce>
            <h1 className='font-bold text-9xl text-white text-center md:text-left md:pl-10'>UTFR</h1>
            <h1 className='font-bold md:text-7xl text-white text-center md:text-left text-3xl py-2 md:pl-10 mb-16'>Design. Build. Race.</h1>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Home
