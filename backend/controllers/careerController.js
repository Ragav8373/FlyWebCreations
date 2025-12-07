const Career = require('../models/Career');
const path = require('path');

exports.submitCareerForm = async (req, res) => {
  try {
    const {
      name,
      phone,
      email,
      experience,
      company,
      designation,
      skills,
      erpKnowledge,
      noticePeriod,
      currentCTC,
      expectedCTC
    } = req.body;

    // Multer puts uploaded file in req.file
    const resumeFile = req.file ? req.file.filename : null;

    const newCareer = new Career({
      name,
      phone,
      email,
      experience,
      company,
      designation,
      skills,
      erpKnowledge,
      noticePeriod,
      currentCTC,
      expectedCTC,
      resume: resumeFile
    });

    await newCareer.save();

    res.status(200).json({ message: 'Career form submitted successfully!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error submitting career form.' });
  }
};
