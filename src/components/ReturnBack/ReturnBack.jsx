import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

export const ReturnBack = ({ backLinkLocationRef }) => {
  return (
    <div>
      <Link to={backLinkLocationRef}>
        <FaArrowLeft />
        <span> Go back</span>
      </Link>
    </div>
  );
};