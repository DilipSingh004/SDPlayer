const express = require("express");
const router = express.Router();

const FansReview = require("../controller/contact-controller");

router.route("/fanreview").post(FansReview.FansReview);
router.route("/fanreview").get(FansReview.GetFansReview);
router.route("/fanreview/:id").delete(FansReview.DeleteFansReview);

module.exports = router;
