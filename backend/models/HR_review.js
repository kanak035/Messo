const mongoose = require("mongoose");
const { Schema } = mongoose;

const HRReviewSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  hostel_name: {
    type: String,
    required: [true, "Hostel Name is required"],
    default: "BH-3",
  },
  review: {
    type: String,
    required: [true, "Review is required"],
  },
});
module.exports = mongoose.model("HR_review", HRReviewSchema);
