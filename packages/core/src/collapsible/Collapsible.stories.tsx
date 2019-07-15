import React from "react";
import { storiesOf } from "@storybook/react";
import { Collapsible } from "./Collapsible";

storiesOf("core/Collapsible", module).add("Default", () => <Collapsible />, {
  notes: `
        # Collapsible

        This does nothing.
      `,
});
