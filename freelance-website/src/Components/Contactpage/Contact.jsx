import React, { useState } from "react";
import { Form, Row, Col, Container } from "react-bootstrap";
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    note: ""
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false); // optional loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.company.trim()) newErrors.company = "Company Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone Number is required";
    if (!formData.service.trim()) newErrors.service = "Please select a service";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          service: "",
          note: ""
        });
      } else {
        alert(data.message || "Failed to submit form.");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Error submitting form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="contact-container">
      <h2 className="contact-heading">Schedule a call</h2>
      <p className="contact-subtext">
        Complete the form below. Our team will respond within 24 hours to discuss your needs and next steps.
      </p>

      <div className="contact-form-wrapper">
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col md={6} className="mb-3">
              <Form.Label>Full Name*</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter your name" 
                className="contact-input" 
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <span className="error-text">{errors.name}</span>}
            </Col>
            <Col md={6} className="mb-3">
              <Form.Label>Email Address*</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="Enter your email" 
                className="contact-input" 
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6} className="mb-3">
              <Form.Label>Company Name*</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Your company name" 
                className="contact-input" 
                name="company"
                value={formData.company}
                onChange={handleChange}
              />
              {errors.company && <span className="error-text">{errors.company}</span>}
            </Col>
            <Col md={6} className="mb-3">
              <Form.Label>Phone Number*</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Your phone number" 
                className="contact-input" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <span className="error-text">{errors.phone}</span>}
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6} className="mb-3">
              <Form.Label>What service do you need?*</Form.Label>
              <Form.Select 
                className="contact-input" 
                name="service" 
                value={formData.service} 
                onChange={handleChange}
              >
                <option value="">Select a service</option>
                <option>Web Development</option>
                <option>UI/UX Design</option>
                <option>E-Commerce Development</option>
                <option>Branding & Logo Design</option>
                <option>Digital Marketing</option>
                <option>API Development</option>
              </Form.Select>
              {errors.service && <span className="error-text">{errors.service}</span>}
            </Col>
            <Col md={6} className="mb-3">
              <Form.Label>Note</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Add any note" 
                className="contact-input" 
                name="note"
                value={formData.note}
                onChange={handleChange}
              />
            </Col>
          </Row>

          <div className="button-container">
            <button type="submit" className="send-btn" disabled={loading}>
              {loading ? "Sending..." : "Send"}
            </button>
          </div>
        </Form>
      </div>
    </Container>
  );
}
