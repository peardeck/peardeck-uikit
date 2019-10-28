import styled from "styled-components";
import {
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
} from "styled-system";
import { theme, ThemedComponentProps } from "../../theme/theme";

export type BoxProps = ThemedComponentProps &
  ColorProps &
  LayoutProps &
  SpaceProps &
  FlexboxProps;

export const Box = styled.div<BoxProps>`
  ${color}
  ${layout}
  ${space}
  ${flexbox}
`;

Box.defaultProps = { theme };
