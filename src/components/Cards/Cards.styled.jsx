import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledWrrap = styled.div`
  position: relative;
  border: 1px solid #eee;
`;

export const StyledSpan = styled.span`
  position: absolute;
  bottom: 5px;
  right: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  background-color: #fff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 4px solid;
`;

export const StyledlWrrapDetails = styled.div`
  display: flex;
  flex-direction: column;
  p {
    margin-bottom: 30px;
  }
  h4 {
    margin-bottom: 10px;
  }
`;

export const StyledLink = styled(Link)`
  position: absolute;
  top: -44px;
  left: 0;
  z-index: 2;
  display: block;
  text-decoration: none;
  padding-left: 60px;
  padding-right: 20px;
  background-color: #fff;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;

  font-weight: 600;

  color: inherit;
  &:hover,
  &:focus {
    background: #ee0000;
    color: #fff;
  }
`;

export const StyledActorsItem = styled.li`
  width: 200px;
  min-height: 410px;
  text-align: center;

  img {
    border: 1px solid #eee;
    width: 200px;
    height: 300px;
  }
  h2 {
    margin-bottom: 8px;
  }
  p {
    font-size: 18px;
  }
`;
