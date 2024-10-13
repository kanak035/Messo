// const Complaint = require("../models/complaints");

// const getAllComplaints = async (req, res) => {
//   try {
//     const complaints = await Complaint.find();
//     res.json(complaints);
//   } catch (error) {
//     console.error("Error fetching complaints:", error);
//     res.status(500).json({ error: "Error fetching complaints" });
//   }
// };

// module.exports = { getAllComplaints };

const Complaint = require("../models/complaints");

const getAllComplaints = async (req, res) => {
  try {
    const { hostelName } = req.query;
    if (!hostelName) {
      return res.status(400).json({ error: "Hostel name is required" });
    }

    const complaints = await Complaint.find({ hostel_name: hostelName });
    res.json(complaints);
  } catch (error) {
    console.error("Error fetching complaints:", error);
    res.status(500).json({ error: "Error fetching complaints" });
  }
};

module.exports = { getAllComplaints };
