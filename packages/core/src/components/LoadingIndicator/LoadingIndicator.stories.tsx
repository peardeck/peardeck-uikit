import React from "react";
import { text } from "@storybook/addon-knobs";
import { LoadingIndicator } from "./LoadingIndicator";

export default {
  component: LoadingIndicator,
  title: "core|LoadingIndicator",
};

export const Default = () => (
  <LoadingIndicator>
    {text("Message", LoadingIndicator.defaultProps.children)}
  </LoadingIndicator>
);
