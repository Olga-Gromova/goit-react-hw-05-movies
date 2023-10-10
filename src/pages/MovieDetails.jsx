import { Container, Section } from '../App.styled';

import FoundError from 'components/FoundError/FoundError';
import Loader from 'components/Loader/Loader';

import MovieList from 'components/MovieList/MovieList';

import React, { Suspense, useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { getMoveDetails } from 'services/api';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const detail = async id => {
      try {
        const response = await getMoveDetails(id);
        setMovie(response);
        setLoading(true);
      } catch (error) {
        console.log(error.message);
        setError(true);
        setLoading(false);
      }
    };

    detail(movieId);

    return () => {
      detail(movieId);
    };
  }, [movieId]);

  return (
    <>
      <Section>
        <Container>
          {error && <FoundError />}
          {loading ? <MovieList movie={movie} /> : <Loader />}
        </Container>
      </Section>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;