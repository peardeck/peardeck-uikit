import React from "react";
import { storiesOf } from "@storybook/react";
import { Button } from "./Button";
import { text, boolean, withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

storiesOf("core/Button", module)
  .addDecorator(withKnobs)
  .add(
    "with text",
    () => (
      <Button
        disabled={boolean("Disabled", false)}
        onClick={action("button-click")}
      >
        {text("Label", "Hello Button")}
      </Button>
    ),
    {
      notes: `
        # Button

        This is a very simple component

        You can use markdown here:

        1. First
        2. Second
        3. Third
      `,
    }
  )
  .add("with emoji", () => (
    <Button>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
