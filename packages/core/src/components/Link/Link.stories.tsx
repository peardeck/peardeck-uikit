import React from "react";
import { storiesOf } from "@storybook/react";
import { color, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { Link } from "./Link";
import { themeColorKnob } from "../../theme/knobs.stories";

const labelKnob = (initial: string) => text("Label", initial);
const hrefKnob = (initial: string) => text("href", initial);

storiesOf("core/Link", module)
  .add("Default", () => (
    <Link onClick={action("onClick")} href={hrefKnob("https://google.com")}>
      {labelKnob("Pear Deck Link")}
    </Link>
  ))
  .add("Theme Colors", () => (
    <Link
      onClick={action("onClick")}
      href={hrefKnob("https://google.com")}
      color={themeColorKnob()}
    >
      {labelKnob("I'm colored based on the theme")}
    </Link>
  ))
  .add("Any Color", () => (
    <Link
      onClick={action("onClick")}
      href={hrefKnob("https://google.com")}
      color={color("Color", "#00f")}
    >
      {labelKnob("I can be any color you want")}
    </Link>
  ));
