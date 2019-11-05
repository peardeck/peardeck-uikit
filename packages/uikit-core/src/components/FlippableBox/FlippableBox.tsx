import React, { useRef } from "react";
import styled, { Keyframes, CSSObject } from "styled-components";
import { Box } from "../Box/Box";
import { frontShow, frontHide, backShow, backHide } from "./animations";

interface FaceProps {
  shown: boolean;
  animate: boolean;
}

const Face = styled(Box)<FaceProps>`
  position: relative;
  /* overflow: hidden; */
`;

interface ContainerProps {
  flipSpeed: number;
}

const FlippableBoxContainer = styled(Box)<ContainerProps>`
  position: relative;
  perspective: 1000px;

  ${Face} {
    animation-duration: ${({ flipSpeed }): number => flipSpeed}s;
    animation-timing-function: linear;
    transform-style: preserve-3d;
    transition-property: transform;
    animation-fill-mode: forwards;
  }
`;

const FrontFace = styled(Face)`
  z-index: 2;
  transform: rotateY(0deg);
  animation-name: ${({ shown }): Keyframes => (shown ? frontShow : frontHide)};

  ${({ animate }): CSSObject =>
    animate ? {} : { height: "100%", width: "100%", animationName: "none" }}
`;

const BackFace = styled(Face)`
  z-index: 1;
  transform: rotateY(-180deg);
  animation-name: ${({ shown }): Keyframes => (shown ? backShow : backHide)};

  ${({ animate }): CSSObject =>
    animate
      ? {}
      : {
          height: "0",
          width: "0",
          visibility: "collapse",
          animationName: "none",
        }}
`;

export interface FlippableBoxProps extends Partial<ContainerProps> {
  front: React.ReactNode;
  back: React.ReactNode;
  flipped?: boolean;
}

export const FlippableBox = ({
  front,
  back,
  flipped = false,
  flipSpeed = 0.5,
}: FlippableBoxProps): JSX.Element => {
  // We don't want to animate the initial render of the element, so
  // once the element is mounted we can then use that knowledge to decide
  // whether we want to apply the keyframe animation.
  const containerRef = useRef(null);

  return (
    <FlippableBoxContainer flipSpeed={flipSpeed} ref={containerRef}>
      <FrontFace shown={!flipped} animate={!!containerRef.current}>
        {front}
      </FrontFace>
      <BackFace shown={flipped} animate={!!containerRef.current}>
        {back}
      </BackFace>
    </FlippableBoxContainer>
  );
};
