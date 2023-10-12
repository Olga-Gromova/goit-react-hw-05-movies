import styled from 'styled-components';

export const StyledActorsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;


  li {
    width: calc((100% - 40px)/4);
    margin-left: 10px;
    display: grid;
    aling-content: space-between;

    font-size: 14px;
    transition: all 350ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
      scale: 1.1;
      color: #600000;
  }
  a {

    text-decoration: none;
    color: inherit;
  }
  img {
    border: 1px solid #eee;
    max-width: 200px;
   
  }

`;
