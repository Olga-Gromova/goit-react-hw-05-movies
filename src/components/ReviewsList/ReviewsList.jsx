import ReviewsCard from '../Cards/ReviewsCard';
import { StyledListReviews } from './ReviewsList.styled';

const ReviewsList = ({ reviews }) => {
  return (
    <StyledListReviews>
      {reviews.map(({ id, author, content }) => (
        <ReviewsCard key={id} author={author} content={content} />
      ))}
    </StyledListReviews>
  );
};

export default ReviewsList;
