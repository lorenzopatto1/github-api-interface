import React from "react";
import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components";
import { GithubProvider } from "./Providers/GithubProvider";
import { GlobalStyles } from "./styles/GlobalStyles";

import App from "./App";
import { useTheme } from "./Hooks/useTheme";

export const Providers = () => {
  const { theme } = useTheme();

  console.log(theme);

  return (
    <main>
      <StyledComponentsThemeProvider theme={theme}>
        <GithubProvider>
          <GlobalStyles />
          <App />
        </GithubProvider>
      </StyledComponentsThemeProvider>
    </main>
  );
};
