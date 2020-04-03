# Concepts

The UI Kit is built around a **theme** (see `uikit-core/src/theme/theme`) that is used by the components for layouts, typography, etc. This allows themes to be altered while still maintaining consistency. For example, the color palete can be changed while still maintaining the same sizing and typography.

## Themes

A theme defines a set of **scales** that specify high-level style properties.

For example:

```js
const theme = {
  colors: {
    primary: "#3087b7",
    secondary: "#698600",
    accent: "#D24949",
    background: "#FFF",
    text: "#000",
    muted: "#555",
  },
  breakpoints: [450, 700, 900],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  radii: [0, 3, 6, 12, 24, 48, "100%"],
};
```

### Scales

Scales are usually arrays, maps, or both. Arrays are used for properties that have trending values, while maps are used for named/descriptive values. They can be combined to create aliases (i.e. "large" might map to the same value as the 3rd array index).

For more details about scales see the [System UI Theme Specification](https://system-ui.com/theme/).

We can refer to these values when rendering components:

```js
import React from "react";
import { Box, Heading1, Text } from "@peardeck/uikit-core";

const MyComponent = () => (
  <Box p={4}>
    <Heading1 color="secondary">
      This text will use our secondary color
    </Heading1>
    <Text fontSize={2}>
      This text will use the 2nd font size specified in our theme array, and the
      containing box will use the 4th space value from our theme array for
      padding.
    </Text>
  </Box>
);
```

In the above example(s), the outer `Box` will have a padding value equal to the 4th scale value of the `space` scale (32px); The `Heading1` will use the secondary value as defined in the theme (#698600); And the font size of the text will use the 2nd value of the `fontSizes` sclae (14px).

Components should be built with sane default values designed to work in most use cases to provide a consistent look and feel, and overriding these values should be the exception, not the rule:

```js
import React from "react";
import { Box, Heading1, Text } from "@peardeck/uikit-core";

const MyComponents = () => (
  <Box>
    <Heading1>
      This text will use the prefered heading color, font size, font weight,
      etc.
    </Heading1>
    <Text>
      This text will use the default style we prefer for text (typically the
      "text" color and base font size specified by our theme
    </Text>
  </Box>
);
```

## Tools

The 2 main underlying tools used for styling and CSS are:

- [`styled-components`](https://styled-components.com/) - a CSS-in-JS library that provides the ability to specify CSS styles for our React components.

- [`styled-system`](https://styled-system.com/) - uses a global theme and utility functions to provide consistent typography, colors, spacing and layout properties across components.

While `styled-components` gives us the ability to specify our CSS through Javascript for our components, `styled-system` gives us a set of utilities built on top of styled-system that give us consistent props and methods for setting values based on the underlying theme.

## Styled Components

## Styled System

## Writing CSS
