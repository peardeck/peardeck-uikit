import React, { ReactNode } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import defaultTheme from "./theme";
import { GlobalStyles } from "./GlobalStyles";

export interface ThemeProviderProps {
  theme?: typeof defaultTheme;
  children: ReactNode;
}

export const ThemeProvider = ({
  theme = defaultTheme,
  children,
}: ThemeProviderProps): JSX.Element => (
  <StyledThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      {children}
    </>
  </StyledThemeProvider>
);
