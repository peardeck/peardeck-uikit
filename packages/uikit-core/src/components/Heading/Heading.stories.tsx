import React from "react";
import { text } from "@storybook/addon-knobs";
import {
  Heading,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
} from "./Heading";
import { Box } from "../Box/Box";
import { Text } from "../Text/Text";

export default {
  component: Heading,
  title: "core|Heading",
};

export const Default = () => {
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
};
