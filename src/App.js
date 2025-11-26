import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.scss';
import Aos from "aos";
import 'aos/dist/aos.css';
import "./assets/css/remixicon.css"
import Home from './View/Home/home';
import Footer from './View/_Common/Footer';
import PrivacyPolicy from './View/QuickLinks/privacy-policy';
import TermsofUse from './View/QuickLinks/terms-of-use';
import SafetyGuidelines from './View/QuickLinks/safety-guidelines';
import FullFleet from './View/FullFleet/full-fleet';

export default function App() {
  // ✅ Initialize AOS only once when the app loads
  useEffect(() => {
    Aos.init({
      duration: 1000,
      delay: 10,
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <React.Fragment>
      <div className="main-app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsofUse />} />
          <Route path="/safety-guidelines" element={<SafetyGuidelines />} />
          <Route path="/full-fleet" element={<FullFleet />} />
        </Routes>
      </div>
      <Footer />
    </React.Fragment>
  );
}
