import colorNames from "./colors";

/**
 * https://styled-system.com/theme-specification
 */

const colors = {
  ...colorNames,
  background: colorNames.white,
  text: "#354242",
  primary: "#d24949",
  secondary: "#3087b7",
  accent: "#698600",
  pear: "#c9de55",
  muted: "#9B9B9B",
  border: colorNames.gray[5],
  link: {
    default: "#3087B7",
    hover: "#25698f",
    visited: "#3087B7",
    active: "#29abe2",
    focus: "#3087B7",
  },
};

const fontSizes = [16, 20, 24, 32, 48, 64, 72];
fontSizes[-1] = 14;
fontSizes[-2] = 11;
fontSizes[-3] = 8;

export const theme = {
  mediaQueries: {},

  // For some reason breakpoints don't work with numeric values?
  breakpoints: [450, 700, 900].map((size) => `${size}px`),
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  colors,
  fonts: {
    body: ["ProximaNovaSoft-Regular", "sans-serif"],
    heading: ["ProximaNovaSoft-SemiBold", "sans-serif"],
    monospace: [
      "Consolas",
      '"Liberation Mono"',
      "Menlo",
      "Courier",
      "monospace",
    ],
  },
  fontSizes,
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

    header: "0 1px 4px 0 rgba(0,0,0,0.27)",

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
    none: {
      color: "text",
      backgroundColor: "transparent",
      hoverBackgroundColor: "transparent",
      borderColor: "transparent",
    },
    default: {
      color: "#000000",
      backgroundColor: "#ffffff",
      hoverBackgroundColor: "#f2f2f2",
      borderColor: "#cccccc",
    },
    primary: {
      color: "#ffffff",
      backgroundColor: "primary",
      hoverBackgroundColor: "#ba2e2e",
      borderColor: "#ffffff",
    },
    primaryOutline: {
      color: "primary",
      backgroundColor: "#ffffff",
      hoverBackgroundColor: "#eeeeee",
      borderColor: "#d24949",
      borderWidth: 2,
    },
    secondary: {
      color: "#ffffff",
      backgroundColor: "secondary",
      hoverBackgroundColor: "#2b78a3",
      borderColor: "#ffffff",
    },
    secondaryOutline: {
      color: "secondary",
      backgroundColor: "#ffffff",
      hoverBackgroundColor: "#eeeeee",
      borderColor: "#3087b7",
      borderWidth: 2,
    },
    accent: {
      color: "#ffffff",
      backgroundColor: "accent",
      hoverBackgroundColor: "#556d00",
      borderColor: "#ffffff",
    },
    accentOutline: {
      color: "accent",
      backgroundColor: "#ffffff",
      hoverBackgroundColor: "#eeeeee",
      borderColor: "#698600",
      borderWidth: 2,
    },
  },

  buttonStyles: {
    default: {
      borderRadius: 2,
      borderWidth: 1,
      boxShadow: 1,
      fontWeight: "bold",
    },
    callToAction: {
      borderRadius: 4,
      borderWidth: 2,
      boxShadow: 1,
      fontWeight: "bold",
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

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}

export interface ThemedComponentProps {
  theme?: Theme;
}
