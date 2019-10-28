import React from "react";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
} from "./Heading";
import { Box } from "../Box/Box";
import { Text } from "../Text/Text";

storiesOf("core/Heading", module).add(
  "Default",
  () => {
    const content = text("Content", "Lorem ipsum dolor sit amet");
    return (
      <>
        {[Heading1, Heading2, Heading3, Heading4, Heading5, Heading6].map(
          Component => (
            <Box p={1} key={Component.displayName}>
              <Text opacity={0.7}>{Component.displayName}</Text>
              <Component>{content}</Component>
            </Box>
          )
        )}
      </>
    );
  },
  {
    notes: `
        # Heading

        The Heading component will render an html h1-6 tag without any default styling.
      `,
  }
);
