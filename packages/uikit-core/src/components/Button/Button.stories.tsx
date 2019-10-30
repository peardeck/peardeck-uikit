import React, { ElementType } from "react";
import { select, text, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import {
  IconAlphabetical,
  IconAccount,
  IconCalendar,
  IconCheckmark,
  IconClassroom,
} from "@peardeck/uikit-icons";
import { Button, ButtonSize, ButtonColorVariant } from "./Button";
import { themeSpaceKnob } from "../../theme/knobs";
import { theme } from "../../theme/theme";

const disabledKnob = (initial = false) => boolean("Disabled", initial);

const buttonSizeKnob = (initial: ButtonSize = "medium") =>
  select("Size", ["small", "medium", "large"], initial) as ButtonSize;

const buttonColorVariantKnob = (initial: ButtonColorVariant = "default") =>
  select(
    "Color Variant",
    Object.keys(theme.buttonColors),
    initial
  ) as ButtonColorVariant;

const ICONS: { [key: string]: ElementType } = {
  IconAlphabetical,
  IconAccount,
  IconCalendar,
  IconCheckmark,
  IconClassroom,
};
const ICONS_KEYS = Object.keys(ICONS);

export default {
  component: Button,
  title: "core|Button",
};

export const Default = () => (
  <Button
    onClick={action("onClick")}
    disabled={disabledKnob()}
    buttonSize={buttonSizeKnob()}
    m={themeSpaceKnob("Margin")}
    p={themeSpaceKnob("Padding")}
    colorVariant={buttonColorVariantKnob()}
  >
    {text("Label", "Hello!")}
  </Button>
);

export const WithIcon = () => {
  const iconKey = select("Icon", ICONS_KEYS, ICONS_KEYS[0]);
  const IconComponent = ICONS[iconKey];

  return (
    <Button
      onClick={action("onClick")}
      disabled={disabledKnob()}
      buttonSize={buttonSizeKnob()}
      colorVariant={buttonColorVariantKnob()}
    >
      <IconComponent /> {text("Label", "This button has an icon!")}
    </Button>
  );
};
export const WithEmoji = () => (
  <Button
    onClick={action("onClick")}
    disabled={disabledKnob()}
    buttonSize={buttonSizeKnob()}
    colorVariant={buttonColorVariantKnob()}
  >
    <span role="img" aria-label="so cool">
      {text("Label", "😀 😎 👍 💯")}
    </span>
  </Button>
);
