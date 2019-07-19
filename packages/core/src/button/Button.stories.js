import React from "react";
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
import { Button } from "./Button";
const disabledKnob = (initial = false) => boolean("Disabled", initial);
const sizeKnob = (initial = "medium") =>
  select("Size", ["small", "medium", "large"], initial);
const labelKnob = (initial = null) => text("Label", initial);
const buttonActions = actions("onClick", "onFocus", "onBlur");
const ICONS = {
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
    () =>
      React.createElement(
        Button,
        Object.assign({}, buttonActions, {
          disabled: disabledKnob(),
          size: sizeKnob(),
        }),
        labelKnob("Hello!")
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
    return React.createElement(
      Button,
      Object.assign({}, buttonActions, {
        disabled: disabledKnob(),
        size: sizeKnob(),
      }),
      React.createElement(IconComponent, null),
      " ",
      labelKnob("This button has an icon!")
    );
  })
  .add("with emoji", () =>
    React.createElement(
      Button,
      Object.assign({}, buttonActions, {
        disabled: disabledKnob(),
        size: sizeKnob(),
      }),
      React.createElement(
        "span",
        { role: "img", "aria-label": "so cool" },
        labelKnob("😀 😎 👍 💯")
      )
    )
  );
//# sourceMappingURL=Button.stories.js.map
