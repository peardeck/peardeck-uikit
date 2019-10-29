import React from "react";
import { color, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { Link } from "./Link";
import { themeColorKnob } from "../../theme/knobs";

const labelKnob = (initial: string) => text("Label", initial);
const hrefKnob = (initial: string) => text("href", initial);

export default {
  component: Link,
  title: "core|Link",
};

export const Default = () => (
  <Link onClick={action("onClick")} href={hrefKnob("https://google.com")}>
    {labelKnob("Pear Deck Link")}
  </Link>
);

export const ThemeColors = () => (
  <Link
    onClick={action("onClick")}
    href={hrefKnob("https://google.com")}
    color={themeColorKnob()}
  >
    {labelKnob("I'm colored based on the theme")}
  </Link>
);

export const AnyColors = () => (
  <Link
    onClick={action("onClick")}
    href={hrefKnob("https://google.com")}
    color={color("Color", "#00f")}
  >
    {labelKnob("I can be any color you want")}
  </Link>
);
