import React, { useEffect, useState } from "react";
import "../styles/fanreview.css";
import StarRating from "./StarRating";
import checkImg from "../img/check.png";

function FansReview() {
  const [fans, setFans] = useState([]);
  const [newReview, setNewReview] = useState("");
  const [newReviewer, setNewReviewer] = useState("");
  const [newRating, setNewRating] = useState(0);

  const handleNewReview = (e) => {
    setNewReview(e.target.value);
  };

  const handleNewReviewer = (e) => {
    setNewReviewer(e.target.value);
  };

  const handleNewRating = (rating) => {
    setNewRating(rating);
  };

  useEffect(() => {
    const fetchReviews = async () => {
      const response = await fetch("http://localhost:5000/api/form/fanreview");
      const data = await response.json();
      console.log(data.reviews);
      setFans(data.reviews);
    };
    fetchReviews();
  }, []);

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    const newFan = {
      name: newReviewer,
      review: newReview,
      rating: newRating,
    };
    await fetch("http://localhost:5000/api/form/fanreview", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFan),
    });

    const fetchReviews = async () => {
      const response = await fetch("http://localhost:5000/api/form/fanreview");
      const data = await response.json();
      console.log(data.reviews);
      setFans(data.reviews);
    };
    
    fetchReviews();
    setNewReview("");
    setNewReviewer("");
    setNewRating(0);
  };

  const handleDeleteReview = async (id) => {
    await fetch(`http://localhost:5000/api/form/fanreview/${id}`, {
      method: "DELETE",
    });
    const updatedFans = fans.filter((fan) => fan._id !== id); // Use _id from MongoDB
    setFans(updatedFans);
  };

  return (
    <div className="fans-review-container">
      <h1 className="h21">Fans and Reviews</h1>
      <div className="fans-review-list">
        <div className="scrollable-container">
          {fans.map((fan) => (
            <div key={fan._id} className="fan-review">
              <div className="revtitl">
                <img src={checkImg} alt="Check" className="check-icon" />{" "}
                {/* Check icon added here */}
                <h2 className="titlre">{fan.name}</h2>
              </div>
              <p className="revtf">{fan.review}</p>
              <StarRating rating={fan.rating} />
              <button
                className="revbtn"
                onClick={() => handleDeleteReview(fan._id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
      <form onSubmit={handleSubmitReview} className="new-review-form">
        <input
          type="text"
          value={newReviewer}
          onChange={handleNewReviewer}
          placeholder="Your Name"
        />
        <textarea
          value={newReview}
          onChange={handleNewReview}
          placeholder="Your Review"
        />
        <StarRating rating={newRating} onChange={handleNewRating} />
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
}
export default FansReview;
