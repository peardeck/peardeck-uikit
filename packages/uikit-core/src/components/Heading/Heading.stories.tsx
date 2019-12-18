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
  const components = [
    Heading1 as typeof Heading,
    Heading2 as typeof Heading,
    Heading3 as typeof Heading,
    Heading4 as typeof Heading,
    Heading5 as typeof Heading,
    Heading6 as typeof Heading,
  ] as Array<typeof Heading>;

  return (
    <>
      {components.map(Component => (
        <Box p={1} key={Component.displayName}>
          <Text opacity={0.7}>{Component.displayName}</Text>
          <Component>{content}</Component>
        </Box>
      ))}
    </>
  );
};
