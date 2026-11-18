
import React, { useState } from "react";
import { Form, Row, Col, Container } from "react-bootstrap";
import "./Contact.css";

export default function Contact() {
  const initialData = {
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    note: ""
  };

  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Allow letters and spaces only in name
    if (name === "name" && !/^[a-zA-Z\s]*$/.test(value)) return;

    // Allow only 10 digits in phone number
    if (name === "phone" && !/^\d{0,10}$/.test(value)) return;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: ""
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full Name is required";
    } else if (!/^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/.test(formData.name.trim())) {
      newErrors.name = "Enter a valid name (letters only)";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(formData.email.trim())) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company Name is required";
    } else if (!/^[a-zA-Z0-9&.,' -]+$/.test(formData.company.trim())) {
      newErrors.company = "Enter a valid company name";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone Number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit mobile number";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service";
    }

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
      const response = await fetch(
        "https://flywebcreations-backend.onrender.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to submit form.");
      }

      alert(data.message || "Your message has been sent successfully!");

      setFormData(initialData);
    } catch (error) {
      console.error("Contact form error:", error);
      alert(error.message || "Error submitting form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="contact-container">
      <h2 className="contact-heading">Schedule a Call</h2>

      <p className="contact-subtext">
        Complete the form below. Our team will respond within 24 hours
        to discuss your needs and next steps.
      </p>

      <div className="contact-form-wrapper">
        <Form onSubmit={handleSubmit} noValidate>

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
                isInvalid={!!errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
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
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
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
                isInvalid={!!errors.company}
              />
              <Form.Control.Feedback type="invalid">
                {errors.company}
              </Form.Control.Feedback>
            </Col>

            <Col md={6} className="mb-3">
              <Form.Label>Phone Number*</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter 10-digit mobile number"
                className="contact-input"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                maxLength={10}
                inputMode="numeric"
                isInvalid={!!errors.phone}
              />
              <Form.Control.Feedback type="invalid">
                {errors.phone}
              </Form.Control.Feedback>
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
                isInvalid={!!errors.service}
              >
                <option value="">Select a service</option>
                <option value="Web Development">Web Development</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="E-Commerce Development">E-Commerce Development</option>
                <option value="Branding & Logo Design">Branding & Logo Design</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="API Development">API Development</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {errors.service}
              </Form.Control.Feedback>
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
            <button
              type="submit"
              className="send-btn"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>

        </Form>
      </div>
    </Container>
  );
}
