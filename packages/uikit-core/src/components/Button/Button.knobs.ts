import { select, boolean } from "@storybook/addon-knobs";
import {
  ButtonColorVariant,
  ButtonSizeVariant,
  ButtonStyleVariant,
  SIZE_VARIANTS,
} from "./Button";
import { theme } from "../../theme/theme";

export const disabledKnob = (initial = false) => boolean("Disabled", initial);

export const buttonSizeVariantKnob = (initial: ButtonSizeVariant = "medium") =>
  select("Size Variant", SIZE_VARIANTS, initial) as ButtonSizeVariant;

export const buttonColorVariantKnob = (
  initial: ButtonColorVariant = "default"
) =>
  select(
    "Color Variant",
    Object.keys(theme.buttonColors),
    initial
  ) as ButtonColorVariant;

export const buttonStyleVariantKnob = (
  initial: ButtonStyleVariant = "default"
) =>
  select(
    "Style Variant",
    Object.keys(theme.buttonStyles),
    initial
  ) as ButtonStyleVariant;
