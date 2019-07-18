import styled from "styled-components";

export type ButtonSize = "small" | "medium" | "large";

const size = ({ size }: { size?: ButtonSize }) => {
  switch (size) {
    case "small":
      return {
        fontSize: "0.75em",
        padding: "0.25em 0.5em",
      };
    case "large":
      return {
        fontSize: "1.5em",
        padding: "0.75em 1.25em",
      };
    case "medium":
    default:
      return {
        fontSize: "1em",
        padding: "0.5em 1em",
      };
  }
};

export const Button = styled.button`
  font-family: inherit;
  font-weight: 600;
  line-height: 1.5;
  text-align: center;
  cursor: pointer;
  background-color: #ffffff;
  color: #354242;
  border: 1px solid #dce2e9;
  border-radius: 1.5em;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.27);
  transition: all 0.2s ease;
  ${size}

  > * {
    vertical-align: middle;
  }

  :hover {
    background-color: rgba(237, 240, 244, 0.42);
  }

  :disabled {
    opacity: 0.3;
  }
`;

Button.defaultProps = {
  size: "medium",
  theme: {},
};

Button.displayName = "Button";
