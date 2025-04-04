const Review = require("../models/contact-model");

const FansReview = async (req, res) => {
  try {
    const newReview = new Review(req.body);
    await newReview.save();
    return res.status(200).json({ message: newReview });
    console.log(req.body);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

const GetFansReview = async (req, res) => {
  try {
    const reviews = await Review.find();
    return res.status(200).json({ reviews });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
const DeleteFansReview = async (req, res) => {
  try {
    await Review.findByIdAndDelete(req.params.id);
    return res.status(200).json({ message: "deleted successfully..." });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
module.exports = { FansReview, GetFansReview, DeleteFansReview };
