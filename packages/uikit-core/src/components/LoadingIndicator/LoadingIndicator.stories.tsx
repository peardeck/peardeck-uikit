import React from "react";
import { LoadingIndicator } from "./LoadingIndicator";
import { Box } from "../Box/Box";
import { Text } from "../Text/Text";

export default {
  component: LoadingIndicator,
  title: "core|LoadingIndicator",
};

export const Default = () => <LoadingIndicator />;

export const Sizing = () => (
  <Box display="flex">
    {["1em", "2em", "4em", "8em"].map((size: string) => (
      <Box
        mr={3}
        alignItems="center"
        display="flex"
        flexDirection="column"
        key={size}
      >
        <Text mb={2}>{size}</Text>
        <LoadingIndicator size={size} />
      </Box>
    ))}
  </Box>
);
