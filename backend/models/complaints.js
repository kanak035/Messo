// const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");
// const Signup = require("./signup");

// const complaintSchema = new mongoose.Schema({
//   email: {
//     type: String,
//     required: true,
//   },
//   hostel_name: {
//     type: String,
//     required: [true, "Hostel Name is required"],
//     default: "BH-3",
//   },
//   subject: {
//     type: String,
//     required: true,
//   },
//   messageType: {
//     type: String,
//     enum: ["Complaint", "Suggestion"],
//     required: true,
//   },
//   message: {
//     type: String,
//     required: true,
//   },
//   status: {
//     type: String,
//     enum: ["Pending", "Completed"],
//     default: "Pending",
//   },
// });

// const Complaint = mongoose.model("Complaint", complaintSchema);
// module.exports = Complaint;
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Signup = require("./signup");

const complaintSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  hostel_name: {
    type: String,
    required: [true, "Hostel Name is required"],
    default: "BH-3",
  },
  subject: {
    type: String,
    required: true,
  },
  messageType: {
    type: String,
    enum: ["Complaint", "Suggestion"],
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["Pending", "Completed"],
    default: "Pending",
  },
  imageUrl: {
    type: String, // URL of the image stored in Cloudinary
  },
  imageId: {
    type: String, // Public ID of the image in Cloudinary
  },
});

const Complaint = mongoose.model("Complaint", complaintSchema);
module.exports = Complaint;
