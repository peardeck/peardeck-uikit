import React from "react";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";
import { Text } from "./Text";
import {
  elementTypeKnob,
  colorKnobs,
  displayKnobs,
  spaceKnobs,
  typographyKnobs,
} from "../../theme/knobs.stories";
import { Box } from "../Box/Box";

storiesOf("core/Text", module)
  .add(
    "Default",
    () => (
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
    ),
    {
      notes: `
        # Text

        Text is component for setting font-size, typographic styles, margin, and color.
      `,
    }
  )
  .add("Font Sizes", () => (
    <>
      {[0, 1, 2, 3, 4, 5, 6].map(size => (
        <Box key={size} m={2}>
          <Text fontSize={size}>Lorem Ipsum {size}</Text>
        </Box>
      ))}
    </>
  ))
  .add("Text alignment", () => (
    <>
      {["left", "center", "right"].map(align => (
        <Box key={align} m={2} bg="yellow" maxWidth="50%">
          <Text as="div" textAlign={align as "left" | "center" | "right"}>
            Lorem Ipsum {align}
          </Text>
        </Box>
      ))}
    </>
  ))
  .add("Color", () => (
    <>
      {["blue", "green", "red", "yellow", "primary", "secondary"].map(color => (
        <Box key={color} m={2}>
          <Text color={color}>Lorem Ipsum {color}</Text>
        </Box>
      ))}
    </>
  ));
