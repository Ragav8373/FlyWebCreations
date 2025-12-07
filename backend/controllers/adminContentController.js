const Landing = require("../models/Landing");
const Service = require("../models/Service");
const Review = require("../models/Review");

// Landing
exports.getLanding = async (req, res) => {
  const landing = await Landing.findOne();
  res.json(landing || { heading: "", subHeading: "" });
};

exports.updateLanding = async (req, res) => {
  const { heading, subHeading } = req.body;
  let landing = await Landing.findOne();
  if (!landing) landing = new Landing({ heading, subHeading });
  else { landing.heading = heading; landing.subHeading = subHeading; }
  await landing.save();
  res.json(landing);
};

// Services
exports.getServices = async (req, res) => {
  const services = await Service.find();
  res.json(services);
};

exports.addService = async (req, res) => {
  const service = new Service(req.body);
  await service.save();
  res.json(service);
};

exports.updateService = async (req, res) => {
  const service = await Service.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(service);
};

exports.deleteService = async (req, res) => {
  await Service.findByIdAndDelete(req.params.id);
  res.json({ message: "Service deleted" });
};

// Reviews
exports.getReviews = async (req, res) => {
  const reviews = await Review.find();
  res.json(reviews);
};

exports.addReview = async (req, res) => {
  const review = new Review(req.body);
  await review.save();
  res.json(review);
};

exports.updateReview = async (req, res) => {
  const review = await Review.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(review);
};

exports.deleteReview = async (req, res) => {
  await Review.findByIdAndDelete(req.params.id);
  res.json({ message: "Review deleted" });
};
