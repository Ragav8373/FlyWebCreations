const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");

const {
  getLanding,
  updateLanding,
  getServices,
  addService,
  updateService,
  deleteService,
  getReviews,
  addReview,
  updateReview,
  deleteReview
} = require("../controllers/adminContentController");

// PROTECT ALL ROUTES
router.use(authMiddleware);

// Landing page
router.get("/landing", getLanding);
router.put("/landing", updateLanding);

// Services
router.get("/services", getServices);
router.post("/services", addService);
router.put("/services/:id", updateService);
router.delete("/services/:id", deleteService);

// Reviews
router.get("/reviews", getReviews);
router.post("/reviews", addReview);
router.put("/reviews/:id", updateReview);
router.delete("/reviews/:id", deleteReview);

module.exports = router;
