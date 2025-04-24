import React, { useContext } from "react";
import { NameContext } from "./ComponentA";
import ComponentD from "./ComponentD";

export default function ComponentC() {
  const name = useContext(NameContext);

  return (
    <div className="box">
      ComponentC
      <div>{`See ya ${name}`}</div>
      <ComponentD />
    </div>
  );
}
