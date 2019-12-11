import colorNames from "./colors";

/**
 * https://styled-system.com/theme-specification
 */

const colors = {
  ...colorNames,
  background: colorNames.white,
  text: colorNames.black,
  primary: "#3087b7",
  secondary: "#698600",
  accent: "#D24949",
  pear: "#c9de55",
  muted: colorNames.gray[3],
  border: colorNames.gray[5],
};

export const theme = {
  mediaQueries: {},
  breakpoints: [48, 52, 64].map((value): string => `${value}rem`),
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  colors,
  fonts: {
    // headers:
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
  borders: [0, `1px solid ${colors.border}`],
  borderStyles: {},
  borderWidths: [],
  radii: [0, 3, 6, 12, 24, 48, "100%"],
  shadows: {
    [-2]: "rgba(0,0,0,0.12) 0px 2px 4px inset",
    [-1]: "rgba(0,0,0,0.12) 0px 1px 2px inset",
    0: "none",
    1: "0 1px 4px 0 rgba(0,0,0,0.27)",
    2: "0 2px 8px 0 rgba(0,0,0,0.27)",
    3: "0 4px 16px 0 rgba(0,0,0,0.27)",
    4: "0 8px 32px 0 rgba(0,0,0,0.27)",

    button: "0 1px 4px 0 rgba(0,0,0,0.27)",
    buttonHover: "0 2px 8px 0 rgba(0,0,0,0.27)",
    buttonActive: "rgba(0,0,0,0.12) 0px 0px 1px inset",

    // button: "0 2px 8px 0 rgba(0,0,0,0.27)",
    // buttonHover: "0 2px 8px 0 rgba(0,0,0,0.27)",
    // buttonActive: "",
    // buttonFocus: "",

    // 1: "0 1px 2px 0 rgba(0,0,0,0.4)",
    // 2: "0 2px 4px 0 rgba(0,0,0,0.4)",
    // 3: "0 4px 8px 0 rgba(0,0,0,0.4)",
    // 4: "0 8px 16px 0 rgba(0,0,0,0.4)",
    // formControl: "rgba(27, 31, 35, 0.075) 0px 1px 2px inset",
    // formControlFocus: "rgba(3, 102, 214, 0.3) 0px 0px 0px 0.2em",
    // glow: ``,
  },
  zIndices: [undefined, 0, 1, 2, 10, 100, 200, 10000],

  buttonColors: {
    default: {
      color: "#000000",
      backgroundColor: "#ffffff",
      hoverBackgroundColor: "#f2f2f2",
      borderColor: "#cccccc",
    },
    primary: {
      color: "#ffffff",
      backgroundColor: "#3087b7",
      hoverBackgroundColor: "#2b78a3",
      borderColor: "#ffffff",
    },
    secondary: {
      color: "#ffffff",
      backgroundColor: "#698600",
      hoverBackgroundColor: "#556d00",
      borderColor: "#ffffff",
    },
    accent: {
      color: "#ffffff",
      backgroundColor: "#d24949",
      hoverBackgroundColor: "#ba2e2e",
      borderColor: "#ffffff",
    },
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

export type Theme = typeof theme;

export interface ThemedComponentProps {
  theme?: Theme;
}
