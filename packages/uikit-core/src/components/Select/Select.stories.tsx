import React from "react";
import {
  colorKnobs,
  displayKnobs,
  spaceKnobs,
  typographyKnobs,
} from "../../theme/knobs";
import { Box } from "../Box/Box";
import { Select } from "./Select";

export default {
  component: Select,
  title: "core|Select",
};

export const Default = () => (
  <Box m={2}>
    <Select
      {...typographyKnobs()}
      {...displayKnobs()}
      {...spaceKnobs()}
      {...colorKnobs()}
    >
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
      <option value="4">Option 4</option>
    </Select>
  </Box>
);
