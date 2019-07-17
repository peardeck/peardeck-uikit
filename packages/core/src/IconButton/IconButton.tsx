import styled from "styled-components";

export const IconButton = styled.button`
  font-size: 1.5em;
  border: 0;
  background-color: #3087B7;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1.5em;
  width: 1.5em;
  cursor: pointer;

  > svg {
    fill: white;
  }

  :hover {
    background-color: #6EABCD

    > svg {
      transform: scale(1.1);
    }
  }
`;
