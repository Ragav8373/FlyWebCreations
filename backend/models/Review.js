const mongoose = require("mongoose");
const ReviewSchema = new mongoose.Schema({
  name: String,
  feedback: String,
});
module.exports = mongoose.model("Review", ReviewSchema);
