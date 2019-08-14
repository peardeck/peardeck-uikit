import React, { ElementType } from "react";
import { storiesOf } from "@storybook/react";
import { select, text, boolean, withKnobs } from "@storybook/addon-knobs";
import { actions } from "@storybook/addon-actions";
import {
  IconAlphabetical,
  IconAccount,
  IconCalendar,
  IconCheckmark,
  IconClassroom,
} from "@peardeck-uikit/icons";
import { Button, ButtonSize, ButtonVariant } from "./Button";

const disabledKnob = (initial = false) => boolean("Disabled", initial);

const buttonSizeKnob = (initial: ButtonSize = "medium") =>
  select("Size", ["small", "medium", "large"], initial) as ButtonSize;

const sizeKnob = (initial = null) =>
  select(
    "Space size",
    { "not specified": null, "0": 0, "1": 1, "2": 2, "3": 3, "4": 4, "5": 5 },
    initial
  );

const variantKnob = (initial: ButtonVariant = "default") =>
  select(
    "Variant",
    ["default", "primary", "secondary"],
    initial
  ) as ButtonVariant;

const labelKnob = (initial: string | null = null) => text("Label", initial);

const buttonActions = actions("onClick", "onFocus", "onBlur");

const ICONS: { [key: string]: ElementType } = {
  IconAlphabetical,
  IconAccount,
  IconCalendar,
  IconCheckmark,
  IconClassroom,
};
const ICONS_KEYS = Object.keys(ICONS);

storiesOf("core/Button", module)
  .addDecorator(withKnobs)
  .add(
    "with text",
    () => (
      <Button
        {...buttonActions}
        disabled={disabledKnob()}
        buttonSize={buttonSizeKnob()}
        m={sizeKnob() || undefined}
        p={sizeKnob() || undefined}
        variant={variantKnob()}
      >
        {labelKnob("Hello!")}
      </Button>
    ),
    {
      notes: `
        # Button

        This is a very simple component

        You can use markdown here:

        1. First
        2. Second
        3. Third
      `,
    }
  )
  .add("with icon", () => {
    const iconKey = select("Icon", ICONS_KEYS, ICONS_KEYS[0]);
    const IconComponent = ICONS[iconKey];

    return (
      <Button
        {...buttonActions}
        disabled={disabledKnob()}
        buttonSize={buttonSizeKnob()}
        variant={variantKnob()}
      >
        <IconComponent /> {labelKnob("This button has an icon!")}
      </Button>
    );
  })
  .add("with emoji", () => (
    <Button
      {...buttonActions}
      disabled={disabledKnob()}
      buttonSize={buttonSizeKnob()}
      variant={variantKnob()}
    >
      <span role="img" aria-label="so cool">
        {labelKnob("😀 😎 👍 💯")}
      </span>
    </Button>
  ));
