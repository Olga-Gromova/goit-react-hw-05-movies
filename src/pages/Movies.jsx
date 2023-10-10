import { Container } from '../App.styled'
import FoundError from 'components/FoundError/FoundError';
import LoadMore from 'components/LoadMore/LoadMore';
import Loader from 'components/Loader/Loader';


import SearchFormMovies from 'components/SearchFormMovies/SearchFormMovies';

import SearchedMoviesList from 'components/SearchedMoviesList/SearchedMoviesList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovies } from 'services/api';
import { scrollToBottom } from '../utilits/scroll';
import ScrollToTop from "react-scroll-to-top";



const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [queryText, setQueryText] = useSearchParams();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const queryParam = queryText.get('query') ?? '';

  useEffect(() => {
    if (!queryParam) return setMovies([]);
    const searchMovie = async (query, page) => {
      setLoading(true);
      try {
        const { results, total_result, total_pages } = await getSearchMovies(
          query,
          page
        );
        if (page === 1) {
          setMovies(results);
        } else {
          setMovies(prevMovies => [...prevMovies, ...results]);
          setLoadMore(total_pages < Math.ceil(total_result / 20));
        }
        setLoadMore(true);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(true);
        setLoading(true);
      }
    };
    searchMovie(queryParam, page);
  }, [page, queryParam]);

  const handleQuery = query => {
    setQueryText(query);
  };

  const onClick = () => {
    setPage(prevPage => prevPage + 1);
    scrollToBottom();
  };

  return (
    <section>
      <Container>
        <SearchFormMovies
          handleQuery={handleQuery}
          queryParam={queryParam}
          setPage={setPage}
        />
        {loading ? (
          <Loader />
        ) : (
          <>
            {movies.length !== 0 && <h2>Movies: '{queryParam}'</h2>}
            <SearchedMoviesList movies={movies} />
            {loadMore && <LoadMore onClick={onClick} />}
          </>
        )}
        {error && <FoundError />}
       

      </Container>
      <ScrollToTop smooth />
    </section>
  );
};

export default Movies;