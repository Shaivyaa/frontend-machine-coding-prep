import React from "react";
import ComponentC from "./ComponentC";

export default function ComponentB() {
  return (
    <div className="box">
      ComponentB
      <ComponentC />
    </div>
  );
}
