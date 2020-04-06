import { HTMLAttributes } from "react";
import styled from "styled-components";
import { theme } from "../../theme/theme";
import { Box, BoxProps } from "./Box";

export type BaseFlexProps = BoxProps;

export const Flex = styled(Box)<BaseFlexProps>``;

export type FlexProps = BaseFlexProps & HTMLAttributes<HTMLElement>;

Flex.defaultProps = {
  display: "flex",
  theme,
};

Flex.displayName = "Flex";
