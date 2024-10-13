// const menuModel = require("../models/menu_review");

// const createReview = async (req, res) => {
//   const { hostel_name, day, rating, meal_type } = req.body;

//   if (!hostel_name) {
//     return res.status(422).json({ error: "Hostel Name is required" });
//   }
//   //   if (!menu_name) {
//   //     return res.status(422).json({ error: "Menu Name is required" });
//   //   }
//   if (!day) {
//     return res.status(422).json({ error: "Day is required" });
//   }
//   if (!rating) {
//     return res.status(422).json({ error: "Rating is required" });
//   }

//   // Check if a rating already exists for the same user, day, and meal type
//   const existingRating = await MenuReview.findOne({
//     userId,
//     day,
//     meal_type,
//   });

//   if (existingRating) {
//     return res
//       .status(400)
//       .json({ message: "You have already rated this meal." });
//   }

//   const newReview = new menuModel({
//     hostel_name,
//     day,
//     rating,
//     meal_type,
//   });
//   await newReview.save();
//   res.status(201).json(newReview);
// };
// module.exports = { createReview };

const menuModel = require("../models/menu_review");

const createReview = async (req, res) => {
  const { hostel_name, day, rating, meal_type, userId } = req.body;

  if (!hostel_name || !day || !rating || !meal_type || !userId) {
    return res.status(422).json({ error: "All fields are required" });
  }

  try {
    // // Check if a rating already exists for the same user, day, and meal type
    // const existingRating = await menuModel.findOne({ userId, day, meal_type });

    // if (existingRating) {
    //   return res
    //     .status(400)
    //     .json({ message: "You have already rated this meal." });
    // }

    const newReview = new menuModel({
      userId,
      hostel_name,
      day,
      rating,
      meal_type,
    });
    await newReview.save();
    res.status(201).json(newReview);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getUserRatings = async (req, res) => {
  const userId = req.query.userId;

  try {
    const ratings = await menuModel.find({ userId });
    res.status(200).json(ratings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { createReview, getUserRatings };
