const mongoose = require("mongoose");
const ServiceSchema = new mongoose.Schema({
  title: String,
  desc: String,
});
module.exports = mongoose.model("Service", ServiceSchema);
