import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

export const StyledDiv = styled.div`
border-radius: 15px;
background-color: #FF9B50;
margin: 10px 0px 0px 40px;
font-size: 24px;
  font-weight: 500;
  width: max-content;

  

  a {
    text-decoration: none;
  }

 a {
     
      color: #000;
      transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
      &:hover,
      &:focus,
      &:active {
        color: #E25E3E;
      }
      &::after {
        position: absolute;
        content: '';
        left: 0;
        bottom: 0;
        width: 100%;
        height: 4px;
        background-color:  #E25E3E;
        border-radius: 4px;

        transform: scaleX(0);
        transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
      }
      &:hover::after,
      &:focus::after {
        transform: scaleX(2);
      }
    }
  }
`;

export const StyledLink = styled(Link)`
  margin-top: 10px;
  margin-right: 10px;
`;

export const StyledFaArrowLeft = styled(FaArrowLeft)`
  margin-left: 10px;
`;
