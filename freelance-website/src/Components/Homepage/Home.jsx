
import React from "react";
import { Carousel } from "react-bootstrap";
import "./Home.css";  

export default function Home() {
  return (
    <div className="hero-slider-container">

      <Carousel interval={4000} indicators={true} controls={false}>
        
        {/* SLIDE 1 - WHO WE ARE */}
        <Carousel.Item>
          <div className="slide-background">
            <div className="slide-content">
              <h1>FlyWebCreations — Empowering Your Digital Presence</h1>
              <p>
                We are a young and passionate web development startup dedicated
                to building modern, fast, and highly engaging websites for
                businesses and individuals.
              </p>
              {/* <button
                className="hero-btn"
                onClick={() => {
                  const section = document.getElementById("\ourservices");
                  if (section) section.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Who We Are
              </button> */}
              <a className="hero-btn" href="ourservices"> Who We Are </a>

            </div>
          </div>
        </Carousel.Item>

        {/* SLIDE 2 - WHAT WE DO */}
        <Carousel.Item>
          <div className="slide-background">
            <div className="slide-content">
              <h1>We Build Websites That Grow Your Business</h1>
              <p>
                From responsive websites to branding, UI/UX, landing pages,
                portfolios and business websites — we provide end-to-end digital
                solutions tailored to your goals.
              </p>
              {/* <button
                className="hero-btn"
                onClick={() => {
                  const section = document.getElementById("services-section");
                  if (section) section.scrollIntoView({ behavior: "smooth" });
                }}
              >
                What We Do
              </button> */}
               <a className="hero-btn" href="ourservices"> What We Do</a>

            </div>
          </div>
        </Carousel.Item>

        {/* SLIDE 3 - HOW WE DO IT */}
        <Carousel.Item>
          <div className="slide-background">
            <div className="slide-content">
              <h1>We Design. We Develop. We Deliver Perfectly.</h1>
              <p>
                Our workflow is simple and powerful — we understand your idea,
                create a beautiful UI, develop using modern tech, and deliver
                fast, secure, mobile-friendly websites every time.
              </p>
              {/* <button
                className="hero-btn"
                onClick={() => {
                  const section = document.getElementById("process-section");
                  if (section) section.scrollIntoView({ behavior: "smooth" });
                }}
              >
                How We Do It
              </button> */}
               <a className="hero-btn" href="ourservices"> How We Do It </a>

            </div>
          </div>
        </Carousel.Item>

      </Carousel>
    </div>
  );
}
