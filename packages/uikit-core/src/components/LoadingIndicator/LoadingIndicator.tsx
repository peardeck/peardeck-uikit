import styled from "styled-components";
import { IconLoading } from "@peardeck/uikit-icons";
import { rotate } from "../../animations/rotate";

export const LoadingIndicator = styled(IconLoading)`
  animation: ${rotate} 2s linear infinite;
`;

LoadingIndicator.defaultProps = {
  size: "4em",
};
