import React, { useState } from "react";

export default function RangeSlider() {
  const [value, setValue] = useState(0);

  const valueChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div>Range Slider</div>
      <div>
        <div htmlFor="range-slider">{value}</div>
        <input type="range" onChange={valueChange} min={0} max={100} />
      </div>
    </>
  );
}
