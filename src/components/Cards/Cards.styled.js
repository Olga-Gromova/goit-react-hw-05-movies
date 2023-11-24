import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledDiv = styled.div`
  position: relative;
  border: 1px solid #eee;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    padding: 5px;
  }
`;
export const StyledWrrap = styled.div`
  position: relative;
  border: 1px solid #eee;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    justify-content: center;
    padding: 5px;
  }
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
  @media (min-width: 768px) {
    margin-left: 20px;
  }
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
    width: 150px;
    height: 200px;
    @media (min-width: 768px) {
      width: 200px;
      height: 300px;
    }
  }
  h2 {
    margin-bottom: 8px;
  }
  p {
    font-size: 18px;
  }
`;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0px;
  @media (min-width: 450px) {
    display: row;
    justify-content: center;
    padding: 5px;
  }
  li {
    font-size: 18px;
    transition: all 350ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
      scale: 1.1;
      color: #600000;
    }
    @media (min-width: 450px) {
      font-size: 20px;
      display: grid;
      align-content: space-between;
      margin-left: 10px;
      width: calc((100% - 20px) / 2);
    }
    @media (min-width: 768px) {
      font-size: 22px;
      width: calc((100% - 30px) / 3);
      margin-left: 10px;
    }
    @media (min-width: 1200px) {
      width: calc((100% - 40px) / 4);
      margin-left: 10px;
    }
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  img {
    border: 1px solid #eee;
    max-widht: 150px;
    widht: 100%;

    @media (min-width: 450px) {
      max-width: 200px;
    }
  }
  h4 {
    margin: 10px 0px 10px 0px;
    text-aling: start;
    padding-right: 32px;
    position: relative;
  }
`;
