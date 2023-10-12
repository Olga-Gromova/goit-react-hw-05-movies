import { Container } from 'App.styled';
import ReviewsList from 'components/ReviewsList/ReviewsList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewMovie } from 'services/api';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async id => {
      try {
        const { results } = await getReviewMovie(id);
        setReviews(results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(true);
      }
    };
    fetchData(movieId);
  }, [movieId]);

  return (
    <>
      {loading && (
        <div>
          <Container>
            {reviews.length === 0 ? (
              <h3>No reviews</h3>
            ) : (
              <ReviewsList reviews={reviews} />
            )}
          </Container>
        </div>
      )}
    </>
  );
};

export default Reviews;
