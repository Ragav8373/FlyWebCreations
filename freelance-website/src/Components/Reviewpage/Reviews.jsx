// import React from "react";
// import Slider from "react-slick";
// import { Card, Container } from "react-bootstrap";
// import profileImg from "../../Assets/flyweblogo.png";
// import "./Reviews.css";

// export default function Reviews() {
//   const reviews = [
//   {
//     name: "Naresh Priyan",
//     project: "Cake Shop Website",
//     feedback:
//       "The website looks attractive and professional. It makes showcasing our cakes and products much easier. Great work and support from the team!",
//   },
//   {
//     name: "Parthiban",
//     project: "Fitness Mobile App",
//     feedback:
//       "The fitness app is easy to use and has a clean design. The team understood my requirements and delivered a good solution.",
//   },
//   {
//     name: "Savarana Kumar",
//     project: "Odoo CRM Application",
//     feedback:
//       "The CRM application helped us organize our business activities more efficiently. The development process was smooth and professional.",
//   },
// ];

//   const settings = {
//     infinite: true,
//     autoplay: true,
//     autoplaySpeed: 4000,
//     speed: 800,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     centerMode: true,
//     centerPadding: "0px",
//   };

//   return (
//     <Container className="py-5">
//       <h2 className="fw-bold text-center mb-5">Client Reviews</h2>
//       <Slider {...settings} className="review-slider">
//         {reviews.map((r, i) => (
//           <div key={i}>
//             <Card className="review-card text-center p-4">
//               {/* <img src={r.img} alt={r.name} className="review-avatar" /> */}
//               <h5 className="mt-3 fw-bold">{r.name}</h5>
//               <p className="mt-3 text-muted review-text">{r.feedback}</p>
//             </Card>
//           </div>
//         ))}
//       </Slider>
//     </Container>
//   );
// }

import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import CountUp from "react-countup";
import { Card, Container, Row, Col } from "react-bootstrap";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Reviews.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Reviews() {
  // Client Reviews
  const reviews = [
    {
      name: "Janathanan Ramalingam",
      project: "Cake Shop Website",
      feedback:
        "The website looks attractive and professional. It makes showcasing our cakes and products much easier. Great work and support from the team!",
    },
    {
      name: "pranav mathew",
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

  // Statistics Animation
  const [visibleItems, setVisibleItems] = useState({
    states: false,
    projects: false,
    legacy: false,
    professionals: false,
    clients: false,
  });

  const refs = {
    states: useRef(null),
    projects: useRef(null),
    legacy: useRef(null),
    professionals: useRef(null),
    clients: useRef(null),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const key = entry.target.dataset.key;

            setVisibleItems((prev) => ({
              ...prev,
              [key]: true,
            }));
          }
        });
      },
      { threshold: 0.3 }
    );

    Object.keys(refs).forEach((key) => {
      if (refs[key].current) {
        observer.observe(refs[key].current);
      }
    });

    return () => observer.disconnect();
  }, []);

  // CountUp Component
  const renderCount = (key, value) => (
    <>
      {visibleItems[key] ? (
        <CountUp
          start={0}
          end={value}
          suffix="+"
          duration={2}
        />
      ) : (
        "0+"
      )}
    </>
  );

  // Review Slider Settings
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    arrows: true,
    dots: true,
    pauseOnHover: true,
  };

  return (
    <section className="reviews-section">
      <Container>

        {/* Main Section Heading */}
        <div className="text-center section-heading">
          <span className="section-subtitle">
            OUR CLIENTS & ACHIEVEMENTS
          </span>

          <h2 className="section-main-title">
            Building Success Through Innovation
          </h2>

          <p className="section-description">
            Our experience, capabilities and accomplishments
          </p>
        </div>

        {/* ================= CREDENTIALS ================= */}

        <div className="credentials-wrapper">

          <div className="credentials-heading text-center">
            <h3>Credentials</h3>
          </div>

          <Row className="g-4 justify-content-center">

            {/* States */}
            {/* <Col xs={12} sm={6} lg={4}>
              <Card
                className="achievement-card"
                ref={refs.states}
                data-key="states"
              >
                <div className="achievement-icon">
                  <i className="bi bi-geo-alt"></i>
                </div>

                <h2>
                  {renderCount("states", 7)}
                </h2>

                <h5>States</h5>
              </Card>
            </Col> */}

            {/* Projects */}
            <Col xs={12} sm={6} lg={4}>
              <Card
                className="achievement-card"
                ref={refs.projects}
                data-key="projects"
              >
                <div className="achievement-icon">
                  <i className="bi bi-briefcase"></i>
                </div>

                <h2>
                  {renderCount("projects", 100)}
                </h2>

                <h5>Projects</h5>
              </Card>
            </Col>

            {/* Legacy Years */}
            {/* <Col xs={12} sm={6} lg={4}>
              <Card
                className="achievement-card featured-card"
                ref={refs.legacy}
                data-key="legacy"
              >
                <div className="achievement-icon">
                  <i className="bi bi-award"></i>
                </div>

                <h2>
                  {renderCount("legacy", 25)}
                </h2>

                <h5>Legacy Years</h5>
              </Card>
            </Col> */}

            {/* Professionals */}
            <Col xs={12} sm={6} lg={4}>
              <Card
                className="achievement-card"
                ref={refs.professionals}
                data-key="professionals"
              >
                <div className="achievement-icon">
                  <i className="bi bi-people"></i>
                </div>

                <h2>
                  {renderCount("professionals", 200)}
                </h2>

                <h5>Professionals</h5>
              </Card>
            </Col>

            {/* Clients */}
            <Col xs={12} sm={6} lg={4}>
              <Card
                className="achievement-card"
                ref={refs.clients}
                data-key="clients"
              >
                <div className="achievement-icon">
                  <i className="bi bi-person-check"></i>
                </div>

                <h2>
                  {renderCount("clients", 100)}
                </h2>

                <h5>Clients</h5>
              </Card>
            </Col>

          </Row>
        </div>

        {/* ================= CLIENT REVIEWS ================= */}

        <div className="client-reviews-wrapper">

          <div className="text-center credentials-heading">
            <h3>Client Reviews</h3>
            <p>
              What our clients say about working with us
            </p>
          </div>

          <div className="reviews-container">

            <Slider {...settings} className="review-slider">

              {reviews.map((r, i) => (
                <div key={i}>
                  <Card className="review-card">

                    <div className="review-quote">
                      “
                    </div>

                    <div className="review-stars">
                      ★★★★★
                    </div>

                    <p className="review-text">
                      {r.feedback}
                    </p>

                    <div className="review-client">

                      <div className="review-avatar">
                        {r.name.charAt(0)}
                      </div>

                      <div className="review-client-info">
                        <h5>{r.name}</h5>
                        <span>{r.project}</span>
                      </div>

                    </div>

                  </Card>
                </div>
              ))}

            </Slider>

          </div>
        </div>

      </Container>
    </section>
  );
}
