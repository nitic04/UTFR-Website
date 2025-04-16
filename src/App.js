// import React, { useState, useEffect } from 'react';
import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import History from "./components/History";
import Countdown from "./components/Countdown";
import Team2025 from "./components/Team2025";
import HomeCarousel from "./components/HomeCarousel";
import SponsorshipFooter from "./components/SponsorshipFooter";
import JoinUs from "./components/JoinUs";
import Sponsors from "./components/Sponsors";
import Shootout from "./components/Shootout";
import Blog from "./components/Blog";
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
import UT24 from "./components/CarPages/UT24";
import ShootoutNavbar from "./components/ShootoutNavbar";
import LilyBearingBlog from "./components/BlogPages/LilyBearingBlog";
import OctoberIssue2024 from "./components/BlogPages/OctoberIssue2024";
import DecemberIssue2024 from "./components/BlogPages/DecemberIssue2024";
import MarchIssue2025 from "./components/BlogPages/MarchIssue2025";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<><Navbar /><Home /><Countdown countdownTimestampMS={1743462000000}/><About /><HomeCarousel /><SponsorshipFooter /><Footer /></>} />
          <Route path="/team" element={<><Navbar /><Team2025 /><Footer /></>} />
          <Route path="/history" element={<><Navbar /><History /></>} />
          <Route path="/joinUs" element={<><Navbar /><JoinUs /><Footer /></>} />
          <Route path="/sponsors" element={<><Navbar /><Sponsors /><Footer /></>} />
          <Route path="/shootout" element={<><ShootoutNavbar /><Shootout /><Footer /></>} />
          <Route path="/blog" element={<><Navbar /><Blog /><Footer /></>} />
          <Route path="/1997" element={<><Navbar /><TeamPage1997 /><Footer /></>} />
          <Route path="/1998" element={<><Navbar /><TeamPage1998 /><Footer /></>} />
          <Route path="/UT99" element={<><Navbar /><UT99 /><Footer /></>} />
          <Route path="/UT00" element={<><Navbar /><UT00 /><Footer /></>} />
          <Route path="/UT01" element={<><Navbar /><UT01 /><Footer /></>} />
          <Route path="/UT02" element={<><Navbar /><UT02 /><Footer /></>} />
          <Route path="/UT03" element={<><Navbar /><UT03 /><Footer /></>} />
          <Route path="/UT04" element={<><Navbar /><UT04 /><Footer /></>} />
          <Route path="/UT05" element={<><Navbar /><UT05 /><Footer /></>} />
          <Route path="/UT06" element={<><Navbar /><UT06 /><Footer /></>} />
          <Route path="/UT07" element={<><Navbar /><UT07 /><Footer /></>} />
          <Route path="/UT08" element={<><Navbar /><UT08 /><Footer /></>} />
          <Route path="/UT09" element={<><Navbar /><UT09 /><Footer /></>} />
          <Route path="/UT10" element={<><Navbar /><UT10 /><Footer /></>} />
          <Route path="/UT11" element={<><Navbar /><UT11 /><Footer /></>} />
          <Route path="/UT12" element={<><Navbar /><UT12 /><Footer /></>} />
          <Route path="/UT13" element={<><Navbar /><UT13 /><Footer /></>} />
          <Route path="/UT14" element={<><Navbar /><UT14 /><Footer /></>} />
          <Route path="/UT15" element={<><Navbar /><UT15 /><Footer /></>} />
          <Route path="/UT16" element={<><Navbar /><UT16 /><Footer /></>} />
          <Route path="/UT17" element={<><Navbar /><UT17 /><Footer /></>} />
          <Route path="/UT18" element={<><Navbar /><UT18 /><Footer /></>} />
          <Route path="/UT19" element={<><Navbar /><UT19 /><Footer /></>} />
          <Route path="/UT20" element={<><Navbar /><UT20 /><Footer /></>} />
          <Route path="/UT21" element={<><Navbar /><UT21 /><Footer /></>} />
          <Route path="/UT22" element={<><Navbar /><UT22 /><Footer /></>} />
          <Route path="/UT23" element={<><Navbar /><UT23 /><Footer /></>} />
          <Route path="/UT24" element={<><Navbar /><UT24 /><Footer /></>} />
          <Route path="/lilybearingblog" element={<><Navbar /><LilyBearingBlog /><Footer /></>} />
          <Route path="/octoberissue2024" element={<><Navbar /><OctoberIssue2024 /><Footer /></>} />
          <Route path="/decemberissue2024" element={<><Navbar /><DecemberIssue2024 /><Footer /></>} />
          <Route path="/marchissue2025" element={<><Navbar /><MarchIssue2025 /><Footer /></>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
