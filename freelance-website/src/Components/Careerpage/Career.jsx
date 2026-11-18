// import React, { useState } from 'react';
// import './Career.css';

// export default function Career() {
//   const [formData, setFormData] = useState({
//     name: '', phone: '', email: '', experience: '', company: '',
//     designation: '', skills: '', erpKnowledge: '', noticePeriod: '',
//     currentCTC: '', expectedCTC: '', resume: null
//   });

//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === 'resume') {
//       setFormData({ ...formData, resume: files[0] });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const data = new FormData();
//       for (const key in formData) {
//         if (formData[key]) data.append(key, formData[key]);
//       }

//       const response = await fetch('https://flywebcreations-backend.onrender.com/api/career', {
//         method: 'POST',
//         body: data
//       });

//       const result = await response.json();

//       if (response.ok) {
//         alert(result.message);
//         setFormData({
//           name: '', phone: '', email: '', experience: '', company: '',
//           designation: '', skills: '', erpKnowledge: '', noticePeriod: '',
//           currentCTC: '', expectedCTC: '', resume: null
//         });
//       } else {
//         alert(result.message || 'Failed to submit application.');
//       }
//     } catch (err) {
//       console.error('Error submitting form:', err);
//       alert('Error submitting application.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="career-container">
//       <div className="join-team">
//         <h2>Join the <span>FlyWebCreations</span> Team</h2>
//         <p>
//           At FlyWebCreations, we build innovative digital solutions that empower businesses. 
//           If you’re passionate about technology, creativity, and growth, you’ll fit right in!
//         </p>
//       </div>

//       <div className="gradient-border">
//         <form className="career-form" onSubmit={handleSubmit}>
//           <div className="form-row">
//             <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
//             <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
//           </div>
//           <div className="form-row">
//             <input type="email" name="email" placeholder="Email ID" value={formData.email} onChange={handleChange} required />
//             <input type="text" name="experience" placeholder="Experience (in years)" value={formData.experience} onChange={handleChange} required />
//           </div>
//           <div className="form-row">
//             <input type="text" name="company" placeholder="Current Company Name" value={formData.company} onChange={handleChange} />
//             <input type="text" name="designation" placeholder="Designation" value={formData.designation} onChange={handleChange} />
//           </div>
//           <div className="form-row">
//             <input type="text" name="skills" placeholder="Skills" value={formData.skills} onChange={handleChange} />
//             <input type="text" name="erpKnowledge" placeholder="Do you have knowledge in ERP?" value={formData.erpKnowledge} onChange={handleChange} />
//           </div>
//           <div className="form-row">
//             <input type="text" name="noticePeriod" placeholder="Notice Period" value={formData.noticePeriod} onChange={handleChange} />
//             <input type="text" name="currentCTC" placeholder="Current CTC" value={formData.currentCTC} onChange={handleChange} />
//           </div>
//           <div className="form-row">
//             <input type="text" name="expectedCTC" placeholder="Expected CTC" value={formData.expectedCTC} onChange={handleChange} />
//             <input type="file" name="resume" onChange={handleChange} />
//           </div>

//           <button type="submit" className="career-btn" disabled={loading}>
//             {loading ? 'Submitting...' : 'Submit'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import "./Career.css";

const initialData = {
  name: "",
  phone: "",
  email: "",
  experience: "",
  company: "",
  designation: "",
  skills: "",
  erpKnowledge: "",
  noticePeriod: "",
  currentCTC: "",
  expectedCTC: "",
  resume: null
};

