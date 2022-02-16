import React from "react";
import ReactDOM from "react-dom";

import { ThemeProvider } from "./Providers/ThemeProvider";

import { Providers } from "./providers";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <Providers />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
