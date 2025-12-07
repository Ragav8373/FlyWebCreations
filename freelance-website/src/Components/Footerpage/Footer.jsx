
//  <div className="col-md-6">
//           {locations.map((loc, index) => (
//             <div key={index} className="shadow rounded overflow-hidden mb-3">
//               <iframe
//                 title={loc.name}
//                 src={loc.mapSrc}
//                 width="100%"
//                 height="300"
//                 style={{ border: 0 }}
//                 allowFullScreen=""
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//               ></iframe>
//               <p className="text-center mt-2">{loc.name}</p>
//             </div>
//           ))}
//         </div>
//  const locations = [
//     {
//       name: "Coimbatore Office",
//       mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.8514868415234!2d76.95583237480785!3d10.986698355356955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859d6e75f1e6d%3A0xf3bfb3d1b70229d3!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
//     },
//   ];



import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTelegram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./Footer.css";
import logo from "../../Assets/flyweblogo.png";

export default function Footer() {
  return (
    <footer className="footer-bg">
      <Container className="py-5">

        <Row className="gy-4">

          {/* Logo + About */}
          <Col md={4} sm={12}>
         <img
  src={logo}
  alt="FlyWebCreations"
  className="footer-logo mb-3"
/>

            <p className="footer-about">
              FlyWebCreations — Your trusted partner for modern web
              development, branding and digital marketing solutions.
            </p>
          </Col>

          {/* Services */}
          <Col md={2} sm={6} xs={6}>
            <h5 className="footer-title">Our Services</h5>
            <ul className="footer-list">
              <li>Website Development</li>
              <li>Digital Marketing</li>
              <li>Branding & Design</li>
              <li>Content Creation</li>
            </ul>
          </Col>

          {/* Quick Access */}
          <Col md={2} sm={6} xs={6}>
            <h5 className="footer-title">Quick Access</h5>
            <ul className="footer-list">
              <li><a href="/">Home</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/about">About</a></li>
            </ul>
          </Col>

          {/* Contact */}
          <Col md={4} sm={12}>
            <h5 className="footer-title">Contact</h5>
            <ul className="footer-contact">
              <li><FaPhoneAlt /> +91 98765 43210</li>
              <li><FaEnvelope /> support@flywebcreations.com</li>
              <li><FaMapMarkerAlt /> Coimbatore, Tamil Nadu</li>
            </ul>

            {/* Social Icons */}
            <div className="footer-social mt-3">
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaTelegram /></a>
            </div>
          </Col>

        </Row>
      </Container>

      <div className="footer-bottom text-center py-3">
        © 2025 FlyWebCreations — All Rights Reserved
      </div>
    </footer>
  );
}
