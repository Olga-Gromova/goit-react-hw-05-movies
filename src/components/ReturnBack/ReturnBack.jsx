import React from 'react';
import { StyledDiv, StyledFaArrowLeft, StyledLink } from './ReturnBack.styled';

export const ReturnBack = ({ backLinkLocationRef }) => {
  return (
    <StyledDiv>
      <StyledLink to={backLinkLocationRef}>
        <StyledFaArrowLeft />
        <span> Go back</span>
      </StyledLink>
    </StyledDiv>
  );
};
