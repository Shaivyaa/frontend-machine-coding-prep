import React from "react";
import "../styles.css";

export default function Interest({ data, setData }) {
  const { interests } = data;

  const handleDataChange = (e, name) => {
    setData((prev) => ({
      ...prev,
      interests: e.target.checked
        ? [...prev.interests, e.target.name]
        : prev.interests.filter((i) => i !== e.target.name),
    }));
  };

  console.log({ interests });

  return (
    <>
      <div className="wrapper">
        <div>Interests</div>
        <div className="checkbox_field">
          <input
            type="checkbox"
            name="coding"
            checked={interests.includes("coding")}
            onChange={(e) => handleDataChange(e)}
          />
          <label>Coding</label>
        </div>
        <div className="checkbox_field">
          <input
            type="checkbox"
            name="travel"
            checked={interests.includes("travel")}
            onChange={(e) => handleDataChange(e)}
          />
          <label>Travel</label>
        </div>
        <div className="checkbox_field">
          <input
            type="checkbox"
            name="baking"
            checked={interests.includes("baking")}
            onChange={(e) => handleDataChange(e)}
          />
          <label>Baking</label>
        </div>
      </div>
    </>
  );
}
