import styled from "styled-components";
import { Button, ButtonProps } from "../Button/Button";

// TODO fix this! Make sure it sizes the same as a regular button and looks the same.

export type IconButtonProps = ButtonProps;

/**
 * Don't use this yet.
 */
export const IconButton = styled(Button)`
  border-radius: 100%;

  > svg {
    fill: white;
  }

  :hover {
    > svg {
      transform: scale(1.1);
    }
  }
`;

IconButton.defaultProps = {
  fontSize: 2,
  size: "2.5em",
};

IconButton.displayName = "IconButton";
