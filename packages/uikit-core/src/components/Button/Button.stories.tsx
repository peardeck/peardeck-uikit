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
import { Button, ButtonSize, ButtonVariant } from "./Button";
import { themeSpaceKnob } from "../../theme/knobs";

const disabledKnob = (initial = false) => boolean("Disabled", initial);

const buttonSizeKnob = (initial: ButtonSize = "medium") =>
  select("Size", ["small", "medium", "large"], initial) as ButtonSize;

const buttonVariantKnbo = (initial: ButtonVariant = "default") =>
  select(
    "Variant",
    ["default", "primary", "secondary"],
    initial
  ) as ButtonVariant;

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
    variant={buttonVariantKnbo()}
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
      variant={buttonVariantKnbo()}
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
    variant={buttonVariantKnbo()}
  >
    <span role="img" aria-label="so cool">
      {text("Label", "😀 😎 👍 💯")}
    </span>
  </Button>
);
