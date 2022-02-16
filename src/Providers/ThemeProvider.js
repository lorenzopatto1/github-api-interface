import { useState, createContext } from "react";

import { light } from "../styles/Themes/light";
import { dark } from "../styles/Themes/dark";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  console.log(theme);
  const ContextValue = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={ContextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
