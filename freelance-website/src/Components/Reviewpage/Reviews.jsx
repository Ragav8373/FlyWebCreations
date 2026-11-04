import React from "react";
import Slider from "react-slick";
import { Card, Container } from "react-bootstrap";
import profileImg from "../../Assets/flyweblogo.png";
import "./Reviews.css";

export default function Reviews() {
  const reviews = [
  {
    name: "Naresh Priyan",
    project: "Cake Shop Website",
    feedback:
      "The website looks attractive and professional. It makes showcasing our cakes and products much easier. Great work and support from the team!",
  },
  {
    name: "Parthiban",
    project: "Fitness Mobile App",
    feedback:
      "The fitness app is easy to use and has a clean design. The team understood my requirements and delivered a good solution.",
  },
  {
    name: "Savarana Kumar",
    project: "Odoo CRM Application",
    feedback:
      "The CRM application helped us organize our business activities more efficiently. The development process was smooth and professional.",
  },
];

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
  };

  return (
    <Container className="py-5">
      <h2 className="fw-bold text-center mb-5">Client Reviews</h2>
      <Slider {...settings} className="review-slider">
        {reviews.map((r, i) => (
          <div key={i}>
            <Card className="review-card text-center p-4">
              {/* <img src={r.img} alt={r.name} className="review-avatar" /> */}
              <h5 className="mt-3 fw-bold">{r.name}</h5>
              <p className="mt-3 text-muted review-text">{r.feedback}</p>
            </Card>
          </div>
        ))}
      </Slider>
    </Container>
  );
}
