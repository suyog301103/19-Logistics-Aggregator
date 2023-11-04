import React from 'react';

function Card(props) {
  const { title, rating, review } = props;

  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <div className="card-rating">
        <span className="card-rating-label">Rating:</span>
        <span className="card-rating-value">{props.rating}</span>
      </div>
      <div className="card-review">
        <span className="card-review-label">Review:</span>
        <p className="card-review-text">{props.review}</p>
      </div>
    </div>
  );
}

export default Card;
