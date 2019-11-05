import React from "react";
import styled from "styled-components";
import { Box, BoxProps } from "../Box/Box";

export interface FlippableBoxContainerProps {
  height: number;
  width: number;
}

const FlippableBoxContainer = styled(Box)<FlippableBoxContainerProps>`
  perspective: 1000px;

  @media print {
    break-after: always;
  }
`;

export interface FlipperProps {
  /**
   * Determines the speed of the flip animation.
   */
  flipSpeed?: number | string;

  /**
   * True to display flipped (displaying the backside), otherwise
   * the front will be displayed.
   */
  flipped?: boolean;

  /**
   * When true, a "sliding" type of animation will be used.
   */
  slideAnimation?: boolean;
}

const Flipper = styled(Box)<FlipperProps>`
  transition-duration: ${({ flipSpeed = "1s" }): string =>
    typeof flipSpeed === "number" ? `${flipSpeed}s` : flipSpeed};
  transform-style: preserve-3d;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  ${({ flipped, slideAnimation = false }): string =>
    flipped && slideAnimation
      ? `
    transform-origin: center right;
    transform: translateX(-100%) rotateY(180deg);`
      : ""};

  ${({ flipped, slideAnimation = false }): string =>
    flipped && !slideAnimation ? "transform: rotateY(180deg);" : ""};

  @media print {
    transform-origin: unset;
    transition-duration: unset;
    transform: unset;
    position: unset;
    top: unset;
    bottom: unset;
    left: unset;
    right: unset;
  }
`;

const Face = styled(Box)`
  backface-visibility: hidden;
  overflow: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  @media print {
    backface-visibility: unset;
    overflow: unset;
    position: unset;
    top: unset;
    bottom: unset;
    left: unset;
    right: unset;
    box-shadow: none;
    border-radius: 0;
    border: 1px dotted;
    border-bottom: 1px solid;
  }
`;

const Front = styled(Face)`
  z-index: 2;
  transform: rotateY(0deg); /* for firefox 31 */

  @media print {
    transform: unset;
  }
`;

const Back = styled(Face)`
  z-index: 1;
  transform: rotateY(180deg);

  @media print {
    transform: rotate(180deg);
  }
`;

export type FlippableBoxProps = BoxProps &
  FlippableBoxContainerProps &
  FlipperProps & {
    front: React.ReactNode;
    back: React.ReactNode;

    // TODO: Have to figure out how to do with this color
    // property type mismatch
    color?: string;
  };

/**
 * A container that contains a `front` and `back` child that can be flipped.
 * This implementation requires an explicit height and width be set. If
 * more flexibility is needed for sizing, use `FlippableBoxResponsive`
 */
export const FlippableBox = ({
  flipped = false,
  front,
  back,
  slideAnimation = false,
  flipSpeed = "0.5s",
  height,
  width,
  ...rest
}: FlippableBoxProps): JSX.Element => (
  <FlippableBoxContainer height={height} width={width} {...rest}>
    <Flipper
      flipped={flipped}
      slideAnimation={slideAnimation}
      flipSpeed={flipSpeed}
    >
      <Front>{front}</Front>
      <Back>{back}</Back>
    </Flipper>
  </FlippableBoxContainer>
);
