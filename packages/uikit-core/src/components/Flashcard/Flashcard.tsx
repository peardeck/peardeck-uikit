import React from "react";
import { Box, BoxProps } from "../Box/Box";
import { Card } from "../Card/Card";
import { Text } from "../Text/Text";
import { FlippableBox } from "../FlippableBox/FlippableBox";
import { Heading1 } from "../Heading/Heading";

export interface FlashcardProps {
  image?: React.ReactNode;
  term: React.ReactNode;
  example?: React.ReactNode;
  definition?: React.ReactNode;
  height: number;
  width: number;
  flipped?: boolean;
  flipSpeed?: number | string;
  slideAnimation?: boolean;

  // TODO: Have to figure out how to do with this color
  // property type mismatch
  color?: string;
}

export const Flashcard = ({
  image,
  term,
  example,
  definition,
  height,
  width,
  flipped = false,
  flipSpeed,
  slideAnimation = false,
  ...rest
}: FlashcardProps & BoxProps): JSX.Element => (
  <FlippableBox
    {...rest}
    height={height}
    width={width}
    slideAnimation={slideAnimation}
    front={
      <Card
        height={height}
        width={width}
        p={0}
        bg="pear"
        display="flex"
        alignItems="stretch"
      >
        {image && (
          <Box
            display="flex"
            flex={1}
            m={2}
            p={2}
            border="1px solid #698600"
            justifyContent="center"
            alignItems="center"
          >
            {image}
          </Box>
        )}
        <Box m={2} flex={2} overflow="auto">
          {definition && <Heading1 pb={2}>{definition}</Heading1>}
          {example && <Text pt={2}>{example}</Text>}
        </Box>
      </Card>
    }
    back={
      <Card
        height={height}
        width={width}
        p={0}
        bg="#eee"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Heading1>{term}</Heading1>
      </Card>
    }
    flipped={flipped}
    flipSpeed={flipSpeed}
  />
);
