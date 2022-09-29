import React from 'react';
import { BsFillStarFill } from 'react-icons/bs';
import '../../styles/card.scss';

const Card = ({ imgSrc, title, starRating }) => {
  return (
    <div className="movie-card">
      <img className="thumbnail" src={imgSrc} alt={title} />
      <div className="movie-information">
        <div className="star-rating">
          <BsFillStarFill size={24} color="gold" />
          <span className="rating">{starRating}점</span>
        </div>
        <p className="movie-title">{title}</p>
      </div>
    </div>
  );
};

export default Card;
