import { addDecorator, addParameters, configure } from "@storybook/react";
// import { withInfo } from "@storybook/addon-info";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs } from "@storybook/addon-knobs";
import { create } from "@storybook/theming";
// import withThemeProvider from "./withThemeProvider";

// addDecorator(withInfo);
addDecorator(withA11y);
addDecorator(withKnobs);
// addDecorator(withThemeProvider);
addParameters({
  options: {
    theme: create({
      base: "light",
      brandTitle: "Peardeck UI Kit",
    }),
  },
});

configure(() => {
  const req = require.context(
    "../",
    true,
    /.*\/dist\/(.*\.)?stories\.(js|mdx|tsx)$/
  );

  return req
    .keys()
    .map(fname => req(fname))
    .filter(exp => !!exp.default);
}, module);
