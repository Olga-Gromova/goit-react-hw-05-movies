import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { StyledDiv, StyledGalleryList } from './GalleryList.styled';
import ImageComingSoon from '../../images/ImageComingSoon.png';
const BASE_IMG = 'https://image.tmdb.org/t/p/w200';

const SearchedMoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      <StyledGalleryList>
        {movies.map(({ title, id, poster_path }) => (
          <li key={id}>
            <StyledDiv>
              <Link to={`${id}`} state={{ from: location }}>
                <img
                  src={
                    poster_path ? `${BASE_IMG}${poster_path}` : ImageComingSoon
                  }
                  alt={title}
                />
              </Link>
              <h4>{title ? `${title}` : `Please, see title on the poster`}</h4>
            </StyledDiv>
          </li>
        ))}
      </StyledGalleryList>
    </>
  );
};

export default SearchedMoviesList;
