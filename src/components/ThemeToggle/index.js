import React, { useState } from "react";
import "./styles.css";

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const changeTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <>
      <div className={isDarkMode ? "dark-theme" : "light-theme"}>
        <div className="theme-container">
          {" "}
          <button onClick={changeTheme}>Switch</button>
        </div>
      </div>
    </>
  );
}
