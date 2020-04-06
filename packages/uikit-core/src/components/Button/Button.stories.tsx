import React, { ElementType } from "react";
import { select, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import {
  IconAlphabetical,
  IconAccount,
  IconCalendar,
  IconCheckmark,
  IconClassroom,
} from "@peardeck/uikit-icons";
import {
  Button,
  ButtonColorVariant,
  ButtonStyleVariant,
  SIZE_VARIANTS,
} from "./Button";
import { Box } from "../Box";
import { theme } from "../../theme/theme";
import {
  disabledKnob,
  buttonSizeVariantKnob,
  buttonColorVariantKnob,
  buttonStyleVariantKnob,
} from "./Button.knobs";

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
  <Box p={2}>
    <Button
      colorVariant={buttonColorVariantKnob()}
      disabled={disabledKnob()}
      onClick={action("onClick")}
      sizeVariant={buttonSizeVariantKnob()}
      styleVariant={buttonStyleVariantKnob()}
    >
      {text("Label", "Hello!")}
    </Button>
  </Box>
);

export const SizeVariants = () => (
  <>
    {SIZE_VARIANTS.map((size) => (
      <Box key={size} p={2}>
        <Button
          colorVariant={buttonColorVariantKnob()}
          disabled={disabledKnob()}
          onClick={action("onClick")}
          sizeVariant={size}
          styleVariant={buttonStyleVariantKnob()}
        >
          {size}
        </Button>
      </Box>
    ))}
  </>
);

export const ColorVariants = () => (
  <>
    {Object.keys(theme.buttonColors).map((color) => (
      <Box key={color} p={2}>
        <Button
          colorVariant={color as ButtonColorVariant}
          disabled={disabledKnob()}
          onClick={action("onClick")}
          sizeVariant={buttonSizeVariantKnob()}
          styleVariant={buttonStyleVariantKnob()}
        >
          {color}
        </Button>
      </Box>
    ))}
  </>
);

export const StyleVariants = () => (
  <>
    {Object.keys(theme.buttonStyles).map((style) => (
      <Box key={style} p={2}>
        <Button
          colorVariant={buttonColorVariantKnob()}
          disabled={disabledKnob()}
          onClick={action("onClick")}
          sizeVariant={buttonSizeVariantKnob()}
          styleVariant={style as ButtonStyleVariant}
        >
          {style}
        </Button>
      </Box>
    ))}
  </>
);

export const WithIcon = () => {
  const iconKey = select("Icon", ICONS_KEYS, ICONS_KEYS[0]);
  const IconComponent = ICONS[iconKey];

  return (
    <Box p={2}>
      <Button
        colorVariant={buttonColorVariantKnob()}
        disabled={disabledKnob()}
        onClick={action("onClick")}
        sizeVariant={buttonSizeVariantKnob()}
        styleVariant={buttonStyleVariantKnob()}
      >
        <IconComponent /> {text("Label", "This button has an icon!")}
      </Button>
    </Box>
  );
};

export const WithEmoji = () => (
  <Box p={2}>
    <Button
      colorVariant={buttonColorVariantKnob()}
      disabled={disabledKnob()}
      onClick={action("onClick")}
      sizeVariant={buttonSizeVariantKnob()}
      styleVariant={buttonStyleVariantKnob()}
    >
      <span role="img" aria-label="so cool">
        {text("Label", "😀 😎 👍 💯")}
      </span>
    </Button>
  </Box>
);

export const AsLink = () => (
  <Box p={2}>
    <Button
      as="a"
      colorVariant={buttonColorVariantKnob()}
      disabled={disabledKnob()}
      onClick={action("onClick")}
      sizeVariant={buttonSizeVariantKnob()}
      styleVariant={buttonStyleVariantKnob()}
    >
      This is a a link styled as a button.
    </Button>
  </Box>
);
