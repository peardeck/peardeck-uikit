import React from "react";
import { storiesOf } from "@storybook/react";
import { LoadingIndicator } from "./LoadingIndicator";

storiesOf("core/LoadingIndicator", module)
  .add(
    "Default",
    () => (
      <LoadingIndicator />
    ),
    {
      notes: `
        # Loading Indicator
      `,
    }
  );
