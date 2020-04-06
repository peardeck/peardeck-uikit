import React from "react";
import { action } from "@storybook/addon-actions";
import { IconAlphabetical } from "@peardeck/uikit-icons";
import { IconButton } from "./IconButton";
import {
  disabledKnob,
  buttonSizeVariantKnob,
  buttonColorVariantKnob,
  buttonStyleVariantKnob,
} from "../Button/Button.knobs";
import { Box } from "../Box";

export default {
  component: IconButton,
  title: "core|IconButton",
};

export const Default = () => (
  <Box p={2}>
    <IconButton
      colorVariant={buttonColorVariantKnob()}
      disabled={disabledKnob()}
      onClick={action("onClick")}
      sizeVariant={buttonSizeVariantKnob()}
      styleVariant={buttonStyleVariantKnob()}
    >
      <IconAlphabetical />
    </IconButton>
  </Box>
);
