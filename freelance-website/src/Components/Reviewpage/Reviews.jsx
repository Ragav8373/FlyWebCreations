import React from "react";

export default function Reviews() {
  const reviews = [
    { name: "John Doe", feedback: "Great service! Highly recommended." },
    { name: "Jane Smith", feedback: "Professional team and excellent results." },
    { name: "Mike Johnson", feedback: "Fast delivery and very responsive." },
  ];

  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-4 text-center">Client Reviews</h2>
      <div className="row">
        {reviews.map((r, i) => (
          <div className="col-md-4 mb-3" key={i}>
            <div className="card shadow-sm p-3 h-100 rounded-3">
              <h5>{r.name}</h5>
              <p className="text-muted">{r.feedback}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
