import React from 'react'
import GoToTop from './GoToTop'
import ShootoutHeader from '../assets/ShootoutPhotos/Shootout2022/ShootoutHeader.jpeg'
import Shootout2022_1 from '../assets/ShootoutPhotos/Shootout2022/Shootout2022.jpg'
import Shootout2022_2 from '../assets/ShootoutPhotos/Shootout2022/Shootout2022_2.JPG'
import Shootout2022_3 from '../assets/ShootoutPhotos/Shootout2022/Shootout2022_3.JPG'
// import Shootout2022_4 from '../assets/ShootoutPhotos/Shootout2022/Shootout2022_4.JPG'
import Shootout2022_5 from '../assets/ShootoutPhotos/Shootout2022/Shootout2022_5.jpg'
import Shootout2022_6 from '../assets/ShootoutPhotos/Shootout2022/Shootout2022_6.jpg'
// import Shootout2022_7 from '../assets/ShootoutPhotos/Shootout2022/Shootout2022_7.jpg'
import Shootout2022_8 from '../assets/ShootoutPhotos/Shootout2022/Shootout2022_8.JPG'
import Shootout2022_9 from '../assets/ShootoutPhotos/Shootout2022/Shootout2022_9.JPG'
// import Shootout2022_10 from '../assets/ShootoutPhotos/Shootout2022/Shootout2022_10.JPG'
// import Shootout2022_11 from '../assets/ShootoutPhotos/Shootout2022/Shootout2022_11.JPG'
import Shootout2022_12 from '../assets/ShootoutPhotos/Shootout2022/Shootout2022_12.JPG'
import Shootout2022_13 from '../assets/ShootoutPhotos/Shootout2022/Shootout2022_13.JPG'
import Shootout2022_14 from '../assets/ShootoutPhotos/Shootout2022/Shootout2022_14.JPG'
import ShootoutCard2019Image from '../assets/ShootoutPhotos/UTFRShootout2019GroupPhoto.jpeg'
import ShootoutCard2021Image from '../assets/ShootoutPhotos/UTFRShootout2021Photo.jpeg'
import ShootoutCard2018Image from '../assets/ShootoutPhotos/UTFRShootout2018Photo.png'

import HoosierLogo from '../assets/ShootoutPhotos/Shootout2022/HoosierLogo.png'
import Mobil1Logo from '../assets/ShootoutPhotos/Shootout2022/Mobil1Logo.png'
import ShiftedLogo from '../assets/ShootoutPhotos/Shootout2022/ShiftedLogo.png'
import BrechinLogo from '../assets/ShootoutPhotos/Shootout2022/BrechinLogo.png'

