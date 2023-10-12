import { Link } from 'react-router-dom';
import { StyledBox, StyledList } from './MovieDetailed.styled';
import MovieDetailedCard from 'components/Cards/MovieDetailedCard';

const MovieDetailed = ({ movie }) => {
  return (
    <>
      <StyledBox>
        <MovieDetailedCard movie={movie} />
        <StyledList>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </StyledList>
      </StyledBox>
    </>
  );
};

export default MovieDetailed;
