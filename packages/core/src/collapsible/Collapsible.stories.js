import React from "react";
import { storiesOf } from "@storybook/react";
import { UncontrolledCollapsible } from "./Collapsible";
storiesOf("core/Collapsible", module).add(
  "Default",
  () =>
    React.createElement(
      UncontrolledCollapsible,
      { title: "This is the title", subTitle: "...and a subtitle goes here" },
      "Content goes here!",
      React.createElement(
        "div",
        {
          style: {
            height: "10em",
            border: "1px solid red",
            backgroundColor: "pink",
            color: "white",
          },
        },
        "Make room!"
      )
    ),
  {
    notes: `
        # Collapsible

        Provides a container with a clickable header that will collapse and expand child content.
      `,
  }
);
//# sourceMappingURL=Collapsible.stories.js.map
