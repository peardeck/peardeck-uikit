import React from "react";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";
import { LoadingIndicator } from "./LoadingIndicator";

storiesOf("core/LoadingIndicator", module).add(
  "Default",
  () => (
    <LoadingIndicator>
      {text("Message", LoadingIndicator.defaultProps.children)}
    </LoadingIndicator>
  ),
  {
    notes: `
        # Loading Indicator
      `,
  }
);
