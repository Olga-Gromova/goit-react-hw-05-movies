import { Link } from 'react-router-dom';
import { StyledBox, StyledList } from './MovieList.styled';
import MoviItem from 'components/MovieItem/MovieItem';

const MovieList =({movie}) => {
    return(
        <>
        <StyledBox >
            <MoviItem movie={movie}/>
            <StyledList>
<li>
    <Link to="cast" >Cast</Link>
</li>
<li>
    <Link to="reviews" >Reviews</Link>
</li>
            </StyledList>

        </StyledBox>
        
        </>
    );
};


export default MovieList;