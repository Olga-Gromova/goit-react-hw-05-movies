import React from 'react';
import { StyledActorsItem } from './ActorsItem.styled';
import PhotoComingSoon from '../../images/PhotoComingSoon.jpg';

const ActorsItem = ({ profile_path, name, character}) => {
  const BASE_IMG = 'https://image.tmdb.org/t/p/w200/';
  return (
    <StyledActorsItem>
      {profile_path ? (
        <img src={`${BASE_IMG}${profile_path}`} alt={character} />
      ) : (
          <img src={PhotoComingSoon} alt={character} />
      )}
      {/* <img
        src={
          profile_path
            ? `${BASE_IMG}${profile_path}`
            : PhotoComingSoon
        } alt={name} /> */}
      <h2>{name}</h2>
      <p>{character}</p>
    </StyledActorsItem>
  );
};

export default ActorsItem;
