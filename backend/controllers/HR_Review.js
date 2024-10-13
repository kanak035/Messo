const HRModel = require("../models/HR_review");

const createReview = async (req, res) => {
  const { name, email, hostel_name, review } = req.body;
  if (!name) {
    return res.status(422).json({ error: "Name is required" });
  }
  if (!email) {
    return res.status(422).json({ error: "Email is required" });
  }
  if (!hostel_name) {
    return res.status(422).json({ error: "Hostel Name is required" });
  }
  if (!review) {
    return res.status(422).json({ error: "Review is required" });
  }

  const newReview = new HRModel({ name, email, hostel_name, review });
  await newReview.save();
  res.status(201).json(newReview);
};

module.exports = { createReview };
