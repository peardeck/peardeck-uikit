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

export type TextProps = ThemedComponentProps &
  TypographyProps &
  ColorProps &
  DisplayProps &
  SpaceProps;

export const Text = styled.span<TextProps>`
  ${color}
  ${display}
  ${space}
  ${typography}
`;

Text.defaultProps = { theme };

Text.displayName = "Text";
