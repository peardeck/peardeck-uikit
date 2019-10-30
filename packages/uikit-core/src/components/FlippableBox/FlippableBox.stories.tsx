import React from "react";
// import { text } from "@storybook/addon-knobs";
import { boolean, number, text } from "@storybook/addon-knobs";
import { Box } from "../Box/Box";
import { FlippableBox } from "./FlippableBox";
import { colorKnobs, spaceKnobs, themeColorKnob } from "../../theme/knobs";

export default {
  component: FlippableBox,
  title: "core|FlippableBox",
};

// const contentKnob = (initial: string) => ;

export const Default = () => (
  <Box {...colorKnobs()} {...spaceKnobs()} size={number("Container Size", 300)}>
    <FlippableBox
      front={
        <Box
          size={number("Front Face Size", 300)}
          bg={themeColorKnob("Front Face Background Color", "yellow")}
        >
          {text(
            "Front Face Content",
            "You are looking at the front of the card right now."
          )}
        </Box>
      }
      back={
        <Box
          size={number("Back Face Size", 300)}
          bg={themeColorKnob("Back Face Background Color", "blue")}
        >
          {text("Back Face Content", "This is the back!")}
        </Box>
      }
      flipped={boolean("Flipped", false)}
      flipSpeed={number("Flip Speed", 0.5)}
    />
  </Box>
);
