import HomeCard from 'components/Cards/HomeCard';
import { StyledGalleryList } from './GalleryList.styled';

const HomeList = ({ movies }) => {
  return (
    <StyledGalleryList>
      {movies.map(({ title, id, poster_path }) => (
        <HomeCard key={id} title={title} poster_path={poster_path} id={id} />
      ))}
    </StyledGalleryList>
  );
};

export default HomeList;
