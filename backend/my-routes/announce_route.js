const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");

const {
  announceController,
  getAllAnnouncements,
} = require("../controllers/announce");

router.post("/createAnnouncement", announceController);
router.get("/getAllAnnouncements", verifyToken, getAllAnnouncements);

module.exports = router;
