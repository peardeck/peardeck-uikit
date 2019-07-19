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
} from "@pearkit/icons";
import { Button, ButtonSize } from "./Button";

const disabledKnob = (initial = false) => boolean("Disabled", initial);
const sizeKnob = (initial: ButtonSize = "medium") =>
  select("Size", ["small", "medium", "large"], initial) as ButtonSize;
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
      <Button {...buttonActions} disabled={disabledKnob()} size={sizeKnob()}>
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
      <Button {...buttonActions} disabled={disabledKnob()} size={sizeKnob()}>
        <IconComponent /> {labelKnob("This button has an icon!")}
      </Button>
    );
  })
  .add("with emoji", () => (
    <Button {...buttonActions} disabled={disabledKnob()} size={sizeKnob()}>
      <span role="img" aria-label="so cool">
        {labelKnob("😀 😎 👍 💯")}
      </span>
    </Button>
  ));
