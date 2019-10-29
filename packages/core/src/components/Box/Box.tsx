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

/**
 * The Box component serves as a wrapper component for most layout related needs.
 * Use the Box component to control width, margin, padding, and color.
 */
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
