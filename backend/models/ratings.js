// const mongoose=require('mongoose');
// const{Schema}=mongoose;

// const ratingSchema=new Schema({
//     rating:{
//         type:Number,
//         required:[true,'Ratings is required']
//     }
// })
// module.exports=mongoose.model('ratings',ratingSchema);

const mongoose = require("mongoose");
const { Schema } = mongoose;

const ratingSchema = new Schema({
  rated: { type: Number },
  values: {
    type: Number,
    required: [true, "Ratings is required"],
  },
});

module.exports = mongoose.model("ratings", ratingSchema);
