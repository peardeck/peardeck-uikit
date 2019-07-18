import React from "react";
import { storiesOf } from "@storybook/react";
import { text, withKnobs } from "@storybook/addon-knobs";
import { CallToAction } from "./CallToAction";

storiesOf("core/CallToAction", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <CallToAction
      buttonContent={text("Button Text", "Default Button Text")}
      image="Image goes here"
      title={text("Title", "Default Header Text")}
    >
      {text(
        "Content",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque est felis, cursus efficitur aliquet ac, ullamcorper a diam."
      )}
    </CallToAction>
  ));
