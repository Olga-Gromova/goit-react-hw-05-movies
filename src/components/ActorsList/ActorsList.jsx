import ActorsItem from 'components/ActorsItem/Actorstem';
import { StyledActorsList } from './ActorsList.styled';

const ActorsList = ({ cast }) => {
    const set = new Set();
    return (
      <StyledActorsList>
        {cast &&
          cast.map(({ id, name, profile_path, character }) => {
            if (!set.has(id)) {
              set.add(id);
              return (
                <ActorsItem
                  key={id}
                  name={name}
                  profile_path={profile_path}
                  character={character}
                />
              );
            } else {
              return null;
            }
          })}
      </StyledActorsList>
    );
  };
  
  export default ActorsList;
