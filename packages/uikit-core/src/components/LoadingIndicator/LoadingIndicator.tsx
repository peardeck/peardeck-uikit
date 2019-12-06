import React from "react";
import styled from "styled-components";
import { IconLoading } from "@peardeck/uikit-icons";
import { rotate } from "../../animations/rotate";
import { Box } from "../Box/Box";

export const RotatingIconLoading = styled(IconLoading)`
  animation: ${rotate} 2s linear infinite;
`;

const LoadingIndicatorBox = styled(Box)`
  display: inline-block;
  text-align: center;
`;

export type LoadingIndicatorProps = {
  children?: React.ReactNode;
  iconSize?: string;
};

export const LoadingIndicator = ({
  iconSize = "4em",
  children,
}: LoadingIndicatorProps): JSX.Element => (
  <LoadingIndicatorBox>
    <RotatingIconLoading size={iconSize} />
    {children && <Box>{children}</Box>}
  </LoadingIndicatorBox>
);

LoadingIndicator.defaultProps = {
  children: "Loading...",
};
