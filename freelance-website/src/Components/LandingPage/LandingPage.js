import React from "react";
import Home from "../Homepage/Home";
import About from "../Aboutpage/About";
import Services from "../Servicepage/Service";
import Reviews from "../Reviewpage/Reviews";

import Contact from "../Contactpage/Contact";

export default function LandingPage() {
  return (
    <>
      <>
      <Home/>

      {/* Sections to scroll */}
      <div id="about-section"></div>
      <div id="services-section"></div>
      <div id="process-section"></div>
    </>
      <About />
      <Services />
      <Reviews />
      
    </>
  );
}
