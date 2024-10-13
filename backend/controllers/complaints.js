const Complaint = require("../models/complaints");
const ExcelJS = require("exceljs");
const cloudinary = require("cloudinary").v2;

// const complaintsController = async (req, res) => {
//   const { email, hostel_name, subject, messageType, message } = req.body;

//   if (!email) {
//     return res.status(422).json({ error: "Email is required" });
//   }
//   if (!hostel_name) {
//     return res.status(422).json({ error: "Hostel Name is required" });
//   }
//   if (!subject) {
//     return res.status(422).json({ error: "Subject is required" });
//   }
//   if (!messageType) {
//     return res.status(422).json({ error: "Message Type is required" });
//   }
//   if (!message) {
//     return res.status(422).json({ error: "Message is required" });
//   }

//   const newComplaint = new Complaint({
//     email,
//     hostel_name,
//     subject,
//     messageType,
//     message,
//   });
//   await newComplaint.save();
//   res.status(201).json(newComplaint);
// };

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const complaintsController = async (req, res) => {
  try {
    const { email, hostel_name, subject, messageType, message } = req.body;
    // console.log("Request body:", req.body);
    // console.log("Uploaded file:", req.file); // Log to check if the file is uploaded

    // Validate required fields
    if (!email) return res.status(422).json({ error: "Email is required" });
    if (!hostel_name)
      return res.status(422).json({ error: "Hostel Name is required" });
    if (!subject) return res.status(422).json({ error: "Subject is required" });
    if (!messageType)
      return res.status(422).json({ error: "Message Type is required" });
    if (!message) return res.status(422).json({ error: "Message is required" });

    let imageUrl = null;
    let imageId = null;

    // Retrieve the Cloudinary URL and ID from req.file
    if (req.file) {
      imageUrl = req.file.path; // Cloudinary URL
      imageId = req.file.filename; // Cloudinary public ID
      // console.log("Image URL:", imageUrl); // Log to confirm
      // console.log("Image ID:", imageId); // Log to confirm
    }

    // Create and save the new complaint
    const newComplaint = new Complaint({
      email,
      hostel_name,
      subject,
      messageType,
      message,
      imageUrl,
      imageId,
    });

    await newComplaint.save();
    res.status(201).json(newComplaint);
  } catch (error) {
    console.error("Error saving complaint:", error);
    res.status(500).json({ error: "Error saving complaint" });
  }
};

const updateComplaintStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const complaint = await Complaint.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!complaint) {
      return res.status(404).json({ error: "Complaint not found" });
    }

    res.json(complaint);
  } catch (error) {
    console.error("Error updating complaint status:", error);
    res.status(500).json({ error: "Error updating complaint status" });
  }
};

const deleteComplaint = async (req, res) => {
  try {
    const { id } = req.params;

    const complaint = await Complaint.findByIdAndDelete(id);

    if (!complaint) {
      return res.status(404).json({ error: "Complaint not found" });
    }

    res.json({ message: "Complaint deleted successfully" });
  } catch (error) {
    console.error("Error deleting complaint:", error);
    res.status(500).json({ error: "Error deleting complaint" });
  }
};

const exportComplaintsToExcel = async (req, res) => {
  try {
    // Fetch all complaints from the database
    const complaints = await Complaint.find({});

    // Create a new workbook and worksheet
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Complaints");

    // Add column headers based on your schema
    worksheet.columns = [
      { header: "Email", key: "email", width: 30 },
      { header: "Hostel Name", key: "hostel_name", width: 15 },
      { header: "Subject", key: "subject", width: 30 },
      { header: "Message Type", key: "messageType", width: 15 },
      { header: "Message", key: "message", width: 50 },
      { header: "Status", key: "status", width: 15 },
    ];

    // Add complaint data to worksheet
    complaints.forEach((complaint) => {
      worksheet.addRow({
        email: complaint.email,
        hostel_name: complaint.hostel_name,
        subject: complaint.subject,
        messageType: complaint.messageType,
        message: complaint.message,
        status: complaint.status,
      });
    });

    // Set the response headers to trigger a download
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=complaints.xlsx"
    );

    // Write the Excel file to the response
    await workbook.xlsx.write(res);
    res.end();
  } catch (err) {
    console.error("Error generating Excel file:", err);
    res.status(500).send("Error generating Excel file");
  }
};

module.exports = {
  complaintsController,
  deleteComplaint,
  updateComplaintStatus,
  exportComplaintsToExcel,
};
