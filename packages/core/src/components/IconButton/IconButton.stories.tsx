import React from "react";
import { boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { IconAlphabetical } from "@peardeck-uikit/icons";
import { IconButton } from "./IconButton";

export default {
  component: IconButton,
  title: "core|IconButton",
};

export const Default = () => (
  <IconButton
    disabled={boolean("Disabled", false)}
    onClick={action("button-click")}
  >
    <IconAlphabetical />
  </IconButton>
);
