import React from "react";
import { addDecorator, addParameters, configure } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs } from "@storybook/addon-knobs";
import { Box, ThemeProvider } from "@peardeck-uikit/core";
import { create } from "@storybook/theming";

addDecorator(withInfo);
addDecorator(withA11y);
addDecorator(withKnobs);
addDecorator(story => (
  <ThemeProvider>
    <Box m={2}>{story()}</Box>
  </ThemeProvider>
));
addParameters({
  options: {
    theme: create({
      base: "light",
      brandTitle: "Peardeck UI Kit",
    }),
    storySort: (a, b) => a[1].id.localeCompare(b[1].id),
  },
});

function loadStories() {
  require("@peardeck-uikit/core/lib/stories");
  require("@peardeck-uikit/icons/lib/stories");
}

configure(loadStories, module);
