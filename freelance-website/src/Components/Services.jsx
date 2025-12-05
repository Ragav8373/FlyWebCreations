import React from "react";

export default function Services() {
  const services = [
    { title: "Website Development", desc: "Modern responsive websites using React." },
    { title: "UI/UX Design", desc: "Attractive, user-friendly layouts and components." },
    { title: "API Setup", desc: "Backend integration and secure API handling." },
    { title: "E-Commerce", desc: "Online stores with payment gateway integration." },
    { title: "Hosting Setup", desc: "Domain, hosting, deployment and SSL setup." },
  ];

  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-4 text-center">Our Services</h2>
      <div className="row">
        {services.map((s, i) => (
          <div className="col-md-4 mb-3" key={i}>
            <div className="card shadow-sm p-3 h-100 rounded-3">
              <h5>{s.title}</h5>
              <p className="text-muted">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
