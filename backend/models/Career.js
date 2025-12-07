const mongoose = require('mongoose');

const careerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  experience: { type: String, required: true },
  company: String,
  designation: String,
  skills: String,
  erpKnowledge: String,
  noticePeriod: String,
  currentCTC: String,
  expectedCTC: String,
  resume: String, // store filename
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Career', careerSchema);
