import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ImageComingSoon from '../../images/ImageComingSoon.png';
import { StyledSearchedList } from './SearchedMoviesList.styled';
const BASE_IMG = 'https://image.tmdb.org/t/p/w200';

const SearchedMoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      <StyledSearchedList>
        {movies.map(({ title, id, poster_path }) => (
          <li key={id}>
            <Link to={`${id}`} state={{ from: location }}>
              {/* <img src={`${BASE_IMG}${poster_path}`} alt={title} /> */}

              <img
                src={
                  poster_path ? `${BASE_IMG}${poster_path}` : ImageComingSoon
                }
                // className="card-img-top"
                alt={title}
                              />

              {/* {title && title.substring(0, 18)} */}
            </Link>
          </li>
        ))}
      </StyledSearchedList>
    </>
  );
};

export default SearchedMoviesList;
