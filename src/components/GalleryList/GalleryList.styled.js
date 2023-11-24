import styled from 'styled-components';

export const StyledGalleryList = styled.ul`
  display: block;
  padding: 0px;
  @media (min-width: 350px) {
    display: flex;
    flex-wrap: wrap;
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
export const StyledDiv = styled.div`
  position: relative;
  display: flex;
  min-width: 200px;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: auto;
  min-height: 100%;
`;
