import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ImageComingSoon from '../../images/ImageComingSoon.png';

// const HomeItem = ({ title, poster_path, id }) => {
//   const BASE_IMG = 'https://image.tmdb.org/t/p/w300';
//   const location = useLocation();
//   return (
//     <li key={id}>
//       <Link to={`${id}`} state={{ from: location }}>
//         <img src={`${BASE_IMG}${poster_path}`} alt={title} />
//         {title && title.substring(0, 20)}
//       </Link>
//     </li>
//   );
// };

// export default HomeItem;

const HomeItem = ({ title, poster_path, id }) => {
  const BASE_IMG = 'https://image.tmdb.org/t/p/w300';
  const location = useLocation();
  return (
    <li key={id}>
      <Link to={`${id}`} state={{ from: location }}>
        <img
          src={poster_path ? `${BASE_IMG}${poster_path}` : ImageComingSoon}
          alt={title}
        />
      </Link>
      <h4>{title ? `${title}` : `Please, see title on the poster`}</h4>
    </li>
  );
};

export default HomeItem;
