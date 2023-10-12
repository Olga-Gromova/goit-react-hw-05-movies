import { StyledButton } from './LoadMore.styled';

const LoadMore = ({ onClick }) => {
  return (
    <StyledButton type="button" onClick={() => onClick()}>
      Load more{' '}
    </StyledButton>
  );
};

export default LoadMore;
