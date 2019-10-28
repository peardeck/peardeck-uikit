import React from "react";
import styled from "styled-components";
import { IconLoading } from "@peardeck-uikit/icons";
import { rotate } from "../../animations/rotate";
import { Box } from "../Box/Box";

const RotatingLoader = styled(IconLoading)`
  animation: ${rotate} 2s linear infinite;
`;

const LoadingIndicatorBox = styled(Box)`
  display: inline-block;
  text-align: center;
`;

export type LoadingIndicatorProps = { children?: React.ReactNode };

export const LoadingIndicator = ({
  children,
}: LoadingIndicatorProps): JSX.Element => (
  <LoadingIndicatorBox>
    <RotatingLoader size="4em" />
    {children && <Box>{children}</Box>}
  </LoadingIndicatorBox>
);

LoadingIndicator.defaultProps = {
  children: "Loading...",
};
