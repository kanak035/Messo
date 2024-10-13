const express = require("express");
const router = express.Router();
const { createReview, getUserRatings } = require("../controllers/menuReview");
const menuModel = require("../models/menu_review");
const verifyToken = require("../middleware/verifyToken");

router.post("/menuReview", createReview);
router.get("/userRatings", getUserRatings);
// router.get('/average',async(req,res)=>{
//     const avg=await menuModel.aggregate([{$group:{_id:null,average:{$avg:"$rating"}}}]);
//     res.json(avg);
// })
// router.get("/ratingByDayAndMealType", async (req, res) => {
//   const ratingByDayAndMealType = await menuModel.aggregate([
//     {
//       $group: {
//         _id: {
//           day: "$day",
//           meal_type: "$meal_type",
//         },
//         averageRating: { $avg: "$rating" },
//       },
//     },
//   ]);
//   res.json(ratingByDayAndMealType);
// });
// module.exports = router;
// router.get('/ratingByDay', async (req, res) => {
//     const ratingByDay = await menuModel.aggregate([
//         {
//             $group: {
//                 _id: "$day",
//                 averageRating: { $avg: "$rating" }
//             }
//         }
//     ]);
//     res.json(ratingByDay);
// });
router.get("/ratingByDayAndMealType", verifyToken, async (req, res) => {
  try {
    const { hostelName } = req.query;
    if (!hostelName) {
      return res.status(400).json({ error: "Hostel name is required" });
    }

    const ratingByDayAndMealType = await menuModel.aggregate([
      {
        $match: {
          hostel_name: hostelName,
        },
      },
      {
        $group: {
          _id: {
            day: "$day",
            meal_type: "$meal_type",
          },
          averageRating: { $avg: "$rating" },
        },
      },
    ]);

    res.json(ratingByDayAndMealType);
  } catch (error) {
    console.error("Error fetching ratings:", error);
    res.status(500).json({ error: "Error fetching ratings" });
  }
});
module.exports = router;
