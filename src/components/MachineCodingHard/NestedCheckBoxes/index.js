import React, { useState } from "react";
import "./styles.css";
import CheckBoxes from "./components/CheckBoxes";
import checkboxData from "./data.json";

export default function NestedCheckBoxes() {
  const [checked, setChecked] = useState({ 1: true });
  return (
    <>
      <div className="nested_checkboxes_wrapper">
        <div style={{ fontSize: "40px", fontWeight: "bold", padding: "15px" }}>
          Nested CheckBoxes
        </div>
        <div className="checkbox_container">
          <CheckBoxes
            data={checkboxData}
            checked={checked}
            setChecked={setChecked}
          />
        </div>
      </div>
    </>
  );
}
