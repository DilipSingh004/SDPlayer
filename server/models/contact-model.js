const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  review: {
    type: String,
    require: true,
  },
  rating: {
    type: Number,
    require: true,
  },
});

// create model or a collection
const Review = new mongoose.model("Review", reviewSchema);
module.exports = Review;
