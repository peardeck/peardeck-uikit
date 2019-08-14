import styled from "styled-components";
import {
  color,
  ColorProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
} from "styled-system";
import theme, { ThemedComponentProps } from "../Theme/theme";

type BoxProps = ColorProps & LayoutProps & SpaceProps & ThemedComponentProps;

export const Box: React.FunctionComponent<BoxProps> = styled.div`
  ${color}
  ${layout}
  ${space}
`;

Box.defaultProps = { theme };
