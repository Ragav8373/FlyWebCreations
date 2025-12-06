import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaCode,
  FaPaintBrush,
  FaCogs,
  FaShoppingCart,
  FaWordpress,
  FaBullhorn,
  FaChartLine,
  FaPuzzlePiece,
  FaMobileAlt,
  FaGem
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Service.css";

export default function Services() {
  const navigate = useNavigate();

  const services = [
    { icon: <FaCode />, title: "Web Development" },
    { icon: <FaPaintBrush />, title: "UI / UX Design" },
    { icon: <FaCogs />, title: "Custom Web App Development" },
    { icon: <FaShoppingCart />, title: "E-Commerce Development" },
    { icon: <FaWordpress />, title: "WordPress Development" },
    { icon: <FaBullhorn />, title: "Digital Marketing" },
    { icon: <FaChartLine />, title: "Data & Analytics" },
    { icon: <FaPuzzlePiece />, title: "API Development" },
    { icon: <FaMobileAlt />, title: "Mobile App UI Design" },
    { icon: <FaGem />, title: "Branding & Logo Design" },
  ];

  return (
    <Container className="py-5">
      <h2 className="services-heading fw-bold text-center mb-5">
        Our Services
      </h2>

      <Row>
        {services.map((s, i) => (
          <Col md={4} className="mb-4" key={i}>
            <Card
              className="service-card p-4 text-center shadow-sm h-100"
              onClick={() => navigate("/services")}
            >
              <div className="service-icon mb-3">{s.icon}</div>
              <h5 className="fw-semibold">{s.title}</h5>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
