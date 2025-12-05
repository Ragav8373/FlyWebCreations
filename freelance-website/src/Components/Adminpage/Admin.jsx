import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import "./Admin.css";

export default function Admin() {
  const [landingText, setLandingText] = useState({
    heading: "We Build Modern Websites",
    subHeading: "Professional websites for startups and businesses",
  });

  const [services, setServices] = useState([
    { title: "Web Development", desc: "Responsive websites with React" },
  ]);

  const [reviews, setReviews] = useState([
    { name: "John Doe", feedback: "Excellent service!" },
  ]);

  const addService = () =>
    setServices([...services, { title: "New Service", desc: "Description" }]);

  const addReview = () =>
    setReviews([...reviews, { name: "New Client", feedback: "Feedback" }]);

  return (
    <div className="container admin-container">
      <h2 className="fw-bold text-center">Admin Dashboard</h2>

      <button
        className="btn btn-danger mb-3"
        onClick={() => {
          signOut(auth);
          window.location.href = "/admin-login";
        }}
      >
        Logout
      </button>

      <div className="admin-section">
        <h4>Landing Page</h4>
        <input
          className="form-control mb-2"
          value={landingText.heading}
          onChange={(e) =>
            setLandingText({ ...landingText, heading: e.target.value })
          }
        />
        <input
          className="form-control"
          value={landingText.subHeading}
          onChange={(e) =>
            setLandingText({ ...landingText, subHeading: e.target.value })
          }
        />
      </div>

      <div className="admin-section">
        <h4>Services</h4>
        {services.map((s, i) => (
          <div key={i}>
            <input
              className="form-control mb-1"
              value={s.title}
              onChange={(e) => {
                const newS = [...services];
                newS[i].title = e.target.value;
                setServices(newS);
              }}
            />
            <input
              className="form-control mb-2"
              value={s.desc}
              onChange={(e) => {
                const newS = [...services];
                newS[i].desc = e.target.value;
                setServices(newS);
              }}
            />
          </div>
        ))}
        <button className="btn btn-primary" onClick={addService}>
          Add Service
        </button>
      </div>

      <div className="admin-section">
        <h4>Client Reviews</h4>
        {reviews.map((r, i) => (
          <div key={i}>
            <input
              className="form-control mb-1"
              value={r.name}
              onChange={(e) => {
                const newR = [...reviews];
                newR[i].name = e.target.value;
                setReviews(newR);
              }}
            />
            <input
              className="form-control mb-2"
              value={r.feedback}
              onChange={(e) => {
                const newR = [...reviews];
                newR[i].feedback = e.target.value;
                setReviews(newR);
              }}
            />
          </div>
        ))}
        <button className="btn btn-primary" onClick={addReview}>
          Add Review
        </button>
      </div>
    </div>
  );
}
