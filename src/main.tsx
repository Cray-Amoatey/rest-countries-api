import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "./contexts/ThemeContext";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <ThemeProvider>
        <Router>
          <App />
        </Router>
      </ThemeProvider>
    </React.StrictMode>
  );
}
