import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import {
  StyledLink,
  StyledSpan,
  StyledWrrap,
  StyledlWrrapDetails,
} from './MovieItem.styled';
import ImageComingSoon from '../../images/ImageComingSoon.png';


const BASE_IMG = 'https://image.tmdb.org/t/p/w300';

const MoviItem = ({ movie }) => {
  const location = useLocation();
  const ref = useRef(location.state?.from ?? '/');
  const { title, overview, genres, release_date, vote_average, poster_path } =
    movie;
  return (
    <>
      <StyledLink to={ref.current}>Go back</StyledLink>
      <StyledWrrap>
        {/* <img src={`${BASE_IMG}${poster_path}`} alt={title} /> */}
         <img
            src={
              poster_path
                ? `${BASE_IMG}${poster_path}`
                : ImageComingSoon
            }
            // className="card-img-top"
            alt={title}
          />


        {vote_average && (
          <StyledSpan rating={vote_average}>
            {' '}
            {vote_average.toFixed(1)}
          </StyledSpan>
        )}
      </StyledWrrap>
      <StyledlWrrapDetails>
        <h2>{title}</h2>
        <p>Release date: {release_date}</p>
        <h3>Overview</h3>
        <p>{overview} </p>
        <h4>Genres</h4>
        <ul>
          {genres && genres.map(({ id, name }) => <li key={id}>{name}</li>)}
        </ul>
      </StyledlWrrapDetails>
    </>
  );
};

export default MoviItem;
