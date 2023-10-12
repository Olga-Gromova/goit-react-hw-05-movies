import { Container } from '../App.styled';

import FoundError from 'components/FoundError/FoundError';
import Loader from 'components/Loader/Loader';

import MovieDetailed from 'components/MovieDetailed/MovieDetailed';
import { ReturnBack } from 'components/ReturnBack/ReturnBack';

import React, { Suspense, useEffect, useState, useRef } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { getMoveDetails } from 'services/api';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

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
      <div>
        <ReturnBack backLinkLocationRef={backLinkLocationRef.current} />

        <Container>
          {error && <FoundError />}
          {loading ? <MovieDetailed movie={movie} /> : <Loader />}
        </Container>
      </div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
