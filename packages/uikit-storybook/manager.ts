import { addons } from "@storybook/addons";
import { create } from "@storybook/theming";

addons.setConfig({
  panelPosition: "bottom",
  theme: create({
    base: "light",
    brandTitle: "Peardeck UI Kit",
    brandUrl: "https://peardeck.github.io/peardeck-uikit/",
    // brandImage: 'TODO: create a cool icon!',
  }),
});
