import React from "react";
import { addDecorator, addParameters, configure } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withA11y } from "@storybook/addon-a11y";
import { ThemeProvider } from "@peardeck-uikit/core";
import { create } from "@storybook/theming";

addDecorator(withInfo);
addDecorator(withA11y);
addDecorator(story => <ThemeProvider>{story()}</ThemeProvider>);
addParameters({
  options: {
    // isFullscreen: false,
    // showAddonsPanel: true,
    // showSearchBox: true,
    // panelPosition: 'right',
    // hierarchySeparator: /\./,
    // hierarchyRootSeparator: /\|/,
    // enableShortcuts: true,
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
