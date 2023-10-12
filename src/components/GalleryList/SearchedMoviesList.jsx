import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ImageComingSoon from '../../images/ImageComingSoon.png';
import { StyledGalleryList } from './GalleryList.styled';
const BASE_IMG = 'https://image.tmdb.org/t/p/w200';

const SearchedMoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      <StyledGalleryList>
        {movies.map(({ title, id, poster_path }) => (
          <li key={id}>
            <div>
              <Link to={`${id}`} state={{ from: location }}>
                <img
                  src={
                    poster_path ? `${BASE_IMG}${poster_path}` : ImageComingSoon
                  }
                  alt={title}
                />
              </Link>
            </div>
            <div>
              <Link to={`${id}`} state={{ from: location }}></Link>
              <h4>{title ? `${title}` : `Please, see title on the poster`}</h4>
            </div>
          </li>
        ))}
      </StyledGalleryList>
    </>
  );
};

export default SearchedMoviesList;
