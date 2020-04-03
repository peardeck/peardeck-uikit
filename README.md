# Pear Deck UI Kit

![](https://github.com/peardeck/peardeck-uikit/workflows/CI/badge.svg?branch=master)

Pear Deck UIKit is a collection of reusable React components, design resources, and guidelines for creating a consistent experience and feel for Pear Deck products.

This monorepo consists of the following packages:

| Component                                      | Description                                                  |
| ---------------------------------------------- | ------------------------------------------------------------ |
| [`uikit-core`](/packages/uikit-core)           | Core React components                                        |
| [`uikit-icons`](/packages/uikit-icons)         | Pear Deck SVG icon components                                |
| [`uikit-storybook`](/packages/uikit-storybook) | Component and design storybook and documentation             |
| [`eslint-config`](/packages/esling-config)     | A common eslint configuration used across Pear Deck projects |

## Install

### Prerequisites

- Node v12.14.0 or greater

### Installation Steps

> This project uses the Github Package Registry (not NPM) to deploy packages.

1. In your project root, create an `.npmrc` and add the following so that npm knows to find `@peardeck`-scoped packages there.

```npmrc
@peardeck:registry=https://npm.pkg.github.com
```

2. Authenticate to the Github Package Registry via `npm`. When prompted for your username, use your Github username; for a password you will need to generate (or use an existing) [Github personal access token](https://github.com/settings/tokens) with the `read:packages` scope as your password.

```shell
npm login --scope=@peardeck --registry=https://npm.pkg.github.com
```

3. Add the necessary packages to your project.

```shell
# Using Yarn (preferred)
yarn add @peardeck/eslint-config @peardeck/uikit-core @peardeck/uikit-icons

# Using NPM
npm install --save @peardeck/eslint-config @peardeck/uikit-core @peardeck/uikit-icons
```

4. Follow the directions in the `README.md` of each package for specific instructions. See [Usage](#usage), below, for quickly getting started with UIKit components.

###### Related links

- [Configuring npm for use with GitHub Packages](https://help.github.com/en/packages/using-github-packages-with-your-projects-ecosystem/configuring-npm-for-use-with-github-packages)
- [Configuring your registry settings as an npm Enterprise user](https://docs.npmjs.com/configuring-your-registry-settings-as-an-npm-enterprise-user)

## Usage

Wrap your root component in a `ThemeProvider` using the `defaultTheme`:

```jsx
import { defaultTheme, ThemeProvider } from "@peardeck/uikit-core";
import Root from "./Root"; // or whatever

export const App = () => (
  <ThemeProvider theme={defaultTheme}>
    <Root />
  </ThemeProvider>
);
```

### Customizing

Ideally, most customization should be done at the theme level. For example:

```jsx
import { defaultTheme, ThemeProvider } from "@peardeck/uikit-core";
import Root from "./Root"; // or whatever

const appTheme = {
  ...defaultTheme,

  // Alter default media query breakpoints
  breakpoints: [200, 300, 400],

  // Tighter spacing scale than our default theme
  space: [0, 2, 4, 8, 16, 32, 64, 128, 256],

  // Dark theme with retro colors
  colors: {
    ...defaultTheme.colors,
    primary: "#0ff",
    seconday: "#b0f",
    accent: "#f0b",
    background: "#000",
    text: "#eee",
    muted: "#aaa",
  },
};

export const App = () => (
  <ThemeProvider theme={appTheme}>
    <Root />
  </ThemeProvider>
);
```

Individual components can be altered for one-off scenarios:

> This should generally be avoided as much as possible, and if becomes necessary more often than not, the underlying theme should be modified to suit the use case.

```jsx
import { defaultTheme, ThemeProvider } from "@peardeck/uikit-core";
import Root from "./Root"; // or whatever

export const App = () => (
  <ThemeProvider theme={defaultTheme}>
    <Box p="10em">
      <Heading1 color="red.9">This will be red text!</>
    </Box>
  </ThemeProvider>
);
```
