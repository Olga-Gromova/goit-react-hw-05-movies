import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ImFilm } from 'react-icons/im';
import { FaDAndD } from 'react-icons/fa';

export const StyledHeader = styled.header`
  background-color: #ffbb5c;
  font-size: 18px;
  font-weight: 500;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 768px) {
    font-size: 24px;
  }

  nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    @media (min-width: 320px) {
      align-items: center;
    }
  }

  a {
    text-decoration: none;
  }

  ul {
    display: flex;
    gap: 10px;
    margin: 0px auto 0px auto;
    @media (min-width: 768px) {
      gap: 24px;
      margin-right: 0px;
    }

    a {
      position: relative;
      display: block;
      color: #000;
      transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
      &:hover,
      &:focus,
      &:active {
        color: #e25e3e;
      }
      &::after {
        position: absolute;
        content: '';
        left: 0;
        bottom: 0;
        width: 100%;
        height: 4px;
        background-color: #e25e3e;
        border-radius: 4px;

        transform: scaleX(0);
        transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
      }
      &:hover::after,
      &:focus::after {
        transform: scaleX(1);
      }
    }
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000;
  span {
    font-size: 18px;
    text-transform: uppercase;
    @media (min-width: 768px) {
      font-size: 24px;
    }
  }
`;

export const StyledImFilm = styled(ImFilm)`
  color: grey;
  margin: 10px;
`;

export const StyledFaDAndD = styled(FaDAndD)`
  margin: 5px;
`;
