import { Container, Section } from '../App.styled';
import FoundError from '../components/FoundError/FoundError';
import HomeList from 'components/HomeList/HomeList';
import Loader from '../components/Loader/Loader';
import { useEffect, useState } from 'react';
import ScrollToTop from "react-scroll-to-top";

import { getMovies } from 'services/api';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const details = async () => {
      try {
        const { results } = await getMovies();
        setMovies(results);
        setLoading(true);
      } catch (error) {
        console.log(error.message);
        setError(true);
        setLoading(true);
      }
    };

    details();
  }, []);

  return (
    <Section>
      <Container>
        <h1>Popular movies of the day! </h1>
        {error && <FoundError />}
        {loading ? <HomeList movies={movies} /> : <Loader />}
      </Container>
      <ScrollToTop smooth />
    </Section>
  );
};

export default Home;