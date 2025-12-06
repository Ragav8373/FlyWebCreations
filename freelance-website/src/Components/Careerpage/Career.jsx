import React, { useState } from 'react';
import './Career.css';

export default function Career() {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', experience: '', company: '',
    designation: '', skills: '', erpKnowledge: '', noticePeriod: '',
    currentCTC: '', expectedCTC: '', resume: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'resume') {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Application submitted successfully!');
    setFormData({
      name: '', phone: '', email: '', experience: '', company: '',
      designation: '', skills: '', erpKnowledge: '', noticePeriod: '',
      currentCTC: '', expectedCTC: '', resume: null
    });
  };

  return (
    <div className="career-container">
      {/* Team Section */}
      <div className="join-team">
        <h2>Join the <span>FlyWebCreations</span> Team</h2>
        <p>
          At FlyWebCreations, we build innovative digital solutions that empower businesses. 
          If you’re passionate about technology, creativity, and growth, you’ll fit right in!
        </p>
      </div>

      {/* Gradient Border Wrapper */}
      <div className="gradient-border">
        <form className="career-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
            <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
          </div>
          <div className="form-row">
            <input type="email" name="email" placeholder="Email ID" value={formData.email} onChange={handleChange} required />
            <input type="text" name="experience" placeholder="Experience (in years)" value={formData.experience} onChange={handleChange} required />
          </div>
          <div className="form-row">
            <input type="text" name="company" placeholder="Current Company Name" value={formData.company} onChange={handleChange} />
            <input type="text" name="designation" placeholder="Designation" value={formData.designation} onChange={handleChange} />
          </div>
          <div className="form-row">
            <input type="text" name="skills" placeholder="Skills" value={formData.skills} onChange={handleChange} />
            <input type="text" name="erpKnowledge" placeholder="Do you have knowledge in ERP?" value={formData.erpKnowledge} onChange={handleChange} />
          </div>
          <div className="form-row">
            <input type="text" name="noticePeriod" placeholder="Notice Period" value={formData.noticePeriod} onChange={handleChange} />
            <input type="text" name="currentCTC" placeholder="Current CTC" value={formData.currentCTC} onChange={handleChange} />
          </div>
          <div className="form-row">
            <input type="text" name="expectedCTC" placeholder="Expected CTC" value={formData.expectedCTC} onChange={handleChange} />
            <input type="file" name="resume" onChange={handleChange} />
          </div>

          <button type="submit" className="career-btn">Submit</button>
        </form>
      </div>
    </div>
  );
}
