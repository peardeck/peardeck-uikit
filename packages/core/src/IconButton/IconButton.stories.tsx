import React from "react";
import { storiesOf } from "@storybook/react";
import { boolean, withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { IconAlphabetical } from "@pearkit/icons";
import { IconButton } from "./IconButton";

storiesOf("core/IconButton", module)
  .addDecorator(withKnobs)
  .add("Example button", () => (
    <IconButton
      disabled={boolean("Disabled", false)}
      onClick={action("button-click")}
    >
      <IconAlphabetical />
    </IconButton>
  ));
