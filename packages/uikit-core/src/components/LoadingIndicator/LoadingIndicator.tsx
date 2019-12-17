import styled from "styled-components";
import { IconLoading } from "@peardeck/uikit-icons";
import { rotate } from "../../animations/rotate";

export interface LoadingIndicatorProps {
  speed?: string | number;
}

export const LoadingIndicator = styled(IconLoading)`
  animation: ${rotate} ${({ speed = "2s" }): string | number => speed} linear
    infinite;
`;

LoadingIndicator.defaultProps = {
  size: "4em",
};
