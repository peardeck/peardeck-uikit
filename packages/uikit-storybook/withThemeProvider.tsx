import React from "react";
import { ThemeProvider } from "@peardeck/uikit-core";

const withThemeProvider = (story: () => React.ReactNode): JSX.Element => (
  <ThemeProvider>{story()}</ThemeProvider>
);

withThemeProvider.displayName = "withThemeProvider";

export default withThemeProvider;
