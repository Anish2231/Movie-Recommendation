// src/components/Card.js
import React from "react";

const Card = ({ title, description, image, rating }) => (
  <div className="movie-card">
    <img src={image} alt={title} />
    <div className="card-content">
      <h4>{title}</h4>
      <p>{description.length > 90 ? description.substring(0, 100) + "..." : description}</p>
      <div className="card-footer">
        <span className="rating">⭐ {rating}</span>
        <button className="details-button">Learn More</button>
      </div>
      
    </div>
  </div>
);

export default Card;
