import React from "react";
import styled, { keyframes } from "styled-components";
import { IconLoading } from "@pearkit/icons";
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
const RotatingLoader = styled(IconLoading)`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 4rem;
`;
const StyledLoadingIndicator = styled.div`
  text-align: center;
  display: inline-block;
`;
export const LoadingIndicator = () =>
  React.createElement(
    StyledLoadingIndicator,
    null,
    React.createElement(RotatingLoader, null),
    React.createElement("div", null, "Loading...")
  );
//# sourceMappingURL=LoadingIndicator.js.map
