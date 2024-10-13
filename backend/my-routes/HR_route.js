const createReview = require("../controllers/HR_Review").createReview;
const verifyToken = require("../middleware/verifyToken");
const express = require("express");
const {
  getReview,
  deleteAllHRReviews,
  deleteHRReview,
} = require("../controllers/getHR_review");
const router = express.Router();

router.post("/createReview", createReview);
router.get("/HR-Review", verifyToken, getReview);
// Delete a single HR review
router.delete("/HR-Review/:id", deleteHRReview);

// Delete all HR reviews for a specific HR
router.delete("/HR-Review", deleteAllHRReviews);
module.exports = router;
