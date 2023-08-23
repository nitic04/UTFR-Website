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
import UT23 from "./components/UT23";
import Sponsors from "./components/Sponsors";
import Shootout from "./components/Shootout";
import Newsletter from "./components/Newsletter";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<><Home /><About /><Countdown countdownTimestampMS={1696075200000}/><HomeCarousel /><SponsorshipFooter /></>} />
          <Route path="/nh23blog" element={<NH23Blog />}/>
          <Route path="/team" element={<><TeamHeader /><Team2024 /></>} />
          <Route path="/team2023" element={<><TeamHeader /><Team2023 /></>} />
          <Route path="/UT23" element={<UT23 />} />
          <Route path="/history" element={<History />} />
          <Route path="/joinUs" element={<JoinUs />} />
          <Route path="/UT03" element={<UT03 />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/shootout" element={<Shootout />} />
          <Route path="/newsletter" element={<Newsletter />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
