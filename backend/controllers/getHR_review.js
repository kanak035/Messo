// const HRModel = require("../models/HR_review");

// const getReview = async (req, res) => {
//   const { name } = req.body;

//   const Hr = await HRModel.find({ name });

//   res.json(Hr);
// };

// module.exports = { getReview };

const HRModel = require("../models/HR_review");

const getReview = async (req, res) => {
  const { name, hostelName } = req.query;

  try {
    const hrReviews = await HRModel.find({ name, hostel_name: hostelName });
    res.json(hrReviews);
  } catch (error) {
    res.status(500).json({ message: "Error fetching HR reviews", error });
  }
};
// Delete a single HR review
const deleteHRReview = async (req, res) => {
  const { hostelName } = req.query;
  const reviewId = req.params.id;
  try {
    const review = await HRModel.findOneAndDelete({
      _id: reviewId,
      hostel_name: hostelName,
    });
    if (!review) {
      return res.status(404).json({
        message: "Review not found or does not belong to this hostel",
      });
    }
    res.status(200).json({ message: "Review deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting HR review", error });
  }
};

// Delete all reviews for a specific HR
const deleteAllHRReviews = async (req, res) => {
  const { name, hostelName } = req.query;
  try {
    await HRModel.deleteMany({ name, hostel_name: hostelName });
    res.status(200).json({ message: "All reviews deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting HR reviews", error });
  }
};

module.exports = { getReview, deleteHRReview, deleteAllHRReviews };
