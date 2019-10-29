import React from "react";
import { select } from "@storybook/addon-knobs";
import { Divider } from "./Divider";
import { spaceKnobs, themeColorKnob } from "../../theme/knobs";

export default {
  component: Divider,
  title: "core|Divider",
};

export const Default = () => (
  <div>
    <span>(above)</span>
    <Divider
      {...spaceKnobs()}
      borderColor={themeColorKnob()}
      width={
        select(
          "Width",
          {
            "not set": null,
            "100px": 100,
            "300px": 300,
            "50%": "50%",
            "25vw": "25vw",
          },
          null
        ) || undefined
      }
    />
    <span>(below)</span>
  </div>
);
