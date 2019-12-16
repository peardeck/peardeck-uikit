import React from "react";
import { ThemeProvider } from "@peardeck/uikit-core";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const withThemeProvider = (story: () => React.ReactNode) => (
  <ThemeProvider>{story()}</ThemeProvider>
);

withThemeProvider.displayName = "withThemeProvider";

export default withThemeProvider;
