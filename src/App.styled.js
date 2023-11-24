import styled from 'styled-components';

export const Container = styled.div`
  widht: 320px:
  margin: 0 auto 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  max-width: 100%;

    @media (min-width: 768px) {
    widht: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }
    @media (min-width: 1200px) {
    max-width: 1280px;
    margin-right: auto;
    margin-left: auto;
  }    

`;
