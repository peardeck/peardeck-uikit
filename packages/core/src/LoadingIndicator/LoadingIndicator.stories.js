import React from "react";
import { storiesOf } from "@storybook/react";
import { LoadingIndicator } from "./LoadingIndicator";
storiesOf("core/LoadingIndicator", module).add(
  "Default",
  () => React.createElement(LoadingIndicator, null),
  {
    notes: `
        # Loading Indicator
      `,
  }
);
//# sourceMappingURL=LoadingIndicator.stories.js.map
