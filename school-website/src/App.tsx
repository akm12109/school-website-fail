import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// Import the pages
import Home from "./pages/Home";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Admissions from "./pages/Admissions";
import Facilities from "./pages/Facilities";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import News from "./pages/News";
import Careers from "./pages/Careers";
import PrincipalMessage from "./pages/PrincipalMessage";
import MissionVision from "./pages/MissionVision";
import Sports from "./pages/Sports";
import Library from "./pages/Library";
import Clubs from "./pages/Clubs";
import Transport from "./pages/Transport";
import Alumni from "./pages/Alumni";
import Faq from "./pages/FAQs";
import ParentPortal from "./pages/ParentPortal";
import Staff from "./pages/Staff";
import Achievements from "./pages/Achievements";
import AcademicCalendar from "./pages/AcademicCalendar";
import Terms from "./pages/Terms";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Footer from "./components/Footer";
// import AddPhoto from "./Admin/AddPhoto";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      {/* <div className="container mx-auto p-4"> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/news" element={<News />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/principalmessage" element={<PrincipalMessage />} />
          <Route path="/missionvision" element={<MissionVision />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/library" element={<Library />} />
          <Route path="/clubs" element={<Clubs />} />
          <Route path="/transport" element={<Transport />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/parentportal" element={<ParentPortal />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/academiccalendar" element={<AcademicCalendar />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          {/* <Route path="add-photo" element={<AddPhoto/>}/> */}
        </Routes>
      {/* </div> */}
      <Footer/>
    </Router>
  );
};

export default App;