import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Slider from "react-slick"

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block"}}
      onClick={onClick}
    />
  );
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const Shootout = () => {
  var settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div>
        <div className='w-full h-screen' style={{
        backgroundImage: `url(${ShootoutHeader})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
        }}>
            <h1 className='text-8xl text-white pt-[650px] px-12 font-bold'>Shootout 2023</h1>
        </div>
        <div className='text-white bg-[#181818] pb-10'>
            <h1 className='flex justify-center text-4xl font-bold pt-12 text-center'>Toronto Shootout is an annual formula student competition.</h1>
            <p className='flex justify-center text-center text-xl px-10 py-5'>This year’s event is taking place on Saturday, September 30, 2023, at Brechin Motorsports Park which will be holding a design expo of various cars from FSAE teams across North America.</p>
        </div>
        <div className='py-10 grid place-items-center'>
          <Slider {...settings} className='lg:w-[1500px] md:w-[800px] w-[500px]'>
              <div className="carouselCard">
                <img alt="" src={Shootout2022_1}/>
              </div>
              <div className="carouselCard">
                <img alt="" src={Shootout2022_2}/>
              </div>
              <div className="carouselCard">
                <img alt="" src={Shootout2022_3}/>
              </div>
              {/* <div className="carouselCard">
                <img alt="" src={Shootout2022_4}/>
              </div> */}
              <div className="carouselCard">
                <img alt="" src={Shootout2022_5}/>
              </div>
              <div className="carouselCard">
                <img alt="" src={Shootout2022_6}/>
              </div>
              {/* <div className="carouselCard">
                <img alt="" src={Shootout2022_7}/>
              </div> */}
              <div className="carouselCard">
                <img alt="" src={Shootout2022_8}/>
              </div>
              <div className="carouselCard">
                <img alt="" src={Shootout2022_9}/>
              </div>
              {/* <div className="carouselCard">
                <img alt="" src={Shootout2022_10}/>
              </div> */}
              <div className="carouselCard">
                <img alt="" src={Shootout2022_12}/>
              </div>
              <div className="carouselCard">
                <img alt="" src={Shootout2022_13}/>
              </div>
              <div className="carouselCard">
                <img alt="" src={Shootout2022_14}/>
              </div>
          </Slider>
        </div>
        <div className='text-[#F3F3F3] bg-[#181818] pb-10'>
          <h1 className='flex justify-center text-4xl font-bold pt-10'>Previous Years</h1>
          <div className='flex justify-center pt-10'>
          <div className='grid grid-cols-1 lg:grid-cols-3'>
            <div className='shootoutCard w-[450px] h-[300px] mx-5 mb-5' style={{
            backgroundImage: `url(${ShootoutCard2018Image})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
            }}>
              <h1 className='flex justify-center text-5xl font-bold pt-32'>Shootout 2018</h1>
              <div className='flex pt-3 justify-center gap-x-5'>
                <a href="https://docs.google.com/spreadsheets/u/1/d/1DG3YR5VZxDNAfsyb20JhmGvHxYcLyYVY28OfpoZLQi0/edit?usp=drive_web&ouid=105352858794991473194" target="_blank" rel="noreferrer"><p className='text-lg hover:text-gray-300 transition duration-200'>Official Results</p></a>
                <a href="https://drive.google.com/drive/u/1/folders/1yqlPyXtykjWb5A9PesBc4De_VZ7fqV9l" target="_blank" rel="noreferrer"><p className='text-lg hover:text-gray-300 transition duration-200'>Official Photography</p></a>
              </div>
            </div>
            <div className='shootoutCard w-[450px] h-[300px] mx-5 mb-5' style={{
            backgroundImage: `url(${ShootoutCard2019Image})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
            }}>
              <h1 className='flex justify-center text-5xl font-bold pt-32'>Shootout 2019</h1>
              <div className='flex pt-3 justify-center gap-x-5'>
                <a href="https://docs.google.com/spreadsheets/d/1YENFcnf0Cyh2U3froM9PQei7RHiANrUHWjx8A5oifwg/edit#gid=224179064" target="_blank" rel="noreferrer"><p className='text-lg hover:text-gray-300 transition duration-200'>Official Results</p></a>
                <a href="https://drive.google.com/drive/u/3/folders/14EwBEUBqF-8kOvZG1zvI1CQpSOmkyS5j" target="_blank" rel="noreferrer"><p className='text-lg hover:text-gray-300 transition duration-200' >Official Photography</p></a>
              </div>
            </div>
            <div className='shootoutCard w-[450px] h-[300px] mx-5 mb-5' style={{
            backgroundImage: `url(${ShootoutCard2021Image})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
            }}>
              <h1 className='flex justify-center text-5xl font-bold pt-32'>Shootout 2021</h1>
              <div className='flex pt-3 justify-center gap-x-5'>
                <a href="https://docs.google.com/spreadsheets/u/4/d/149xlNqXhhEaQdj7Bto80WQzUqyR0rrDdc8-bdC4OVwU/edit?usp=sharing" target="_blank" rel="noreferrer"><p className='text-lg hover:text-gray-300 transition duration-200'>Official Results</p></a>
                <a href="https://drive.google.com/drive/u/3/folders/1w77s7Mhibkfyakz1BfZ6w1TiKGmTew2A" target="_blank" rel="noreferrer"><p className='text-lg hover:text-gray-300 transition duration-200'>Official Photography</p></a>
              </div>
            </div>
          </div>
          </div>
        </div>
        <div className='w-full bg-[#131212] pb-10'>
        <ThemeProvider theme={darkTheme}>
        <h1 className='flex justify-center text-4xl font-bold pt-10 text-white'>Event Sponsors</h1>
        <div className='flex justify-center'>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 py-10 gap-x-5 gap-y-5'>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea href="https://www.hoosiertire.com/" target="_blank">
              <CardMedia
                component="img"
                height="140"
                image={HoosierLogo}
              />
              <CardContent>
                <div className='pb-[80px]'>
                <Typography gutterBottom variant="h5" component="div">
                  Hoosier Racing Tire
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Hoosier generously provides valuable discount certificates to the top two teams at Toronto Shootout annually.
                </Typography>
                </div>
              </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea href="https://www.mobil.com/en/lubricants/for-personal-vehicles/our-products/motor-oils/mobil-1-motor-oil-products" target="_blank">
              <div className='py-[58px] px-[10px]'>
              <CardMedia
                component="img"
                height="140"
                image={Mobil1Logo}
              />
              </div>
              <CardContent>
                <div className='pb-[87px]'>
                <Typography gutterBottom variant="h5" component="div">
                  Mobil 1
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Mobil 1 (via David Swain Racing Products) proudly supports Toronto Shootout by supplying cases of engine oil for podium finishers.                
                </Typography>
                </div>
              </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 345}}>
              <CardActionArea href="https://www.shifted.digital/" target="_blank">
              <div className='px-[10px] py-[15px]'>
              <CardMedia
                component="img"
                height="140"
                image={ShiftedLogo}
              />
              </div>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  SHIFTED Digital Inc.
                </Typography>
                <div className='pb-[60px]'>
                <Typography variant="body2" color="text.secondary">
                  Shifted Digital, formerly FlightSquad Media, provides event photography for Toronto Shootout annually.
                </Typography>
                </div>
              </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea href="https://gamebridgegokarts.com/" target="_blank">
              <div className='py-[57px] px-[10px]'>
              <CardMedia
                component="img"
                height="140"
                image={BrechinLogo}
              />
              </div>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Brechin Motorsport Park
                </Typography>
                <div className='pb-[90px]'>
                <Typography variant="body2" color="text.secondary">
                  Brechin Motorsport Park / Gamebridge Go-Karts has provided an excellent venue for Shootout since 2018.
                </Typography>
                </div>
              </CardContent>
              </CardActionArea>
            </Card>
        </div>
        </div>
        </ThemeProvider>
        </div>
        <GoToTop />
    </div>
  )
}

export default Shootout
