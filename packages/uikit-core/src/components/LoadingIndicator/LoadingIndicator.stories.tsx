import React from "react";
import { text } from "@storybook/addon-knobs";
import { LoadingIndicator } from "./LoadingIndicator";
import { Box } from "../Box/Box";

export default {
  component: LoadingIndicator,
  title: "core|LoadingIndicator",
};

export const Default = () => (
  <LoadingIndicator>
    {text("Message", LoadingIndicator.defaultProps.children)}
  </LoadingIndicator>
);

export const Sizing = () => (
  <Box>
    <LoadingIndicator iconSize="1em">1em</LoadingIndicator>
    <LoadingIndicator iconSize="2em">2em</LoadingIndicator>
    <LoadingIndicator iconSize="3em">3em</LoadingIndicator>
    <LoadingIndicator iconSize="4em">4em</LoadingIndicator>
    <LoadingIndicator iconSize="8em">8em</LoadingIndicator>
  </Box>
);
