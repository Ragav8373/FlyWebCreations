import React, { useEffect, useState } from "react";

export default function Admin() {
  const [contacts, setContacts] = useState([]);
  const [careers, setCareers] = useState([]);
  const [landing, setLanding] = useState({ heading: "", subHeading: "" });
  const [services, setServices] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("adminToken");

  // Redirect if token missing
  useEffect(() => {
    if (!token) window.location.href = "/admin-login";
  }, [token]);

  // Helper fetch with token
  const authFetch = async (url, options = {}) => {
    return fetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        ...(options.headers || {})
      }
    });
  };

  // Load all admin data
  useEffect(() => {
    const loadData = async () => {
      try {
        const [contactsRes, careersRes, landingRes, servicesRes, reviewsRes] =
          await Promise.all([
            authFetch("http://localhost:5000/api/contact"),
            authFetch("http://localhost:5000/api/career"),
            authFetch("http://localhost:5000/api/admin/content/landing"),
            authFetch("http://localhost:5000/api/admin/content/services"),
            authFetch("http://localhost:5000/api/admin/content/reviews")
          ]);

        setContacts(await contactsRes.json());
        setCareers(await careersRes.json());
        setLanding(await landingRes.json());
        setServices(await servicesRes.json());
        setReviews(await reviewsRes.json());
      } catch (err) {
        console.error("Error loading admin data:", err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    window.location.href = "/admin-login";
  };

  // Update Landing
  const updateLandingContent = async () => {
    await authFetch("http://localhost:5000/api/admin/content/landing", {
      method: "PUT",
      body: JSON.stringify(landing)
    });
    alert("Landing updated!");
  };

  // Save Service
  const saveService = async (i) => {
    const s = services[i];

    await authFetch(
      `http://localhost:5000/api/admin/content/services/${s._id}`,
      {
        method: "PUT",
        body: JSON.stringify(s)
      }
    );
    alert("Service updated!");
  };

  const deleteService = async (id) => {
    await authFetch(
      `http://localhost:5000/api/admin/content/services/${id}`,
      { method: "DELETE" }
    );
    setServices(services.filter((s) => s._id !== id));
  };

  // Save Review
  const saveReview = async (i) => {
    const r = reviews[i];

    await authFetch(
      `http://localhost:5000/api/admin/content/reviews/${r._id}`,
      {
        method: "PUT",
        body: JSON.stringify(r)
      }
    );

    alert("Review updated!");
  };

  const deleteReview = async (id) => {
    await authFetch(
      `http://localhost:5000/api/admin/content/reviews/${id}`,
      { method: "DELETE" }
    );
    setReviews(reviews.filter((r) => r._id !== id));
  };

  if (loading) return <p className="text-center">Loading...</p>;

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">Admin Dashboard</h2>

      <button className="btn btn-danger mb-4" onClick={handleLogout}>
        Logout
      </button>

      {/* CONTACT SUBMISSIONS */}
      <h3>Contact Submissions</h3>
      {contacts.length === 0 ? <p>No contacts found.</p> : null}

      {contacts.map((c) => (
        <div key={c._id} className="card p-3 mb-2">
          <p><b>{c.name}</b> • {c.email} • {c.phone}</p>
          <p>Company: {c.company}</p>
          <p>Service: {c.service}</p>
          <p>Note: {c.note}</p>
        </div>
      ))}

      {/* CAREER SUBMISSIONS */}
      <h3 className="mt-4">Career Submissions</h3>
      {careers.length === 0 ? <p>No submissions yet.</p> : null}

      {careers.map((c) => (
        <div key={c._id} className="card p-3 mb-2">
          <p><b>{c.name}</b> • {c.email} • {c.phone}</p>
          <p>Experience: {c.experience}</p>
          <p>Skills: {c.skills}</p>
          <p>
            Resume:{" "}
            {c.resume ? (
              <a
                href={`http://localhost:5000/uploads/${c.resume}`}
                target="_blank"
                rel="noreferrer"
              >
                Download
              </a>
            ) : (
              "No file"
            )}
          </p>
        </div>
      ))}

      {/* LANDING EDIT */}
      <h3 className="mt-4">Edit Landing Page</h3>
      <input
        className="form-control mb-2"
        value={landing.heading}
        onChange={(e) =>
          setLanding({ ...landing, heading: e.target.value })
        }
        placeholder="Main heading"
      />
      <input
        className="form-control mb-2"
        value={landing.subHeading}
        onChange={(e) =>
          setLanding({ ...landing, subHeading: e.target.value })
        }
        placeholder="Sub heading"
      />
      <button className="btn btn-primary" onClick={updateLandingContent}>
        Save Landing
      </button>

      {/* SERVICES */}
      <h3 className="mt-4">Services</h3>

      {services.map((s, i) => (
        <div key={i} className="card p-3 mb-2">
          <input
            className="form-control mb-1"
            value={s.title}
            placeholder="Service title"
            onChange={(e) => {
              const arr = [...services];
              arr[i].title = e.target.value;
              setServices(arr);
            }}
          />

          <textarea
            className="form-control mb-1"
            value={s.desc}
            placeholder="Description"
            onChange={(e) => {
              const arr = [...services];
              arr[i].desc = e.target.value;
              setServices(arr);
            }}
          />

          <button className="btn btn-success me-2" onClick={() => saveService(i)}>
            Save
          </button>

          <button className="btn btn-danger" onClick={() => deleteService(s._id)}>
            Delete
          </button>
        </div>
      ))}

      <button
        className="btn btn-primary"
        onClick={() => setServices([...services, { title: "", desc: "" }])}
      >
        Add Service
      </button>

      {/* REVIEWS */}
      <h3 className="mt-4">Client Reviews</h3>

      {reviews.map((r, i) => (
        <div key={i} className="card p-3 mb-2">
          <input
            className="form-control mb-1"
            value={r.name}
            placeholder="Client name"
            onChange={(e) => {
              const arr = [...reviews];
              arr[i].name = e.target.value;
              setReviews(arr);
            }}
          />

          <textarea
            className="form-control mb-1"
            value={r.feedback}
            placeholder="Feedback"
            onChange={(e) => {
              const arr = [...reviews];
              arr[i].feedback = e.target.value;
              setReviews(arr);
            }}
          />

          <button className="btn btn-success me-2" onClick={() => saveReview(i)}>
            Save
          </button>

          <button className="btn btn-danger" onClick={() => deleteReview(r._id)}>
            Delete
          </button>
        </div>
      ))}

      <button
        className="btn btn-primary"
        onClick={() =>
          setReviews([...reviews, { name: "", feedback: "" }])
        }
      >
        Add Review
      </button>
    </div>
  );
}
