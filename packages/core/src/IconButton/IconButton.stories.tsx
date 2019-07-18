import React from "react";
import { storiesOf } from "@storybook/react";
import { IconButton } from "./IconButton";
import { IconAlphabetical } from "@pearkit/icons";

import { boolean, withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

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
