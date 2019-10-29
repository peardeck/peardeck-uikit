import styled from "styled-components";
import {
  color,
  ColorProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from "styled-system";
import { theme, ThemedComponentProps } from "../../theme/theme";

export type LinkProps = ColorProps &
  SpaceProps &
  ThemedComponentProps &
  TypographyProps;

export const Link = styled.a<LinkProps>`
  text-decoration: underline;
  ${color}
  ${space}
  ${typography}
`;

Link.defaultProps = {
  color: "blue",
  theme,
};

Link.displayName = "Link";
