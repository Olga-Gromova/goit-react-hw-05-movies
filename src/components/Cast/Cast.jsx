import ActorsList from 'components/ActorsList/ActorsList';
import FoundError from 'components/FoundError/FoundError';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCastMovie } from 'services/api';

const Cast = () => {
  const [cast, setCast] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async id => {
      try {
        const { cast } = await getCastMovie(id);
        setCast(cast);
      } catch (error) {
        console.log(error.message);
        setError(true);
        setLoading(false);
      } finally {
        setLoading(true);
      }
    };
    fetchData(movieId);
  }, [movieId]);
  return (
    <div>
      <div>
        {loading && <ActorsList cast={cast} />}
        {error && <FoundError />}
      </div>
    </div>
  );
};
export default Cast;
