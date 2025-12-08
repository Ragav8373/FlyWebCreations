import React from "react";
import Slider from "react-slick";
import { Card, Container } from "react-bootstrap";
import profileImg from "../../Assets/flyweblogo.png";
import "./Reviews.css";

export default function Reviews() {
  const reviews = [
    { 
      name: "Emma Wilson", 
      feedback: "Clean, modern and amazing designs! The team delivered everything exactly as I envisioned, with attention to detail and prompt support. I would recommend them to anyone looking for professional web solutions.", 
      img: profileImg 
    },
    { 
      name: "John Doe", 
      feedback: "Great service! Highly recommended. The workflow was smooth, and communication was excellent. They really understand client requirements and execute perfectly.", 
      img: profileImg 
    },
    { 
      name: "Sneha Sharma", 
      feedback: "They understood my requirements perfectly. The final product exceeded my expectations. I am thrilled with their creativity and professionalism.", 
      img: profileImg 
    },
    { 
      name: "David Miller", 
      feedback: "Top-notch support and professional work. They were patient, responsive, and delivered a high-quality solution on time.", 
      img: profileImg 
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
              <img src={r.img} alt={r.name} className="review-avatar" />
              <h5 className="mt-3 fw-bold">{r.name}</h5>
              <p className="mt-3 text-muted review-text">{r.feedback}</p>
            </Card>
          </div>
        ))}
      </Slider>
    </Container>
  );
}
