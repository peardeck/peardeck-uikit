import styled from "styled-components";
import {
  border,
  BorderProps,
  boxShadow,
  BoxShadowProps,
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
  ZIndexProps,
  zIndex,
} from "styled-system";
import { theme, ThemedComponentProps } from "../../theme/theme";

export type BoxProps = ThemedComponentProps &
  BorderProps &
  BoxShadowProps &
  ColorProps &
  LayoutProps &
  SpaceProps &
  FlexboxProps &
  PositionProps &
  ZIndexProps;

export const Box = styled.div<BoxProps>`
  ${border}
  ${boxShadow}
  ${color}
  ${layout}
  ${space}
  ${flexbox}
  ${position}
  ${zIndex}
`;

Box.defaultProps = { theme };

Box.displayName = "Box";
