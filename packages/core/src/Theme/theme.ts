/**
 * https://styled-system.com/theme-specification
 */

const colorNames = {
  white: "#ffffff",
  black: "#000000",
  gray: "#eeeeee",
  lightGray: "#fafafa",
  midGray: "#777777",
};

const colors = {
  background: colorNames.white,
  text: colorNames.black,
  primary: "#29abe2",
  secondary: "#D24949",
  accent: "#f0a",
  pear: "#c9de55",
  muted: colorNames.lightGray,
};

const space = [0, 4, 8, 16, 32, 64, 128, 256, 512];

const theme = {
  mediaQueries: {},
  breakpoints: [48, 52, 64].map((value): string => `${value}rem`),
  space,
  colors,
  // colorModes: {
  //   dark: {
  //     text: colorNames.white,
  //     background: colorNames.black,
  //     primary: "#0cf",
  //     secondary: "#f0e",
  //     accent: "#f0a",
  //     pear: "#c9de55",
  //     muted: colorNames.midGray,
  //   },
  //   cyan: {
  //     text: "#023",
  //     background: "#0ff",
  //     primary: "#03c",
  //     secondary: "#01a",
  //     accent: "#f0a",
  //     pear: "#c9de55",
  //     muted: "#0ee",
  //   },
  //   gray: {
  //     text: "#eef",
  //     background: "#333336",
  //     primary: "#09f",
  //     secondary: "#0bf",
  //     accent: "#f0a",
  //     pear: "#c9c9c9",
  //     muted: "#444448",
  //   },
  //   book: {
  //     text: "#322",
  //     background: "#fff9f9",
  //     primary: "#c30",
  //     secondary: "#400",
  //     accent: "#f0a",
  //     pear: "#c9de55",
  //     muted: "#f9f6f6",
  //   },
  // },

  fonts: {
    body: ["ProximaNovaSoft-Regular", "sans-serif"],
    monospace: [
      "Consolas",
      '"Liberation Mono"',
      "Menlo",
      "Courier",
      "monospace",
    ],
  },

  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],

  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    heavy: 800,
  },

  lineHeights: {
    condensedUltra: 1,
    condensed: 1.25,
    default: 1.5,

    body: 1.7,
    title: 1.25,
  },

  letterSpacings: [],

  sizes: [],

  borders: [0, "1px solid green"],

  borderStyles: [],

  borderWidths: [],

  radii: [0, 4, 8, 16],

  shadows: {
    medium: "0 2px 4px 0 rgba(0, 0, 0, 0.27)",
  },

  zIndices: [],

  // Variants

  buttons: {
    default: {
      bg: "red",
    },
    //   // default: {
    //   //   color: "primary",
    //   //   // border: "1px solid #dce2e9",
    //   //   // color: "#354242",
    //   //   // backgroundColor: "#ffffff",
    //   // },
    //   // primary: {
    //   //   // color: "#000000",
    //   //   // backgroundColor: "#ff0000",
    //   //   // "&:hover": {
    //   //   //   backgroundColor: "#ff9999",
    //   //   // },
    //   // },
    //   // secondary: {
    //   //   // color: "#eeeeee",
    //   //   // backgroundColor: "#0000aa",
    //   // },
  },

  colorStyles: {
    success: {
      color: "#8FA340",
    },
    info: {
      color: "#444546",
    },
    danger: {
      color: "#D24949",
    },
    warning: {
      color: "#F5E98F",
    },
  },

  textStyles: {
    caps: {
      textTransform: "uppercase",
    },
    smallCaps: {
      textTransform: "uppercase",
      letterSpacing: "0.1em", // TODO: Replace with `letterSpacings` value
    },
  },
};

export interface ThemedComponentProps {
  theme?: typeof theme;
}

export default theme;
