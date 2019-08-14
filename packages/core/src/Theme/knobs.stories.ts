import { select } from "@storybook/addon-knobs";

export const spaceKnob = (label = "Spacing", initial = null) =>
  select(
    label,
    { "not specified": null, "0": 0, "1": 1, "2": 2, "3": 3, "4": 4, "5": 5 },
    initial
  );
