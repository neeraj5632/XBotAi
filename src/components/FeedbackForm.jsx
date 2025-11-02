import React, { useState } from "react";
//import "./FeedbackForm.css";

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  return (
    <div className="feedback-form">
      <h3>Rate Your Conversation</h3>
      <div className="stars">
        {[1, 2, 3, 4, 5].map((num) => (
          <span
            key={num}
            className={rating >= num ? "star filled" : "star"}
            onClick={() => setRating(num)}
          >
            ★
          </span>
        ))}
      </div>
      <textarea
        placeholder="Write your feedback..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button>Submit Feedback</button>
    </div>
  );
};

export default FeedbackForm;
