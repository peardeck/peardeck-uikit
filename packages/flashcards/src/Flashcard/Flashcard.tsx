import React from "react";
import styled from "styled-components";
import { Box, Card } from "@peardeck-uikit/core";

export interface FlashcardProps {
  flipped: boolean;
  slide: boolean;
  speed: number;
}

const Container = styled(Box)`
  perspective: 1000px;
  height: 200px;
  width: 200px;
`;

const Flipper = styled(Box)<FlashcardProps>`
  // Adjust speed here.
  ${({ speed }): string => `transition: ${speed}s`};
  transform-style: preserve-3d;
  position: relative;

  ${({ flipped, slide }): string =>
    flipped && slide
      ? `
    transform-origin: center right;
    transform: translateX(-100%) rotateY(180deg);`
      : ""};

  ${({ flipped, slide }): string =>
    flipped && !slide ? "transform: rotateY(180deg);" : ""};
`;

const Face = styled(Card)`
  backface-visibility: hidden;

  // height: 200px;
  // width: 200px;
`;

const Front = styled(Card)`
  z-index: 2;
  /* for firefox 31 */
  transform: rotateY(0deg);
  background: red;
`;

const Back = styled(Face)`
  z-index: 1;
  transform: rotateY(180deg);
  background: blue;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const Flashcard = ({
  flipped = false,
  slide = false,
  speed = 0.5,
}: FlashcardProps): JSX.Element => (
  <Container>
    <Flipper flipped={flipped} slide={slide} speed={speed}>
      <Front>This is the front</Front>
      <Back>This is the back</Back>
    </Flipper>
  </Container>
);
