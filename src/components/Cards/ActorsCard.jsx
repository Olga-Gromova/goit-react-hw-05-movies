import React from 'react';
import { StyledActorsItem } from './Cards.styled';
import PhotoComingSoon from '../../images/PhotoComingSoon.jpg';

const ActorsCard = ({ profile_path, name, character }) => {
  const BASE_IMG = 'https://image.tmdb.org/t/p/w200/';
  return (
    <StyledActorsItem>
      {profile_path ? (
        <img src={`${BASE_IMG}${profile_path}`} alt={character} />
      ) : (
        <img src={PhotoComingSoon} alt={character} />
      )}

      <h2>{name}</h2>
      <p>{character}</p>
    </StyledActorsItem>
  );
};

export default ActorsCard;
