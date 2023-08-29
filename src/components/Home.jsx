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
        <Fade cascade damping={0.2} triggerOnce>
          <h1 className='text-9xl text-white pt-[500px] px-12 font-bold'>UTFR</h1>
          <h1 className='md:text-7xl text-white px-12 font-bold text-3xl py-2'>Design. Build. Race.</h1>
        </Fade>
      </div>
    </div>
  )
}

export default Home
