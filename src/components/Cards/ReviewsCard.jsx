import React from 'react';

const ReviewsCard = ({ author, content }) => {
  return (
    <li>
      <p>
        <span>Author: </span>
        <strong>{author}</strong>
      </p>
      <p>{content}</p>
    </li>
  );
};

export default ReviewsCard;
