// import React from "react";
// import { Container, Row, Col, Card } from "react-bootstrap";
// import {
//   FaCode,
//   FaPaintBrush,
//   FaCogs,
//   FaShoppingCart,
//   FaWordpress,
//   FaBullhorn,
//   FaChartLine,
//   FaPuzzlePiece,
//   FaMobileAlt,
//   FaGem
// } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import "./Service.css";

// export default function Services() {
//   const navigate = useNavigate();

//   const services = [
//     { icon: <FaCode />, title: "Web Development" },
//     { icon: <FaPaintBrush />, title: "UI / UX Design" },
//     { icon: <FaCogs />, title: "Custom Web App Development" },
//     { icon: <FaShoppingCart />, title: "E-Commerce Development" },
//     { icon: <FaWordpress />, title: "WordPress Development" },
//     { icon: <FaBullhorn />, title: "Digital Marketing" },
//     { icon: <FaChartLine />, title: "Data & Analytics" },
//     { icon: <FaPuzzlePiece />, title: "API Development" },
//     { icon: <FaMobileAlt />, title: "Mobile App UI Design" },
//     { icon: <FaGem />, title: "Branding & Logo Design" },
//   ];

//   return (
//     <Container className="py-5">
//       <h2 className="services-heading fw-bold text-center mb-5">
//         Our Services
//       </h2>

//       <Row>
//         {services.map((s, i) => (
//           <Col md={4} className="mb-4" key={i}>
//             <Card
//               className="service-card p-4 text-center shadow-sm h-100"
//               onClick={() => navigate("/services")}
//             >
//               <div className="service-icon mb-3">{s.icon}</div>
//               <h5 className="fw-semibold">{s.title}</h5>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// }
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
    { icon: <FaCode />, title: "Web Development", description: "Building responsive and modern websites with clean code." },
    { icon: <FaPaintBrush />, title: "UI / UX Design", description: "Designing intuitive and engaging user experiences." },
    { icon: <FaCogs />, title: "Custom Web App Development", description: "Developing tailored web applications for your business needs." },
    { icon: <FaShoppingCart />, title: "E-Commerce Development", description: "Creating scalable online stores with smooth checkout experience." },
    { icon: <FaWordpress />, title: "WordPress Development", description: "Custom WordPress themes and plugins for your site." },
    { icon: <FaBullhorn />, title: "Digital Marketing", description: "Boost your brand visibility through SEO, Ads, and social media." },
    { icon: <FaChartLine />, title: "Data & Analytics", description: "Analyzing data to drive better business decisions." },
    { icon: <FaPuzzlePiece />, title: "API Development", description: "Integrating and building robust APIs for your apps." },
    { icon: <FaMobileAlt />, title: "Mobile App UI Design", description: "Designing sleek and user-friendly mobile app interfaces." },
    { icon: <FaGem />, title: "Branding & Logo Design", description: "Creating unique brand identities and logos." },
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
              <p className="service-description">{s.description}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
