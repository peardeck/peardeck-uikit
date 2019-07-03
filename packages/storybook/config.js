import { addDecorator, addParameters, configure } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withA11y } from "@storybook/addon-a11y";

addDecorator(withInfo);
addDecorator(withA11y);
addParameters({
  options: {
    // isFullscreen: false,
    // showAddonsPanel: true,
    // showSearchBox: true,
    // panelPosition: 'right',
    // hierarchySeparator: /\./,
    // hierarchyRootSeparator: /\|/,
    // enableShortcuts: true,
    // theme: create({
    //   base: 'light',
    //   brandTitle: 'CRA Kitchen Sink',
    //   brandUrl: 'https://github.com/storybookjs/storybook/tree/master/examples/cra-kitchen-sink',
    //   gridCellSize: 12,
    // }),
    storySort: (a, b) => a[1].id.localeCompare(b[1].id),
  },
});

function loadStories() {
  require("@pearkit/core/lib/stories");
  // require('../stories/index.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);
