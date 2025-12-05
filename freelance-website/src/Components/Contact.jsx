import React from "react";

export default function Contact() {
  const locations = [
    {
      name: "Coimbatore Office",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.8514868415234!2d76.95583237480785!3d10.986698355356955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859d6e75f1e6d%3A0xf3bfb3d1b70229d3!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    },
  ];

  return (
    <div className="container py-5" style={{ maxWidth: "900px" }}>
      <h2 className="fw-bold mb-4 text-center">Contact Us</h2>
      <div className="row g-4">
        <div className="col-md-6">
          <form className="shadow p-4 rounded bg-white">
            <label className="form-label">Name</label>
            <input className="form-control mb-3" type="text" placeholder="Enter your name" />

            <label className="form-label">Email</label>
            <input className="form-control mb-3" type="email" placeholder="Enter your email" />

            <label className="form-label">Message</label>
            <textarea className="form-control mb-3" rows="3" placeholder="Enter your message"></textarea>

            <button className="btn btn-primary w-100">Send Message</button>
          </form>
        </div>

        <div className="col-md-6">
          {locations.map((loc, index) => (
            <div key={index} className="shadow rounded overflow-hidden mb-3">
              <iframe
                title={loc.name}
                src={loc.mapSrc}
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <p className="text-center mt-2">{loc.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
