import styled from 'styled-components';

export const StyledLabel = styled.label`
  display: flex;
  justify-content: space-evenly;

  input {
    margin-top: 24px;
    margin-bottom: 24px;
    width: 600px;
    height: 100%;
    border-radius: 15px;
    border: solid;
    border-color: #ffbb5c;

    &:hover,
    &:focus,
    &:active {
      border-color: #ff935c;
      box-shadow: 0px -3px 91px -3px #ffbb5c;
    }
  }
`;
