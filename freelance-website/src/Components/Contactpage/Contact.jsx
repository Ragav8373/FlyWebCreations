import React from "react";
import { Form, Button } from "react-bootstrap";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-wrapper">
      <div className="contact-box">

        <h3 className="contact-title">FlyWebCreations © 2025</h3>

        <Form className="contact-form">
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
          </Form.Group>

          <Button className="btn-gradient w-100">Send Message</Button>
        </Form>
      </div>
    </div>
  );
}
