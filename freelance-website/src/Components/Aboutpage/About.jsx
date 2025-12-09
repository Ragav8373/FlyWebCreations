import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FiUsers,
  FiCode,
  FiSettings,
  FiEye,
  FiTarget,
} from "react-icons/fi";
import "./About.css";

export default function About() {
  return (
    <Container className="about-wrapper py-5">

      {/* WHO WE ARE */}
      <Row className="mb-5">
        <Col md={12} className="text-center">
          <h1 className="section-main-title">Who We Are</h1>
          <p className="section-main-text">
            FlyWebCreations is a modern digital design and development studio
            helping startups, small businesses, and brands build powerful online
            identities.  
            We create websites, branding, and digital experiences that are fast,
            user-friendly, and designed to grow your business.
          </p>
        </Col>
      </Row>

      {/* WHAT WE DO */}
      <Row className="mb-5">
        <Col md={12} className="text-center">
          <h1 className="section-main-title">What We Do</h1>
        </Col>

        <Col md={4} className="mb-4">
          <div className="info-box h-100">
            <FiCode className="icon-orange" size={34} />
            <h3 className="info-title">Web Development</h3>
            <p className="info-text">
              Custom websites, responsive UI, landing pages,  
              and complete web applications built using modern technologies.
            </p>
          </div>
        </Col>

        <Col md={4} className="mb-4">
          <div className="info-box h-100">
            <FiUsers className="icon-orange" size={34} />
            <h3 className="info-title">UI / UX Design</h3>
            <p className="info-text">
              Beautiful, clean, and user-friendly interfaces  
              that provide premium user experience for your customers.
            </p>
          </div>
        </Col>

        <Col md={4} className="mb-4">
          <div className="info-box h-100">
            <FiSettings className="icon-orange" size={34} />
            <h3 className="info-title">Digital Solutions</h3>
            <p className="info-text">
              Branding, digital marketing, analytics, and  
              smart strategies to boost your online presence.
            </p>
          </div>
        </Col>
      </Row>

      {/* HOW WE DO IT */}
      <Row className="mb-5">
        <Col md={12} className="text-center">
          <h1 className="section-main-title">How We Do It</h1>
        </Col>

        <Col md={12}>
          <div className="how-we-do-box">
            <ul className="how-list">
              <li>Understand your business & goals.</li>
              <li>Plan the right design + development approach.</li>
              <li>Create modern & user-friendly interfaces.</li>
              <li>Build using latest web technologies.</li>
              <li>Test, refine, and ensure top performance.</li>
              <li>Deliver fast, clean, and scalable solutions.</li>
            </ul>
          </div>
        </Col>
      </Row>

      {/* VISION & MISSION */}
      <Row className="mb-5">

        <Col md={6} className="mb-4">
          <div className="info-box h-100">
            <div className="icon-circle">
              <FiEye size={32} className="icon-orange" />
            </div>
            <h2 className="info-title">Our Vision</h2>
            <p className="info-text">
              To be the most trusted digital partner helping businesses grow
              through creative, meaningful, and high-performing digital solutions.
            </p>
          </div>
        </Col>

        <Col md={6} className="mb-4">
          <div className="info-box h-100">
            <div className="icon-circle">
              <FiTarget size={32} className="icon-orange" />
            </div>
            <h2 className="info-title">Our Mission</h2>
            <p className="info-text">
              • Deliver modern, high-quality digital products. <br />
              • Create user-first designs for better engagement. <br />
              • Offer complete web & branding support. <br />
              • Build transparent and reliable partnerships. <br />
              • Help businesses grow with smart digital strategies.
            </p>
          </div>
        </Col>

      </Row>

    </Container>
  );
}
