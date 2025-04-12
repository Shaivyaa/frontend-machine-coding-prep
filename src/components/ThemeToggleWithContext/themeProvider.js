import React from "react";
import "./styles.css";
import ThemeProvider, { useTheme } from "./themeContext";

const ThemeToggling = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className={isDarkMode ? "dark-theme" : "light-theme"}>
      <div className="theme-container">
        <button onClick={toggleTheme}>Switch</button>
      </div>
    </div>
  );
};

const ThemeToggleWithContext = () => {
  return (
    <ThemeProvider>
      <ThemeToggling />
    </ThemeProvider>
  );
};

export default ThemeToggleWithContext;
