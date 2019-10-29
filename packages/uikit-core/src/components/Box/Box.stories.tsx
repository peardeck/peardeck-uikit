import React from "react";
import { text } from "@storybook/addon-knobs";
import { Box } from "./Box";
import { theme } from "../../theme/theme";
import { colorKnobs, spaceKnobs } from "../../theme/knobs";

export default {
  component: Box,
  title: "core|Box",
};

const contentKnob = (initial: string) => text("Content", initial);

export const Default = () => (
  <Box {...colorKnobs()} {...spaceKnobs()}>
    {contentKnob(
      "Use the Box component to control width, margin, padding, and color."
    )}
  </Box>
);

export const FiftyPercentWidth = () => (
  <Box width={1 / 2} bg="yellow">
    {contentKnob("This is a box with 50% width.")}
  </Box>
);

FiftyPercentWidth.story = {
  name: "50% Width",
};

export const Inline = () => (
  <Box>
    Boxes are block-level by default, but can also be{" "}
    <Box display="inline" bg="#f0f">
      inline
    </Box>
  </Box>
);

export const Responsive = () => (
  <Box
    width={[1, 1 / 2, 1 / 4]}
    bg={["#ffff00", "#ff0000", "#00aa00"]}
    color="black"
    p={2}
  >
    This example shows how to use breakpoints. The box will change based on the
    following breakpoints:
    <table
      style={{
        padding: "1em",
        border: "1px solid black",
        borderCollapse: "collapse",
        width: "100%",
      }}
    >
      <thead>
        <tr>
          <th>Size</th>
          <th>Example device</th>
          <th>Width</th>
          <th>Background</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>&gt;= {theme.breakpoints[0]}</td>
          <td>iPhone</td>
          <td>100%</td>
          <td>Yellow</td>
        </tr>
        <tr>
          <td>&gt;= {theme.breakpoints[1]}</td>
          <td>iPad</td>
          <td>50%</td>
          <td>Red</td>
        </tr>
        <tr>
          <td>&gt;= {theme.breakpoints[2]}</td>
          <td>Desktop</td>
          <td>25%</td>
          <td>Green</td>
        </tr>
      </tbody>
    </table>
  </Box>
);
