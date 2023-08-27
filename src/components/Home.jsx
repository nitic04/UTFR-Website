import Background from '../assets/CzechRepublic2023/Czech3.jpeg'
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
        <Fade><h1 className='text-9xl text-white pt-[550px] px-12 font-bold'>UTFR</h1></Fade>
        <Fade><h1 className='lg:text-7xl text-white px-12 font-bold text-6xl py-2'>Design. Build. Race.</h1></Fade>
      </div>
    </div>
  )
}

export default Home