export default function Career() {
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "resume") {
      setFormData((prev) => ({
        ...prev,
        resume: files[0] || null
      }));
      setErrors((prev) => ({ ...prev, resume: "" }));
      return;
    }

    // Name: letters and spaces only
    if (name === "name" && !/^[a-zA-Z\s]*$/.test(value)) return;

    // Phone: maximum 10 digits
    if (name === "phone" && !/^\d{0,10}$/.test(value)) return;

    // Experience: numbers and decimal only
    if (name === "experience" && !/^\d*\.?\d*$/.test(value)) return;

    // CTC: numbers and decimal only
    if (
      ["currentCTC", "expectedCTC"].includes(name) &&
      !/^\d*\.?\d*$/.test(value)
    ) return;

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
      newErrors.name = "Name is required";
    } else if (!/^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/.test(formData.name.trim())) {
      newErrors.name = "Enter a valid name (letters only)";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit mobile number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(formData.email.trim())) {
      newErrors.email = "Enter a valid email address";
    }

    if (formData.experience === "") {
      newErrors.experience = "Experience is required (enter 0 if fresher)";
    }

    if (formData.experience !== "" && Number(formData.experience) > 60) {
      newErrors.experience = "Enter valid experience";
    }

    if (!formData.designation.trim()) {
      newErrors.designation = "Designation is required";
    }

    if (!formData.skills.trim()) {
      newErrors.skills = "Please enter your skills";
    }

    if (!formData.erpKnowledge) {
      newErrors.erpKnowledge = "Please select ERP knowledge";
    }

    if (!formData.noticePeriod.trim()) {
      newErrors.noticePeriod = "Notice period is required";
    }

    if (formData.currentCTC === "") {
      newErrors.currentCTC = "Enter current CTC (0 if fresher)";
    }

    if (formData.expectedCTC === "") {
      newErrors.expectedCTC = "Expected CTC is required";
    }

    if (
      formData.currentCTC !== "" &&
      formData.expectedCTC !== "" &&
      Number(formData.expectedCTC) < 0
    ) {
      newErrors.expectedCTC = "Enter a valid expected CTC";
    }

    if (!formData.resume) {
      newErrors.resume = "Please upload your resume";
    } else {
      const file = formData.resume;
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      ];

      if (!allowedTypes.includes(file.type)) {
        newErrors.resume = "Only PDF, DOC and DOCX files are allowed";
      } else if (file.size > 5 * 1024 * 1024) {
        newErrors.resume = "Resume must be less than 5 MB";
      }
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
      const data = new FormData();

      Object.keys(formData).forEach((key) => {
        if (formData[key] !== null && formData[key] !== "") {
          data.append(key, formData[key]);
        }
      });

      const response = await fetch(
        "https://flywebcreations-backend.onrender.com/api/career",
        {
          method: "POST",
          body: data
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to submit application");
      }

      alert(result.message || "Application submitted successfully!");

      setFormData({ ...initialData });

      const fileInput = document.getElementById("career-resume");
      if (fileInput) fileInput.value = "";

    } catch (error) {
      console.error("Career form error:", error);
      alert(error.message || "Error submitting application");
    } finally {
      setLoading(false);
    }
  };

  const showError = (field) =>
    errors[field] && <small className="career-error">{errors[field]}</small>;

  return (
    <div className="career-container">

   
<div className="join-team">
  <h2>Join the <span>FlyWebCreations</span> Team</h2>

  <p>
    At FlyWebCreations, we build innovative digital solutions
    that empower businesses. If you're passionate about technology,
    creativity, and growth, you'll fit right in!
  </p>

  <p className="career-email">
    For career enquiries:{" "}
    <a href="mailto:flywebcreations@gmail.com">
      flywebcreations@gmail.com
    </a>
  </p>
</div>


      <div className="gradient-border">
        <form className="career-form" onSubmit={handleSubmit} noValidate>

          <div className="form-row">
            <div className="career-field">
              <input
                type="text"
                name="name"
                placeholder="Full Name *"
                value={formData.name}
                onChange={handleChange}
              />
              {showError("name")}
            </div>

            <div className="career-field">
              <input
                type="tel"
                name="phone"
                placeholder="10-Digit Phone Number *"
                value={formData.phone}
                onChange={handleChange}
                maxLength={10}
                inputMode="numeric"
              />
              {showError("phone")}
            </div>
          </div>

          <div className="form-row">
            <div className="career-field">
              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                value={formData.email}
                onChange={handleChange}
              />
              {showError("email")}
            </div>

            <div className="career-field">
              <input
                type="number"
                name="experience"
                placeholder="Experience in Years (0 for Fresher) *"
                value={formData.experience}
                onChange={handleChange}
                min="0"
                max="60"
                step="0.1"
              />
              {showError("experience")}
            </div>
          </div>

          <div className="form-row">
            <div className="career-field">
              <input
                type="text"
                name="company"
                placeholder="Current Company Name (Optional)"
                value={formData.company}
                onChange={handleChange}
              />
            </div>

            <div className="career-field">
              <input
                type="text"
                name="designation"
                placeholder="Designation *"
                value={formData.designation}
                onChange={handleChange}
              />
              {showError("designation")}
            </div>
          </div>

          <div className="form-row">
            <div className="career-field">
              <input
                type="text"
                name="skills"
                placeholder="Skills *"
                value={formData.skills}
                onChange={handleChange}
              />
              {showError("skills")}
            </div>

            <div className="career-field">
              <select
                name="erpKnowledge"
                value={formData.erpKnowledge}
                onChange={handleChange}
              >
                <option value="">Do you have ERP knowledge? *</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
              {showError("erpKnowledge")}
            </div>
          </div>

          <div className="form-row">
            <div className="career-field">
              <input
                type="text"
                name="noticePeriod"
                placeholder="Notice Period *"
                value={formData.noticePeriod}
                onChange={handleChange}
              />
              {showError("noticePeriod")}
            </div>

            <div className="career-field">
              <input
                type="number"
                name="currentCTC"
                placeholder="Current CTC (0 if Fresher) *"
                value={formData.currentCTC}
                onChange={handleChange}
                min="0"
              />
              {showError("currentCTC")}
            </div>
          </div>

          <div className="form-row">
            <div className="career-field">
              <input
                type="number"
                name="expectedCTC"
                placeholder="Expected CTC *"
                value={formData.expectedCTC}
                onChange={handleChange}
                min="0"
              />
              {showError("expectedCTC")}
            </div>

            <div className="career-field">
              <input
                id="career-resume"
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
              />
              {showError("resume")}
              <small className="career-hint">
                PDF, DOC, DOCX (Max 5 MB)
              </small>
            </div>
          </div>

          <button
            type="submit"
            className="career-btn"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>

        </form>
      </div>
    </div>
  );
}
