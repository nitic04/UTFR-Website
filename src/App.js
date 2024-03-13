// import React, { useState, useEffect } from 'react';
import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TeamHeader from "./components/TeamHeader";
import Team2024 from "./components/Team2024";
import Team2023 from "./components/Team2023";
import History from "./components/History";
import Countdown from "./components/Countdown";
import HomeCarousel from "./components/HomeCarousel";
import NH23Blog from "./components/NH23Blog";
import SponsorshipFooter from "./components/SponsorshipFooter";
import JoinUs from "./components/JoinUs";
import UT03 from "./components/UT03";
import UT23 from "./components/CarPages/UT23";
import Sponsors from "./components/Sponsors";
import Shootout from "./components/Shootout";
import Newsletter from "./components/Newsletter";
import Team1997 from "./components/CarPages/Team1997";
// import LoadingScreen from './components/LoadingScreen';

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
          <Route path="/" element={<><Home /><About /><Countdown countdownTimestampMS={1711144800000}/><HomeCarousel /><SponsorshipFooter /><Footer /></>} />
          <Route path="/nh23blog" element={<NH23Blog />}/>
          <Route path="/team" element={<><TeamHeader /><Team2024 /><Footer /><Footer /></>} />
          <Route path="/team2023" element={<><TeamHeader /><Team2023 /><Footer /></>} />
          <Route path="/UT23" element={<><UT23 /><Footer /></>} />
          <Route path="/history" element={<History />} />
          <Route path="/joinUs" element={<><JoinUs /><Footer /></>} />
          <Route path="/UT03" element={<><UT03 /><Footer /></>} />
          <Route path="/sponsors" element={<><Sponsors /><Footer /></>} />
          <Route path="/shootout" element={<><Shootout /><Footer /></>} />
          <Route path="/newsletter" element={<><Newsletter /><Footer /></>} />
          <Route path="/1997" element={<><Team1997 /><Footer /></>} />
        </Routes>
      </Router>
      {/* )} */}
    </div>
  );
}

export default App;
