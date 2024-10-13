const mongoose = require("mongoose");
const { Schema } = mongoose;

const announcementSchema = new Schema({
  hostel_name: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  announcement: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Announcement", announcementSchema);
