const Announcements = require("../models/announcement");

const announceController = async (req, res) => {
  const { hostel_name, subject, announcement, isAdmin } = req.body;

  if (!hostel_name) {
    return res.status(422).json({ error: "Hostel Name is required" });
  }
  if (!subject) {
    return res.status(422).json({ error: "Subject is required" });
  }
  if (!announcement) {
    return res.status(422).json({ error: "Announcement is required" });
  }
  if (!isAdmin && isAdmin !== false) {
    return res.status(422).json({ error: "isAdmin is required" });
  }

  try {
    const newAnnouncement = new Announcements({
      hostel_name,
      subject,
      announcement,
      isAdmin,
    });
    await newAnnouncement.save();
    res.status(201).json(newAnnouncement);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// const getAllAnnouncements = async (req, res) => {
//   try {
//     const allAnnouncements = await Announcements.find({});
//     res.status(200).json(allAnnouncements);
//   } catch (error) {
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

const getAllAnnouncements = async (req, res) => {
  try {
    const { hostelName } = req.query;
    if (!hostelName) {
      return res.status(400).json({ error: "Hostel name is required" });
    }

    // Fetch and sort announcements by created_at in descending order
    const allAnnouncements = await Announcements.find({
      hostel_name: hostelName,
    }).sort({ created_at: -1 });

    res.status(200).json(allAnnouncements);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { announceController, getAllAnnouncements };
