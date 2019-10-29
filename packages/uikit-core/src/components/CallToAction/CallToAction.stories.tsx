import React from "react";
import { text } from "@storybook/addon-knobs";
import { CallToAction } from "./CallToAction";

export default {
  component: CallToAction,
  title: "core|CallToAction",
};

export const Default = () => (
  <CallToAction
    buttonContent={text("Button Text", "Do it now!")}
    image="Image goes here"
    title={text("Title", "Now is the time to act!")}
  >
    {text(
      "Content",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque est felis, cursus efficitur aliquet ac, ullamcorper a diam."
    )}
  </CallToAction>
);

export const WithoutAnImage = () => (
  <CallToAction
    buttonContent={text("Button Text", "Do it now!")}
    title={text("Title", "Now is the time to act!")}
  >
    {text(
      "Content",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque est felis, cursus efficitur aliquet ac, ullamcorper a diam."
    )}
  </CallToAction>
);
