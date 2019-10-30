import React, { ReactNode } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { ThemedComponentProps, theme as defaultTheme } from "./theme";

export interface ThemeProviderProps extends ThemedComponentProps {
  children: ReactNode;
}

// TODO: Add global styles/reset.

export const ThemeProvider = ({
  theme = defaultTheme,
  children,
}: ThemeProviderProps): JSX.Element => (
  <StyledThemeProvider theme={theme}>
    <>{children}</>
  </StyledThemeProvider>
);
