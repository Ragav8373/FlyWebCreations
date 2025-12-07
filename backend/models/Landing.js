const mongoose = require("mongoose");
const LandingSchema = new mongoose.Schema({
  heading: String,
  subHeading: String,
});
module.exports = mongoose.model("Landing", LandingSchema);
