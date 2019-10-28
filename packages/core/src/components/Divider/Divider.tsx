import styled from "styled-components";
import {
  borderColor,
  BorderColorProps,
  space,
  SpaceProps,
  width,
  WidthProps,
} from "styled-system";
import { theme, ThemedComponentProps } from "../../theme/theme";

export type DividerProps = ThemedComponentProps &
  BorderColorProps &
  SpaceProps &
  WidthProps;

export const Divider = styled.hr<DividerProps>`
  border: 0;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  ${space}
  ${width}
  ${borderColor};
`;

Divider.defaultProps = {
  borderColor: "border",
  theme,
};

Divider.displayName = "Divider";
