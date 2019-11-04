import React from "react";
import styled, { Keyframes } from "styled-components";
import { Box } from "../Box/Box";
import { frontShow, frontHide, backShow, backHide } from "./animations";

interface FaceProps {
  shown: boolean;
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
`;

const BackFace = styled(Face)`
  z-index: 1;
  transform: rotateY(-180deg);
  animation-name: ${({ shown }): Keyframes => (shown ? backShow : backHide)};
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
}: FlippableBoxProps): JSX.Element => (
  <FlippableBoxContainer flipSpeed={flipSpeed}>
    <FrontFace shown={!flipped}>{front}</FrontFace>
    <BackFace shown={flipped}>{back}</BackFace>
  </FlippableBoxContainer>
);
