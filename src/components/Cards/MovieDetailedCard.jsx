import { useLocation } from 'react-router-dom';
import {
  StyledDiv,
  StyledLink,
  StyledList,
  StyledSpan,
  StyledWrrap,
  StyledlWrrapDetails,
} from './Cards.styled';
import ImageComingSoon from '../../images/ImageComingSoon.png';

const BASE_IMG = 'https://image.tmdb.org/t/p/w300';

const MovieDetailedCard = ({ movie }) => {
  const location = useLocation();

  const {
    id,
    title,
    overview,
    genres,
    release_date,
    vote_average,
    poster_path,
  } = movie;
  return (
    <StyledDiv>
      <StyledLink to={`/movies/${id}`} state={{ from: location }}></StyledLink>

      <StyledWrrap>
        <img
          src={poster_path ? `${BASE_IMG}${poster_path}` : ImageComingSoon}
          alt={title}
        />
        <h2>{title ? `${title}` : `Please, see the title on the poster`}</h2>

        {vote_average && <StyledSpan> {vote_average.toFixed(1)}</StyledSpan>}
      </StyledWrrap>
      <StyledlWrrapDetails>
        <p>Release date: {release_date}</p>
        <h3>Overview</h3>
        <p>{overview} </p>
        <h4>Genres</h4>
        <StyledList>
          {genres && genres.map(({ id, name }) => <li key={id}>{name}</li>)}
        </StyledList>
      </StyledlWrrapDetails>
    </StyledDiv>
  );
};

export default MovieDetailedCard;
