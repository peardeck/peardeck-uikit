import styled from "styled-components";
import {
  color,
  ColorProps,
  display,
  DisplayProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from "styled-system";
import { theme, ThemedComponentProps } from "../../theme/theme";

export type SelectProps = ThemedComponentProps &
  TypographyProps &
  ColorProps &
  DisplayProps &
  SpaceProps;

/**
 * Select is component for setting font-size, typographic styles, margin, and color.
 */
export const Select = styled.select<SelectProps>`
  ${color}
  ${display}
  ${space}
  ${typography}
`;

Select.defaultProps = { theme, p: 1 };

Select.displayName = "Select";
