import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navebar/Navbar";
import Footer from "./Components/Footerpage/Footer";

import LandingPage from "./Components/LandingPage/LandingPage"; 
import About from "./Components/Aboutpage/About";
import Ourservices from "./Components/OurServices/Ourservices";
import Services from "./Components/Servicepage/Service";
import Reviews from "./Components/Reviewpage/Reviews";
import Contact from "./Components/Contactpage/Contact";

import Admin from "./Components/Adminpage/Admin";
import AdminLogin from "./Components/AdminLogin";
import ProtectedRoute from "./Components/ProtectedRoute";
import Career from "./Components/Careerpage/Career";

export default function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* One-by-one components page */}
        <Route path="/" element={<LandingPage />} />

        {/* Separate pages (optional) */}
        <Route path="/aboutus" element={<About />} />
        <Route path="/ourservices" element={<Ourservices/>} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />

        {/* Admin */}
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />
      </Routes>

      <Footer />
    </Router>
  );
}
