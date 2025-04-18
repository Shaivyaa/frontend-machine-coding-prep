import React from "react";
import "../styles.css";

export default function Settings({ data, setData }) {
  const { theme } = data;

  const handleDataChange = (e) => {
    setData((prev) => ({
      ...prev,
      theme: e.target.name,
    }));
  };

  return (
    <>
      <div className="wrapper">
        <div>Settings</div>
        <div className="checkbox_field">
          <input
            type="radio"
            name="dark"
            checked={theme === "dark"}
            onChange={handleDataChange}
          />
          <label>Dark</label>
        </div>
        <div className="checkbox_field">
          <input
            type="radio"
            name="light"
            checked={theme === "light"}
            onChange={handleDataChange}
          />
          <label>Light</label>
        </div>
      </div>
    </>
  );
}
