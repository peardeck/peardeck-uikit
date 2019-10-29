import styled from "styled-components";
import { border, BorderProps, system } from "styled-system";
import { theme } from "../../theme/theme";
import { Box, BoxProps } from "../Box/Box";

export type CardProps = BoxProps &
  BorderProps & {
    depth?: number;
  };

export const Card = styled(Box).attrs(
  ({ border: borderProp, depth }: CardProps) => ({
    // When depth === 0 use a flat border, not a box shadow
    border: depth === 0 && !borderProp ? 1 : borderProp,
  })
)<CardProps>`
  ${system({
    depth: {
      property: "boxShadow",
      scale: "shadows",
    },
  })}

  ${border}
`;

Card.defaultProps = {
  borderRadius: 1,
  depth: 1,
  p: 1,
  theme,
};

Card.displayName = "Card";
