// import React, { useState, useEffect } from 'react';
import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TeamHeader from "./components/TeamHeader";
import History from "./components/History";
import Countdown from "./components/Countdown";
import Team2024 from "./components/Team2024";
import Team2023 from "./components/Team2023";
import HomeCarousel from "./components/HomeCarousel";
import NH23Blog from "./components/NH23Blog";
import SponsorshipFooter from "./components/SponsorshipFooter";
import JoinUs from "./components/JoinUs";
import Sponsors from "./components/Sponsors";
import Shootout from "./components/Shootout";
import Newsletter from "./components/Newsletter";
// import LoadingScreen from './components/LoadingScreen';

import TeamPage1997 from "./components/CarPages/TeamPage1997";
import TeamPage1998 from "./components/CarPages/TeamPage1998";
import UT99 from "./components/CarPages/UT99";
import UT00 from "./components/CarPages/UT00";
import UT01 from "./components/CarPages/UT01";
import UT02 from "./components/CarPages/UT02";
import UT03 from "./components/CarPages/UT03";
import UT04 from "./components/CarPages/UT04";
import UT05 from "./components/CarPages/UT05";
import UT06 from "./components/CarPages/UT06";
import UT07 from "./components/CarPages/UT07";
import UT08 from "./components/CarPages/UT08";
import UT09 from "./components/CarPages/UT09";
import UT10 from "./components/CarPages/UT10";
import UT11 from "./components/CarPages/UT11";
import UT12 from "./components/CarPages/UT12";
import UT13 from "./components/CarPages/UT13";
import UT14 from "./components/CarPages/UT14";
import UT15 from "./components/CarPages/UT15";
import UT16 from "./components/CarPages/UT16";
import UT17 from "./components/CarPages/UT17";
import UT18 from "./components/CarPages/UT18";
import UT19 from "./components/CarPages/UT19";
import UT20 from "./components/CarPages/UT20";
import UT21 from "./components/CarPages/UT21";
import UT22 from "./components/CarPages/UT22";
import UT23 from "./components/CarPages/UT23";
// import UT24 from "./components/CarPages/UT24";

function App() {
  // const [loading, setLoading] = useState(true);

  // Simulate loading delay
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 3000); // Adjust the delay time as needed
  // }, []);

  return (
    <div>
      {/* {loading ? ( // Conditional rendering based on loading state
        <LoadingScreen />
      ) : ( */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<><Home /><About /><Countdown countdownTimestampMS={1711152000000}/><HomeCarousel /><SponsorshipFooter /></>} />
          <Route path="/nh23blog" element={<NH23Blog />}/>
          <Route path="/team" element={<><TeamHeader /><Team2024 /><Footer /><Footer /></>} />
          <Route path="/team2023" element={<><TeamHeader /><Team2023 /><Footer /></>} />
          <Route path="/history" element={<History />} />
          <Route path="/joinUs" element={<><JoinUs /><Footer /></>} />
          <Route path="/sponsors" element={<><Sponsors /><Footer /></>} />
          <Route path="/shootout" element={<><Shootout /><Footer /></>} />
          <Route path="/newsletter" element={<><Newsletter /><Footer /></>} />
          <Route path="/1997" element={<><TeamPage1997 /><Footer /></>} />
          <Route path="/1998" element={<><TeamPage1998 /><Footer /></>} />
          <Route path="/UT99" element={<><UT99 /><Footer /></>} />
          <Route path="/UT00" element={<><UT00 /><Footer /></>} />
          <Route path="/UT01" element={<><UT01 /><Footer /></>} />
          <Route path="/UT02" element={<><UT02 /><Footer /></>} />
          <Route path="/UT03" element={<><UT03 /><Footer /></>} />
          <Route path="/UT04" element={<><UT04 /><Footer /></>} />
          <Route path="/UT05" element={<><UT05 /><Footer /></>} />
          <Route path="/UT06" element={<><UT06 /><Footer /></>} />
          <Route path="/UT07" element={<><UT07 /><Footer /></>} />
          <Route path="/UT08" element={<><UT08 /><Footer /></>} />
          <Route path="/UT09" element={<><UT09 /><Footer /></>} />
          <Route path="/UT10" element={<><UT10 /><Footer /></>} />
          <Route path="/UT11" element={<><UT11 /><Footer /></>} />
          <Route path="/UT12" element={<><UT12 /><Footer /></>} />
          <Route path="/UT13" element={<><UT13 /><Footer /></>} />
          <Route path="/UT14" element={<><UT14 /><Footer /></>} />
          <Route path="/UT15" element={<><UT15 /><Footer /></>} />
          <Route path="/UT16" element={<><UT16 /><Footer /></>} />
          <Route path="/UT17" element={<><UT17 /><Footer /></>} />
          <Route path="/UT18" element={<><UT18 /><Footer /></>} />
          <Route path="/UT19" element={<><UT19 /><Footer /></>} />
          <Route path="/UT20" element={<><UT20 /><Footer /></>} />
          <Route path="/UT21" element={<><UT21 /><Footer /></>} />
          <Route path="/UT22" element={<><UT22 /><Footer /></>} />
          <Route path="/UT23" element={<><UT23 /><Footer /></>} />
          {/* <Route path="/UT24" element={<><UT24 /><Footer /></>} /> */}
        </Routes>
      </Router>
      {/* )} */}
    </div>
  );
}

export default App;
