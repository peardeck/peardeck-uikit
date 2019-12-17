import { createGlobalStyle } from "styled-components";
import { theme as defaultTheme } from "../../theme/theme";

// TODO: Figure out a better way to handle font specification
// (the consuming app should probably have control over where they
// are served/consumed from)

export const GlobalStyles = createGlobalStyle`
  * { box-sizing: border-box; }
  body { margin: 0; }
  table { border-collapse: collapse; }

  @font-face {
    font-family: 'ProximaNova-Regular';
    src: url("https://d3895o4k0th41t.cloudfront.net/fonts/2C1904_5_0.eot");
    src: url("https://d3895o4k0th41t.cloudfront.net/fonts/2C1904_2_0.eot?#iefix") format("embedded-opentype"),
         url("https://d3895o4k0th41t.cloudfront.net/fonts/2C1904_2_0.woff") format("woff"),
         url("https://d3895o4k0th41t.cloudfront.net/fonts/2C1904_2_0.ttf") format("truetype");
  }

  @font-face {
    font-family: 'ProximaNovaSoft-Medium';
    src: url("https://d3895o4k0th41t.cloudfront.net/fonts/2C1904_4_0.eot");
    src: url("https://d3895o4k0th41t.cloudfront.net/fonts/2C1904_4_0.eot?#iefix") format("embedded-opentype"),
         url("https://d3895o4k0th41t.cloudfront.net/fonts/2C1904_4_0.woff") format("woff"),
         url("https://d3895o4k0th41t.cloudfront.net/fonts/2C1904_4_0.ttf") format("truetype");
  }

  @font-face {
    font-family: 'ProximaNovaSoft-Semibold';
    src: url("https://d3895o4k0th41t.cloudfront.net/fonts/2C1904_5_0.eot");
    src: url("https://d3895o4k0th41t.cloudfront.net/fonts/2C1904_5_0.eot?#iefix") format("embedded-opentype"),
         url("https://d3895o4k0th41t.cloudfront.net/fonts/2C1904_5_0.woff") format("woff"),
         url("https://d3895o4k0th41t.cloudfront.net/fonts/2C1904_5_0.ttf") format("truetype");
  }

  html, button, input, select, textarea {
    font-family: ProximaNovaSoft-Medium, sans-serif;
    font-weight: normal;
    font-style: normal;
    color: ${({ theme = defaultTheme }): string => theme.colors.text};
  }
`;
