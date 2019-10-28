import React from "react";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";
import { Card } from "./Card";
import {
  colorKnobs,
  spaceKnobs,
  themeShadowsKnob,
} from "../../theme/knobs.stories";

storiesOf("core/Card", module).add("default", () => (
  <Card
    {...spaceKnobs()}
    {...colorKnobs()}
    depth={themeShadowsKnob("Depth", (Card.defaultProps || {}).depth)}
  >
    {text(
      "Content",
      "This is a Card. Use the Card component to control width, margin, padding, and color. Use the `depth` prop to control a card's visual depth."
    )}
  </Card>
));
