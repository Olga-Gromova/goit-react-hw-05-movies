import React from 'react';
import { StyledCastItem } from './CastItem.styled';

const CastItem = ({ profile_path, name, character }) => {
  const BASE_IMG = '#';
  return (
    <StyledCastItem>
      {profile_path ? (
        <img src={`${BASE_IMG}${profile_path}`} alt={character} />
      ) : (
        <img src={'Заглушка'} alt={character} />
      )}
      <h2>{name}</h2>
      <p>{character}</p>
    </StyledCastItem>
  );
};

export default CastItem;
