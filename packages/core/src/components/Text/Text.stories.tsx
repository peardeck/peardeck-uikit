import React from "react";
import { text } from "@storybook/addon-knobs";
import { Text } from "./Text";
import {
  elementTypeKnob,
  colorKnobs,
  displayKnobs,
  spaceKnobs,
  typographyKnobs,
} from "../../theme/knobs";
import { Box } from "../Box/Box";

export default {
  component: Text,
  title: "core|Text",
};

export const Default = () => (
  <Text
    as={elementTypeKnob()}
    {...typographyKnobs()}
    {...displayKnobs()}
    {...spaceKnobs()}
    {...colorKnobs()}
  >
    {text(
      "Content",
      "Text is component for setting font-size, typographic styles, margin, and color."
    )}
  </Text>
);

export const FontSizes = () => (
  <>
    {[0, 1, 2, 3, 4, 5, 6].map(size => (
      <Box key={size} m={2}>
        <Text fontSize={size}>Lorem Ipsum {size}</Text>
      </Box>
    ))}
  </>
);

export const TextAlignment = () => (
  <>
    {["left", "center", "right"].map(align => (
      <Box key={align} m={2} bg="yellow" maxWidth="50%">
        <Text as="div" textAlign={align as "left" | "center" | "right"}>
          Lorem Ipsum {align}
        </Text>
      </Box>
    ))}
  </>
);

export const Color = () => (
  <>
    {["blue", "green", "red", "yellow", "primary", "secondary"].map(color => (
      <Box key={color} m={2}>
        <Text color={color}>Lorem Ipsum {color}</Text>
      </Box>
    ))}
  </>
);
