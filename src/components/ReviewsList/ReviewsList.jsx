import ReviewsItem from '../ReviewsItem/ReviewsItem';
import { StyledListReviews } from './ReviewsList.styled';

const ReviewsList = ({ reviews }) => {
  return (
    <StyledListReviews>
      {reviews.map(({ id, author, content }) => (
        <ReviewsItem key={id} author={author} content={content} />
      ))}
    </StyledListReviews>
  );
};

export default ReviewsList;