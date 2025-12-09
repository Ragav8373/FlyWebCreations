import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./Ourservices.css";

// Example images for each service (replace with your own image paths)
import webDevImg from "../../Assets/web2.jpg";
import uiuxImg from  "../../Assets/UIUX.webp";
import customAppImg from  "../../Assets/flyweb01.png";
import ecommerceImg from "../../Assets/flyweb01.png";
import wordpressImg from  "../../Assets/flyweb01.png";
import digitalMarketingImg from  "../../Assets/home-services2.jpg";
import analyticsImg from  "../../Assets/flyweb01.png";
import apiImg from  "../../Assets/flyweb01.png";
import mobileUiImg from  "../../Assets/flyweb01.png";
import brandingImg from  "../../Assets/flyweb01.png";

export default function Ourservices() {
  const services = [
    {
      title: "Web Development",
      image: webDevImg,
      text: "We craft high-performing, responsive websites using React, Node.js, and modern frameworks. Our sites are fast, secure, and designed to provide a seamless user experience, optimized for desktop and mobile devices."
    },
    {
      title: "UI / UX Design",
      image: uiuxImg,
      text: "We design visually stunning and user-friendly interfaces that engage visitors and guide them effortlessly. From wireframes to prototypes, we focus on usability, accessibility, and aesthetics."
    },
    // {
    //   title: "Custom Web App Development",
    //   image: customAppImg,
    //   text: "Tailored web applications like dashboards, CRMs, and portals that match your business workflows. We ensure scalability, security, and performance to handle your growing needs."
    // },
    // {
    //   title: "E-Commerce Development",
    //   image: ecommerceImg,
    //   text: "Robust online stores with secure payment gateways, inventory management, and marketing features. Our e-commerce solutions are designed to maximize conversions and provide a smooth shopping experience."
    // },
    // {
    //   title: "WordPress Development",
    //   image: wordpressImg,
    //   text: "Custom WordPress websites that are SEO-friendly, easy to manage, and fast. Perfect for small businesses, blogs, portfolios, and online stores."
    // },
    {
      title: "Digital Marketing",
      image: digitalMarketingImg,
      text: "End-to-end digital marketing solutions including SEO, social media, PPC, email campaigns, and content marketing. We create strategies to grow traffic, leads, and sales."
    },
    // {
    //   title: "Data & Analytics",
    //   image: analyticsImg,
    //   text: "Insights-driven analytics to monitor performance, understand your audience, and improve decision-making. We provide dashboards, reports, and actionable data solutions."
    // },
    // {
    //   title: "API Development",
    //   image: apiImg,
    //   text: "Secure and scalable API development to connect systems, automate workflows, and streamline operations for your web or mobile applications."
    // },
    // {
    //   title: "Mobile App UI Design",
    //   image: mobileUiImg,
    //   text: "Intuitive, visually appealing mobile app screens for iOS and Android. Our designs focus on usability, smooth navigation, and enhanced user engagement."
    // },
    // {
    //   title: "Branding & Logo Design",
    //   image: brandingImg,
    //   text: "We create memorable logos, color schemes, and brand identities. Our branding solutions communicate your vision and make your business stand out in the market."
    // }
  ];

  return (
    <Container className="services-wrapper py-5">
      <h1 className="services-title text-center mb-5">Our Services</h1>

      {services.map((s, i) => (
        <Row className="service-row align-items-center mb-5" key={i}>
          {i % 2 === 0 ? (
            <>
              <Col md={5} className="text-center">
                <Image src={s.image} fluid className="service-img" />
              </Col>
              <Col md={7}>
                <h3 className="service-heading">{s.title}</h3>
                <p className="service-text">{s.text}</p>
              </Col>
            </>
          ) : (
            <>
              <Col md={7} className="text-md-end text-start">
                <h3 className="service-heading">{s.title}</h3>
                <p className="service-text">{s.text}</p>
              </Col>
              <Col md={5} className="text-center">
                <Image src={s.image} fluid className="service-img" />
              </Col>
            </>
          )}
        </Row>
      ))}
    </Container>
  );
}
